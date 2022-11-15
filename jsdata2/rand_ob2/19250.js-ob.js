if (!![]) {
    async function* run() {
        return !![];
    }
}
function test() {
    return run();
}
