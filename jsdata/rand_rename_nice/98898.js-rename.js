'use strict';
const expect = require("chai").expect;
const AwsCompileWebsocketsEvents = require("../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index");
const Serverless = require("../../../../../../../../../../lib/Serverless");
const AwsProvider = require("../../../../../../../../../../lib/plugins/aws/provider");
const runServerless = require("../../../../../../../../../utils/run-serverless");
describe("#validate()", () => {
  let serverless;
  let self;
  beforeEach(() => {
    const inspect = {
      stage : "dev",
      region : "us-east-1"
    };
    serverless = new Serverless;
    serverless.setProvider("aws", new AwsProvider(serverless, inspect));
    self = new AwsCompileWebsocketsEvents(serverless, inspect);
  });
  it("should support the simplified string syntax", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          websocket : "$connect"
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.deep.equal([{
      functionName : "first",
      route : "$connect"
    }]);
  });
  it("should support the extended object syntax", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          websocket : {
            route : "$connect"
          }
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.deep.equal([{
      functionName : "first",
      route : "$connect"
    }]);
  });
  it("should add authorizer config when authorizer is specified as a string", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          websocket : {
            route : "$connect",
            authorizer : "auth"
          }
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.deep.equal([{
      functionName : "first",
      route : "$connect",
      authorizer : {
        name : "auth",
        uri : {
          "Fn::Join" : ["", ["arn:", {
            Ref : "AWS::Partition"
          }, ":apigateway:", {
            Ref : "AWS::Region"
          }, ":lambda:path/2015-03-31/functions/", {
            "Fn::GetAtt" : ["AuthLambdaFunction", "Arn"]
          }, "/invocations"]]
        },
        identitySource : ["route.request.header.Auth"],
        permission : "AuthLambdaFunction"
      }
    }]);
  });
  it("should add authorizer config when authorizer is specified as a string with arn", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          websocket : {
            route : "$connect",
            authorizer : "arn:aws:auth"
          }
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.deep.equal([{
      functionName : "first",
      route : "$connect",
      authorizer : {
        name : "auth",
        uri : {
          "Fn::Join" : ["", ["arn:", {
            Ref : "AWS::Partition"
          }, ":apigateway:", {
            Ref : "AWS::Region"
          }, ":lambda:path/2015-03-31/functions/", "arn:aws:auth", "/invocations"]]
        },
        identitySource : ["route.request.header.Auth"],
        permission : "arn:aws:auth"
      }
    }]);
  });
  it("should add authorizer config when authorizer is specified as an object", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          websocket : {
            route : "$connect",
            authorizer : {
              name : "auth",
              identitySource : ["route.request.header.Auth", "route.request.querystring.Auth"]
            }
          }
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.deep.equal([{
      functionName : "first",
      route : "$connect",
      authorizer : {
        name : "auth",
        uri : {
          "Fn::Join" : ["", ["arn:", {
            Ref : "AWS::Partition"
          }, ":apigateway:", {
            Ref : "AWS::Region"
          }, ":lambda:path/2015-03-31/functions/", {
            "Fn::GetAtt" : ["AuthLambdaFunction", "Arn"]
          }, "/invocations"]]
        },
        identitySource : ["route.request.header.Auth", "route.request.querystring.Auth"],
        permission : "AuthLambdaFunction"
      }
    }]);
  });
  it("should add authorizer config when authorizer is specified as an object with arn", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          websocket : {
            route : "$connect",
            authorizer : {
              arn : "arn:aws:auth",
              identitySource : ["route.request.header.Auth", "route.request.querystring.Auth"]
            }
          }
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.deep.equal([{
      functionName : "first",
      route : "$connect",
      authorizer : {
        name : "auth",
        uri : {
          "Fn::Join" : ["", ["arn:", {
            Ref : "AWS::Partition"
          }, ":apigateway:", {
            Ref : "AWS::Region"
          }, ":lambda:path/2015-03-31/functions/", "arn:aws:auth", "/invocations"]]
        },
        identitySource : ["route.request.header.Auth", "route.request.querystring.Auth"],
        permission : "arn:aws:auth"
      }
    }]);
  });
  it("should add routeResponse when routeResponseSelectionExpression is configured", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          websocket : {
            route : "$connect",
            routeResponseSelectionExpression : "$default"
          }
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.deep.equal([{
      functionName : "first",
      route : "$connect",
      routeResponseSelectionExpression : "$default"
    }]);
  });
  it("should ignore non-websocket events", () => {
    self.serverless.service.functions = {
      first : {
        events : [{
          ignored : {}
        }]
      }
    };
    const e = self.validate();
    expect(e.events).to.be.an("Array").with.length(0);
  });
});
describe("#validate() using runServerless util", () => {
  it("should use provided authorizer name when name field is supplied", async() => {
    const e = "authName";
    const {
      cfTemplate : game,
      awsNaming : challenge
    } = await runServerless({
      fixture : "function",
      configExt : {
        functions : {
          first : {
            handler : "index.handler",
            events : [{
              websocket : {
                route : "$connect",
                authorizer : {
                  name : e,
                  arn : {
                    "Fn::Join" : [":", ["arn", "arnName"]]
                  }
                }
              }
            }]
          }
        }
      },
      command : "package"
    });
    const resources = game.Resources;
    const touchSystem = challenge;
    expect(resources[touchSystem.getWebsocketsAuthorizerLogicalId(e)]).to.exist;
    expect(resources[touchSystem.getWebsocketsAuthorizerLogicalId(e)].Properties.Name).to.deep.equal(e);
  });
});

