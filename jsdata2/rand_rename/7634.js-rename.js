import Vue from"vue";describe("Directive v-once",()=>{it("should not rerender component",e=>{const t=new Vue({template:"<div v-once>{{ a }}</div>",data:{a:"hello"}}).$mount();expect(t.$el.innerHTML).toBe("hello");t.a="world";waitForUpdate(()=>{expect(t.$el.innerHTML).toBe("hello")}).then(e)});it("should not rerender self and child component",e=>{const t=new Vue({template:`
        <div v-once>
          <span>{{ a }}</span>
          <item :b="a"></item>
        </div>`,data:{a:"hello"},components:{item:{template:"<div>{{ b }}</div>",props:["b"]}}}).$mount();expect(t.$children.length).toBe(1);expect(t.$el.innerHTML).toBe("<span>hello</span> <div>hello</div>");t.a="world";waitForUpdate(()=>{expect(t.$el.innerHTML).toBe("<span>hello</span> <div>hello</div>")}).then(e)});it("should rerender parent but not self",e=>{const t=new Vue({template:`
        <div>
          <span>{{ a }}</span>
          <item v-once :b="a"></item>
        </div>`,data:{a:"hello"},components:{item:{template:"<div>{{ b }}</div>",props:["b"]}}}).$mount();expect(t.$children.length).toBe(1);expect(t.$el.innerHTML).toBe("<span>hello</span> <div>hello</div>");t.a="world";waitForUpdate(()=>{expect(t.$el.innerHTML).toBe("<span>world</span> <div>hello</div>")}).then(e)});it("should not rerender static sub nodes",e=>{const t=new Vue({template:`
        <div>
          <span v-once>{{ a }}</span>
          <item :b="a"></item>
          <span>{{ suffix }}</span>
        </div>`,data:{a:"hello",suffix:"?"},components:{item:{template:"<div>{{ b }}</div>",props:["b"]}}}).$mount();expect(t.$el.innerHTML).toBe("<span>hello</span> <div>hello</div> <span>?</span>");t.a="world";waitForUpdate(()=>{expect(t.$el.innerHTML).toBe("<span>hello</span> <div>world</div> <span>?</span>");t.suffix="!"}).then(()=>{expect(t.$el.innerHTML).toBe("<span>hello</span> <div>world</div> <span>!</span>")}).then(e)});it("should work with v-if",e=>{const t=new Vue({data:{tester:true,yes:"y",no:"n"},template:`
        <div>
          <div v-if="tester">{{ yes }}</div>
          <div v-else>{{ no }}</div>
          <div v-if="tester" v-once>{{ yes }}</div>
          <div v-else>{{ no }}</div>
          <div v-if="tester">{{ yes }}</div>
          <div v-else v-once>{{ no }}</div>
          <div v-if="tester" v-once>{{ yes }}</div>
          <div v-else v-once>{{ no }}</div>
        </div>
      `}).$mount();expectTextContent(t,"yyyy");t.yes="yes";waitForUpdate(()=>{expectTextContent(t,"yesyyesy");t.tester=false}).then(()=>{expectTextContent(t,"nnnn");t.no="no"}).then(()=>{expectTextContent(t,"nononn")}).then(e)});it("should work with v-for",e=>{const t=new Vue({data:{list:[1,2,3]},template:`<div><div v-for="i in list" v-once>{{i}}</div></div>`}).$mount();expect(t.$el.textContent).toBe("123");t.list.reverse();waitForUpdate(()=>{expect(t.$el.textContent).toBe("123")}).then(e)});it("should work inside v-for",e=>{const t=new Vue({data:{list:[{id:0,text:"a"},{id:1,text:"b"},{id:2,text:"c"}]},template:`
        <div>
          <div v-for="i in list" :key="i.id">
            <div>
              <span v-once>{{ i.text }}</span><span>{{ i.text }}</span>
            </div>
          </div>
        </div>
      `}).$mount();expect(t.$el.textContent).toBe("aabbcc");t.list[0].text="d";waitForUpdate(()=>{expect(t.$el.textContent).toBe("adbbcc");t.list[1].text="e"}).then(()=>{expect(t.$el.textContent).toBe("adbecc");t.list.reverse()}).then(()=>{expect(t.$el.textContent).toBe("ccbead")}).then(e)});it("should work inside v-for with v-if",e=>{const t=new Vue({data:{list:[{id:0,text:"a",tester:true,truthy:"y"}]},template:`
        <div>
          <div v-for="i in list" :key="i.id">
              <span v-if="i.tester" v-once>{{ i.truthy }}</span>
              <span v-else v-once>{{ i.text }}</span>
              <span v-if="i.tester" v-once>{{ i.truthy }}</span>
              <span v-else>{{ i.text }}</span>
              <span v-if="i.tester">{{ i.truthy }}</span>
              <span v-else v-once>{{ i.text }}</span>
              <span v-if="i.tester">{{ i.truthy }}</span>
              <span v-else>{{ i.text }}</span>
          </div>
        </div>
      `}).$mount();expectTextContent(t,"yyyy");t.list[0].truthy="yy";waitForUpdate(()=>{expectTextContent(t,"yyyyyy");t.list[0].tester=false}).then(()=>{expectTextContent(t,"aaaa");t.list[0].text="nn"}).then(()=>{expectTextContent(t,"annann")}).then(e)});it("should work inside v-for with nested v-else",e=>{const t=new Vue({data:{list:[{id:0,text:"a",tester:true,truthy:"y"}]},template:`
        <div v-if="0"></div>
        <div v-else>
          <div v-for="i in list" :key="i.id">
            <span v-if="i.tester" v-once>{{ i.truthy }}</span>
            <span v-else v-once>{{ i.text }}</span>
          </div>
        </div>
      `}).$mount();expectTextContent(t,"y");t.list[0].truthy="yy";waitForUpdate(()=>{expectTextContent(t,"y");t.list[0].tester=false}).then(()=>{expectTextContent(t,"a");t.list[0].text="nn"}).then(()=>{expectTextContent(t,"a")}).then(e)});it("should work inside v-for with nested v-else-if and v-else",e=>{const t=new Vue({data:{tester:false,list:[{id:0,text:"a",tester:true,truthy:"y"}]},template:`
        <div v-if="0"></div>
        <div v-else-if="tester">
          <div v-for="i in list" :key="i.id">
            <span v-if="i.tester" v-once>{{ i.truthy }}</span>
            <span v-else-if="tester" v-once>{{ i.text }}elseif</span>
            <span v-else v-once>{{ i.text }}</span>
          </div>
        </div>
        <div v-else>
          <div v-for="i in list" :key="i.id">
            <span v-if="i.tester" v-once>{{ i.truthy }}</span>
            <span v-else-if="tester">{{ i.text }}elseif</span>
            <span v-else v-once>{{ i.text }}</span>
          </div>
        </div>
      `}).$mount();expectTextContent(t,"y");t.list[0].truthy="yy";waitForUpdate(()=>{expectTextContent(t,"y");t.list[0].tester=false}).then(()=>{expectTextContent(t,"a");t.list[0].text="nn"}).then(()=>{expectTextContent(t,"a");t.tester=true}).then(()=>{expectTextContent(t,"nnelseif");t.list[0].text="xx"}).then(()=>{expectTextContent(t,"nnelseif");t.list[0].tester=true}).then(()=>{expectTextContent(t,"yy");t.list[0].truthy="nn"}).then(()=>{expectTextContent(t,"yy")}).then(e)});it("should warn inside non-keyed v-for",()=>{const e=new Vue({data:{list:[{id:0,text:"a"},{id:1,text:"b"},{id:2,text:"c"}]},template:`
        <div>
          <div v-for="i in list">
            <span v-once>{{ i.text }}</span><span>{{ i.text }}</span>
          </div>
        </div>
      `}).$mount();expect(e.$el.textContent).toBe("aabbcc");expect(`v-once can only be used inside v-for that is keyed.`).toHaveBeenWarned()});it("should inherit child reference for v-once",e=>{const t=new Vue({template:`<div>{{a}}<test v-if="ok" v-once></test></div>`,data:{a:0,ok:true},components:{test:{template:"<div>foo</div>"}}}).$mount();t.a++;waitForUpdate(()=>{expect(t.$el.textContent).toBe("1foo")}).then(()=>{t.ok=false}).then(e)});it("should render different component instances properly",e=>{const t=new Vue({components:{foo:{props:["name"],template:"<div v-once>{{ name }}</div>"}},template:`
        <div>
          <foo name="a" v-once></foo>
          <foo name="b" v-once></foo>
        </div>
      `}).$mount();waitForUpdate(()=>{expect(t.$el.children[0].innerHTML).toBe("a");expect(t.$el.children[1].innerHTML).toBe("b")}).then(e)})});function expectTextContent(e,t){expect(e.$el.textContent.replace(/\s+/g,"")).toBe(t)}