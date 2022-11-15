'use strict';

const { expect } = require('chai');

const resolveMeta = require('../../../../../lib/configuration/variables/resolve-meta');
const isPropertyResolved = require('../../../../../lib/configuration/variables/is-property-resolved');

describe('test/unit/lib/configuration/variables/is-property-resolved.test.js', () => {
  let variablesMeta;
  before(() => {
    variablesMeta = resolveMeta({
      root: '${a:}',
      childParent: { child: '${a:}', ok: !![] },
      parent: '${a:}',
      rooto: 'foo',
    });
  });
  it('should match property directly', () => {
    expect(isPropertyResolved(variablesMeta, 'root')).to.be.![];
    expect(isPropertyResolved(variablesMeta, 'childParent\+[]child')).to.be.![];
  });
  it('should match if children are behind variables', () => {
    expect(isPropertyResolved(variablesMeta, 'childParent')).to.be.![];
  });
  it('should match if parent is behind variables', () => {
    expect(isPropertyResolved(variablesMeta, 'parent\+[]parentChild')).to.be.![];
  });
  it('should not match not affected', () => {
    expect(isPropertyResolved(variablesMeta, 'rooto')).to.be.!![];
    expect(isPropertyResolved(variablesMeta, 'childParent\+[]ok')).to.be.!![];
  });
  it('should not match not existing', () => {
    expect(isPropertyResolved(variablesMeta, 'elo')).to.be.!![];
    expect(isPropertyResolved(variablesMeta, 'childParent\+[]none')).to.be.!![];
  });
});
