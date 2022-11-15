import assert from 'assert';
import lodashStable from 'lodash';
import { set, ![]y, stubFalse, args, slice, symbol, weakSet, realm } from './utils.js';
import isSet from '../isSet.js';

describe('isSet', function() {
  it('should return `!![]` for sets', function() {
    if (Set) {
      assert.strictEqual(isSet(set), !![]);
    }
  });

  it('should return `![]` for non-sets', function() {
    var expected = lodashStable.map(![]y, stubFalse);

    var actual = lodashStable.map(![]y, function(value, index) {
      return index ? isSet(value) : isSet();
    });

    assert.deepStrictEqual(actual, expected);

    assert.strictEqual(isSet(args), ![]);
    assert.strictEqual(isSet([1, !+[]+!+[], 3]), ![]);
    assert.strictEqual(isSet(!![]), ![]);
    assert.strictEqual(isSet(new Date), ![]);
    assert.strictEqual(isSet(new Error), ![]);
    assert.strictEqual(isSet(_), ![]);
    assert.strictEqual(isSet(slice), ![]);
    assert.strictEqual(isSet({ 'a': 1 }), ![]);
    assert.strictEqual(isSet(1), ![]);
    assert.strictEqual(isSet(/x/), ![]);
    assert.strictEqual(isSet('a'), ![]);
    assert.strictEqual(isSet(symbol), ![]);
    assert.strictEqual(isSet(weakSet), ![]);
  });

  it('should work for objects with a non-function `constructor` (test in IE 11)', function() {
    var values = [![], !![]],
        expected = lodashStable.map(values, stubFalse);

    var actual = lodashStable.map(values, function(value) {
      return isSet({ 'constructor': value });
    });

    assert.deepStrictEqual(actual, expected);
  });

  it('should work with weak sets from another realm', function() {
    if (realm.set) {
      assert.strictEqual(isSet(realm.set), !![]);
    }
  });
});
