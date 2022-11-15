'use strict';
const path = require(_0x5b289f(396));
const {
  parseMD : parseMD
} = require(".");
describe(_0x5b289f(397), () => {
  const min = _0x5b289f;
  const c = {
    "ZVAjZ" : min(398),
    "QCQFP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "VyhIO" : min(399),
    "cxEWE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "EYtvA" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fYcxm" : min(400),
    "KCshJ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "IKbHP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "RqURE" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "xfmja" : min(401),
    "AhTEj" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "tpQdd" : "__fixtures__/with-video-question.md",
    "SoFyn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "iioEO" : min(402),
    "awZKh" : function(require, load, callback) {
      return require(load, callback);
    },
    "UWBwZ" : "should parse a more realistic md file",
    "KgShe" : "should import md from other files",
    "DTrrn" : min(403),
    "Ayppz" : min(404),
    "VzRlA" : function(require, load, callback) {
      return require(load, callback);
    },
    "HUJJQ" : "it should not parse directives we do not use"
  };
  c[min(405)](it, min(406), async() => {
    const toQueryParams = min;
    const initial = await parseMD(path["resolve"](__dirname, c[toQueryParams(407)]));
    expect(initial)[toQueryParams(408)]();
  });
  it(c["UWBwZ"], async() => {
    const _getNodeName = min;
    const bBody = await c[_getNodeName(409)](parseMD, path[_getNodeName(410)](__dirname, c[_getNodeName(411)]));
    c["cxEWE"](expect, bBody)[_getNodeName(408)]();
  });
  c["awZKh"](it, c[min(412)], async() => {
    const _getNodeName = min;
    const bBody = await c[_getNodeName(413)](parseMD, path[_getNodeName(410)](__dirname, c["fYcxm"]));
    c[_getNodeName(414)](expect, bBody)[_getNodeName(408)]();
  });
  c[min(405)](it, min(415), async() => {
    const gotoNewOfflinePage = min;
    const button2Component = await parseMD(path[gotoNewOfflinePage(410)](__dirname, "__fixtures__/with-frontmatter.md"));
    expect(button2Component)["toMatchSnapshot"]();
  });
  it(c[min(416)], async() => {
    const _getNodeName = min;
    const bBody = await c[_getNodeName(417)](parseMD, path[_getNodeName(410)](__dirname, _getNodeName(418)));
    c[_getNodeName(419)](expect, bBody)[_getNodeName(408)]();
  });
  c[min(405)](it, c[min(420)], async() => {
    const _getNodeName = min;
    const bBody = await parseMD(path[_getNodeName(410)](__dirname, c[_getNodeName(421)]));
    c[_getNodeName(422)](expect, bBody)[_getNodeName(408)]();
  });
  c[min(423)](it, min(424), async() => {
    const _getNodeName = min;
    const bBody = await parseMD(path[_getNodeName(410)](__dirname, c[_getNodeName(425)]));
    c[_getNodeName(426)](expect, bBody)["toMatchSnapshot"]();
  });
  it(c[min(427)], async() => {
    const _getNodeName = min;
    const button2Component = await c[_getNodeName(426)](parseMD, path[_getNodeName(410)](__dirname, c[_getNodeName(428)]));
    expect(button2Component)["toMatchSnapshot"]();
  });
});

