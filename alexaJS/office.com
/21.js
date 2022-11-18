function clearStorage() {
    try {
        if (window && window.sessionStorage) {
            clearStorageWithExceptions(window.sessionStorage, ['DefaultSignInCalledBefore', 'msameid']);
        }
        if (window && window.localStorage) {
            var workload = '';
            if (document && document.getElementById) {
                var workloadElem = document.getElementById('workload');
                if (workloadElem) {
                    workload = workloadElem.innerText;
                }
            }
            if (workload && workload === 'pwa') {
                clearStorageWithExceptions(window.localStorage, ['officeHome-']);
            }
            else {
                var exceptions = [];
                if (window.location.pathname === '/logout') {
                    exceptions.push('AbtActivity');
                }
                clearStorageWithExceptions(window.localStorage, exceptions);
            }
        }
        if (window && window.indexedDB) {
            if (window.indexedDB.databases) {
                window.indexedDB.databases().then(function (dbs) {
                    if (dbs) {
                        dbs.forEach(function (db) {
                            if (db && db.name && (db.name.indexOf('office-start-simple-persistence') >= 0 || db.name.indexOf('edgeworth-') === 0)) {
                                window.indexedDB.deleteDatabase(db.name);
                            }
                        });
                    }
                });
            }
            window.indexedDB.deleteDatabase('fluidDriverCache');
        }
    }
    catch (err) {
        console.log(err);
    }
}
function clearStorageWithExceptions(storage, exceptions) {
    if (!exceptions || exceptions.length === 0) {
        storage.clear();
        return;
    }
    var keys = [];
    for (var i = 0; i < storage.length; i++) {
        keys.push(storage.key(i));
    }
    var _loop_1 = function (i) {
        var key = keys[i];
        var shouldDelete = true;
        exceptions.forEach(function (val) {
            if ((key === null || key === void 0 ? void 0 : key.lastIndexOf(val)) !== -1) {
                shouldDelete = false;
            }
        });
        if (key && shouldDelete) {
            storage.removeItem(key);
        }
    };
    for (var i = 0; i < keys.length; i++) {
        _loop_1(i);
    }
}
clearStorage();
