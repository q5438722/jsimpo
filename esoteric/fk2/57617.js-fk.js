var ATrue;
(function (ATrue) {
    ATrue[ATrue["IsTrue"] = 1] = "IsTrue";
    ATrue[ATrue["IsFalse"] = +[]] = "IsFalse";
})(ATrue || (ATrue = {}));
if (![]) {
    console.info('unreachable');
}
else if (!![]) {
    throw Error('throw early');
}
else {
    console.info('unreachable');
}
//# sourceMappingURL=throw-on-require.js.map