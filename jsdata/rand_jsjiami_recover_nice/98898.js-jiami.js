'use strict';
const expect = require("chai")["expect"];
const AwsCompileWebsocketsEvents = require("../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index");
const Serverless = require("../../../../../../../../../../lib/Serverless");
const AwsProvider = require("../../../../../../../../../../lib/plugins/aws/provider");
const runServerless = require("../../../../../../../../../utils/run-serverless");
describe("#validate()", () => {
  let serverless;
  let serverlessStepFunctions;
  beforeEach(() => {
    const options = {
      "region" : _0x36a2c7["WJDQt"]
    };
    serverless = new Serverless;
    serverless["setProvider"]("aws", new AwsProvider(serverless, options));
    serverlessStepFunctions = new AwsCompileWebsocketsEvents(serverless, options);
  });
  it(_0x36a2c7["knsaz"], () => {
    serverlessStepFunctions["serverless"]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : _0x36a2c7["MSQFk"]
        }]
      }
    };
    const trace = serverlessStepFunctions["validate"]();
    expect(trace["events"])["to"]["deep"]["equal"]([{
      "functionName" : _0x36a2c7["oiKRE"],
      "route" : _0x36a2c7["MSQFk"]
    }]);
  });
  it(_0x36a2c7["EcsJB"], () => {
    serverlessStepFunctions["serverless"]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : "$connect"
          }
        }]
      }
    };
    const trace = serverlessStepFunctions["validate"]();
    expect(trace["events"])["to"]["deep"]["equal"]([{
      "functionName" : _0x36a2c7["oiKRE"],
      "route" : _0x36a2c7["MSQFk"]
    }]);
  });
  it(_0x36a2c7["SymsN"], () => {
    serverlessStepFunctions["serverless"]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : _0x36a2c7["MSQFk"],
            "authorizer" : _0x36a2c7["NwYXX"]
          }
        }]
      }
    };
    const trace = serverlessStepFunctions["validate"]();
    expect(trace["events"])["to"]["deep"]["equal"]([{
      "functionName" : _0x36a2c7["oiKRE"],
      "route" : _0x36a2c7["MSQFk"],
      "authorizer" : {
        "name" : _0x36a2c7["NwYXX"],
        "uri" : {
          "Fn::Join" : ["", [_0x36a2c7["wjcEZ"], {
            "Ref" : "AWS::Partition"
          }, _0x36a2c7["bkZPg"], {
            "Ref" : _0x36a2c7["vxBlb"]
          }, _0x36a2c7["xeTSp"], {
            "Fn::GetAtt" : ["AuthLambdaFunction", "Arn"]
          }, _0x36a2c7["RmBme"]]]
        },
        "identitySource" : [_0x36a2c7["aoCPQ"]],
        "permission" : "AuthLambdaFunction"
      }
    }]);
  });
  it(_0x36a2c7["YwXIM"], () => {
    serverlessStepFunctions["serverless"]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : _0x36a2c7["MSQFk"],
            "authorizer" : _0x36a2c7["qQQnf"]
          }
        }]
      }
    };
    const trace = serverlessStepFunctions["validate"]();
    expect(trace["events"])["to"]["deep"]["equal"]([{
      "functionName" : _0x36a2c7["oiKRE"],
      "route" : _0x36a2c7["MSQFk"],
      "authorizer" : {
        "name" : "auth",
        "uri" : {
          "Fn::Join" : ["", ["arn:", {
            "Ref" : _0x36a2c7["eivYk"]
          }, _0x36a2c7["bkZPg"], {
            "Ref" : _0x36a2c7["vxBlb"]
          }, _0x36a2c7["xeTSp"], _0x36a2c7["qQQnf"], "/invocations"]]
        },
        "identitySource" : [_0x36a2c7["aoCPQ"]],
        "permission" : "arn:aws:auth"
      }
    }]);
  });
  it(_0x36a2c7["zPxrY"], () => {
    serverlessStepFunctions["serverless"]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : _0x36a2c7["MSQFk"],
            "authorizer" : {
              "name" : _0x36a2c7["NwYXX"],
              "identitySource" : [_0x36a2c7["aoCPQ"], _0x36a2c7["pbLqK"]]
            }
          }
        }]
      }
    };
    const trace = serverlessStepFunctions["validate"]();
    expect(trace["events"])["to"]["deep"]["equal"]([{
      "functionName" : _0x36a2c7["oiKRE"],
      "route" : _0x36a2c7["MSQFk"],
      "authorizer" : {
        "name" : _0x36a2c7["NwYXX"],
        "uri" : {
          "Fn::Join" : ["", ["arn:", {
            "Ref" : "AWS::Partition"
          }, _0x36a2c7["bkZPg"], {
            "Ref" : _0x36a2c7["vxBlb"]
          }, _0x36a2c7["xeTSp"], {
            "Fn::GetAtt" : [_0x36a2c7["dAPQp"], "Arn"]
          }, _0x36a2c7["RmBme"]]]
        },
        "identitySource" : [_0x36a2c7["aoCPQ"], _0x36a2c7["pbLqK"]],
        "permission" : "AuthLambdaFunction"
      }
    }]);
  });
  it(_0x36a2c7["dWPNy"], () => {
    serverlessStepFunctions["serverless"]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "websocket" : {
            "route" : _0x36a2c7["MSQFk"],
            "authorizer" : {
              "arn" : _0x36a2c7["qQQnf"],
              "identitySource" : [_0x36a2c7["aoCPQ"], _0x36a2c7["pbLqK"]]
            }
          }
        }]
      }
    };
    const trace = serverlessStepFunctions["validate"]();
    expect(trace["events"])["to"]["deep"]["equal"]([{
      "functionName" : _0x36a2c7["oiKRE"],
      "route" : _0x36a2c7["MSQFk"],
      "authorizer" : {
        "name" : _0x36a2c7["NwYXX"],
        "uri" : {
          "Fn::Join" : ["", [_0x36a2c7["wjcEZ"], {
            "Ref" : _0x36a2c7["eivYk"]
          }, _0x36a2c7["bkZPg"], {
            "Ref" : "AWS::Region"
          }, _0x36a2c7["xeTSp"], _0x36a2c7["qQQnf"], "/invocations"]]
        },
        "identitySource" : [_0x36a2c7["aoCPQ"], _0x36a2c7["pbLqK"]],
        "permission" : "arn:aws:auth"
      }
    }]);
  });
  it("should add routeResponse when routeResponseSelectionExpression is configured", () => {
    if ("JzVfr" !== "JzVfr") {
      serverlessStepFunctions["serverless"]["service"]["functions"] = {
        "first" : {
          "events" : [{
            "websocket" : _0x36a2c7["MSQFk"]
          }]
        }
      };
      const trace = serverlessStepFunctions["validate"]();
      expect(trace["events"])["to"]["deep"]["equal"]([{
        "functionName" : "first",
        "route" : _0x36a2c7["MSQFk"]
      }]);
    } else {
      serverlessStepFunctions["serverless"]["service"]["functions"] = {
        "first" : {
          "events" : [{
            "websocket" : {
              "route" : _0x36a2c7["MSQFk"],
              "routeResponseSelectionExpression" : _0x36a2c7["RkPpE"]
            }
          }]
        }
      };
      const trace = serverlessStepFunctions["validate"]();
      expect(trace["events"])["to"]["deep"]["equal"]([{
        "functionName" : "first",
        "route" : "$connect",
        "routeResponseSelectionExpression" : _0x36a2c7["RkPpE"]
      }]);
    }
  });
  it(_0x36a2c7["otNyO"], () => {
    serverlessStepFunctions["serverless"]["service"]["functions"] = {
      "first" : {
        "events" : [{
          "ignored" : {}
        }]
      }
    };
    const trace = serverlessStepFunctions["validate"]();
    expect(trace["events"])["to"]["be"]["an"]("Array")["with"]["length"](0);
  });
});
describe("#validate() using runServerless util", () => {
  it(_0x4bf221["wOZvP"], async() => {
    if (_0x4bf221["eMQDv"] === _0x4bf221["eMQDv"]) {
      const person = _0x4bf221["SxBYF"];
      const {
        cfTemplate : stack,
        awsNaming : message
      } = await runServerless({
        "fixture" : _0x4bf221["PbHrR"],
        "configExt" : {
          "functions" : {
            "first" : {
              "handler" : _0x4bf221["XyZYR"],
              "events" : [{
                "websocket" : {
                  "route" : _0x4bf221["hTVfN"],
                  "authorizer" : {
                    "name" : person,
                    "arn" : {
                      "Fn::Join" : [":", [_0x4bf221["NukWp"], _0x4bf221["TAiEx"]]]
                    }
                  }
                }
              }]
            }
          }
        },
        "command" : _0x4bf221["uffbM"]
      });
      const data = stack["Resources"];
      const bonusTraitModifiers = message;
      expect(data[bonusTraitModifiers["getWebsocketsAuthorizerLogicalId"](person)])["to"]["exist"];
      expect(data[bonusTraitModifiers["getWebsocketsAuthorizerLogicalId"](person)]["Properties"]["Name"])["to"]["deep"]["equal"](person);
    } else {
      awsCompileWebsocketsEvents["serverless"]["service"]["functions"] = {
        "first" : {
          "events" : [{
            "ignored" : {}
          }]
        }
      };
      const trace = awsCompileWebsocketsEvents["validate"]();
      expect(trace["events"])["to"]["be"]["an"](_0x4bf221["tSaDD"])["with"]["length"](0);
    }
  });
});

