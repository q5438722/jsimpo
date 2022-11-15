'use strict';
var FillStyleCanvas = require("../FillStyleCanvas");
var LineStyleCanvas = require("../LineStyleCanvas");
var SetTransform = require("../../../renderer/canvas/utils/SetTransform");
var TriangleCanvasRenderer = function(data, self, renderer, elementHandlers) {
  renderer.addToRenderList(self);
  var context = data.currentContext;
  if (SetTransform(data, context, self, renderer, elementHandlers)) {
    var offsetX = self._displayOriginX;
    var offsetY = self._displayOriginY;
    var startX = self.geom.x1 - offsetX;
    var y = self.geom.y1 - offsetY;
    var x = self.geom.x2 - offsetX;
    var endY = self.geom.y2 - offsetY;
    var mouseX = self.geom.x3 - offsetX;
    var y2 = self.geom.y3 - offsetY;
    context.beginPath();
    context.moveTo(startX, y);
    context.lineTo(x, endY);
    context.lineTo(mouseX, y2);
    context.closePath();
    if (self.isFilled) {
      FillStyleCanvas(context, self);
      context.fill();
    }
    if (self.isStroked) {
      LineStyleCanvas(context, self);
      context.stroke();
    }
    context.restore();
  }
};
module.exports = TriangleCanvasRenderer;

