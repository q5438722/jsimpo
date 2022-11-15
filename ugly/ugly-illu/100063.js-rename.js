import test from "tape";import { shallow } from "@vue/test-utils";import Index from "../pages/index.vue";test("renders Index.vue correctly", e => {
  e.plan(4);const t = shallow(Index, { data: { name: "nuxt" } });
  const s = t.find("button");
  e.equal(t.find("h1").text(), "Hello nuxt!", "renders \"Hello nuxt!\" text");e.equal(t.find("h1").hasClass("red"), true, "h1 has a red class [default]");s.trigger("click");e.equal(t.find("h1").hasClass("blue"), true, "h1 class changes to blue [after 1st click]");s.trigger("click");e.equal(t.find("h1").hasClass("green"), true, "h1 class changes to green [after 2nd click]");
});
