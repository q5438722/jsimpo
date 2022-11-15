'use strict';
const should = require("should");
const sinon = require(_0x30a0f9(452));
const urlService = require(_0x30a0f9(453));
const helpers = require(_0x30a0f9(454));
const models = require(_0x30a0f9(455));
const testUtils = require("../../utils");
describe(_0x30a0f9(456), function() {
  const getRefreshTokenKey = _0x30a0f9;
  const data = {
    "mUdhb" : getRefreshTokenKey(457),
    "CwcCQ" : getRefreshTokenKey(458),
    "wycXS" : "Thomas",
    "MyCmS" : "false",
    "DDYHF" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fWWyU" : getRefreshTokenKey(459),
    "sXCWN" : getRefreshTokenKey(460),
    "xRUKo" : getRefreshTokenKey(461),
    "fCTOW" : getRefreshTokenKey(462),
    "JYoxn" : "ghost",
    "BKdFT" : " forever",
    "JdSLS" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "TonGR" : getRefreshTokenKey(463),
    "hOzbH" : getRefreshTokenKey(464),
    "JVxiM" : getRefreshTokenKey(465),
    "DXuRQ" : "&hellip; ",
    "lGpZd" : getRefreshTokenKey(466),
    "THMIW" : "foo",
    "FbvYI" : "foo-bar",
    "TORhJ" : getRefreshTokenKey(467),
    "qObpx" : "author url 1",
    "JkTqP" : "author url 2",
    "INsqv" : getRefreshTokenKey(468),
    "ILrSO" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "zbHqf" : getRefreshTokenKey(469),
    "hAZcq" : getRefreshTokenKey(470),
    "xPPye" : "baz",
    "OmiMF" : getRefreshTokenKey(471),
    "nBgUZ" : getRefreshTokenKey(472),
    "BMAlQ" : getRefreshTokenKey(473),
    "LKLBm" : getRefreshTokenKey(474),
    "DrFDL" : "author url b",
    "IITep" : getRefreshTokenKey(475),
    "MOfQU" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "mPIQi" : getRefreshTokenKey(476),
    "hlbNm" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "Coylu" : function(require, load, callback) {
      return require(load, callback);
    },
    "uZQFZ" : getRefreshTokenKey(477),
    "muSRq" : getRefreshTokenKey(478),
    "YGlJK" : "can add a single prefix to multiple authors",
    "UvLeC" : function(require, load, callback) {
      return require(load, callback);
    },
    "XtcTb" : "can add a prefix and suffix to multiple authors",
    "DGiRw" : function(require, load, callback) {
      return require(load, callback);
    },
    "GTAvb" : "can add a prefix and suffix with HTML",
    "FZwZc" : getRefreshTokenKey(479),
    "jxTgL" : "can autolink authors to author pages",
    "uJDZD" : getRefreshTokenKey(480),
    "kqwwr" : "can list authors to a specified no.",
    "TRJhf" : function(require, load, callback) {
      return require(load, callback);
    },
    "GlmbR" : getRefreshTokenKey(481),
    "hNkmQ" : getRefreshTokenKey(482)
  };
  before(function() {
    models["init"]();
  });
  beforeEach(function() {
    const pluralize = getRefreshTokenKey;
    sinon[pluralize(483)](urlService, data[pluralize(484)]);
  });
  data[getRefreshTokenKey(485)](afterEach, function() {
    sinon["restore"]();
  });
  data[getRefreshTokenKey(486)](it, data[getRefreshTokenKey(487)], function() {
    const get = getRefreshTokenKey;
    const authors = [testUtils["DataGenerator"][get(488)][get(489)]({
      "name" : data["CwcCQ"]
    }), testUtils[get(490)]["forKnex"]["createUser"]({
      "name" : data[get(491)]
    })];
    const tokens = helpers["authors"]["call"]({
      "authors" : authors
    }, {
      "hash" : {
        "autolink" : data["MyCmS"]
      }
    });
    should[get(492)](tokens);
    data[get(493)](String, tokens)[get(494)]["equal"](data["fWWyU"]);
  });
  it(getRefreshTokenKey(495), function() {
    const getKey = getRefreshTokenKey;
    const authors = [testUtils[getKey(490)][getKey(488)][getKey(489)]({
      "name" : getKey(496)
    }), testUtils["DataGenerator"][getKey(488)][getKey(489)]({
      "name" : data["sXCWN"]
    })];
    const creative_size = helpers[getKey(497)]["call"]({
      "authors" : authors
    }, {
      "hash" : {
        "autolink" : data[getKey(498)]
      }
    });
    should["exist"](creative_size);
    String(creative_size)["should"][getKey(499)](data[getKey(500)]);
  });
  data[getRefreshTokenKey(486)](it, data[getRefreshTokenKey(501)], function() {
    const get = getRefreshTokenKey;
    const authors = [testUtils[get(490)][get(488)][get(489)]({
      "name" : data[get(502)]
    }), testUtils["DataGenerator"][get(488)][get(489)]({
      "name" : data["JYoxn"]
    })];
    const tokens = helpers[get(497)]["call"]({
      "authors" : authors
    }, {
      "hash" : {
        "separator" : "|",
        "autolink" : data[get(498)]
      }
    });
    should[get(492)](tokens);
    data[get(493)](String, tokens)[get(494)]["equal"](get(503));
  });
  data["Coylu"](it, data[getRefreshTokenKey(504)], function() {
    const get = getRefreshTokenKey;
    const authors = [testUtils[get(490)][get(488)][get(489)]({
      "name" : get(462)
    }), testUtils["DataGenerator"]["forKnex"][get(489)]({
      "name" : data["JYoxn"]
    })];
    const tokens = helpers[get(497)][get(505)]({
      "authors" : authors
    }, {
      "hash" : {
        "prefix" : get(466),
        "autolink" : data[get(498)]
      }
    });
    should[get(492)](tokens);
    data[get(493)](String, tokens)[get(494)][get(499)]("on haunted, ghost");
  });
  data[getRefreshTokenKey(506)](it, getRefreshTokenKey(507), function() {
    const pluralize = getRefreshTokenKey;
    const authors = [testUtils[pluralize(490)][pluralize(488)]["createUser"]({
      "name" : data["fCTOW"]
    }), testUtils["DataGenerator"]["forKnex"]["createUser"]({
      "name" : data[pluralize(508)]
    })];
    const extraOptions = helpers[pluralize(497)][pluralize(505)]({
      "authors" : authors
    }, {
      "hash" : {
        "suffix" : data[pluralize(509)],
        "autolink" : data[pluralize(498)]
      }
    });
    should[pluralize(492)](extraOptions);
    data[pluralize(510)](String, extraOptions)["should"][pluralize(499)](data[pluralize(511)]);
  });
  data["UvLeC"](it, data[getRefreshTokenKey(512)], function() {
    const getKey = getRefreshTokenKey;
    const authors = [testUtils[getKey(490)][getKey(488)][getKey(489)]({
      "name" : data[getKey(502)]
    }), testUtils[getKey(490)]["forKnex"][getKey(489)]({
      "name" : getKey(513)
    })];
    const creative_size = helpers[getKey(497)][getKey(505)]({
      "authors" : authors
    }, {
      "hash" : {
        "suffix" : getKey(514),
        "prefix" : "on ",
        "autolink" : "false"
      }
    });
    should[getKey(492)](creative_size);
    String(creative_size)[getKey(494)]["equal"](data["hOzbH"]);
  });
  data[getRefreshTokenKey(515)](it, data[getRefreshTokenKey(516)], function() {
    const pluralize = getRefreshTokenKey;
    const authors = [testUtils[pluralize(490)]["forKnex"]["createUser"]({
      "name" : data["fCTOW"]
    }), testUtils[pluralize(490)][pluralize(488)][pluralize(489)]({
      "name" : data[pluralize(508)]
    })];
    const extraOptions = helpers["authors"]["call"]({
      "authors" : authors
    }, {
      "hash" : {
        "suffix" : data[pluralize(517)],
        "prefix" : data[pluralize(518)],
        "autolink" : data[pluralize(498)]
      }
    });
    should[pluralize(492)](extraOptions);
    data["JdSLS"](String, extraOptions)["should"][pluralize(499)]("&hellip; haunted, ghost &bull;");
  });
  data[getRefreshTokenKey(515)](it, data["FZwZc"], function() {
    const toQueryParams = getRefreshTokenKey;
    const initial = helpers["authors"][toQueryParams(505)]({}, {
      "hash" : {
        "prefix" : data[toQueryParams(519)],
        "suffix" : data[toQueryParams(509)],
        "autolink" : data["MyCmS"]
      }
    });
    should[toQueryParams(492)](initial);
    String(initial)[toQueryParams(494)][toQueryParams(499)]("");
  });
  data["DGiRw"](it, data["jxTgL"], function() {
    const toQueryParams = getRefreshTokenKey;
    const authors = [testUtils["DataGenerator"]["forKnex"]["createUser"]({
      "name" : data["THMIW"],
      "slug" : data[toQueryParams(520)]
    }), testUtils[toQueryParams(490)][toQueryParams(488)][toQueryParams(489)]({
      "name" : data[toQueryParams(521)],
      "slug" : data[toQueryParams(521)]
    })];
    urlService[toQueryParams(457)][toQueryParams(522)](authors[288 * 3 + -7648 + 6784]["id"])[toQueryParams(523)](data[toQueryParams(524)]);
    urlService[toQueryParams(457)][toQueryParams(522)](authors[5130 + 1097 + -3113 * 2]["id"])[toQueryParams(523)](data[toQueryParams(525)]);
    const initial = helpers[toQueryParams(497)][toQueryParams(505)]({
      "authors" : authors
    });
    should["exist"](initial);
    String(initial)[toQueryParams(494)][toQueryParams(499)](data[toQueryParams(526)]);
  });
  data[getRefreshTokenKey(515)](it, getRefreshTokenKey(527), function() {
    const get = getRefreshTokenKey;
    const authors = [testUtils["DataGenerator"][get(488)][get(489)]({
      "name" : data[get(528)],
      "slug" : data["FbvYI"]
    }), testUtils["DataGenerator"]["forKnex"]["createUser"]({
      "name" : data["TORhJ"],
      "slug" : data[get(521)]
    })];
    urlService[get(457)][get(522)](authors[-1 * 9778 + 4 * 2053 + 1566]["id"])[get(523)](data[get(524)]);
    const tokens = helpers[get(497)]["call"]({
      "authors" : authors
    }, {
      "hash" : {
        "limit" : "1"
      }
    });
    should["exist"](tokens);
    data[get(529)](String, tokens)[get(494)][get(499)]('<a href="author url 1">foo</a>');
  });
  it(data[getRefreshTokenKey(530)], function() {
    const getKey = getRefreshTokenKey;
    const authors = [testUtils[getKey(490)][getKey(488)][getKey(489)]({
      "name" : data[getKey(528)],
      "slug" : data[getKey(520)]
    }), testUtils[getKey(490)]["forKnex"][getKey(489)]({
      "name" : getKey(467),
      "slug" : getKey(467)
    })];
    urlService[getKey(457)][getKey(522)](authors[1 * 8719 + 1 * 1299 + 371 * -27]["id"])[getKey(523)]("author url 2");
    const creative_size = helpers["authors"][getKey(505)]({
      "authors" : authors
    }, {
      "hash" : {
        "from" : "2"
      }
    });
    should[getKey(492)](creative_size);
    String(creative_size)[getKey(494)][getKey(499)](data[getKey(531)]);
  });
  data[getRefreshTokenKey(515)](it, data[getRefreshTokenKey(532)], function() {
    const toQueryParams = getRefreshTokenKey;
    const authors = [testUtils[toQueryParams(490)][toQueryParams(488)][toQueryParams(489)]({
      "name" : data[toQueryParams(528)],
      "slug" : toQueryParams(533)
    }), testUtils[toQueryParams(490)][toQueryParams(488)][toQueryParams(489)]({
      "name" : data["TORhJ"],
      "slug" : data["TORhJ"]
    })];
    urlService["getUrlByResourceId"][toQueryParams(522)](authors[-6024 + -1 * 1569 + -3 * -2531]["id"])[toQueryParams(523)](data[toQueryParams(534)]);
    const initial = helpers[toQueryParams(497)]["call"]({
      "authors" : authors
    }, {
      "hash" : {
        "to" : "1"
      }
    });
    should["exist"](initial);
    String(initial)[toQueryParams(494)][toQueryParams(499)]('<a href="author url">foo</a>');
  });
  data[getRefreshTokenKey(535)](it, getRefreshTokenKey(536), function() {
    const toQueryParams = getRefreshTokenKey;
    const authors = [testUtils[toQueryParams(490)][toQueryParams(488)][toQueryParams(489)]({
      "name" : "foo",
      "slug" : data[toQueryParams(520)]
    }), testUtils[toQueryParams(490)][toQueryParams(488)]["createUser"]({
      "name" : data[toQueryParams(521)],
      "slug" : toQueryParams(467)
    }), testUtils[toQueryParams(490)][toQueryParams(488)][toQueryParams(489)]({
      "name" : data[toQueryParams(537)],
      "slug" : data["xPPye"]
    })];
    urlService[toQueryParams(457)][toQueryParams(522)](authors[-4548 + 873 + 4 * 919]["id"])[toQueryParams(523)](data["JkTqP"]);
    urlService[toQueryParams(457)][toQueryParams(522)](authors[7271 + -444 + -1 * 6825]["id"])["returns"](toQueryParams(538));
    const initial = helpers[toQueryParams(497)][toQueryParams(505)]({
      "authors" : authors
    }, {
      "hash" : {
        "from" : "2",
        "to" : "3"
      }
    });
    should[toQueryParams(492)](initial);
    String(initial)[toQueryParams(494)][toQueryParams(499)](data[toQueryParams(539)]);
  });
  it(data[getRefreshTokenKey(540)], function() {
    const get = getRefreshTokenKey;
    const authors = [testUtils["DataGenerator"][get(488)]["createUser"]({
      "name" : get(541),
      "slug" : data["FbvYI"]
    }), testUtils["DataGenerator"][get(488)][get(489)]({
      "name" : data[get(521)],
      "slug" : data["TORhJ"]
    }), testUtils[get(490)][get(488)][get(489)]({
      "name" : data["xPPye"],
      "slug" : data["xPPye"]
    })];
    urlService[get(457)][get(522)](authors[-1046 + 3461 * 2 + 1 * -5875]["id"])[get(523)](data[get(542)]);
    const tokens = helpers[get(497)][get(505)]({
      "authors" : authors
    }, {
      "hash" : {
        "from" : "2",
        "limit" : "1"
      }
    });
    should[get(492)](tokens);
    data[get(529)](String, tokens)[get(494)][get(499)](data[get(543)]);
  });
  it(data[getRefreshTokenKey(544)], function() {
    const get = getRefreshTokenKey;
    const authors = [testUtils[get(490)][get(488)]["createUser"]({
      "name" : get(541),
      "slug" : data[get(520)]
    }), testUtils[get(490)][get(488)][get(489)]({
      "name" : data["TORhJ"],
      "slug" : data[get(521)]
    }), testUtils["DataGenerator"][get(488)]["createUser"]({
      "name" : data[get(537)],
      "slug" : data[get(537)]
    })];
    urlService[get(457)][get(522)](authors[4 * -1016 + 3 * 441 + -2741 * -1]["id"])[get(523)](data[get(545)]);
    urlService[get(457)][get(522)](authors[-6981 + -3201 + 10183]["id"])[get(523)](data[get(546)]);
    urlService["getUrlByResourceId"][get(522)](authors[-17 * -332 + 9901 + -11 * 1413]["id"])[get(523)](data[get(547)]);
    const tokens = helpers["authors"][get(505)]({
      "authors" : authors
    }, {
      "hash" : {
        "from" : "1",
        "to" : "3",
        "limit" : "2"
      }
    });
    should[get(492)](tokens);
    data[get(548)](String, tokens)[get(494)][get(499)](data[get(549)]);
  });
});

