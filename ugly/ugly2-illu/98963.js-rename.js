"use strict";

var { expect } = require("chai");

const path = require("path");

const fs = require("fs");

const os = require("os");

const overrideEnv = require("process-utils/override-env");

const overrideCwd = require("process-utils/override-cwd");

const proxyquire = require("proxyquire");

const resolveLocalServerless = require("../../../../../lib/cli/resolve-local-serverless-path");

const commandsSchema = require("../../../../../lib/cli/commands-schema");

const runServerless = require("../../../../utils/run-serverless");

const fixtures = require("../../../../fixtures/programmatic");

const versions = { serverless: require("../../../../../package").version, "@serverless/dashboard-plugin": require("@serverless/dashboard-plugin/package").version };
const generatePayload = proxyquire("../../../../../lib/utils/telemetry/generatePayload", { "@serverless/utils/get-notifications-mode": () => "on" });
describe("test/unit/lib/utils/telemetry/generatePayload.test.js", () => {
  var e;
  before(() => {
    EvalError.$serverlessCommandStartTime = process.hrtime();e = process.stdin.isTTY;process.stdin.isTTY = true;
  });after(() => {
    process.stdin.isTTY = e;
  });beforeEach(() => {
    resolveLocalServerless.clear();
  });it("Should resolve payload for AWS service", async () => {
    var { servicePath: e } = await fixtures.setup("httpApi", { configExt: { provider: { runtime: "nodejs14.x" }, functions: { withContainer: { image: "000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38" } }, resources: { Resources: { ExtraLogGroup: { Type: "AWS::Logs::LogGroup", Properties: { LogGroupName: "/aws/lambda/extra-log" } }, AnotherExtraLogGroup: { Type: "AWS::Logs::LogGroup", Properties: { LogGroupName: "/aws/lambda/extra-log-2" } }, ExtraBucket: { Type: "AWS::S3::Bucket" }, ExtraCustom: { Type: "Custom::Matthieu" } }, extensions: { FunctionLambdaFunction: { Properties: { Runtime: "nodejs14.x" } } } } } });
    await fs.promises.writeFile(path.resolve(e, "package.json"), JSON.stringify({ dependencies: { fooDep: "1", barDep: "2" }, optionalDependencies: { fooOpt: "1", fooDep: "1" }, devDependencies: { someDev: "1", otherDev: "1" } }));var { serverless: o } = await runServerless({ cwd: e, command: "print" });
    const t = generatePayload({ command: "print", options: {}, commandSchema: commandsSchema.get("print"), serviceDir: e, configuration: o.configurationInput });
    expect(t).to.have.property("frameworkLocalUserId");delete t.frameworkLocalUserId;expect(t).to.have.property("firstLocalInstallationTimestamp");delete t.firstLocalInstallationTimestamp;expect(t).to.have.property("timestamp");delete t.timestamp;expect(t).to.have.property("dashboard");delete t.dashboard;expect(t).to.have.property("timezone");delete t.timezone;expect(t).to.have.property("ciName");delete t.ciName;expect(t).to.have.property("commandDurationMs");delete t.commandDurationMs;expect(t).to.deep.equal({ cliName: "serverless", isTtyTerminal: true, command: "print", commandOptionNames: [], isConfigValid: true, config: { configValidationMode: "error", provider: { name: "aws", runtime: "nodejs14.x", stage: "dev", region: "us-east-1" }, plugins: [], functions: [{ runtime: "nodejs14.x", events: [{ type: "httpApi" }, { type: "httpApi" }] }, { runtime: "nodejs14.x", events: [{ type: "httpApi" }] }, { runtime: "nodejs14.x", events: [] }, { runtime: "nodejs14.x", events: [] }, { runtime: "$containerimage", events: [] }], resources: { general: ["AWS::Logs::LogGroup", "AWS::S3::Bucket", "Custom"] }, variableSources: [] }, isAutoUpdateEnabled: false, isTabAutocompletionInstalled: false, notificationsMode: "on", npmDependencies: ["fooDep", "barDep", "fooOpt", "someDev", "otherDev"], triggeredDeprecations: [], installationType: "global:other", hasLocalCredentials: false, versions: versions });
  });it("Should resolve payload for custom provider service", async () => {
    var { serverless: e } = await runServerless({ fixture: "customProvider", command: "print" });
    const o = generatePayload({ command: "print", options: {}, commandSchema: commandsSchema.get("print"), serviceDir: e.serviceDir, configuration: e.configurationInput, serverless: e });
    expect(o).to.have.property("frameworkLocalUserId");delete o.frameworkLocalUserId;expect(o).to.have.property("firstLocalInstallationTimestamp");delete o.firstLocalInstallationTimestamp;expect(o).to.have.property("timestamp");delete o.timestamp;expect(o).to.have.property("dashboard");delete o.dashboard;expect(o).to.have.property("timezone");delete o.timezone;expect(o).to.have.property("ciName");delete o.ciName;expect(o).to.have.property("commandDurationMs");delete o.commandDurationMs;expect(o).to.deep.equal({ cliName: "serverless", isTtyTerminal: true, command: "print", commandOptionNames: [], isConfigValid: false, config: { configValidationMode: "warn", provider: { name: "customProvider", runtime: "foo", stage: "dev", region: undefined }, plugins: ["./customProvider"], functions: [{ runtime: "foo", events: [{ type: "someEvent" }] }, { runtime: "bar", events: [] }], resources: undefined, variableSources: [] }, isAutoUpdateEnabled: false, isTabAutocompletionInstalled: false, notificationsMode: "on", npmDependencies: [], triggeredDeprecations: [], hasLocalCredentials: false, installationType: "global:other", versions: versions });
  });it("Should recognize local fallback", async () => {
    var { serverless: e, fixtureData: { servicePath: o } } = await runServerless({ fixture: "locallyInstalledServerless", command: "print", modulesCacheStub: {} });
    const t = overrideCwd(o, () => generatePayload({ command: "print", options: {}, commandSchema: commandsSchema.get("print"), serviceDir: e.serviceDir, configuration: e.configurationInput, serverless: e }));
    expect(t).to.have.property("frameworkLocalUserId");delete t.frameworkLocalUserId;expect(t).to.have.property("firstLocalInstallationTimestamp");delete t.firstLocalInstallationTimestamp;expect(t).to.have.property("timestamp");delete t.timestamp;expect(t).to.have.property("dashboard");delete t.dashboard;expect(t).to.have.property("timezone");delete t.timezone;expect(t).to.have.property("ciName");delete t.ciName;expect(t).to.have.property("commandDurationMs");delete t.commandDurationMs;expect(t).to.deep.equal({ cliName: "serverless", isTtyTerminal: true, command: "print", commandOptionNames: [], isConfigValid: null, config: { configValidationMode: "error", provider: { name: "aws", runtime: "nodejs12.x", stage: "dev", region: "us-east-1" }, plugins: [], functions: [], resources: { general: [] }, variableSources: [] }, isAutoUpdateEnabled: false, isTabAutocompletionInstalled: false, notificationsMode: "on", npmDependencies: [], triggeredDeprecations: [], installationType: "local:fallback", hasLocalCredentials: false, versions: { serverless: "2.0.0-local", "@serverless/dashboard-plugin": "4.0.0-local", "@serverless/enterprise-plugin": undefined } });
  });it("Should resolve service-agnostic payload", async () => {
    const e = generatePayload({ command: "config", options: {}, commandSchema: commandsSchema.get("config"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    expect(e).to.have.property("frameworkLocalUserId");delete e.frameworkLocalUserId;expect(e).to.have.property("firstLocalInstallationTimestamp");delete e.firstLocalInstallationTimestamp;expect(e).to.have.property("timestamp");delete e.timestamp;expect(e).to.have.property("dashboard");delete e.dashboard;expect(e).to.have.property("timezone");delete e.timezone;expect(e).to.have.property("ciName");delete e.ciName;expect(e).to.have.property("commandDurationMs");delete e.commandDurationMs;expect(e).to.deep.equal({ cliName: "serverless", isTtyTerminal: true, command: "config", commandOptionNames: [], isAutoUpdateEnabled: false, isTabAutocompletionInstalled: false, notificationsMode: "on", triggeredDeprecations: [], installationType: "global:other", versions: versions });
  });it("Should resolve service-agnostic payload for command with `serviceDependencyMode: \"optional\"`", () => {
    const e = generatePayload({ command: "", options: {}, commandSchema: commandsSchema.get(""), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    expect(e).to.have.property("frameworkLocalUserId");delete e.frameworkLocalUserId;expect(e).to.have.property("firstLocalInstallationTimestamp");delete e.firstLocalInstallationTimestamp;expect(e).to.have.property("timestamp");delete e.timestamp;expect(e).to.have.property("dashboard");delete e.dashboard;expect(e).to.have.property("timezone");delete e.timezone;expect(e).to.have.property("ciName");delete e.ciName;expect(e).to.have.property("commandDurationMs");delete e.commandDurationMs;expect(e).to.deep.equal({ command: "", commandOptionNames: [], cliName: "serverless", isTtyTerminal: true, isConfigValid: null, config: { configValidationMode: "warn", variableSources: [], provider: { name: "aws", runtime: "nodejs12.x", stage: "dev", region: "us-east-1" }, plugins: [], functions: [], resources: { general: [] } }, isAutoUpdateEnabled: false, isTabAutocompletionInstalled: false, triggeredDeprecations: [], installationType: "global:other", notificationsMode: "on", npmDependencies: [], hasLocalCredentials: false, versions: versions });
  });it("Should correctly resolve payload with missing service configuration", () => {
    const e = generatePayload({ command: "plugin list", options: {}, commandSchema: commandsSchema.get("plugin list") });
    expect(e).to.have.property("frameworkLocalUserId");delete e.frameworkLocalUserId;expect(e).to.have.property("firstLocalInstallationTimestamp");delete e.firstLocalInstallationTimestamp;expect(e).to.have.property("timestamp");delete e.timestamp;expect(e).to.have.property("dashboard");delete e.dashboard;expect(e).to.have.property("timezone");delete e.timezone;expect(e).to.have.property("ciName");delete e.ciName;expect(e).to.have.property("commandDurationMs");delete e.commandDurationMs;expect(e).to.deep.equal({ cliName: "serverless", isTtyTerminal: true, command: "plugin list", commandOptionNames: [], isAutoUpdateEnabled: false, isTabAutocompletionInstalled: false, notificationsMode: "on", triggeredDeprecations: [], installationType: "global:other", versions: versions });
  });it("Should resolve payload with predefined local config", async () => {
    await fs.promises.writeFile(path.resolve(os.homedir(), ".serverlessrc"), JSON.stringify({ frameworkId: "123", userId: "some-user-id", meta: { created_at: 1616151998 } }));const e = generatePayload({ command: "config", options: {}, commandSchema: commandsSchema.get("config"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    expect(e.dashboard.userId).to.equal("some-user-id");expect(e.frameworkLocalUserId).to.equal("123");expect(e.firstLocalInstallationTimestamp).to.equal(1616151998);
  });it("Should not include userId from local config if SERVERLESS_ACCESS_KEY used", async () => {
    await fs.promises.writeFile(path.resolve(os.homedir(), ".serverlessrc"), JSON.stringify({ frameworkId: "123", userId: "some-user-id" }));var e;
    overrideEnv({ variables: { SERVERLESS_ACCESS_KEY: "some-key" } }, () => {
      e = generatePayload({ command: "config", options: {}, commandSchema: commandsSchema.get("config"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    });expect(e.dashboard.userId).to.be.null;expect(e.frameworkLocalUserId).to.equal("123");
  });it("Should correctly detect Serverless CI/CD", () => {
    var e;
    overrideEnv({ variables: { SERVERLESS_CI_CD: "true" } }, () => {
      e = generatePayload({ command: "config", options: {}, commandSchema: commandsSchema.get("config"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    });expect(e.ciName).to.equal("Serverless CI/CD");
  });it("Should correctly detect Seed CI/CD", () => {
    var e;
    overrideEnv({ variables: { SEED_APP_NAME: "some-app" } }, () => {
      e = generatePayload({ command: "config", options: {}, commandSchema: commandsSchema.get("config"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    });expect(e.ciName).to.equal("Seed");
  });it("Should correctly resolve `commandOptionNames` property", () => {
    const e = generatePayload({ command: "print", options: { region: "eu-west-1", format: "json", path: "provider.name" }, commandSchema: commandsSchema.get("print"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    expect(new Set(e.commandOptionNames)).to.deep.equal(new Set(["region", "format", "path"]));
  });it("Should correctly resolve `constructs` property", () => {
    const e = generatePayload({ command: "print", commandSchema: commandsSchema.get("print"), options: {}, serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws", constructs: { jobs: { type: "queue", worker: { handler: "some.handler" } }, another: { type: "queue", worker: { handler: "other.handler" } } }, plugins: ["serverless-lift"] } });
    expect(e.config.constructs).to.deep.equal([{ type: "queue" }, { type: "queue" }]);
  });it("Should correctly resolve `configValidationMode` property", () => {
    const e = generatePayload({ command: "print", commandSchema: commandsSchema.get("print"), options: {}, serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws", configValidationMode: "off" } });
    expect(e.config.configValidationMode).to.equal("off");
  });it("Should correctly resolve `hasLocalCredentials` property for AWS provider", () => {
    var e;
    overrideEnv({ variables: { AWS_ACCESS_KEY_ID: "someaccesskey", AWS_SECRET_ACCESS_KEY: "secretkey" } }, () => {
      e = generatePayload({ command: "print", options: {}, commandSchema: commandsSchema.get("print"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" } });
    });expect(e.hasLocalCredentials).to.equal(true);
  });it("Should correctly resolve `hasLocalCredentials` property for non-AWS provider", () => {
    var e;
    overrideEnv({ variables: { AWS_ACCESS_KEY_ID: "someaccesskey", AWS_SECRET_ACCESS_KEY: "secretkey" } }, () => {
      e = generatePayload({ command: "print", options: {}, commandSchema: commandsSchema.get("print"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "other" } });
    });expect(e.hasLocalCredentials).to.equal(false);
  });it("Should correctly resolve `commandUsage` property", () => {
    const e = generatePayload({ command: "print", options: {}, commandSchema: commandsSchema.get("print"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" }, commandUsage: [{ name: "firstStep", history: [{ key: "firstQuestion", value: "answer", timestamp: 16262208e5 }, { key: "otherQuestion", value: "otherAnswer", timestamp: 16262208e5 }] }] });
    expect(e.commandUsage).to.deep.equal([{ name: "firstStep", history: [{ key: "firstQuestion", value: "answer", timestamp: 16262208e5 }, { key: "otherQuestion", value: "otherAnswer", timestamp: 16262208e5 }] }]);
  });it("Should correctly resolve `variableSources` property", () => {
    const e = generatePayload({ command: "print", options: {}, commandSchema: commandsSchema.get("print"), serviceDir: process.cwd(), configuration: { service: "foo", provider: "aws" }, commandUsage: [], variableSources: new Set(["ssm", "opt"]) });
    expect(e.config.variableSources).to.deep.equal(["ssm", "opt"]);
  });
});
