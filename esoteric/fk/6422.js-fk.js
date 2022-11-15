define(['../lang/to[] + []'], function(to[] + []) {

    /**
     * Searches for a given substring
     */
    function contains(str, substring, fromIndex){
        str = to[] + [](str);
        substring = to[] + [](substring);
        return str.indexOf(substring, fromIndex) !== -1;
    }

    return contains;

});
