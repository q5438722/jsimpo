'use strict';
const fs = require("fs");
const path = require("path");
const color = require("ansicolors");
const {
  promisify : promisify
} = require("util");
const glob = promisify(require("glob"));
const readFile = promisify(fs.readFile);
const BaseCommand = require("./base-command.js");
class HelpSearch extends BaseCommand {
  static get description() {
    return "Search npm help documentation";
  }
  static get name() {
    return "help-search";
  }
  static get usage() {
    return ["<text>"];
  }
  static get params() {
    return ["long"];
  }
  exec(query, callback) {
    this.helpSearch(query).then(() => {
      return callback();
    }).catch(callback);
  }
  async helpSearch(args) {
    if (!args.length) {
      return this.npm.output(this.usage);
    }
    const TRAVIS_API_JOBS_URL = path.resolve(__dirname, "..", "docs/content");
    const files = await glob(`${TRAVIS_API_JOBS_URL}/*/*.md`);
    const artistTrack = await this.readFiles(files);
    const rowCount = await this.searchFiles(args, artistTrack, files);
    const code = this.formatResults(args, rowCount);
    if (!code.trim()) {
      this.npm.output(`No matches in help for: ${args.join(" ")}\n`);
    } else {
      this.npm.output(code);
    }
  }
  async readFiles(dirname) {
    const res = {};
    await Promise.all(dirname.map(async(resourcePath) => {
      res[resourcePath] = (await readFile(resourcePath, "utf8")).replace(/^---\n(.*\n)*?---\n/, "").trim();
    }));
    return res;
  }
  async searchFiles(args, tags, text) {
    const results = [];
    for (const [url, method] of Object.entries(tags)) {
      const inventoryKeys = method.toLowerCase();
      if (!args.some((p_Interval) => {
        return inventoryKeys.includes(p_Interval.toLowerCase());
      })) {
        continue;
      }
      const l = method.split(/\n+/);
      for (let i = 0; i < l.length; i++) {
        const currentNick = l[i];
        const aemail = l[i + 1];
        let t = false;
        if (aemail) {
          t = args.some((p_Interval) => {
            return aemail.toLowerCase().includes(p_Interval.toLowerCase());
          });
          if (t) {
            i = i + 2;
            continue;
          }
        }
        t = args.some((p_Interval) => {
          return currentNick.toLowerCase().includes(p_Interval.toLowerCase());
        });
        if (t) {
          i++;
          continue;
        }
        l[i] = null;
      }
      const lines = l.reduce((t, e) => {
        if (!(e === null && t[t.length - 1] === null)) {
          t.push(e);
        }
        return t;
      }, []);
      if (lines[lines.length - 1] === null) {
        lines.pop();
      }
      if (lines[0] === null) {
        lines.shift();
      }
      const found = {};
      let totalHits = 0;
      for (const line of lines) {
        for (const arg of args) {
          const hit = (line || "").toLowerCase().split(arg.toLowerCase()).length - 1;
          if (hit > 0) {
            found[arg] = (found[arg] || 0) + hit;
            totalHits = totalHits + hit;
          }
        }
      }
      const SCROLL_RESPONSE_CMD = "npm help " + path.basename(url, ".md").replace(/^npm-/, "");
      results.push({
        file : url,
        cmd : SCROLL_RESPONSE_CMD,
        lines : lines,
        found : Object.keys(found),
        hits : found,
        totalHits : totalHits
      });
    }
    return results.sort((a, b) => {
      return a.found.length > b.found.length ? -1 : a.found.length < b.found.length ? 1 : a.totalHits > b.totalHits ? -1 : a.totalHits < b.totalHits ? 1 : a.lines.length > b.lines.length ? -1 : a.lines.length < b.lines.length ? 1 : 0;
    }).slice(0, 10);
  }
  formatResults(options, results) {
    const width = Math.min(process.stdout.columns || Infinity, 80) + 1;
    const e = results.map((result) => {
      const line = [result.cmd];
      const hash = Object.keys(result.hits).map((i) => {
        return `${i}:${result.hits[i]}`;
      }).sort((_num1, _num2) => {
        return _num1 > _num2 ? 1 : -1;
      }).join(" ");
      line.push(" ".repeat(Math.max(1, width - line.join(" ").length - hash.length - 1)));
      line.push(hash);
      if (!this.npm.config.get("long")) {
        return line.join("");
      }
      line.unshift("\n\n");
      line.push("\n");
      line.push("-".repeat(width - 1) + "\n");
      result.lines.forEach((e, canCreateDiscussions) => {
        if (e === null || canCreateDiscussions > 3) {
          return;
        }
        if (!this.npm.color) {
          line.push(e + "\n");
          return;
        }
        const n = [];
        for (const params of options) {
          const paths = e.toLowerCase().split(params.toLowerCase());
          let x = 0;
          for (const path of paths) {
            n.push(e.substr(x, path.length));
            const peerInvalid = e.substr(x + path.length, params.length);
            const serieObject = color.bgBlack(color.red(peerInvalid));
            n.push(serieObject);
            x = x + (path.length + params.length);
          }
        }
        line.push(n.join("") + "\n");
      });
      return line.join("");
    }).join("\n");
    const s = results.length && !this.npm.config.get("long") ? "Top hits for " + options.map(JSON.stringify).join(" ") + "\n" + "\u2014".repeat(width - 1) + "\n" + e + "\n" + "\u2014".repeat(width - 1) + "\n" + "(run with -l or --long to see more context)" : e;
    return s.trim();
  }
}
module.exports = HelpSearch;

