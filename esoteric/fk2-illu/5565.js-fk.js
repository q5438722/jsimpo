
if (true) {
    (function () {
        require('a');
    })();
}
if (false) {
    (function () {
        const x = '1';

        switch (x) {
            case 1:
                require('b');break;
            default:
                break;
        }
    })();
}

function qqq() {
    require('c');
}