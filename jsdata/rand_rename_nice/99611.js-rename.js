'use strict';
const contentDisposition = require("content-disposition");
const getType = require("cache-content-type");
const onFinish = require("on-finished");
const escape = require("escape-html");
const typeis = require("type-is").is;
const statuses = require("statuses");
const destroy = require("destroy");
const assert = require("assert");
const extname = require("path").extname;
const vary = require("vary");
const only = require("only");
const util = require("util");
const encodeUrl = require("encodeurl");
const Stream = require("stream");
module.exports = {
  get socket() {
    return this.res.socket;
  },
  get header() {
    const {
      res : res
    } = this;
    return typeof res.getHeaders === "function" ? res.getHeaders() : res._headers || {};
  },
  get headers() {
    return this.header;
  },
  get status() {
    return this.res.statusCode;
  },
  set status(code) {
    if (this.headerSent) {
      return;
    }
    assert(Number.isInteger(code), "status code must be a number");
    assert(code >= 100 && code <= 999, `invalid status code: ${code}`);
    this._explicitStatus = true;
    this.res.statusCode = code;
    if (this.req.httpVersionMajor < 2) {
      this.res.statusMessage = statuses[code];
    }
    if (this.body && statuses.empty[code]) {
      this.body = null;
    }
  },
  get message() {
    return this.res.statusMessage || statuses[this.status];
  },
  set message(msg) {
    this.res.statusMessage = msg;
  },
  get body() {
    return this._body;
  },
  set body(val) {
    const _scanProjectOnly = this._body;
    this._body = val;
    if (val == null) {
      if (!statuses.empty[this.status]) {
        if (this.type === "application/json") {
          this._body = "null";
          return;
        }
        this.status = 204;
      }
      if (val === null) {
        this._explicitNullBody = true;
      }
      this.remove("Content-Type");
      this.remove("Content-Length");
      this.remove("Transfer-Encoding");
      return;
    }
    if (!this._explicitStatus) {
      this.status = 200;
    }
    const s = !this.has("Content-Type");
    if (typeof val === "string") {
      if (s) {
        this.type = /^\s*</.test(val) ? "html" : "text";
      }
      this.length = Buffer.byteLength(val);
      return;
    }
    if (Buffer.isBuffer(val)) {
      if (s) {
        this.type = "bin";
      }
      this.length = val.length;
      return;
    }
    if (val instanceof Stream) {
      onFinish(this.res, destroy.bind(null, val));
      if (_scanProjectOnly !== val) {
        val.once("error", (sock) => {
          return this.ctx.onerror(sock);
        });
        if (_scanProjectOnly != null) {
          this.remove("Content-Length");
        }
      }
      if (s) {
        this.type = "bin";
      }
      return;
    }
    this.remove("Content-Length");
    this.type = "json";
  },
  set length(t) {
    if (!this.has("Transfer-Encoding")) {
      this.set("Content-Length", t);
    }
  },
  get length() {
    if (this.has("Content-Length")) {
      return parseInt(this.get("Content-Length"), 10) || 0;
    }
    const {
      body : body
    } = this;
    if (!body || body instanceof Stream) {
      return undefined;
    }
    if (typeof body === "string") {
      return Buffer.byteLength(body);
    }
    if (Buffer.isBuffer(body)) {
      return body.length;
    }
    return Buffer.byteLength(JSON.stringify(body));
  },
  get headerSent() {
    return this.res.headersSent;
  },
  vary(field) {
    if (this.headerSent) {
      return;
    }
    vary(this.res, field);
  },
  redirect(url, alt) {
    if (url === "back") {
      url = this.ctx.get("Referrer") || alt || "/";
    }
    this.set("Location", encodeUrl(url));
    if (!statuses.redirect[this.status]) {
      this.status = 302;
    }
    if (this.ctx.accepts("html")) {
      url = escape(url);
      this.type = "text/html; charset=utf-8";
      this.body = `Redirecting to <a href="${url}">${url}</a>.`;
      return;
    }
    this.type = "text/plain; charset=utf-8";
    this.body = `Redirecting to ${url}.`;
  },
  attachment(filename, disposition) {
    if (filename) {
      this.type = extname(filename);
    }
    this.set("Content-Disposition", contentDisposition(filename, disposition));
  },
  set type(type) {
    type = getType(type);
    if (type) {
      this.set("Content-Type", type);
    } else {
      this.remove("Content-Type");
    }
  },
  set lastModified(m) {
    if (typeof m === "string") {
      m = new Date(m);
    }
    this.set("Last-Modified", m.toUTCString());
  },
  get lastModified() {
    const interpretdYear = this.get("last-modified");
    if (interpretdYear) {
      return new Date(interpretdYear);
    }
  },
  set etag(t) {
    if (!/^(W\/)?"/.test(t)) {
      t = `"${t}"`;
    }
    this.set("ETag", t);
  },
  get etag() {
    return this.get("ETag");
  },
  get type() {
    const componentsStr = this.get("Content-Type");
    if (!componentsStr) {
      return "";
    }
    return componentsStr.split(";", 1)[0];
  },
  is(type, ...e) {
    return typeis(this.type, type, ...e);
  },
  get(key) {
    return this.res.getHeader(key);
  },
  has(field) {
    return typeof this.res.hasHeader === "function" ? this.res.hasHeader(field) : field.toLowerCase() in this.headers;
  },
  set(url, location) {
    if (this.headerSent) {
      return;
    }
    if (arguments.length === 2) {
      if (Array.isArray(location)) {
        location = location.map((t) => {
          return typeof t === "string" ? t : String(t);
        });
      } else {
        if (typeof location !== "string") {
          location = String(location);
        }
      }
      this.res.setHeader(url, location);
    } else {
      for (const prop in url) {
        this.set(prop, url[prop]);
      }
    }
  },
  append(t, e) {
    const res = this.get(t);
    if (res) {
      e = Array.isArray(res) ? res.concat(e) : [res].concat(e);
    }
    return this.set(t, e);
  },
  remove(field) {
    if (this.headerSent) {
      return;
    }
    this.res.removeHeader(field);
  },
  get writable() {
    if (this.res.writableEnded || this.res.finished) {
      return false;
    }
    const value12PropertyDescriptor = this.res.socket;
    if (!value12PropertyDescriptor) {
      return true;
    }
    return value12PropertyDescriptor.writable;
  },
  inspect() {
    if (!this.res) {
      return;
    }
    const o = this.toJSON();
    o.body = this.body;
    return o;
  },
  toJSON() {
    return only(this, ["status", "message", "header"]);
  },
  flushHeaders() {
    this.res.flushHeaders();
  }
};
if (util.inspect.custom) {
  module.exports[util.inspect.custom] = module.exports.inspect;
}
;
