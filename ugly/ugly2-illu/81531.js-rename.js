const errors = require("@tryghost/errors");

const i18n = require("../../../../../shared/i18n");

const auth = require("../../../../services/auth");

const shared = require("../../../shared");

const apiMw = require("../../middleware");

const notImplemented = function (e, r, t) {
  if (!e.api_key) {
    return t();
  }const s = { site: ["GET"], posts: ["GET", "PUT", "DELETE", "POST"], pages: ["GET", "PUT", "DELETE", "POST"], images: ["POST"], webhooks: ["POST", "PUT", "DELETE"], actions: ["GET"], tags: ["GET", "PUT", "DELETE", "POST"], labels: ["GET", "PUT", "DELETE", "POST"], users: ["GET"], themes: ["POST", "PUT"], members: ["GET", "PUT", "DELETE", "POST"], config: ["GET"], schedules: ["PUT"], db: ["POST"] };
  const i = e.url.match(/^\/(\w+)\/?/);
  if (i) {
    const a = i[1];
    if (s[a] && s[a].includes(e.method)) {
      return t();
    }
  }t(new errors.GhostError({ errorType: "NotImplementedError", message: i18n.t("errors.api.common.notImplemented"), statusCode: "501" }));
};

module.exports.authAdminApi = [auth.authenticate.authenticateAdminApi, auth.authorize.authorizeAdminApi, apiMw.updateUserLastSeen, apiMw.cors, shared.middlewares.urlRedirects.adminSSLAndHostRedirect, shared.middlewares.prettyUrls, function (e, r, t) {
  if (!e.api_key) {
    return t();
  }const s = { site: ["GET"], posts: ["GET", "PUT", "DELETE", "POST"], pages: ["GET", "PUT", "DELETE", "POST"], images: ["POST"], webhooks: ["POST", "PUT", "DELETE"], actions: ["GET"], tags: ["GET", "PUT", "DELETE", "POST"], labels: ["GET", "PUT", "DELETE", "POST"], users: ["GET"], themes: ["POST", "PUT"], members: ["GET", "PUT", "DELETE", "POST"], config: ["GET"], schedules: ["PUT"], db: ["POST"] };
  const i = e.url.match(/^\/(\w+)\/?/);
  if (i) {
    const a = i[1];
    if (s[a] && s[a].includes(e.method)) {
      return t();
    }
  }t(new errors.GhostError({ errorType: "NotImplementedError", message: i18n.t("errors.api.common.notImplemented"), statusCode: "501" }));
}];module.exports.authAdminApiWithUrl = [auth.authenticate.authenticateAdminApiWithUrl, auth.authorize.authorizeAdminApi, apiMw.updateUserLastSeen, apiMw.cors, shared.middlewares.urlRedirects.adminSSLAndHostRedirect, shared.middlewares.prettyUrls, function (e, r, t) {
  if (!e.api_key) {
    return t();
  }const s = { site: ["GET"], posts: ["GET", "PUT", "DELETE", "POST"], pages: ["GET", "PUT", "DELETE", "POST"], images: ["POST"], webhooks: ["POST", "PUT", "DELETE"], actions: ["GET"], tags: ["GET", "PUT", "DELETE", "POST"], labels: ["GET", "PUT", "DELETE", "POST"], users: ["GET"], themes: ["POST", "PUT"], members: ["GET", "PUT", "DELETE", "POST"], config: ["GET"], schedules: ["PUT"], db: ["POST"] };
  const i = e.url.match(/^\/(\w+)\/?/);
  if (i) {
    const a = i[1];
    if (s[a] && s[a].includes(e.method)) {
      return t();
    }
  }t(new errors.GhostError({ errorType: "NotImplementedError", message: i18n.t("errors.api.common.notImplemented"), statusCode: "501" }));
}];module.exports.publicAdminApi = [apiMw.cors, shared.middlewares.urlRedirects.adminSSLAndHostRedirect, shared.middlewares.prettyUrls, function (e, r, t) {
  if (!e.api_key) {
    return t();
  }const s = { site: ["GET"], posts: ["GET", "PUT", "DELETE", "POST"], pages: ["GET", "PUT", "DELETE", "POST"], images: ["POST"], webhooks: ["POST", "PUT", "DELETE"], actions: ["GET"], tags: ["GET", "PUT", "DELETE", "POST"], labels: ["GET", "PUT", "DELETE", "POST"], users: ["GET"], themes: ["POST", "PUT"], members: ["GET", "PUT", "DELETE", "POST"], config: ["GET"], schedules: ["PUT"], db: ["POST"] };
  const i = e.url.match(/^\/(\w+)\/?/);
  if (i) {
    const a = i[1];
    if (s[a] && s[a].includes(e.method)) {
      return t();
    }
  }t(new errors.GhostError({ errorType: "NotImplementedError", message: i18n.t("errors.api.common.notImplemented"), statusCode: "501" }));
}];
