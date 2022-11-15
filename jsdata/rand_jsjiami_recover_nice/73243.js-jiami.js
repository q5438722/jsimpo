'use strict';
const selectors = {};
const certifications = ["Responsive Web Design", "JavaScript Algorithms and Data Structures", "Front End Development Libraries", "Data Visualization", "Back End Development and APIs", "Quality Assurance", "Scientific Computing with Python", "Data Analysis with Python", "Information Security", "Machine Learning with Python"];
describe("Landing page", () => {
  it(_0x55aa45["vDosy"], () => {
    var _0x260b26 = {
      "QkVUw" : _0x55aa45["jQGRJ"]
    };
    if (_0x55aa45["GCVvK"] === "qevZn") {
      cy["visit"]("/");
      cy["title"]()["should"]("eq", _0x55aa45["duahs"]);
      cy["contains"](selectors["callToAction"], _0x55aa45["TWDwN"]);
      cy["get"](selectors["callToAction"])["should"](_0x55aa45["GJpjw"], 2);
    } else {
      cy["get"](selectors["testimonials"])["children"]()["its"](_0x260b26["QkVUw"])["should"]("eq", 3);
    }
  });
  it("Has visible header and sub-header", () => {
    cy["contains"](selectors["heading"], _0x55aa45["euuSg"]);
    cy["contains"](_0x55aa45["KsfHV"])["should"](_0x55aa45["bENUn"]);
    cy["contains"](_0x55aa45["HKQxE"])["should"](_0x55aa45["bENUn"]);
    cy["contains"](_0x55aa45["rUFFF"] + "graduates have gotten jobs at tech companies including:")["should"](_0x55aa45["bENUn"]);
  });
  it(_0x55aa45["Snyki"], () => {
    var fdomainrequest = {
      "mVuvt" : _0x55aa45["bENUn"],
      "WOBqn" : _0x55aa45["JdiIY"]
    };
    if (_0x55aa45["geWap"] === _0x55aa45["geWap"]) {
      cy["get"](".logo-row")["children"]()["its"](_0x55aa45["jQGRJ"])["should"]("eq", 5);
    } else {
      cy["contains"]("Build projects.")["should"](fdomainrequest["mVuvt"]);
      cy["get"](".big-heading")["siblings"]()["get"](fdomainrequest["WOBqn"]);
    }
  });
  it(_0x55aa45["iIPkK"], () => {
    cy["contains"](_0x55aa45["KsfHV"])["should"](_0x55aa45["bENUn"]);
    cy["get"](".big-heading")["siblings"]()["get"](_0x55aa45["JdiIY"]);
  });
  it(_0x55aa45["YPixA"], function() {
    if (_0x55aa45["XiGcz"] === "RRANY") {
      cy["viewport"](1200, 660)["get"](selectors["landingPageImage"])["should"]("be.visible");
      cy["viewport"](1199, 660)["get"](selectors["landingPageImage"])["should"](_0x7928d2["kFsKO"]);
    } else {
      cy["viewport"](1200, 660)["get"](selectors["landingPageImage"])["should"](_0x55aa45["bENUn"]);
      cy["viewport"](1199, 660)["get"](selectors["landingPageImage"])["should"](_0x55aa45["aPTXP"]);
    }
  });
  it("Has links to all the certifications", function() {
    cy["get"](selectors["certifications"])["children"]()["its"](_0x55aa45["jQGRJ"])["should"]("eq", 10);
    cy["wrap"](certifications)["each"]((cls) => {
      cy["get"](selectors["certifications"])["contains"](cls);
    });
  });
  it("Has 3 testimonial cards", function() {
    if (_0x55aa45["ofLCH"] === _0x55aa45["ofLCH"]) {
      cy["get"](selectors["testimonials"])["children"]()["its"](_0x55aa45["jQGRJ"])["should"]("eq", 3);
    } else {
      cy["get"](selectors["certifications"])["children"]()["its"]("length")["should"]("eq", 10);
      cy["wrap"](certifications)["each"]((cls) => {
        cy["get"](selectors["certifications"])["contains"](cls);
      });
    }
  });
});

