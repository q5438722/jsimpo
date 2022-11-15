'use strict';
const _0x46b3 = ["953313WWFsYI", "2HuzEHk", "2lrAEEF", "817879mcqkOU", "85210UlhTby", "7gsjkov", "4285UDgtqZ", "314YZuYKm", "1379137BYNmLa", "1ixzVKZ", "71640AVrEVU", "1904692vBKXgM", "path", "chai", "../utils/childProcess", "../serverlessBinary", "../utils/fs", "join", "fixtures/regular", "fixtures/individually", "fixtures/artifact", "Integration test - Packaging - CloudFormation", ".serverless/cloudformation-template-update-stack.json", "handler.hello", "Arn", "aws-nodejs-dev-hello", "nodejs12.x", 
"HelloLogGroup", "ServerlessDeploymentBucket", "package artifact directive works", "creates the correct default function resource in cfn template", "resolves self.provider.region", "CENni", "kvFaD", "tdACD", "Ksusb", "copySync", "artifact", " package", "readFileSync", "gTVuA", "jTFyZ", "Resources", "HelloLambdaFunction", "Properties", "Code", "S3Key", "match", "fCoTd", "deep", "fHmsg", "jJxKk", "vGdXX", "KJYRz", "FhUKk", "regular", "parse", "equal", "KpJew", "mjfnp", "CkXBB", "jxAgi", "ZDrhY", "individually", 
"Hello2LambdaFunction", "YnZrl", "eBkhL", "CustomDashnameLambdaFunction", "FunctionName", "aws-nodejs-us-east-1-custom-name"];
const _0xb4aadd = _0x1bb6;
function _0x1bb6(isBgroundImg, stgs) {
  return _0x1bb6 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-6119 + -8744 + -5 * -3037);
    let _0x5613f7 = _0x46b3[isBgroundImg];
    return _0x5613f7;
  }, _0x1bb6(isBgroundImg, stgs);
}
(function(data, val) {
  const toMonths = _0x1bb6;
  for (; !![];) {
    try {
      const nodeval = -parseInt(toMonths(322)) * parseInt(toMonths(323)) + parseInt(toMonths(324)) * parseInt(toMonths(325)) + -parseInt(toMonths(326)) * parseInt(toMonths(327)) + -parseInt(toMonths(328)) * parseInt(toMonths(329)) + parseInt(toMonths(330)) * parseInt(toMonths(331)) + -parseInt(toMonths(332)) + parseInt(toMonths(333));
      if (nodeval === val) {
        break;
      } else {
        data["push"](data["shift"]());
      }
    } catch (_0x33d13a) {
      data["push"](data["shift"]());
    }
  }
})(_0x46b3, 1 * 1856401 + -1467780 + -29 * -21060);
const fs = require("fs");
const path = require(_0xb4aadd(334));
const {
  expect : expect
} = require(_0xb4aadd(335));
const fse = require("fs-extra");
const {
  execSync : execSync
} = require(_0xb4aadd(336));
const serverlessExec = require(_0xb4aadd(337));
const {
  getTmpDirPath : getTmpDirPath
} = require(_0xb4aadd(338));
const fixturePaths = {
  "regular" : path[_0xb4aadd(339)](__dirname, _0xb4aadd(340)),
  "individually" : path[_0xb4aadd(339)](__dirname, _0xb4aadd(341)),
  "artifact" : path[_0xb4aadd(339)](__dirname, _0xb4aadd(342))
};
describe(_0xb4aadd(343), () => {
  const getRefreshTokenKey = _0xb4aadd;
  const data = {
    "kvFaD" : function(saveNotifs) {
      return saveNotifs();
    },
    "tdACD" : function(require, load, callback) {
      return require(load, callback);
    },
    "gTVuA" : getRefreshTokenKey(344),
    "jTFyZ" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fCoTd" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "fHmsg" : "AWS::Lambda::Function",
    "jJxKk" : getRefreshTokenKey(345),
    "vGdXX" : "IamRoleLambdaExecution",
    "mjfnp" : getRefreshTokenKey(346),
    "CENni" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "KpJew" : getRefreshTokenKey(347),
    "CkXBB" : getRefreshTokenKey(348),
    "jxAgi" : getRefreshTokenKey(349),
    "YnZrl" : getRefreshTokenKey(350),
    "Ksusb" : getRefreshTokenKey(351),
    "KJYRz" : function(require, load, callback) {
      return require(load, callback);
    },
    "FhUKk" : getRefreshTokenKey(352),
    "ZDrhY" : "handles package individually with include/excludes correctly",
    "eBkhL" : getRefreshTokenKey(353)
  };
  let root;
  data[getRefreshTokenKey(354)](beforeEach, () => {
    const pluralize = getRefreshTokenKey;
    root = data[pluralize(355)](getTmpDirPath);
  });
  data[getRefreshTokenKey(356)](it, data[getRefreshTokenKey(357)], () => {
    const parseInt = getRefreshTokenKey;
    fse[parseInt(358)](fixturePaths[parseInt(359)], root);
    data[parseInt(356)](execSync, serverlessExec + parseInt(360), {
      "cwd" : root
    });
    const colData = JSON["parse"](fs[parseInt(361)](path["join"](root, data[parseInt(362)])));
    data[parseInt(363)](expect, colData[parseInt(364)][parseInt(365)][parseInt(366)][parseInt(367)][parseInt(368)])["to"][parseInt(369)](/serverless\/aws-nodejs\/dev\/[^]*\/artifact.zip/);
    delete colData["Resources"][parseInt(365)][parseInt(366)][parseInt(367)][parseInt(368)];
    data[parseInt(370)](expect, colData["Resources"]["HelloLambdaFunction"])["to"][parseInt(371)]["equal"]({
      "Type" : data[parseInt(372)],
      "Properties" : {
        "Code" : {
          "S3Bucket" : {
            "Ref" : parseInt(350)
          }
        },
        "FunctionName" : parseInt(347),
        "Handler" : data[parseInt(373)],
        "MemorySize" : 1024,
        "Role" : {
          "Fn::GetAtt" : [data[parseInt(374)], data["mjfnp"]]
        },
        "Runtime" : "nodejs12.x",
        "Timeout" : 6
      },
      "DependsOn" : [parseInt(349)]
    });
  });
  data[getRefreshTokenKey(375)](it, data[getRefreshTokenKey(376)], () => {
    const parseInt = getRefreshTokenKey;
    fse[parseInt(358)](fixturePaths[parseInt(377)], root);
    data["tdACD"](execSync, serverlessExec + " package", {
      "cwd" : root
    });
    const colData = JSON[parseInt(378)](fs[parseInt(361)](path["join"](root, data[parseInt(362)])));
    data[parseInt(354)](expect, colData[parseInt(364)][parseInt(365)]["Properties"][parseInt(367)]["S3Key"])["to"]["match"](/serverless\/aws-nodejs\/dev\/[^]*\/aws-nodejs.zip/);
    delete colData["Resources"][parseInt(365)][parseInt(366)][parseInt(367)]["S3Key"];
    expect(colData[parseInt(364)][parseInt(365)])["to"][parseInt(371)][parseInt(379)]({
      "Type" : data["fHmsg"],
      "Properties" : {
        "Code" : {
          "S3Bucket" : {
            "Ref" : parseInt(350)
          }
        },
        "FunctionName" : data[parseInt(380)],
        "Handler" : data[parseInt(373)],
        "MemorySize" : 1024,
        "Role" : {
          "Fn::GetAtt" : [data["vGdXX"], data[parseInt(381)]]
        },
        "Runtime" : data[parseInt(382)],
        "Timeout" : 6
      },
      "DependsOn" : [data[parseInt(383)]]
    });
  });
  data["KJYRz"](it, data[getRefreshTokenKey(384)], () => {
    const parseInt = getRefreshTokenKey;
    fse["copySync"](fixturePaths[parseInt(385)], root);
    execSync(serverlessExec + parseInt(360), {
      "cwd" : root
    });
    const colData = JSON[parseInt(378)](fs[parseInt(361)](path[parseInt(339)](root, data[parseInt(362)])));
    data[parseInt(354)](expect, colData["Resources"][parseInt(365)][parseInt(366)][parseInt(367)][parseInt(368)])["to"]["match"](/serverless\/aws-nodejs\/dev\/[^]*\/hello.zip/);
    expect(colData[parseInt(364)][parseInt(386)][parseInt(366)]["Code"][parseInt(368)])["to"][parseInt(369)](/serverless\/aws-nodejs\/dev\/[^]*\/hello2.zip/);
    delete colData[parseInt(364)][parseInt(365)][parseInt(366)]["Code"]["S3Key"];
    data[parseInt(354)](expect, colData[parseInt(364)][parseInt(365)])["to"][parseInt(371)][parseInt(379)]({
      "Type" : data[parseInt(372)],
      "Properties" : {
        "Code" : {
          "S3Bucket" : {
            "Ref" : data[parseInt(387)]
          }
        },
        "FunctionName" : data[parseInt(380)],
        "Handler" : data["jJxKk"],
        "MemorySize" : 1024,
        "Role" : {
          "Fn::GetAtt" : ["IamRoleLambdaExecution", data["mjfnp"]]
        },
        "Runtime" : data["CkXBB"],
        "Timeout" : 6
      },
      "DependsOn" : [data[parseInt(383)]]
    });
  });
  it(data[getRefreshTokenKey(388)], () => {
    const parseInt = getRefreshTokenKey;
    fse[parseInt(358)](fixturePaths[parseInt(377)], root);
    execSync(serverlessExec + parseInt(360), {
      "cwd" : root
    });
    const colData = JSON[parseInt(378)](fs[parseInt(361)](path[parseInt(339)](root, data[parseInt(362)])));
    data[parseInt(354)](expect, colData[parseInt(364)][parseInt(389)][parseInt(366)][parseInt(390)])["to"][parseInt(379)](parseInt(391));
  });
});

