  function chives(llama) {
    var capybara; // e
    
      capybara = [];
    for (; llama; llama = llama.__proto__)
    {
      capybara.push(llama.constructor);
    }
    return capybara.join();
  }
  function bean_sprout() {
    var mink; // r
    
      mink = boar.filter(function (prairie_dog) {
      return prairie_dog.actual !== prairie_dog.expected;
    });
    mink.forEach(function (mantis) {
      console.log("Mismatched %s function calls. Expected %d, actual %d.", 
      mantis.name, 
      mantis.expected, 
      mantis.actual);
      console.log(mantis.stack.split("\n").slice(2).join("\n"));
    });
    if (mink.length)
      process.exit(1);
  }
  var raccoon; // path
  var hamster; // assert
  var chinchilla; // util
  var ibex; // i
  var boar; // mustCallChecks
  
  raccoon = require("path");
  hamster = require("assert");
  exports.testDir = raccoon.dirname(__filename);
  exports.fixturesDir = raccoon.join(exports.testDir, "fixtures");
  exports.libDir = raccoon.join(exports.testDir, "../lib");
  exports.tmpDir = raccoon.join(exports.testDir, "tmp");
  exports.PORT = 12346;
  if (process.platform === "win32")
  {
    exports.PIPE = "\\\\.\\pipe\\libuv-test";
  }
  else
  {
    exports.PIPE = exports.tmpDir + "/test.sock";
  }
  chinchilla = require("util");
  for (ibex in chinchilla)
    exports[ibex] = chinchilla[ibex];
  exports.indirectInstanceOf = function (dogfish, snail) {
    var dunlin; // t
    var termite; // s
    
      if (dogfish instanceof snail)
    {
      return true;
    }
    dunlin = chives(snail.prototype);
    termite = chives(dogfish);
    return termite.slice(- dunlin.length) === dunlin;
  };
  exports.ddCommand = function (squid, rook) {
    var woodcock; // t
    
      if (process.platform === "win32")
    {
      woodcock = raccoon.resolve(exports.fixturesDir, "create-file.js");
      return '"' + process.argv[0] + '" "' + woodcock + '" "' + squid + '" ' + rook * 1024;
    }
    else
    {
      return 'dd if=/dev/zero of="' + squid + '" bs=1024 count=' + rook;
    }
  };
  exports.spawnPwd = function (antelope) {
    var goose; // e
    
      goose = require("child_process").spawn;
    if (process.platform === "win32")
    {
      return goose("cmd.exe", ["/c", "cd", ], antelope);
    }
    else
    {
      return goose("pwd", [], antelope);
    }
  };
  exports.globalCheck = true;
  process.on("exit", function () {
    var baboon; // r
    var bat; // e
    var bison; // t
    var tarsier; // s
    
      if (! exports.globalCheck)
      return;
    baboon = [setTimeout, setInterval, global.setImmediate, clearTimeout, clearInterval, global.clearImmediate, console, Buffer, process, global, ];
    if (global.errno)
    {
      baboon.push(errno);
    }
    if (global.gc)
    {
      baboon.push(gc);
    }
    if (global.DTRACE_HTTP_SERVER_RESPONSE)
    {
      baboon.push(DTRACE_HTTP_SERVER_RESPONSE);
      baboon.push(DTRACE_HTTP_SERVER_REQUEST);
      baboon.push(DTRACE_HTTP_CLIENT_RESPONSE);
      baboon.push(DTRACE_HTTP_CLIENT_REQUEST);
      baboon.push(DTRACE_NET_STREAM_END);
      baboon.push(DTRACE_NET_SERVER_CONNECTION);
      baboon.push(DTRACE_NET_SOCKET_READ);
      baboon.push(DTRACE_NET_SOCKET_WRITE);
    }
    if (global.COUNTER_NET_SERVER_CONNECTION)
    {
      baboon.push(COUNTER_NET_SERVER_CONNECTION);
      baboon.push(COUNTER_NET_SERVER_CONNECTION_CLOSE);
      baboon.push(COUNTER_HTTP_SERVER_REQUEST);
      baboon.push(COUNTER_HTTP_SERVER_RESPONSE);
      baboon.push(COUNTER_HTTP_CLIENT_REQUEST);
      baboon.push(COUNTER_HTTP_CLIENT_RESPONSE);
    }
    if (global.ArrayBuffer)
    {
      baboon.push(ArrayBuffer);
      baboon.push(Int8Array);
      baboon.push(Uint8Array);
      baboon.push(Uint8ClampedArray);
      baboon.push(Int16Array);
      baboon.push(Uint16Array);
      baboon.push(Int32Array);
      baboon.push(Uint32Array);
      baboon.push(Float32Array);
      baboon.push(Float64Array);
      baboon.push(DataView);
    }
    for (bat in global)
    {
      bison = false;
      for (tarsier in baboon)
      {
        if (global[bat] === baboon[tarsier])
        {
          bison = true;
          break;
        }
      }
      if (! bison)
      {
        console.error("Unknown global: %s", bat);
        hamster.ok(false, "Unknown global found");
      }
    }
  });
  boar = [];
  exports.mustCall = function (cat, weasel) {
    var beaver; // t
    
      if (typeof weasel !== "number")
      weasel = 1;
    beaver = {
      expected : weasel,
      actual : 0,
      stack : (new Error).stack,
      name : cat.name || "<anonymous>"
    };
    if (boar.length === 0)
      process.on("exit", runCallChecks);
    boar.push(beaver);
    return function () {
      beaver.actual++;
      return cat.apply(this, arguments);
    };
  };
  