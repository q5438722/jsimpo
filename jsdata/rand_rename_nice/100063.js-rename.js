'use strict';
import test from "tape";
import{
  shallow as shallow
}from "@vue/test-utils";
import Index from "../pages/index.vue";
test("renders Index.vue correctly", (assert) => {
  assert.plan(4);
  const t = shallow(Index, {
    data : {
      name : "nuxt"
    }
  });
  const s = t.find("button");
  assert.equal(t.find("h1").text(), "Hello nuxt!", 'renders "Hello nuxt!" text');
  assert.equal(t.find("h1").hasClass("red"), true, "h1 has a red class [default]");
  s.trigger("click");
  assert.equal(t.find("h1").hasClass("blue"), true, "h1 class changes to blue [after 1st click]");
  s.trigger("click");
  assert.equal(t.find("h1").hasClass("green"), true, "h1 class changes to green [after 2nd click]");
});

