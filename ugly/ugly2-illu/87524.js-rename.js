function drawMousePoint(a, t) {
  a.beginPath();a.arc(t.x, t.y, 8, 0, Math.PI * 2);a.fillStyle = "yellow";a.fill();
}const canvas = document.createElement("canvas");
canvas.width = 512;canvas.height = 512;const ctx = canvas.getContext("2d");
module.exports = { config: { type: "pie", data: { datasets: [{ backgroundColor: ["red", "green", "blue"], hoverBackgroundColor: "black", data: [1, 1, 1] }] } }, options: { canvas: { width: 512, height: 512 }, async run(a) {
      ctx.drawImage(a.canvas, 0, 0, 256, 256);const t = a.getDatasetMeta(0).data[0];
      const e = t.getCenterPoint();
      await jasmine.triggerMouseEvent(a, "mousemove", t);drawMousePoint(a.ctx, e);ctx.drawImage(a.canvas, 256, 0, 256, 256);a.toggleDataVisibility(0);a.update();drawMousePoint(a.ctx, e);ctx.drawImage(a.canvas, 0, 256, 256, 256);await jasmine.triggerMouseEvent(a, "mouseout", t);ctx.drawImage(a.canvas, 256, 256, 256, 256);Chart.helpers.clearCanvas(a.canvas);a.ctx.drawImage(canvas, 0, 0);
    } } };
