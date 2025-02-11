import flowDb from "../flowDb";import flow from "./flow";import { setConfig } from "../../../config";setConfig({ securityLevel: "strict" });describe("[Edges] when parsing", () => {
  beforeEach(function () {
    flow.parser.yy = flowDb;flow.parser.yy.clear();
  });it("should handle open ended edges", function () {
    const e = flow.parser.parse("graph TD;A---B;");
    const t = flow.parser.yy.getVertices();
    const o = flow.parser.yy.getEdges();
    expect(o[0].type).toBe("arrow_open");
  });it("should handle cross ended edges", function () {
    const e = flow.parser.parse("graph TD;A--xB;");
    const t = flow.parser.yy.getVertices();
    const o = flow.parser.yy.getEdges();
    expect(o[0].type).toBe("arrow_cross");
  });it("should handle open ended edges", function () {
    const e = flow.parser.parse("graph TD;A--oB;");
    const t = flow.parser.yy.getVertices();
    const o = flow.parser.yy.getEdges();
    expect(o[0].type).toBe("arrow_circle");
  });describe("cross", function () {
    it("should handle double edged nodes and edges", function () {
      const e = flow.parser.parse("graph TD;\nA x--x B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_cross");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes with text", function () {
      const e = flow.parser.parse("graph TD;\nA x-- text --x B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_cross");expect(o[0].text).toBe("text");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes and edges on thick arrows", function () {
      const e = flow.parser.parse("graph TD;\nA x==x B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_cross");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes with text on thick arrows", function () {
      const e = flow.parser.parse("graph TD;\nA x== text ==x B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_cross");expect(o[0].text).toBe("text");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes and edges on dotted arrows", function () {
      const e = flow.parser.parse("graph TD;\nA x-.-x B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_cross");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes with text on dotted arrows", function () {
      const e = flow.parser.parse("graph TD;\nA x-. text .-x B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_cross");expect(o[0].text).toBe("text");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(1);
    });
  });describe("circle", function () {
    it("should handle double edged nodes and edges", function () {
      const e = flow.parser.parse("graph TD;\nA o--o B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_circle");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes with text", function () {
      const e = flow.parser.parse("graph TD;\nA o-- text --o B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_circle");expect(o[0].text).toBe("text");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes and edges on thick arrows", function () {
      const e = flow.parser.parse("graph TD;\nA o==o B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_circle");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes with text on thick arrows", function () {
      const e = flow.parser.parse("graph TD;\nA o== text ==o B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_circle");expect(o[0].text).toBe("text");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes and edges on dotted arrows", function () {
      const e = flow.parser.parse("graph TD;\nA o-.-o B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_circle");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(1);
    });it("should handle double edged nodes with text on dotted arrows", function () {
      const e = flow.parser.parse("graph TD;\nA o-. text .-o B;");
      const t = flow.parser.yy.getVertices();
      const o = flow.parser.yy.getEdges();
      expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_circle");expect(o[0].text).toBe("text");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(1);
    });
  });it("should handle multiple edges", function () {
    const e = flow.parser.parse("graph TD;A---|This is the 123 s text|B;\nA---|This is the second edge|B;");
    const t = flow.parser.yy.getVertices();
    const o = flow.parser.yy.getEdges();
    expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(2);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_open");expect(o[0].text).toBe("This is the 123 s text");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(1);expect(o[1].start).toBe("A");expect(o[1].end).toBe("B");expect(o[1].type).toBe("arrow_open");expect(o[1].text).toBe("This is the second edge");expect(o[1].stroke).toBe("normal");expect(o[1].length).toBe(1);
  });describe("edge length", function () {
    for (let r = 1; r <= 3; ++r) {
      it(`should handle normal edges with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -${"-".repeat(r)}- B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_open");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle normal labelled edges with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -- Label -${"-".repeat(r)}- B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_open");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle normal edges with arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -${"-".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_point");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle normal labelled edges with arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -- Label -${"-".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_point");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle normal edges with double arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA <-${"-".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_point");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle normal labelled edges with double arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA <-- Label -${"-".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_point");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("normal");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle thick edges with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA =${"=".repeat(r)}= B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_open");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle thick labelled edges with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA == Label =${"=".repeat(r)}= B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_open");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle thick edges with arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA =${"=".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_point");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle thick labelled edges with arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA == Label =${"=".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_point");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle thick edges with double arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA <=${"=".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_point");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle thick labelled edges with double arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA <== Label =${"=".repeat(r)}> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_point");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("thick");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle dotted edges with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -${".".repeat(r)}- B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_open");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle dotted labelled edges with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -. Label ${".".repeat(r)}- B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_open");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle dotted edges with arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -${".".repeat(r)}-> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_point");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle dotted labelled edges with arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA -. Label ${".".repeat(r)}-> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("arrow_point");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle dotted edges with double arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA <-${".".repeat(r)}-> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_point");expect(o[0].text).toBe("");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(r);
      });
    }for (let r = 1; r <= 3; ++r) {
      it(`should handle dotted edges with double arrows with length ${r}`, function () {
        const e = flow.parser.parse(`graph TD;\nA <-. Label ${".".repeat(r)}-> B;`);
        const t = flow.parser.yy.getVertices();
        const o = flow.parser.yy.getEdges();
        expect(t.A.id).toBe("A");expect(t.B.id).toBe("B");expect(o.length).toBe(1);expect(o[0].start).toBe("A");expect(o[0].end).toBe("B");expect(o[0].type).toBe("double_arrow_point");expect(o[0].text).toBe("Label");expect(o[0].stroke).toBe("dotted");expect(o[0].length).toBe(r);
      });
    }
  });
});
