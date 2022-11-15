require("../../spec_helper");
const _ = require("lodash");

const cp = require("child_process");

const os = require("os");

const tty = require("tty");

const path = require("path");

const EE = require("events");

const mockedEnv = require("mocked-env");

const debug = require("debug")("test");

const state = require(`${lib}/tasks/state`);

const xvfb = require(`${lib}/exec/xvfb`);

const spawn = require(`${lib}/exec/spawn`);

const verify = require(`${lib}/tasks/verify`);

const util = require(`${lib}/util.js`);

const expect = require("chai").expect;

const snapshot = require("../../support/snapshot");

const cwd = process.cwd();
const defaultBinaryDir = "/default/binary/dir";
describe("lib/exec/spawn", function () {
        beforeEach(function () {
                os.platform.returns("darwin");sinon.stub(process, "exit");this.spawnedProcess = { on: sinon.stub().returns(undefined), unref: sinon.stub().returns(undefined), stdin: { on: sinon.stub().returns(undefined), pipe: sinon.stub().returns(undefined) }, stdout: { on: sinon.stub().returns(undefined), pipe: sinon.stub().returns(undefined) }, stderr: { pipe: sinon.stub().returns(undefined), on: sinon.stub().returns(undefined) } };this.processStdin = new EE();this.processStdin.pipe = sinon.stub().returns(undefined);sinon.stub(process, "stdin").value(this.processStdin);sinon.stub(cp, "spawn").returns(this.spawnedProcess);sinon.stub(xvfb, "start").resolves();sinon.stub(xvfb, "stop").resolves();sinon.stub(xvfb, "isNeeded").returns(false);sinon.stub(state, "getBinaryDir").returns(defaultBinaryDir);sinon.stub(state, "getPathToExecutable").withArgs(defaultBinaryDir).returns("/path/to/cypress");
        });context(".isGarbageLineWarning", () => {
                it("returns true", () => {
                        const e = `
        [46454:0702/140217.292422:ERROR:gles2_cmd_decoder.cc(4439)] [.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL ERROR :GL_INVALID_FRAMEBUFFER_OPERATION : glDrawElements: framebuffer incomplete
        [46454:0702/140217.292466:ERROR:gles2_cmd_decoder.cc(17788)] [.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL ERROR :GL_INVALID_OPERATION : glCreateAndConsumeTextureCHROMIUM: invalid mailbox name
        [46454:0702/140217.292526:ERROR:gles2_cmd_decoder.cc(4439)] [.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL ERROR :GL_INVALID_FRAMEBUFFER_OPERATION : glClear: framebuffer incomplete
        [46454:0702/140217.292555:ERROR:gles2_cmd_decoder.cc(4439)] [.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL ERROR :GL_INVALID_FRAMEBUFFER_OPERATION : glDrawElements: framebuffer incomplete
        [46454:0702/140217.292584:ERROR:gles2_cmd_decoder.cc(4439)] [.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL ERROR :GL_INVALID_FRAMEBUFFER_OPERATION : glClear: framebuffer incomplete
        [46454:0702/140217.292612:ERROR:gles2_cmd_decoder.cc(4439)] [.RenderWorker-0x7f8bc5815a00.GpuRasterization]GL ERROR :GL_INVALID_FRAMEBUFFER_OPERATION : glDrawElements: framebuffer incomplete'
      `;

                        const s = _.chain(e).split("\n").invokeMap("trim").compact().value();

                        _.each(s, e => {
                                expect(spawn.isGarbageLineWarning(e), `expected line to be garbage: ${e}`).to.be.true;
                        });
                });
        });context(".start", function () {
                it("passes args + options to spawn", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(verify, "needsSandbox").returns(false);return spawn.start("--foo", { foo: "bar" }).then(() => {
                                expect(cp.spawn).to.be.calledWithMatch("/path/to/cypress", ["--", "--foo", "--cwd", process.cwd()], { detached: false, stdio: ["inherit", "inherit", "pipe"] });
                        });
                });it("uses --no-sandbox when needed", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(verify, "needsSandbox").returns(true);return spawn.start("--foo", { foo: "bar" }).then(() => {
                                const e = cp.spawn.firstCall.args.slice(0, 2);
                                const s = ["--no-sandbox", "--", "--foo", "--cwd", process.cwd()];
                                expect(e).to.deep.equal(["/path/to/cypress", ["--no-sandbox", "--", "--foo", "--cwd", process.cwd()]]);
                        });
                });it("uses npm command when running in dev mode", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(verify, "needsSandbox").returns(false);const e = path.resolve("..", "scripts", "start.js");
                        return spawn.start("--foo", { dev: true, foo: "bar" }).then(() => {
                                expect(cp.spawn).to.be.calledWithMatch("node", [path.resolve("..", "scripts", "start.js"), "--", "--foo", "--cwd", process.cwd()], { detached: false, stdio: ["inherit", "inherit", "pipe"] });
                        });
                });it("does not pass --no-sandbox when running in dev mode", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(verify, "needsSandbox").returns(true);const e = path.resolve("..", "scripts", "start.js");
                        return spawn.start("--foo", { dev: true, foo: "bar" }).then(() => {
                                expect(cp.spawn).to.be.calledWithMatch("node", [path.resolve("..", "scripts", "start.js"), "--", "--foo", "--cwd", process.cwd()], { detached: false, stdio: ["inherit", "inherit", "pipe"] });
                        });
                });it("starts xvfb when needed", function () {
                        xvfb.isNeeded.returns(true);this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start("--foo").then(() => {
                                expect(xvfb.start).to.be.calledOnce;
                        });
                });context("closes", function () {
                        ["close", "exit"].forEach(e => {
                                it(`if '${e}' event fired`, function () {
                                        this.spawnedProcess.on.withArgs(e).yieldsAsync(0);return spawn.start("--foo");
                                });
                        });it("if exit event fired and close event fired", function () {
                                this.spawnedProcess.on.withArgs("exit").yieldsAsync(0);this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start("--foo");
                        });
                });context("detects kill signal", function () {
                        it("exits with error on SIGKILL", function () {
                                this.spawnedProcess.on.withArgs("exit").yieldsAsync(null, "SIGKILL");return spawn.start("--foo").then(() => {
                                        throw new Error("should have hit error handler but did not");
                                }, e => {
                                        debug("error message", e.message);snapshot(e.message);
                                });
                        });
                });it("does not start xvfb when its not needed", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start("--foo").then(() => {
                                expect(xvfb.start).not.to.be.called;
                        });
                });it("stops xvfb when spawn closes", function () {
                        xvfb.isNeeded.returns(true);this.spawnedProcess.on.withArgs("close").yieldsAsync(0);this.spawnedProcess.on.withArgs("close").yields();return spawn.start("--foo").then(() => {
                                expect(xvfb.stop).to.be.calledOnce;
                        });
                });it("resolves with spawned close code in the message", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(10);return spawn.start("--foo").then(e => {
                                expect(e).to.equal(10);
                        });
                });describe("Linux display", () => {
                        var e;
                        beforeEach(() => {
                                e = mockedEnv({ DISPLAY: "test-display" });
                        });afterEach(() => {
                                e();
                        });it("retries with xvfb if fails with display exit code", function () {
                                this.spawnedProcess.on.withArgs("close").onFirstCall().yieldsAsync(1);this.spawnedProcess.on.withArgs("close").onSecondCall().yieldsAsync(0);const e = "[some noise here] Gtk: cannot open display: 987";
                                this.spawnedProcess.stderr.on.withArgs("data").yields(e);os.platform.returns("linux");return spawn.start("--foo").then(e => {
                                        expect(xvfb.start).to.have.been.calledOnce;expect(xvfb.stop).to.have.been.calledOnce;expect(cp.spawn).to.have.been.calledTwice;expect(e).to.equal(0);
                                });
                        });
                });it("rejects with error from spawn", function () {
                        const s = "the error message";
                        this.spawnedProcess.on.withArgs("error").yieldsAsync(new Error(s));return spawn.start("--foo").then(() => {
                                throw new Error("should have hit error handler but did not");
                        }, e => {
                                debug("error message", e.message);expect(e.message).to.include(s);
                        });
                });it("unrefs if options.detached is true", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start(null, { detached: true }).then(() => {
                                expect(this.spawnedProcess.unref).to.be.calledOnce;
                        });
                });it("does not unref by default", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start().then(() => {
                                expect(this.spawnedProcess.unref).not.to.be.called;
                        });
                });it("sets process.env to options.env", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);process.env.FOO = "bar";return spawn.start().then(() => {
                                expect(cp.spawn.firstCall.args[2].env.FOO).to.eq("bar");
                        });
                });it("forces colors and streams when supported", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(util, "supportsColor").returns(true);sinon.stub(tty, "isatty").returns(true);return spawn.start([], { env: {} }).then(() => {
                                snapshot(cp.spawn.firstCall.args[2].env);
                        });
                });it("sets windowsHide:false property in windows", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);os.platform.returns("win32");return spawn.start([], { env: {} }).then(() => {
                                expect(cp.spawn.firstCall.args[2].windowsHide).to.be.false;
                        });
                });it("does not set windowsHide property when in darwin", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start([], { env: {} }).then(() => {
                                expect(cp.spawn.firstCall.args[2].windowsHide).to.be.undefined;
                        });
                });it("does not force colors and streams when not supported", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(util, "supportsColor").returns(false);sinon.stub(tty, "isatty").returns(false);return spawn.start([], { env: {} }).then(() => {
                                snapshot(cp.spawn.firstCall.args[2].env);
                        });
                });it("pipes when on win32", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);os.platform.returns("win32");xvfb.isNeeded.returns(false);return spawn.start().then(() => {
                                expect(cp.spawn.firstCall.args[2].stdio).to.deep.eq("pipe");expect(this.processStdin.pipe, "process.stdin").to.have.been.calledOnce.and.to.have.been.calledWith(this.spawnedProcess.stdin);
                        });
                });it("inherits when on linux and xvfb isnt needed", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);os.platform.returns("linux");xvfb.isNeeded.returns(false);return spawn.start().then(() => {
                                expect(cp.spawn.firstCall.args[2].stdio).to.deep.eq("inherit");
                        });
                });it("uses [inherit, inherit, pipe] when linux and xvfb is needed", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);xvfb.isNeeded.returns(true);os.platform.returns("linux");return spawn.start().then(() => {
                                expect(cp.spawn.firstCall.args[2].stdio).to.deep.eq(["inherit", "inherit", "pipe"]);
                        });
                });it("uses [inherit, inherit, pipe] on darwin", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);xvfb.isNeeded.returns(false);os.platform.returns("darwin");return spawn.start().then(() => {
                                expect(cp.spawn.firstCall.args[2].stdio).to.deep.eq(["inherit", "inherit", "pipe"]);
                        });
                });it("writes everything on win32", function () {
                        const e = Buffer.from("asdf");
                        this.spawnedProcess.stdin.pipe.withArgs(process.stdin);this.spawnedProcess.stdout.pipe.withArgs(process.stdout);this.spawnedProcess.stderr.on.withArgs("data").yields(e);this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(process.stderr, "write").withArgs(e);os.platform.returns("win32");return spawn.start();
                });it("does not write to process.stderr when from xlib or libudev", function () {
                        const e = Buffer.from("Xlib: something foo");
                        const s = Buffer.from("libudev something bar");
                        const t = Buffer.from("asdf");
                        this.spawnedProcess.stderr.on.withArgs("data").onFirstCall().yields(e).onSecondCall().yields(s).onThirdCall().yields(t);this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(process.stderr, "write").withArgs(t);os.platform.returns("linux");xvfb.isNeeded.returns(true);return spawn.start().then(() => {
                                expect(process.stderr.write).not.to.be.calledWith(e);expect(process.stderr.write).not.to.be.calledWith(s);
                        });
                });it("does not write to process.stderr when from high sierra warnings", function () {
                        const e = Buffer.from("2018-05-19 15:30:30.287 Cypress[7850:32145] *** WARNING: Textured Window");
                        const s = Buffer.from("asdf");
                        this.spawnedProcess.stderr.on.withArgs("data").onFirstCall().yields(e).onSecondCall(s).yields(s);this.spawnedProcess.on.withArgs("close").yieldsAsync(0);sinon.stub(process.stderr, "write").withArgs(s);os.platform.returns("darwin");return spawn.start().then(() => {
                                expect(process.stderr.write).not.to.be.calledWith(e);
                        });
                });["EPIPE", "ENOTCONN"].forEach(t => {
                        it(`catches process.stdin errors and returns when code=${t}`, function () {
                                this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start().then(() => {
                                        var s = false;

                                        const e = () => {
                                                s = true;const e = new Error();
                                                e.code = t;return process.stdin.emit("error", e);
                                        };

                                        expect(e).not.to.throw();expect(s).to.be.true;
                                });
                        });
                });it("throws process.stdin errors code!=EPIPE", function () {
                        this.spawnedProcess.on.withArgs("close").yieldsAsync(0);return spawn.start().then(() => {
                                const e = () => {
                                        const e = new Error("wattttt");
                                        e.code = "FAILWHALE";return process.stdin.emit("error", e);
                                };

                                expect(e).to.throw(/wattttt/);
                        });
                });
        });
});
