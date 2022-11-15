'use strict';
var PolygonRender = require("./PolygonRender");
var Class = require("../../../utils/Class");
var Earcut = require("../../../geom/polygon/Earcut");
var GetAABB = require("../../../geom/polygon/GetAABB");
var GeomPolygon = require("../../../geom/polygon/Polygon");
var Shape = require("../Shape");
var Smooth = require("../../../geom/polygon/Smooth");
var Polygon = new Class({
  Extends : Shape,
  Mixins : [PolygonRender],
  initialize : function render(body, index, position, context, color, group) {
    if (index === undefined) {
      index = 0;
    }
    if (position === undefined) {
      position = 0;
    }
    Shape.call(this, body, "Polygon", new GeomPolygon(context));
    var canvas = GetAABB(this.geom);
    this.setPosition(index, position);
    this.setSize(canvas.width, canvas.height);
    if (color !== undefined) {
      this.setFillStyle(color, group);
    }
    this.updateDisplayOrigin();
    this.updateData();
  },
  smooth : function(value) {
    if (value === undefined) {
      value = 1;
    }
    var propValue = 0;
    for (; propValue < value; propValue++) {
      Smooth(this.geom);
    }
    return this.updateData();
  },
  updateData : function() {
    var outerLeft = [];
    var points = this.geom.points;
    var i = 0;
    for (; i < points.length; i++) {
      outerLeft.push(points[i].x, points[i].y);
    }
    outerLeft.push(points[0].x, points[0].y);
    this.pathIndexes = Earcut(outerLeft);
    this.pathData = outerLeft;
    return this;
  }
});
module.exports = Polygon;

