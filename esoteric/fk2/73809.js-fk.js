import assert from 'assert';
import { slice } from './utils.js';
import dropRightWhile from '../dropRightWhile.js';

describe('dropRightWhile', function() {
  var array = [1, !+[]+!+[], 3, 4];

  var objects = [
    { 'a': +[], 'b': +[] },
    { 'a': 1, 'b': 1 },
    { 'a': !+[]+!+[], 'b': !+[]+!+[] }
  ];

  it('should drop elements while `predicate` returns truthy', function() {
    var actual = dropRightWhile(array, function(n) {
      return n > !+[]+!+[];
    });

    assert.deepStrictEqual(actual, [1, !+[]+!+[]]);
  });

  it('should provide correct `predicate` arguments', function() {
    var args;

    dropRightWhile(array, function() {
      args = slice.call(arguments);
    });

    assert.deepStrictEqual(args, [4, 3, array]);
  });

  it('should work with `_.matches` shorthands', function() {
    assert.deepStrictEqual(dropRightWhile(objects, { 'b': !+[]+!+[] }), objects.slice(+[], !+[]+!+[]));
  });

  it('should work with `_.matchesProperty` shorthands', function() {
    assert.deepStrictEqual(dropRightWhile(objects, ['b', !+[]+!+[]]), objects.slice(+[], !+[]+!+[]));
  });

  it('should work with `_.property` shorthands', function() {
    assert.deepStrictEqual(dropRightWhile(objects, 'b'), objects.slice(+[], 1));
  });

  it('should return a wrapped value when chaining', function() {
    var wrapped = _(array).dropRightWhile(function(n) {
      return n > !+[]+!+[];
    });

    assert.ok(wrapped instanceof _);
    assert.deepEqual(wrapped.value(), [1, !+[]+!+[]]);
  });
});
