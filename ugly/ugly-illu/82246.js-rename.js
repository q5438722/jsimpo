const errors = require("@tryghost/errors");

const i18n = require("../../../shared/i18n");

const authorize = { authorizeContentApi(r, e, i) {
    const t = r.api_key && r.api_key.id;
    const n = r.member;
    if (t) {
      return i();
    }if (n) {
      return i();
    }return i(new errors.NoPermissionError({ message: i18n.t("errors.middleware.auth.authorizationFailed"), context: i18n.t("errors.middleware.auth.missingContentMemberOrIntegration") }));
  }, authorizeAdminApi(r, e, i) {
    const t = r.user && r.user.id;
    const n = r.api_key && r.api_key.id;
    if (t || n) {
      return i();
    } else {
      return i(new errors.NoPermissionError({ message: i18n.t("errors.middleware.auth.authorizationFailed"), context: i18n.t("errors.middleware.auth.missingAdminUserOrIntegration") }));
    }
  } };
module.exports = authorize;