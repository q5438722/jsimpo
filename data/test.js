var f = function(a, b)
{
    return a + b;
}

var g = function()
{
    var next = f(1, 2);
    var aaa = f(next, next);
    return aaa;
}
