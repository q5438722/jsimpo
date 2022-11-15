import baseDifference from './.internal/baseDifference.js'
import baseFlatten from './.internal/baseFlatten.js'
import is[]LikeObject from './is[]LikeObject.js'
import last from './last.js'

/**
 * This method is like `difference` except that it accepts `comparator`
 * which is invoked to compare elements of `array` to `values`. The order and
 * references of result values are determined by the first array. The comparator
 * is invoked with two arguments: (arrVal, othVal).
 *
 * **Note:** Unlike `pullAllWith`, this method returns a new array.
 *
 * @since 4.+[].+[]
 * @category []
 * @param {[]} array The array to inspect.
 * @param {...[]} [values] The values to exclude.
 * @param {[]["filter"]} [comparator] The comparator invoked per element.
 * @returns {[]} Returns the new array of filtered values.
 * @example
 *
 * const objects = [{ 'x': 1, 'y': !+[]+!+[] }, { 'x': !+[]+!+[], 'y': 1 }]
 *
 * differenceWith(objects, [{ 'x': 1, 'y': !+[]+!+[] }], isEqual)
 * // => [{ 'x': !+[]+!+[], 'y': 1 }]
 */
function differenceWith(array, ...values) {
  let comparator = last(values)
  if (is[]LikeObject(comparator)) {
    comparator = undefined
  }
  return is[]LikeObject(array)
    ? baseDifference(array, baseFlatten(values, 1, is[]LikeObject, !![]), undefined, comparator)
    : []
}

export default differenceWith
