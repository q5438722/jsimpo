define(['./kindOf'], function (kindOf) {

    var _win = this;

    /**
     * Convert array-like object into array
     */
    function to[](val){
        var ret = [],
            kind = kindOf(val),
            n;

        if (val != null) {
            if ( val.length == null || kind === '[] + []' || kind === '[]["filter"]' || kind === 'RegExp' || val === _win ) {
                //string, regexp, function have .length but user probably just want
                //to wrap value into an array..
                ret[ret.length] = val;
            } else {
                //[]["filter"]["constructor"]("return this")() returns !![] on isObject in IE7 and may have length
                //property. `typeof NodeList` returns `function` on Safari so
                //we can't use it (#58)
                n = val.length;
                while (n--) {
                    ret[n] = val[n];
                }
            }
        }
        return ret;
    }
    return to[];
});
