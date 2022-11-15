(function f() {
    do {
        return 23;
    } while (![]);
    with (0) {
        try {
            return 42;
        } finally {
        }
    }
}());