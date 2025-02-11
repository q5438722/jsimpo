"use strict";

const strapiAdmin = require("strapi-admin");

var { getConfigUrls, getAbsoluteServerUrl } = require("strapi-utils");

const loadConfiguration = require("../core/app-configuration");

const ee = require("../utils/ee");

const addSlash = require("../utils/addSlash");

module.exports = async function ({ browser: e }) {
  const r = process.cwd();
  const t = loadConfiguration(r);
  var { adminPath: s } = getConfigUrls(t.get("server"), true);
  const o = t.get("server.admin.port", 8e3);
  const i = t.get("server.admin.host", "localhost");
  const n = t.get("server.admin.watchIgnoreFiles", []);
  ee({ dir: r });strapiAdmin.watchAdmin({ dir: r, port: o, host: i, browser: e, options: { backend: getAbsoluteServerUrl(t, true), publicPath: addSlash(s), watchIgnoreFiles: n, features: ee.isEE ? ee.features.getEnabled() : [] } });
};
