'use strict';
require("../common");
const assert = require(_0x55b203(476));
const http = require("http");
function _0x1398(isBgroundImg, stgs) {
  return _0x1398 = function(isBgroundImg, stgs) {
    isBgroundImg = isBgroundImg - (-11 * -9 + -9493 + 9860);
    let _0x58f3e0 = _0x5d4e[isBgroundImg];
    return _0x58f3e0;
  }, _0x1398(isBgroundImg, stgs);
}
let serverSocket = null;
const server = http[_0x55b203(477)](function(options, chart) {
  const cleanChartName = _0x55b203;
  if (serverSocket) {
    assert[cleanChartName(478)](options["socket"], serverSocket);
  } else {
    serverSocket = options[cleanChartName(479)];
  }
  chart[cleanChartName(480)](options[cleanChartName(481)]);
});
server[_0x55b203(482)](-8033 * 1 + -3448 * 2 + 14929, function() {
  const now = _0x55b203;
  const rpm_traffic = {
    "abKqW" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    }
  };
  rpm_traffic[now(483)](makeRequest, expectRequests);
});
const agent = http[_0x55b203(484)]({
  "keepAlive" : !![]
});
let clientSocket = null;
const expectRequests = -5416 * 1 + -1 * 7841 + 1 * 13267;
let actualRequests = 5589 + 2413 + -8002 * 1;
function makeRequest(key) {
  const mockChannelHistoryTextMessage = _0x55b203;
  const info = {
    "RASat" : function(require, load, callback) {
      return require(load, callback);
    },
    "eStDn" : function(saveNotifs, notifications) {
      return saveNotifs(notifications);
    },
    "aiwMF" : function(connectNumber, concurency) {
      return connectNumber - concurency;
    },
    "uHheD" : "utf8",
    "XrDrO" : mockChannelHistoryTextMessage(485),
    "cWYJT" : mockChannelHistoryTextMessage(480),
    "GRUbn" : function(name, initialValue) {
      return name === initialValue;
    },
    "HXfBh" : mockChannelHistoryTextMessage(479),
    "HLpwg" : mockChannelHistoryTextMessage(486)
  };
  if (info[mockChannelHistoryTextMessage(487)](key, -2663 + 289 * 1 + 2374)) {
    server[mockChannelHistoryTextMessage(488)]();
    agent["destroy"]();
    return;
  }
  const p = http["request"]({
    "port" : server[mockChannelHistoryTextMessage(489)]()[mockChannelHistoryTextMessage(490)],
    "agent" : agent,
    "path" : "/" + key
  });
  p["end"]();
  p["on"](info[mockChannelHistoryTextMessage(491)], function(cltSocket) {
    const processRequests = mockChannelHistoryTextMessage;
    if (clientSocket) {
      assert[processRequests(478)](cltSocket, clientSocket);
    } else {
      clientSocket = cltSocket;
    }
  });
  p["on"](info[mockChannelHistoryTextMessage(492)], function(p) {
    const parseInt = mockChannelHistoryTextMessage;
    const markupGenerators = {
      "vDpmf" : function(rootNode, result) {
        const getAllocIID = _0x1398;
        return info[getAllocIID(493)](rootNode, result);
      },
      "hIhRm" : function(rootNode, result) {
        const getAllocIID = _0x1398;
        return info[getAllocIID(494)](rootNode, result);
      }
    };
    let expected = "";
    p[parseInt(495)](info["uHheD"]);
    p["on"](info[parseInt(496)], function(stdout) {
      expected = expected + stdout;
    });
    p["on"](info[parseInt(497)], function() {
      const getAllocIID = parseInt;
      assert[getAllocIID(478)](expected, "/" + key);
      info[getAllocIID(498)](setTimeout, function() {
        const now = getAllocIID;
        actualRequests++;
        markupGenerators["vDpmf"](makeRequest, markupGenerators[now(499)](key, -3179 + 111 + 3069 * 1));
      }, -6 * 896 + 7778 + 2401 * -1);
    });
  });
}
process["on"](_0x55b203(500), function() {
  const getConsoleMethod = _0x55b203;
  assert[getConsoleMethod(478)](actualRequests, expectRequests);
  console[getConsoleMethod(501)]("ok");
});

