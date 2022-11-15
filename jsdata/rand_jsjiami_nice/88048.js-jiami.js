'use strict';
var optsParser = "vip.v6";
var match = [optsParser, "EcKLMQY7OVLCi8O9NcKrw4E2EMKiH10Ra0HCkWjDgGHClMOmw4RALTBZwq4rDMOIw6NEw5LClcKgw6Ysw4rDuw==", "ER/DksON", "wosDTcKrChstKxpHwrzDmcO8wpTChX3DkBfCvMOUwoXDoA0AwqwWw6HDqMK3IhPCtFrDjsOEZQ7CvMOSw74lw4vCtX42NFoOw4jCpsKoIkrDryVMwqfDgWEpd0jCmMKNb8O/esO4wq8G", "wocYXMKrTxc6IhtZw7nDnsOmwpM=", "w45Cw5bDvH1Tw5PDo3vDhRAWw73Ck8OJKX/DocO/RsOQd8K7a8OMM8O3PyDChCLDjMKBw7PCizzDjSjDghtQwooAwo4iRx9Nwpt4wojCuMOCMl7DhcKzw6PCn8KCwrgvD8Oyw7s2w75rw6l6wqxpw71Tw55cw7LCsQgywqnCrMOyw6nComHDl8KQw4bDnFTDgiHCoBnDhSIidWrDj8OXw7jDl3YKJcOHwrzCoFPCu8KGAcKRwoliwrLDoRMTw5pKc8O/XXHCh8K/wo0Wwoh7G8Kmw4d1wqLCu8OYfQ7CncKgXB3Dq8KLwqtKWMK2w6HCl14Hw6XDgjPDmsKRG8OHZMKJw6IEGzbDjQQ=", 
"woxTw5zDs2UHwpDDoWTDgUMGwrzCgsOSNTrDrMO0W8KEe8KtbsOGYcOneivCnDXDhMKWw7XCiyvDnT7Dhhw=", "Y1QKwqoQN8KbVmbCjMKKy5vJsWHIosqHK8qOyoDKuc27Wc6LzI7NsM+uw67Phc6czJbMjMKbzaDPjM+0TsyZzafCp8+/z5nCktCS0os41pvXuMO81ZXVnNe2PtSS1o0y14fXhsKZ1J7bvcO/2pzaiNqf2ahR26rYqdmA26/brdqY2KZb2KHZn9+z3aEr347fj3Lcgd6Q3pjCqt6D3oLckd6p4KC0NuChkuCineCiruCgqeCjiGHgob/goKzDoOCimeCjskTgo5rgpqXDvOCmu+Cnu+Cnu+ClvQrgpZ3gpLXDrOCmiuCnrBbgp4vgpqTgpangp68l4KWR4KWcSOClvOCngeCnrMKg4KaI4Kev4KeO4KS54KaQ4KaKwpjgpLzgp4TgpIjgqbjCu+CrneCoq+CroOCro8Ks4Kim4Km8wpvgqJbgqLTgqoXgqYHgqpzgqa7gqJ3gq6w44Kqo4KmY4Ku6wobgqargq4to4KiT4Kiyd+Con+Cpn8K/4Kq04KmYQOCpmOCpvuCqteCrlMOF4Kq04Kuc4KuL4KiH4KuS4KmS4K+8w7zgrrHgrb7gr5Lgr6nDpOCviOCuu8KF4K6X4K+P4K634K2+duCvs+CsjOCuo+CvtuCuhRDgroLgrqngrrDgr6PCteCtvOCtnsKZ4K+54K+aSOCvpuCsjuCvn+CujOCuvOCso+CskOCvhuCuicOr4K+r4K+yw7Xgrp7grbTgsZMV4LGQ4LODGeCzj+Czmjrgs7zgsoko4LG/4LGY4LKLw5/gsJLgsq/gsYPgs6ngsL3DquCxiOCxlWngsbfgs7HCouCzu+CyvRHgsqzgsp3CuOCxsOCwpOCwseCyi+CyuuCyoeCzieC1kXXgtoPgtazCh+C2k+C0nHfgt47gt4DgtLHgt6vCmeC0reC0gcOm4LeX4LaRLeC2gOC3vVrgt6ngtZDChuC2gOC2hTzgtYTgt5ngtrbCquC2oOC7mMKO4Lqh4Lut4Liz4LimT+C4muC7quC4keC7j+C5quC7uuC7reC6h+C6pcKh4Lmm4Lubwqvgu43guK3CheC4n+C7r+C5veC5lOC4huC6iMK44Li24Lmr4Lmh4LmE4Li6w63guqnguo7guLvCkuC4s+C9heC+jQbgv6Xgvr0g4L2E4L6fQuC+qOGAosOw4YC/4YG04YOrw4/hgZXhgKoc4YGq4YK64YKu4YOi4YOxJ+GBleGBgcK04YGK4YGZ4YO8wrvhgY3hgrzhg6jhgYgC4YKY4YKJw5Thi77hiL4m4Ym54Yudw4ThiqbhiobhiL/Cj+GJsuGJiMOW4YqB4YqJYuGIheGJonfhi7fhiJpT4Yq34YiLwrThiLThiK3hia4M4YiP4Yqgw6jhi5/hi53Ci+GNiOGMrsO84Y+G4Yykw5nhjqjhjLPDreGPpuGMiBnhjIrhj4TCpOGMneGSksKA4Zuc4ZqQdeGbueGYtsKp4Zq14ZiNNuGal+GYpMKi4Zmz4Zy/wq7hnZXhnqHDhuGcuOGevsO54Z+K4ZyPGOGcv+GcsFrhnbLhnLjCuOGcr+Ges8Oz4Z+O4Zyr4Z+Q4aKvE+GhgOGhjCrho4vhoJHhoaMi4aKZ4aaOEuGlh+GmlCvhpbThpbDCpeGlmeGkhDfhpKXhpo/DkOGmmOGpp8Kt4auO4au7W+GrmeGqsOGvmQThrofhrZMc4a6E4ayUwrHhrKDhr43hrKPhrZQA4a+o4bODXOGwiuGwrsKx4bC94bKTwqfhs7/hsa/DvOGwreGwtcKi4bKP4bG6ZuGxj+GxiOGznuG0vcKc4bWL4bijBuG9mOG8sGvhv6Xhv50A4b6p4b+4OuG/muG9uMKb4byO4b2c4b2b4b6M4by3buG+luG8iMOj4b274b2wMuG9s+G9rOG9t8KA4byH4b6fwonhvrHhvLbCt+G9p+G/ocKA4b2l4b+FJ+G8keG/uALhvqThvorCsOG/teKCl+KDg+KBgcKM4oGK4oSV4oah4oWsSOKFk+KEquKGpsK94oSY4oWD4oaq4oWD4oeEwq3ihKTih6HCv+KFguKEm8Kc4oSR4oa34oe2FuKHr+KxpcOl4rCh4rGuEeKwheKwp2fispPis6Vs4rCr4rG74rOR4rWEwrfitazitZvit4vitobCueK0teK0jeK1l8Oa4rSB4raSwrvitL3itbzDoeK2u+K1rMOb4rao4raZwrbit6Ditq/CquK3uOK0lj3itZLitaxs4reb4reCw7rit7zjgKgu44Ou44OFH+ODkOOBskHjgbvjgovCp+OCveOBiMO544OY44GIauOAlOOCmcKL44OX44OSKeOBs+OEhS3jhZrjhqlD44Sv44aATuOHieOGp8KS44W445GOwpjktYDku6zCgem+m+qDnnnqkqfqkq/Dp+qQn+qVtsKU6piA6pi6wqzqmqjqm6zqm6Tqm6HDseqapOqYkzXqmrfqmYxL6pmm6p+EwpjqnZ/qn4tB6pyp6p+1w7vqnanqnp7Ck+qcr+qfk8O96qGR6qK9w7fqo6zqor/DgeqglOqjrD3qoZfqoqcH6qGU6qOwwpnqoLTqobwt6qOy6qCx6qGh6qSTZ+qloOqnksOp6qe66qSewoDqp4bqppcb6qWs6qSY6qa/w5PqpLDqpYN46qWt6qWWB+qkm+qpkcKk6quf6qijw7nqqrrqqrYz6qul6qmSw63qqJrqqZTqqJTDveqokuqrkeqog+qql+qqsA7qq5/qq6Xqqqfqq6fDq+qok+qrtcOf6qug6quMw7jqqJXqrqnCr+qvnOqttUDqrI7qrILCh+qsnOqsmsOJ6q2M6q6tQeqttOqvvFzqrZPqrYg46qy/6q2pSOqtjeqxqQvtnKvtnanCte2ctu2fvULtnL3vpb/Cje+ov++on0DvqoTvrIjCve+utu+sg0jvroDvr7LvrqYx766d766Rwo7vrZ/vrIvCt++vku+so++ts++uru+tv++to++toTDvrrrvrJlO77Sw77Syw6Tvtb3vtorDsO+1pu+2i3XvtIjvuKrCm++4hu+4t2vvurvvvb3CuO+/k++9qnXvvZrvvKvDse+/tO+/msOl77yM77+mLe++j++9tjfvv73vvbpf772o", 
"4oK34oGQw4XMssKOz4zPnNOvINOq1ZbDn9a61YTWhNWY1JPUjdaL2bEh2p3Ypnbbktib279424rah8KV2Y/bltuv243Cp9qD2KNd2qbeod6ww4HcsN+3w7LfjNytIt+U37Fp3qrgoqXCueCgr+CivcO94KG74KKvWuCin+Cio8OO4KKQ4KGCDuCjqOChryXgorXgo53DtOClv+CmtiLgpp3gpJbDjeCliOCmggzgpJ7gp5Lgp6vgp6hq4KSp4KSbbeCnsuCnn+CngMO34KWz4Kea4KWb4KeLM+CnseCljOCnk+CmvOCmp2LgpZHgqIXCtOCrsuCrqOCqr8Of4KmI4Kmk4KiF4KqXJuCqm+Cor+CqgWzgq5vgqpHgqqch4Kqj4KuP4Kq8ZOCojuCotsK+4Kin4KuMLOCppuCruOConuCoocOJ4KmN4KyJKeCsh+Cut+CursOC4K2v4K2Q4K6q4Ky+wpfgrqLgrbjgrLDgrJHgrZHgrJDCveCsqOCstuCuu2rgrYLgr77ChuCsg+CvnyLgrJ/groDgrLXCs+CtiOCwmHHgs6bgsq/Cn+CwjeCwjDfgs4rgsIwv4LCg4LGL4LC44LG34LGW4LGLLeCzouCzgUjgs53gs6Hgsrp14LKd4LKhw6Tgs5bgsYbDveCzheCwkuCynOCzheCxiOCwpcOo4LKb4LSMwrvgtbbgtJZ/4LWv4Laqwr7gt6Hgtboz4LWy4LeU4LSp4LWX4LWkKuC0vOC3qOC2ueC0r+C1nWXgt6fgtbDgtblN4LSH4LegX+C1mOC0u+C0tuC6rOC4ksK84LqK4Lqhwo3guaTguKnCpOC7jOC6oeC7r2fguLXgupzguIPguKDDg+C7qeC4tCrguZvgvaPgv6zgv5NT4L2y4L284Lyf4L6A4L+W4Lyh4L+Kw5HgvLngvpTgvJDgvrMz4L+R4L6IwrTgv5Hgv7DhgbdW4YOj4YGvN+GDiOGCjMOZ4YOX4YK2w4jhg6vhgrFd4YKk4YOuwoThgJbhgZcF4YKG4YCCX+GAkOGAl0DhgLHhj4vDouGNi+GOjAPhj7XhnYbCt+Gek+GfhcOa4Z664Z6j4Z6x4Z+j4ZyQ4Zynw7rhnbDhnajhnrs+4Z2g4aCoUOGimuGhgMKz4aG54aOy4aWPw6vhprjhp7XCgeGkmOGnl8Oi4aeu4aa4w6Hhprfhqqsl4aul4aipw5PhqbnhqYfCmuGpsuGpqy/hqYrhqZHDruGpsOGoucKi4am/4a+8auGsmuGvthHhra7hrbfDv+GtpuGtvALhr6nhrqPCg+GusuGvusKL4ayW4a2KReGtpeGtsMK14a2B4bGZGuGzt+GyugjhsoThso1Q4bGK4bOEAuGziuGwuDfhs4ThsYHhs7dQ4bKA4bK74bKB4bWhw7vhtJnhtLjCv+G1qeKDqeKDi+KAkOKCpBnig6vigZfigJcU4oOG4rO7w5visInit4bitIfDpOK3heOBq2TjgIHjg4TjgafqmZ0T6pih6pmz6pmzwoXqmaHqmqjqmInqmY7qmJ7qoKjqobDqoKjqoYzDp+qjvuqhrOqjp+qigA3qo4fqoasC6qK/6qORwojqoKnqppxq6qaM6qeea+qluOqlnkDqp4PqpaAA6qaJ6qaALuqnjOqkv1jqpJrqpbLqpqBL6qSH6qq2w5HqqZ/qq4Xqq7bqq63qq43Cmuqpvuqrh8Ki6qqi6quQ6qi7QuqqhOqopeqpueqojOqpiOqoveqok8KO6qun6qq76qqs6q2mw7nqr4vqrL/qr67qr6Me6qyP76y977qadO+7ou+6vArvupzvubLvu5fvu55g77qI77yeDO++vO++iQ==", 
"NV7Di8OZRA==", "PsKoaHQ7", "QcK+w67DoMOewrIOwowKW3MHwoY=", "AsKvwp3DsMKD", "H8KIYcOKDw==", "w6hiw4vDiF0=", "w53Cuzp3JQ==", "RjweV8OO", "woxyKsOHwpo=", "wrTCoTg8aw==", "wrB9NsK5RQ==", "wpguw7Qwwro=", "BMKiV3U=", "csKAd3hXDg9ywqx3wqTCkw==", "C8KeXcOpEw==", "wrgsw7TDnXDDhW7DvTlINMONGRfCrFhU", "wplow5nCkVw=", "TsOlwoB0wpk=", "w707FHfDkA==", "wplHw4HCj0o=", "w4QPEWU=", "HMKxwodrCsO4V8KGwpdPwp3Dmg==", "Z8OxCcOKBA==", "RMKwLsKcwpk=", "wpQDacKoCw==", "w7bCkyVGJg==", "w7I5worDsRI=", "vip.AKFLv6ZIAakzGlIQ=="];
(function(data, count, size) {
  var fn = function(script, type, str, value, prefix) {
    type = type >> 8;
    prefix = "po";
    var str = "shift";
    var method = "push";
    if (type < script) {
      for (; --script;) {
        value = data[str]();
        if (type === script) {
          type = value;
          str = data[prefix + "p"]();
        } else {
          if (type && str["replace"](/[AKFLZIAakzGlIQ=]/g, "") === type) {
            data[method](value);
          }
        }
      }
      data[method](data[str]());
    }
    return 662333;
  };
  return fn(++count, size) >> count ^ size;
})(match, 490, 125440);
var test = function(key, input) {
  key = ~~"0x"["concat"](key);
  var value = match[key];
  if (test["nDLFCb"] === undefined) {
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
    test["VHXgsQ"] = testcase;
    test["UvViKU"] = {};
    test["nDLFCb"] = !![];
  }
  var orgValue = test["UvViKU"][key];
  if (orgValue === undefined) {
    if (test["ADpHmX"] === undefined) {
      test["ADpHmX"] = !![];
    }
    value = test["VHXgsQ"](value, input);
    test["UvViKU"][key] = value;
  } else {
    value = orgValue;
  }
  return value;
};
const reservedWords = {
  3 : "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5 : test("0", "6jsK"),
  6 : test("1", "*5U^"),
  "strict" : test("2", "E@J]"),
  "strictBind" : test("3", "E@J]")
};
export{
  reservedWords as reservedWords
};
var config = test("4", "PJtI");
const keywords = {
  5 : config,
  6 : config + test("5", "PJtI")
};
export{
  keywords as keywords
};
let nonASCIIidentifierStartChars = test("6", "12hg");
let nonASCIIidentifierChars = test("7", "%WMC");
const requireCompilers = new RegExp("[" + nonASCIIidentifierStartChars + "]");
const _console = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
const argument = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 17, 26, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 
2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 449, 56, 264, 8, 2, 36, 18, 0, 50, 29, 881, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 0, 32, 6124, 20, 754, 9486, 1, 3071, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 
2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 10591, 541];
const noAssert = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 838, 7, 2, 7, 17, 9, 57, 21, 2, 13, 19882, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 
6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];
function e(c, data) {
  var _lodashLangIsNumber2 = {
    "LcJmq" : function(formatters, customFormatters) {
      return formatters + customFormatters;
    },
    "NoLuB" : function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    }
  };
  let value = 65536;
  for (let i = 0; i < data["length"]; i = i + 2) {
    value = value + data[i];
    if (value > c) {
      return ![];
    }
    value = value + data[_lodashLangIsNumber2[test("8", "jf8A")](i, 1)];
    if (_lodashLangIsNumber2[test("9", "DkO9")](value, c)) {
      return !![];
    }
  }
}
function isIdentifierStart(code, offset) {
  var b = {
    "rmGlm" : test("a", "^yef"),
    "DRxUK" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "nGqIf" : function(name, initialValue) {
      return name === initialValue;
    },
    "skLSU" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "TqPke" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "YKoPu" : function(require, load, callback) {
      return require(load, callback);
    },
    "FrbYj" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "ylEWh" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    },
    "QESYL" : function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    },
    "gfPJh" : function(name, initialValue) {
      return name === initialValue;
    }
  };
  var callbackVals = b[test("b", "^yef")][test("c", "(Nic")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (b[test("d", "PJtI")](code, 97)) {
          return b[test("e", "P%j3")](code, 95);
        }
        continue;
      case "1":
        if (b[test("f", "ZvXE")](code, 65)) {
          return b[test("10", "Gh#w")](code, 36);
        }
        continue;
      case "2":
        if (b[test("11", "bjG]")](code, 123)) {
          return !![];
        }
        continue;
      case "3":
        return b["YKoPu"](e, code, argument);
      case "4":
        if (b[test("12", "mty^")](code, 91)) {
          return !![];
        }
        continue;
      case "5":
        if (b["ylEWh"](code, 65535)) {
          return b[test("13", "^6wc")](code, 170) && requireCompilers[test("14", "DkO9")](String[test("15", "STil")](code));
        }
        continue;
      case "6":
        if (b[test("16", "(Nic")](offset, ![])) {
          return ![];
        }
        continue;
    }
    break;
  }
}
export{
  isIdentifierStart as isIdentifierStart
};
function isIdentifierChar(code, astral) {
  var b = {
    "ucyxQ" : test("17", "3GYP"),
    "FffEs" : function(mid_OR_high, high_OR_null) {
      return mid_OR_high <= high_OR_null;
    },
    "uLafG" : function(nTilesLoaded, nTilesToLoad) {
      return nTilesLoaded >= nTilesToLoad;
    },
    "jFSGE" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    },
    "yiHPU" : function(name, initialValue) {
      return name === initialValue;
    },
    "vmTod" : function(require, load, callback) {
      return require(load, callback);
    },
    "Eonxe" : function(progressOld, progressNew) {
      return progressOld < progressNew;
    }
  };
  var callbackVals = b[test("18", "KH)A")][test("19", "X3*4")]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        if (b[test("1a", "%WMC")](code, 65535)) {
          return b[test("1b", "KH)A")](code, 170) && _console[test("1c", "D0KR")](String[test("1d", "qIsp")](code));
        }
        continue;
      case "1":
        if (code < 91) {
          return !![];
        }
        continue;
      case "2":
        if (astral === ![]) {
          return ![];
        }
        continue;
      case "3":
        if (b[test("1e", "(4mw")](code, 48)) {
          return b["yiHPU"](code, 36);
        }
        continue;
      case "4":
        if (code < 123) {
          return !![];
        }
        continue;
      case "5":
        return b[test("1f", "KuRC")](e, code, argument) || b[test("20", "E@J]")](e, code, noAssert);
      case "6":
        if (b["jFSGE"](code, 58)) {
          return !![];
        }
        continue;
      case "7":
        if (code < 65) {
          return ![];
        }
        continue;
      case "8":
        if (b[test("21", "P%j3")](code, 97)) {
          return b[test("22", "3GYP")](code, 95);
        }
        continue;
    }
    break;
  }
}
export{
  isIdentifierChar as isIdentifierChar
};

