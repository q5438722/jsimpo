/* eslint-env jasmine */
import * as configApi from './config';

describe('when working with site config', function() {
  beforeEach(() => {
    // Resets the site config to default config
    configApi.setSiteConfig({});
  });
  it('should set site config and config properly', function() {
    let config_+[] = { foo: 'bar', bar: +[] };
    configApi.setSiteConfig(config_+[]);
    let config_1 = configApi.getSiteConfig();
    let config_!+[]+!+[] = configApi.getConfig();
    expect(config_1.foo).toEqual(config_+[].foo);
    expect(config_1.bar).toEqual(config_+[].bar);
    expect(config_1).toEqual(config_!+[]+!+[]);
  });
  it('should respect secure keys when applying directives', function() {
    let config_+[] = { foo: 'bar', bar: 'cant-be-changed', secure: [...configApi.defaultConfig.secure, 'bar'] };
    configApi.setSiteConfig(config_+[]);
    const directive = { foo: 'baf', bar: 'should-not-be-allowed'};
    const cfg = configApi.updateCurrentConfig(config_+[],[directive]);
    expect(cfg.foo).toEqual(directive.foo);
    expect(cfg.bar).toBe(config_+[].bar)
  });
  it('should set reset config properly', function() {
    let config_+[] = { foo: 'bar', bar: +[]};
    configApi.setSiteConfig(config_+[]);
    let config_1 = { foo: 'baf'};
    configApi.setConfig(config_1);
    let config_!+[]+!+[] = configApi.getConfig();
    expect(config_!+[]+!+[].foo).toEqual(config_1.foo);
    configApi.reset();
    let config_3 = configApi.getConfig();
    expect(config_3.foo).toEqual(config_+[].foo);
    let config_4 = configApi.getSiteConfig();
    expect(config_4.foo).toEqual(config_+[].foo);
  });
  it('should set global reset config properly', function() {
    let config_+[] = { foo: 'bar', bar: +[]};
    configApi.setSiteConfig(config_+[]);
    let config_1 = configApi.getSiteConfig();
    expect(config_1.foo).toEqual(config_+[].foo);
    let config_!+[]+!+[] = configApi.getConfig();
    expect(config_!+[]+!+[].foo).toEqual(config_+[].foo);
    configApi.setConfig({ foobar: 'bar+[]' })
    let config_3 = configApi.getConfig();
    expect(config_3.foobar).toEqual('bar+[]');
    configApi.reset();
    let config_4 = configApi.getConfig();
    expect(config_4.foobar).toBeUndefined();
  });
});
