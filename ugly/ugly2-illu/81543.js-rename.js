const debug = require("@tryghost/debug")("members");

var { URL } = require("url");

const cors = require("cors");

const bodyParser = require("body-parser");

const express = require("../../../shared/express");

const urlUtils = require("../../../shared/url-utils");

const membersService = require("../../services/members");

const middleware = membersService.middleware;

const shared = require("../shared");

module.exports = function e() {
  debug("Members App setup start");const r = express("members");
  r.use(shared.middlewares.maintenance);r.use(shared.middlewares.cacheControl("private"));const s = new URL(urlUtils.getSiteUrl());
  r.use(cors(s.origin));r.use(middleware.createSessionFromMagicLink);r.post("/webhooks/stripe", middleware.stripeWebhooks);r.get("/api/member", middleware.getMemberData);r.put("/api/member", bodyParser.json({ limit: "1mb" }), middleware.updateMemberData);r.get("/api/session", middleware.getIdentityToken);r.delete("/api/session", middleware.deleteSession);r.get("/api/site", middleware.getMemberSiteData);r.post("/api/send-magic-link", bodyParser.json(), shared.middlewares.brute.membersAuth, (e, r, s) => membersService.api.middleware.sendMagicLink(e, r, s));r.post("/api/create-stripe-checkout-session", (e, r, s) => membersService.api.middleware.createCheckoutSession(e, r, s));r.post("/api/create-stripe-update-session", (e, r, s) => membersService.api.middleware.createCheckoutSetupSession(e, r, s));r.put("/api/subscriptions/:id", (e, r, s) => membersService.api.middleware.updateSubscription(e, r, s));r.use("/api", shared.middlewares.errorHandler.resourceNotFound);r.use("/api", shared.middlewares.errorHandler.handleJSONResponseV2);r.use("/webhooks", shared.middlewares.errorHandler.resourceNotFound);r.use("/webhooks", shared.middlewares.errorHandler.handleJSONResponseV2);debug("Members App setup end");return r;
};
