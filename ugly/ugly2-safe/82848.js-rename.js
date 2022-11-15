"use strict";
  describe("toDebugString", function () {
    it("should convert its argument to a string", function () {
      var raccoon; // t
      
          expect(toDebugString("string")).toEqual("string");
      expect(toDebugString(123)).toEqual("123");
      expect(toDebugString({
        a : {
          b : "c"
        }
      })).toEqual('{"a":{"b":"c"}}');
      expect(toDebugString(function t() {
        
      })).toEqual("function fn()");
      expect(toDebugString()).toEqual("undefined");
      raccoon = {
        
      };
      raccoon.a = raccoon;
      expect(toDebugString(raccoon)).toEqual('{"a":"..."}');
      expect(toDebugString([raccoon, raccoon, ])).toEqual('[{"a":"..."},"..."]');
    });
    it("should convert its argument that are objects to string based on maxDepth", 
    function () {
      var hamster; // t
      
          hamster = {
        b : {
          c : {
            d : 1
          }
        }
      };
      expect(toDebugString(hamster, 1)).toEqual('{"b":"..."}');
      expect(toDebugString(hamster, 2)).toEqual('{"b":{"c":"..."}}');
      expect(toDebugString(hamster, 3)).toEqual('{"b":{"c":{"d":1}}}');
    });
    they("should convert its argument that object to string  and ignore max depth when maxDepth = $prop", 
    [NaN, null, undefined, true, false, -1, 0, ], 
    function (chinchilla) {
      var ibex; // e
      
          ibex = {
        b : {
          c : {
            d : 1
          }
        }
      };
      expect(toDebugString(ibex, chinchilla)).toEqual('{"b":{"c":{"d":1}}}');
    });
  });
  describe("serializeObject", function () {
    it("should convert its argument to a string", function () {
      var boar; // t
      
          expect(serializeObject({
        a : {
          b : "c"
        }
      })).toEqual('{"a":{"b":"c"}}');
      boar = {
        
      };
      boar.a = boar;
      expect(serializeObject(boar)).toEqual('{"a":"..."}');
      expect(serializeObject([boar, boar, ])).toEqual('[{"a":"..."},"..."]');
    });
    it("should convert its argument that are objects to string based on maxDepth", 
    function () {
      var llama; // t
      
          llama = {
        b : {
          c : {
            d : 1
          }
        }
      };
      expect(serializeObject(llama, 1)).toEqual('{"b":"..."}');
      expect(serializeObject(llama, 2)).toEqual('{"b":{"c":"..."}}');
      expect(serializeObject(llama, 3)).toEqual('{"b":{"c":{"d":1}}}');
    });
    they("should convert its argument that object to string  and ignore max depth when maxDepth = $prop", 
    [NaN, null, undefined, true, false, -1, 0, ], 
    function (capybara) {
      var mink; // e
      
          mink = {
        b : {
          c : {
            d : 1
          }
        }
      };
      expect(serializeObject(mink, capybara)).toEqual('{"b":{"c":{"d":1}}}');
    });
  });
  