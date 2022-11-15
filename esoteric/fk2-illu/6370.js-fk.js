define(['./forOwn'], function (forOwn) {

    /**
     * Get object values
     */
    function values(obj) {
        const vals = [];

        forOwn(obj, function (val, key) {
            vals.push(val);
        });
        return vals;
    }

    return values;
});
