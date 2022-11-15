'use strict';
import dnsResolver from "dns";
import{
  Meteor as Meteor
}from "meteor/meteor";
import mem from "mem";
import*as federationErrors$jscomp$0$jscomp$0 from "../functions/errors";
import{
  logger as logger
}from "./logger";
import{
  isFederationEnabled as isFederationEnabled
}from "./isFederationEnabled";
import{
  federationRequest as federationRequest
}from "./http";
const fn = Meteor.wrapAsync(dnsResolver.resolveSrv);
const artistTrack = Meteor.wrapAsync(dnsResolver.resolveTxt);
const oneMonth = 36e5;
const require = mem(fn, {
  maxAge : oneMonth
});
const getFetchFromCache = mem(artistTrack, {
  maxAge : oneMonth
});
const TRAVIS_API_JOBS_URL = process.env.NODE_ENV === "development" ? "http://localhost:8080" : "https://hub.rocket.chat";
function ready(url, message, remote) {
  const artistTrack = {
    domain : url,
    url : message,
    public_key : remote
  };
  try {
    federationRequest("POST", `${TRAVIS_API_JOBS_URL}/api/v1/peers`, artistTrack);
    return true;
  } catch (fsmError) {
    logger.dns.error(fsmError);
    throw ex1go.peerCouldNotBeRegisteredWithHub("dns.registerWithHub");
  }
}
export{
  ready as registerWithHub
};
function resolve(from) {
  try {
    logger.dns.debug(`searchHub: peerDomain=${from}`);
    const {
      data : {
        peer : bookmark
      }
    } = federationRequest("GET", `${TRAVIS_API_JOBS_URL}/api/v1/peers?search=${from}`);
    if (!bookmark) {
      logger.dns.debug(`searchHub: could not find peerDomain=${from}`);
      throw ex1go.peerCouldNotBeRegisteredWithHub("dns.registerWithHub");
    }
    const {
      url : requestOrUrl,
      public_key : publicKey
    } = bookmark;
    logger.dns.debug(`searchHub: found peerDomain=${from} url=${requestOrUrl}`);
    return {
      url : requestOrUrl,
      peerDomain : from,
      publicKey : publicKey
    };
  } catch (fsmError) {
    logger.dns.error(fsmError);
    throw ex1go.peerNotFoundUsingDNS("dns.searchHub");
  }
}
export{
  resolve as searchHub
};
function init(keys) {
  if (!isFederationEnabled()) {
    throw ex1go.disabled("dns.search");
  }
  logger.dns.debug(`search: peerDomain=${keys}`);
  let a = [];
  let type = "";
  try {
    logger.dns.debug(`search: peerDomain=${keys} srv=_rocketchat._https.${keys}`);
    a = require(`_rocketchat._https.${keys}`);
    type = "https";
  } catch (e) {
  }
  if (!a.length) {
    try {
      logger.dns.debug(`search: peerDomain=${keys} srv=_rocketchat._http.${keys}`);
      a = require(`_rocketchat._http.${keys}`);
      type = "http";
    } catch (e) {
    }
  }
  if (!a.length) {
    try {
      logger.dns.debug(`search: peerDomain=${keys} srv=_rocketchat._tcp.${keys}`);
      a = require(`_rocketchat._tcp.${keys}`);
      type = "https";
      logger.dns.debug(`search: peerDomain=${keys} txt=rocketchat-tcp-protocol.${keys}`);
      type = require(`rocketchat-tcp-protocol.${keys}`);
      type = type[0].join("");
      if (type !== "http" && type !== "https") {
        type = null;
      }
    } catch (e) {
    }
  }
  const [item] = a;
  if (!item || !type) {
    logger.dns.debug(`search: could not find valid SRV entry peerDomain=${keys} srvEntry=${JSON.stringify(item)} protocol=${type}`);
    return resolve(keys);
  }
  let key = null;
  try {
    logger.dns.debug(`search: peerDomain=${keys} txt=rocketchat-public-key.${keys}`);
    const _hobby = getFetchFromCache(`rocketchat-public-key.${keys}`);
    key = _hobby[0].join("");
  } catch (e) {
  }
  if (!key) {
    logger.dns.debug(`search: could not find TXT entry for peerDomain=${keys} - SRV entry found`);
    return resolve(keys);
  }
  logger.dns.debug(`search: found peerDomain=${keys} srvEntry=${item.name}:${item.port} protocol=${type}`);
  return {
    url : `${type}://${item.name}:${item.port}`,
    peerDomain : keys,
    publicKey : key
  };
}
export{
  init as search
};

