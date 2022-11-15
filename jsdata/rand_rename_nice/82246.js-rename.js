'use strict';
const errors = require("@tryghost/errors");
const i18n = require("../../../shared/i18n");
const authorize = {
  authorizeContentApi(portalSelf, appConfig, routes) {
    const t = portalSelf.api_key && portalSelf.api_key.id;
    const n = portalSelf.member;
    if (t) {
      return routes();
    }
    if (n) {
      return routes();
    }
    return routes(new errors.NoPermissionError({
      message : i18n.t("errors.middleware.auth.authorizationFailed"),
      context : i18n.t("errors.middleware.auth.missingContentMemberOrIntegration")
    }));
  },
  authorizeAdminApi(portalSelf, appConfig, routes) {
    const t = portalSelf.user && portalSelf.user.id;
    const types = portalSelf.api_key && portalSelf.api_key.id;
    if (t || types) {
      return routes();
    } else {
      return routes(new errors.NoPermissionError({
        message : i18n.t("errors.middleware.auth.authorizationFailed"),
        context : i18n.t("errors.middleware.auth.missingAdminUserOrIntegration")
      }));
    }
  }
};
module.exports = authorize;

