'use strict';
let nf = new Intl["NumberFormat"];
assertEquals("standard", nf["resolvedOptions"]()["notation"]);
nf = new Intl["NumberFormat"]("en");
assertEquals("standard", nf["resolvedOptions"]()["notation"]);
nf = new Intl["NumberFormat"]("en", {
  "style" : "percent"
});
assertEquals("standard", nf["resolvedOptions"]()["notation"]);
const testData = [["standard", undefined, "987,654,321"], ["scientific", undefined, "9.877E8"], ["engineering", undefined, "987.654E6"], ["compact", undefined, "988M"], ["compact", "short", "988M"], ["compact", "long", "988 million"]];
for (const [spaceBetweenBarsSpecified, how, spaceBetweenGroupsSpecified] of testData) {
  nf = new Intl["NumberFormat"]("en", {
    "notation" : spaceBetweenBarsSpecified,
    "compactDisplay" : how
  });
  assertEquals(spaceBetweenBarsSpecified, nf["resolvedOptions"]()["notation"]);
  if (spaceBetweenBarsSpecified != "compact") {
    assertEquals(undefined, nf["resolvedOptions"]()["compactDisplay"]);
  } else {
    if (how == "long") {
      assertEquals("long", nf["resolvedOptions"]()["compactDisplay"]);
    } else {
      assertEquals("short", nf["resolvedOptions"]()["compactDisplay"]);
    }
  }
  assertEquals(spaceBetweenGroupsSpecified, nf["format"](987654321));
}
let notation = "compact";
nf = new Intl["NumberFormat"]("de", {
  "notation" : notation,
  "compactDisplay" : "short"
});
assertEquals("988\u00a0Mio.", nf["format"](987654321));
assertEquals("99\u00a0Mio.", nf["format"](98765432));
assertEquals("98.765", nf["format"](98765));
assertEquals("9876", nf["format"](9876));
nf = new Intl["NumberFormat"]("de", {
  "notation" : notation,
  "compactDisplay" : "long"
});
assertEquals("988 Millionen", nf["format"](987654321));
assertEquals("99 Millionen", nf["format"](98765432));
assertEquals("99 Tausend", nf["format"](98765));
assertEquals("9,9 Tausend", nf["format"](9876));
nf = new Intl["NumberFormat"]("zh-TW", {
  "notation" : notation,
  "compactDisplay" : "short"
});
assertEquals("9.9\u5104", nf["format"](987654321));
assertEquals("9877\u842c", nf["format"](98765432));
assertEquals("9.9\u842c", nf["format"](98765));
assertEquals("9876", nf["format"](9876));
nf = new Intl["NumberFormat"]("zh-TW", {
  "notation" : notation,
  "compactDisplay" : "long"
});
assertEquals("9.9\u5104", nf["format"](987654321));
assertEquals("9877\u842c", nf["format"](98765432));
assertEquals("9.9\u842c", nf["format"](98765));
assertEquals("9876", nf["format"](9876));
nf = new Intl["NumberFormat"]("ja", {
  "notation" : notation,
  "compactDisplay" : "short"
});
assertEquals("9.9\u5104", nf["format"](987654321));
assertEquals("9877\u4e07", nf["format"](98765432));
assertEquals("9.9\u4e07", nf["format"](98765));
assertEquals("9876", nf["format"](9876));
nf = new Intl["NumberFormat"]("ja", {
  "notation" : notation,
  "compactDisplay" : "long"
});
assertEquals("9.9\u5104", nf["format"](987654321));
assertEquals("9877\u4e07", nf["format"](98765432));
assertEquals("9.9\u4e07", nf["format"](98765));
assertEquals("9876", nf["format"](9876));
nf = new Intl["NumberFormat"]("ko", {
  "notation" : notation,
  "compactDisplay" : "short"
});
assertEquals("9.9\uc5b5", nf["format"](987654321));
assertEquals("9877\ub9cc", nf["format"](98765432));
assertEquals("9.9\ub9cc", nf["format"](98765));
assertEquals("9.9\ucc9c", nf["format"](9876));
assertEquals("987", nf["format"](987));
nf = new Intl["NumberFormat"]("ko", {
  "notation" : notation,
  "compactDisplay" : "long"
});
assertEquals("9.9\uc5b5", nf["format"](987654321));
assertEquals("9877\ub9cc", nf["format"](98765432));
assertEquals("9.9\ub9cc", nf["format"](98765));
assertEquals("9.9\ucc9c", nf["format"](9876));
assertEquals("987", nf["format"](987));

