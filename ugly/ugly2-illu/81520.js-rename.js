const express = require("../../../../../shared/express");

const cors = require("cors");

const api = require("../../../../api").canary;

const mw = require("./middleware");

module.exports = function t() {
  const e = express.Router("canary content");
  e.use(cors());const a = api.http;
  e.get("/posts", mw.authenticatePublic, a(api.postsPublic.browse));e.get("/posts/:id", mw.authenticatePublic, a(api.postsPublic.read));e.get("/posts/slug/:slug", mw.authenticatePublic, a(api.postsPublic.read));e.get("/pages", mw.authenticatePublic, a(api.pagesPublic.browse));e.get("/pages/:id", mw.authenticatePublic, a(api.pagesPublic.read));e.get("/pages/slug/:slug", mw.authenticatePublic, a(api.pagesPublic.read));e.get("/authors", mw.authenticatePublic, a(api.authorsPublic.browse));e.get("/authors/:id", mw.authenticatePublic, a(api.authorsPublic.read));e.get("/authors/slug/:slug", mw.authenticatePublic, a(api.authorsPublic.read));e.get("/tags", mw.authenticatePublic, a(api.tagsPublic.browse));e.get("/tags/:id", mw.authenticatePublic, a(api.tagsPublic.read));e.get("/tags/slug/:slug", mw.authenticatePublic, a(api.tagsPublic.read));e.get("/settings", mw.authenticatePublic, a(api.publicSettings.browse));e.get("/products", mw.authenticatePublic, a(api.productsPublic.browse));return e;
};
