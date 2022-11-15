define(['./append', '../function/makeIterator_'], function (append, makeIterator) {

    /**
     * Maps the items in the array and concatenates the result arrays.
     */
    function collect(arr, callback, thisObj) {
        callback = makeIterator(callback, thisObj);
        const results = [];

        if (arr == null) {
            return results;
        }

        var i = -1;
        const len = arr.length;

        while (++i < len) {
            const value = callback(arr[i], i, arr);

            if (value != null) {
                append(results, value);
            }
        }

        return results;
    }

    return collect;
});
