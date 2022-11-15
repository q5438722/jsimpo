var request = require('supertest'), app = require('../../examples/ejs');
describe('ejs', function () {
    describe('GET\x20/', function () {
        it('should\x20respond\x20with\x20html', function (_0x71115e) {
            request(app)['get']('/')['expect']('Content-Type', 'text/html;\x20charset=utf-8')['expect'](/<li>tobi &lt;tobi@learnboost\.com&gt;<\/li>/)['expect'](/<li>loki &lt;loki@learnboost\.com&gt;<\/li>/)['expect'](/<li>jane &lt;jane@learnboost\.com&gt;<\/li>/)['expect'](-0xaca + -0x185b + 0x23ed, _0x71115e);
        });
    });
});
