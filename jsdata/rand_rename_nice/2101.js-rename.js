'use strict';
import*as configApi$jscomp$0$jscomp$0 from "./config";
describe("when working with site config", function() {
  beforeEach(() => {
    me.setSiteConfig({});
  });
  it("should set site config and config properly", function() {
    let o = {
      foo : "bar",
      bar : 0
    };
    me.setSiteConfig(o);
    let bindings = me.getSiteConfig();
    let mockOtherDomainObject = me.getConfig();
    expect(bindings.foo).toEqual(o.foo);
    expect(bindings.bar).toEqual(o.bar);
    expect(bindings).toEqual(mockOtherDomainObject);
  });
  it("should respect secure keys when applying directives", function() {
    let o = {
      foo : "bar",
      bar : "cant-be-changed",
      secure : [...me.defaultConfig.secure, "bar"]
    };
    me.setSiteConfig(o);
    const list = {
      foo : "baf",
      bar : "should-not-be-allowed"
    };
    const resolvedAssetMap = me.updateCurrentConfig(o, [list]);
    expect(resolvedAssetMap.foo).toEqual(list.foo);
    expect(resolvedAssetMap.bar).toBe(o.bar);
  });
  it("should set reset config properly", function() {
    let o = {
      foo : "bar",
      bar : 0
    };
    me.setSiteConfig(o);
    let options = {
      foo : "baf"
    };
    me.setConfig(options);
    let clustererCtorOptions = me.getConfig();
    expect(clustererCtorOptions.foo).toEqual(options.foo);
    me.reset();
    let resolvedAssetMap = me.getConfig();
    expect(resolvedAssetMap.foo).toEqual(o.foo);
    let plouf = me.getSiteConfig();
    expect(plouf.foo).toEqual(o.foo);
  });
  it("should set global reset config properly", function() {
    let o = {
      foo : "bar",
      bar : 0
    };
    me.setSiteConfig(o);
    let clustererCtorOptions = me.getSiteConfig();
    expect(clustererCtorOptions.foo).toEqual(o.foo);
    let resolvedAssetMap = me.getConfig();
    expect(resolvedAssetMap.foo).toEqual(o.foo);
    me.setConfig({
      foobar : "bar0"
    });
    let handlersMap = me.getConfig();
    expect(handlersMap.foobar).toEqual("bar0");
    me.reset();
    let d = me.getConfig();
    expect(d.foobar).toBeUndefined();
  });
});

