import "babel-polyfill";import assert from "assert";import { MentionsParser } from "../lib/MentionsParser";var mentionsParser;
beforeEach(function e() {
  mentionsParser = new MentionsParser({ pattern: "[0-9a-zA-Z-_.]+", me: () => "me" });
});describe("Mention", function () {
  describe("get pattern", () => {
    const s = "[0-9a-zA-Z-_.]+";
    beforeEach(() => {
      mentionsParser.pattern = () => s;
    });describe("by function", function e() {
      it(`should be equal to ${s}`, () => {
        assert.equal(s, mentionsParser.pattern);
      });
    });describe("by const", function e() {
      it(`should be equal to ${s}`, () => {
        assert.equal(s, mentionsParser.pattern);
      });
    });
  });describe("get useRealName", () => {
    beforeEach(() => {
      mentionsParser.useRealName = () => true;
    });describe("by function", function e() {
      it("should be true", () => {
        assert.equal(true, mentionsParser.useRealName);
      });
    });describe("by const", function e() {
      it("should be true", () => {
        assert.equal(true, mentionsParser.useRealName);
      });
    });
  });describe("get me", () => {
    const s = "me";
    describe("by function", function e() {
      beforeEach(() => {
        mentionsParser.me = () => s;
      });it(`should be equal to ${s}`, () => {
        assert.equal(s, mentionsParser.me);
      });
    });describe("by const", function e() {
      beforeEach(() => {
        mentionsParser.me = s;
      });it(`should be equal to ${s}`, () => {
        assert.equal(s, mentionsParser.me);
      });
    });
  });describe("getUserMentions", function e() {
    describe("for simple text, no mentions", () => {
      const s = [];
      ["#rocket.cat", "hello rocket.cat how are you?"].forEach(e => {
        it(`should return "${JSON.stringify(s)}" from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getUserMentions(e));
        });
      });
    });describe("for one user", () => {
      const s = ["@rocket.cat"];
      ["@rocket.cat", " @rocket.cat ", "hello @rocket.cat", "@rocket.cat, hello", "@rocket.cat,hello", "hello @rocket.cat how are you?"].forEach(e => {
        it(`should return "${JSON.stringify(s)}" from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getUserMentions(e));
        });
      });it.skip("should return without the \".\" from \"@rocket.cat.\"", () => {
        assert.deepEqual(s, mentionsParser.getUserMentions("@rocket.cat."));
      });it.skip("should return without the \"_\" from \"@rocket.cat_\"", () => {
        assert.deepEqual(s, mentionsParser.getUserMentions("@rocket.cat_"));
      });it.skip("should return without the \"-\" from \"@rocket.cat-\"", () => {
        assert.deepEqual(s, mentionsParser.getUserMentions("@rocket.cat-"));
      });
    });describe("for two users", () => {
      const s = ["@rocket.cat", "@all"];
      ["@rocket.cat @all", " @rocket.cat @all ", "hello @rocket.cat and @all", "@rocket.cat, hello @all", "hello @rocket.cat and @all how are you?"].forEach(e => {
        it(`should return "${JSON.stringify(s)}" from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getUserMentions(e));
        });
      });
    });
  });describe("getChannelMentions", function e() {
    describe("for simple text, no mentions", () => {
      const s = [];
      ["@rocket.cat", "hello rocket.cat how are you?"].forEach(e => {
        it(`should return "${JSON.stringify(s)}" from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getChannelMentions(e));
        });
      });
    });describe("for one channel", () => {
      const s = ["#general"];
      ["#general", " #general ", "hello #general", "#general, hello", "hello #general, how are you?"].forEach(e => {
        it(`should return "${JSON.stringify(s)}" from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getChannelMentions(e));
        });
      });it.skip("should return without the \".\" from \"#general.\"", () => {
        assert.deepEqual(s, mentionsParser.getUserMentions("#general."));
      });it.skip("should return without the \"_\" from \"#general_\"", () => {
        assert.deepEqual(s, mentionsParser.getUserMentions("#general_"));
      });it.skip("should return without the \"-\" from \"#general.\"", () => {
        assert.deepEqual(s, mentionsParser.getUserMentions("#general-"));
      });
    });describe("for two channels", () => {
      const s = ["#general", "#other"];
      ["#general #other", " #general #other", "hello #general and #other", "#general, hello #other", "hello #general #other, how are you?"].forEach(e => {
        it(`should return "${JSON.stringify(s)}" from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getChannelMentions(e));
        });
      });
    });describe("for url with fragments", () => {
      const s = [];
      ["http://localhost/#general"].forEach(e => {
        it(`should return nothing from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getChannelMentions(e));
        });
      });
    });describe("for messages with url and channels", () => {
      const s = ["#general"];
      ["http://localhost/#general #general"].forEach(e => {
        it(`should return "${JSON.stringify(s)}" from "${e}"`, () => {
          assert.deepEqual(s, mentionsParser.getChannelMentions(e));
        });
      });
    });
  });
});const message = { mentions: [{ username: "rocket.cat", name: "Rocket.Cat" }, { username: "admin", name: "Admin" }, { username: "me", name: "Me" }, { username: "specialchars", name: "<img onerror=alert(hello)>" }], channels: [{ name: "general", _id: "42" }, { name: "rocket.cat", _id: "169" }] };
describe("replace methods", function () {
  describe("replaceUsers", () => {
    it("should render for @all", () => {
      const e = mentionsParser.replaceUsers("@all", message, "me");
      assert.equal(e, "<a class=\"mention-link mention-link--all mention-link--group\" data-group=\"all\">all</a>");
    });const s = "rocket.cat";
    it(`should render for "@${s}"`, () => {
      const e = mentionsParser.replaceUsers(`@${s}`, message, "me");
      assert.equal(e, `<a class="mention-link mention-link--user" data-username="${s}" title="${s}">${s}</a>`);
    });it(`should render for "hello ${s}"`, () => {
      const e = mentionsParser.replaceUsers(`hello @${s}`, message, "me");
      assert.equal(e, `hello <a class="mention-link mention-link--user" data-username="${s}" title="${s}">${s}</a>`);
    });it("should render for unknow/private user \"hello @unknow\"", () => {
      const e = mentionsParser.replaceUsers("hello @unknow", message, "me");
      assert.equal(e, "hello @unknow");
    });it("should render for me", () => {
      const e = mentionsParser.replaceUsers("hello @me", message, "me");
      assert.equal(e, "hello <a class=\"mention-link mention-link--me mention-link--user\" data-username=\"me\" title=\"me\">me</a>");
    });
  });describe("replaceUsers (RealNames)", () => {
    beforeEach(() => {
      mentionsParser.useRealName = () => true;
    });it("should render for @all", () => {
      const e = mentionsParser.replaceUsers("@all", message, "me");
      assert.equal(e, "<a class=\"mention-link mention-link--all mention-link--group\" data-group=\"all\">all</a>");
    });const s = "rocket.cat";
    const n = "Rocket.Cat";
    it(`should render for "@${s}"`, () => {
      const e = mentionsParser.replaceUsers(`@${s}`, message, "me");
      assert.equal(e, `<a class="mention-link mention-link--user" data-username="${s}" title="${s}">${n}</a>`);
    });it(`should render for "hello @${s}"`, () => {
      const e = mentionsParser.replaceUsers(`hello @${s}`, message, "me");
      assert.equal(e, `hello <a class="mention-link mention-link--user" data-username="${s}" title="${s}">${n}</a>`);
    });const r = "specialchars";
    const t = "&lt;img onerror=alert(hello)&gt;";
    it(`should escape special characters in "hello @${r}"`, () => {
      const e = mentionsParser.replaceUsers(`hello @${r}`, message, "me");
      assert.equal(e, `hello <a class="mention-link mention-link--user" data-username="${r}" title="${r}">${t}</a>`);
    });it(`should render for "hello<br>@${s} <br>"`, () => {
      const e = mentionsParser.replaceUsers(`hello<br>@${s} <br>`, message, "me");
      assert.equal(e, `hello<br><a class="mention-link mention-link--user" data-username="${s}" title="${s}">${n}</a> <br>`);
    });it("should render for unknow/private user \"hello @unknow\"", () => {
      const e = mentionsParser.replaceUsers("hello @unknow", message, "me");
      assert.equal(e, "hello @unknow");
    });it("should render for me", () => {
      const e = mentionsParser.replaceUsers("hello @me", message, "me");
      assert.equal(e, "hello <a class=\"mention-link mention-link--me mention-link--user\" data-username=\"me\" title=\"me\">Me</a>");
    });
  });describe("replaceChannels", () => {
    it("should render for #general", () => {
      const e = mentionsParser.replaceChannels("#general", message);
      assert.equal("<a class=\"mention-link mention-link--room\" data-channel=\"42\">#general</a>", e);
    });const s = "#rocket.cat";
    it(`should render for ${s}`, () => {
      const e = mentionsParser.replaceChannels(s, message);
      assert.equal(e, `<a class="mention-link mention-link--room" data-channel="169">${s}</a>`);
    });it(`should render for "hello ${s}"`, () => {
      const e = mentionsParser.replaceChannels(`hello ${s}`, message);
      assert.equal(e, `hello <a class="mention-link mention-link--room" data-channel="169">${s}</a>`);
    });it("should render for unknow/private channel \"hello #unknow\"", () => {
      const e = mentionsParser.replaceChannels("hello #unknow", message);
      assert.equal(e, "hello #unknow");
    });
  });describe("parse all", () => {
    it("should render for #general", () => {
      message.html = "#general";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "<a class=\"mention-link mention-link--room\" data-channel=\"42\">#general</a>");
    });it("should render for \"#general and @rocket.cat", () => {
      message.html = "#general and @rocket.cat";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "<a class=\"mention-link mention-link--room\" data-channel=\"42\">#general</a> and <a class=\"mention-link mention-link--user\" data-username=\"rocket.cat\" title=\"rocket.cat\">rocket.cat</a>");
    });it("should render for \"", () => {
      message.html = "";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "");
    });it("should render for \"simple text", () => {
      message.html = "simple text";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "simple text");
    });
  });describe("parse all (RealNames)", () => {
    beforeEach(() => {
      mentionsParser.useRealName = () => true;
    });it("should render for #general", () => {
      message.html = "#general";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "<a class=\"mention-link mention-link--room\" data-channel=\"42\">#general</a>");
    });it("should render for \"#general and @rocket.cat", () => {
      message.html = "#general and @rocket.cat";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "<a class=\"mention-link mention-link--room\" data-channel=\"42\">#general</a> and <a class=\"mention-link mention-link--user\" data-username=\"rocket.cat\" title=\"rocket.cat\">Rocket.Cat</a>");
    });it("should render for \"", () => {
      message.html = "";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "");
    });it("should render for \"simple text", () => {
      message.html = "simple text";const e = mentionsParser.parse(message, "me");
      assert.equal(e.html, "simple text");
    });
  });
});