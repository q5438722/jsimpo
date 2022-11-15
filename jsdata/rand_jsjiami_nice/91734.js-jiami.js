'use strict';
var vip = "vip.v6";
var _0x35d2 = [vip, "wrHCncK+w7bCiFcPw7w5wpbCq8OmVcOOU8KVP8OJCcOmwrwBw53CgGoL", "wr1fw7LCmcOAw7NeGsOIw7MKHkPCrsKQw4jCrUI=", "cizDuHnDtxRa", "GcKiwqTDi0RrU2HDmw7DhV/CrG/CtRFxP8K2bMK0w53CsgzDtcKCQMOXOcO4NMK9UsOOwo7CmsOjw7PDvw==", "ITVHw67CnsO6b0nDqsO7UcKIwrnDmcOU", "w4/DqMKswoTDtQ==", "w70uHAvCtsKQGw==", "w5fCtcKDw7w1w7TDlA==", "GzrCgzzChcOcw7U=", "w7xbw7zDhsOyw6x7worDlMOYFsKQ", "wpfCosKCSQ07UcKSECvDvcKk", "Y8OlN8KyLA==", "w4zDo8KTwr09", "c8OYw4dHDg==", "worDgXDCkMO2wpDDlg==", "KMKVwo1mE8Oaw7U2Q8KZwopo", 
"VWEcFMKM", "wp83w7U6w7VIM8KBwpE=", "EiDChQnCkcOLw5vCgFUWw64EDTA=", "UFMwccKnVMKk", "w73DosOQw7LCjQ==", "WMO5w7/DjkV2eXvCmAzDs1LDr2E=", "woc8em0=", "cXEtwqspSA==", "woImZ3NvEsKdwqM0wpzDv8KXN8KK", "w4V4w57DqQXDl8OZc8K6wpA=", "LUYrwoUU", "woUxw5Anw64=", "w7jDhsK3wpbDgA==", "wp9Uw79ZS0vCqA==", "wp0mcW9zFcKz", "wrIfwrfCiB8=", "wrLCnsOjw6bCm1cQw7tkwp/DpA==", "w7FawoIHwpXCp8KSYyPDgsKO", "w6gWEUrCrcOIwq4sSQFBwqjDv8K0wqYHN28=", "wo8tFwvCkQ==", "w4/DhsOzw6/ClU0Lw6pyw4Y=", "GFFBG8O6w45Lw4PDqMKaPRljw6HDtsOYw5XCtg==", 
"e8ONw7jDvFU=", "amhWw63CiQ==", "wpbCv8KbWA==", "cTp4XCI=", "wonDkGTDjsKn", "w4R9wrMIwpgQUA==", "w7XCtRViGxzCkcO5w7rChcKCFQ==", "w6zDtcOhQcOV", "Y8O+CcKuUUhuDA==", "wpwiw7M7", "vCipq.vX6erIUuTfMrdFzdx=="];
(function(obj, count, long) {
  var fn = function(to, value, str, val, key) {
    value = value >> 8;
    key = "po";
    var str = "shift";
    var method = "push";
    if (value < to) {
      for (; --to;) {
        val = obj[str]();
        if (value === to) {
          value = val;
          str = obj[key + "p"]();
        } else {
          if (value && str["replace"](/[CqXerIUuTfMrdFzdx=]/g, "") === value) {
            obj[method](val);
          }
        }
      }
      obj[method](obj[str]());
    }
    return 662946;
  };
  return fn(++count, long) >> count ^ long;
})(_0x35d2, 334, 85504);
var _0x4022 = function(c, alpha) {
  c = ~~"0x"["concat"](c);
  var x = _0x35d2[c];
  if (_0x4022["TKjEiR"] === undefined) {
    (function() {
      var jid = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
      var listeners = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      if (!jid["atob"]) {
        jid["atob"] = function(i) {
          var str = String(i)["replace"](/=+$/, "");
          var bc = 0;
          var bs;
          var buffer;
          var Y = 0;
          var pix_color = "";
          for (; buffer = str["charAt"](Y++); ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer, bc++ % 4) ? pix_color = pix_color + String["fromCharCode"](255 & bs >> (-2 * bc & 6)) : 0) {
            buffer = listeners["indexOf"](buffer);
          }
          return pix_color;
        };
      }
    })();
    var testcase = function(data, fn) {
      var secretKey = [];
      var y = 0;
      var temp;
      var testResult = "";
      var tempData = "";
      data = atob(data);
      var val = 0;
      var key = data["length"];
      for (; val < key; val++) {
        tempData = tempData + ("%" + ("00" + data["charCodeAt"](val)["toString"](16))["slice"](-2));
      }
      data = decodeURIComponent(tempData);
      var x = 0;
      for (; x < 256; x++) {
        secretKey[x] = x;
      }
      x = 0;
      for (; x < 256; x++) {
        y = (y + secretKey[x] + fn["charCodeAt"](x % fn["length"])) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
      }
      x = 0;
      y = 0;
      var i = 0;
      for (; i < data["length"]; i++) {
        x = (x + 1) % 256;
        y = (y + secretKey[x]) % 256;
        temp = secretKey[x];
        secretKey[x] = secretKey[y];
        secretKey[y] = temp;
        testResult = testResult + String["fromCharCode"](data["charCodeAt"](i) ^ secretKey[(secretKey[x] + secretKey[y]) % 256]);
      }
      return testResult;
    };
    _0x4022["BHIlVV"] = testcase;
    _0x4022["cuIiCG"] = {};
    _0x4022["TKjEiR"] = !![];
  }
  var e = _0x4022["cuIiCG"][c];
  if (e === undefined) {
    if (_0x4022["pqkmbC"] === undefined) {
      _0x4022["pqkmbC"] = !![];
    }
    x = _0x4022["BHIlVV"](x, alpha);
    _0x4022["cuIiCG"][c] = x;
  } else {
    x = e;
  }
  return x;
};
const fs = require(_0x4022("0", "fCJp"));
const path = require(_0x4022("1", "$b$S"));
const {
  promisifiedSpawn : promisifiedSpawn
} = require(_0x4022("2", "$U$Z"));
const {
  registryUrl : registryUrl
} = require(_0x4022("3", "5X@R"));
const NPMRCContent = registryUrl[_0x4022("4", "rS3T")](/https?:/g, "") + '/:_authToken="gatsby-dev"';
const {
  getMonorepoPackageJsonPath : getMonorepoPackageJsonPath
} = require(_0x4022("5", "9vqD"));
const {
  registerCleanupTask : registerCleanupTask
} = require(_0x4022("6", "UnIA"));
const adjustPackageJson = ({
  monoRepoPackageJsonPath : path,
  packageName : depData,
  versionPostFix : name,
  packagesToPublish : c,
  ignorePackageJSONChanges : cbCtx,
  root : node
}) => {
  var evtCtx = {
    "bQAqq" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "MaHcG" : function(require, load, callback) {
      return require(load, callback);
    }
  };
  const data = fs["readFileSync"](path, "utf-8");
  const peerHas = JSON[_0x4022("7", "fTHO")](data);
  peerHas[_0x4022("8", "phLS")] = peerHas[_0x4022("9", "A]p2")] + "-dev-" + name;
  c[_0x4022("a", "u1Aj")]((feedId) => {
    if (peerHas[_0x4022("b", "^DMO")] && peerHas[_0x4022("c", "cgrR")][feedId]) {
      const expected_dir = JSON[_0x4022("d", "!Z&C")](fs["readFileSync"](evtCtx[_0x4022("e", "MAcK")](getMonorepoPackageJsonPath, {
        "packageName" : feedId,
        "root" : node
      }), _0x4022("f", "3D61")))[_0x4022("10", "zH2H")];
      peerHas[_0x4022("11", "6)Zk")][feedId] = expected_dir + _0x4022("12", "HQ)e") + name;
    }
  });
  const o = JSON[_0x4022("13", "$b$S")](peerHas);
  const gotoNewOfflinePage = evtCtx["MaHcG"](cbCtx, depData, [data, o]);
  fs[_0x4022("14", "u1Aj")](path, o);
  return {
    "newPackageVersion" : peerHas[_0x4022("15", "KsG4")],
    "unadjustPackageJson" : evtCtx[_0x4022("16", "$U$Z")](registerCleanupTask, () => {
      fs[_0x4022("17", "9vqD")](path, data);
      gotoNewOfflinePage();
    })
  };
};
const createTemporaryNPMRC = ({
  pathToPackage : x
}) => {
  var _0x1c8b63 = {
    "kZOaM" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  const fd = path[_0x4022("18", "Tndv")](x, _0x4022("19", "DZp$"));
  fs[_0x4022("1a", "Tndv")](fd, NPMRCContent);
  return _0x1c8b63["kZOaM"](registerCleanupTask, () => {
    fs[_0x4022("1b", "c*6S")](fd);
  });
};
const publishPackage = async({
  packageName : hashSelectors,
  packagesToPublish : version,
  root : root,
  versionPostFix : dupeNameCount,
  ignorePackageJSONChanges : contextRecordId
}) => {
  var f = {
    "ChMOq" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "irWtu" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "GOiaP" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "LAsBe" : _0x4022("1c", "DZp$"),
    "LwvPH" : function(saveNotifs) {
      return saveNotifs();
    },
    "HTndR" : function(saveNotifs) {
      return saveNotifs();
    }
  };
  const x = f[_0x4022("1d", "$b$S")](getMonorepoPackageJsonPath, {
    "packageName" : hashSelectors,
    "root" : root
  });
  const {
    unadjustPackageJson : date,
    newPackageVersion : msg
  } = f[_0x4022("1e", "fTHO")](adjustPackageJson, {
    "monoRepoPackageJsonPath" : x,
    "packageName" : hashSelectors,
    "root" : root,
    "versionPostFix" : dupeNameCount,
    "packagesToPublish" : version,
    "ignorePackageJSONChanges" : contextRecordId
  });
  const pathToPackage = path[_0x4022("1f", "M!^w")](x);
  const defd = f["GOiaP"](createTemporaryNPMRC, {
    "pathToPackage" : pathToPackage
  });
  const animationType = ["npm", [_0x4022("20", "Tndv"), _0x4022("21", "^Gaw"), "gatsby-dev", _0x4022("22", "$U$Z") + registryUrl], {
    "cwd" : pathToPackage
  }];
  console["log"](_0x4022("23", "86Le") + hashSelectors + "@" + msg + _0x4022("24", "6Y^)"));
  try {
    await f[_0x4022("25", "6Y^)")](promisifiedSpawn, animationType);
    console["log"](_0x4022("26", "$U$Z") + hashSelectors + "@" + msg + _0x4022("27", "043Z"));
  } catch (ext) {
    if (f["LAsBe"] === f[_0x4022("28", "9vqD")]) {
      console[_0x4022("29", "UnIA")]("Failed to publish " + hashSelectors + "@" + msg, ext);
      process[_0x4022("2a", "cgrR")](1);
    } else {
      const groupNamePrefix = JSON["parse"](fs["readFileSync"](f[_0x4022("2b", "sr[9")](getMonorepoPackageJsonPath, {
        "packageName" : packageThatWillBePublished,
        "root" : root
      }), _0x4022("2c", "zH2H")))[_0x4022("2d", "n]af")];
      monorepoPKGjson[_0x4022("2e", "LX21")][packageThatWillBePublished] = groupNamePrefix + "-dev-" + dupeNameCount;
    }
  }
  f[_0x4022("2f", "%Sep")](defd);
  f["HTndR"](date);
  return msg;
};
exports["publishPackage"] = publishPackage;

