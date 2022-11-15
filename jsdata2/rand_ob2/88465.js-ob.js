var _0x56b0 = [
    '2.1.2',
    '0.0.1',
    '5.0.0',
    'constraint\x20solver\x20-\x20benchmark\x20on\x20gems\x20-\x20rails,\x20gitlabhq,\x20additions\x20to\x20the\x20existing\x20smaller\x20solution',
    '1.1.0',
    '0.14.0',
    '0.2.1',
    '3.1.4',
    '3.2.0',
    '1.0.3',
    '4.0.2',
    '0.1.4',
    '3.1.5',
    '0.10.0',
    '4.0.1',
    '2.2.0',
    '3.1.10',
    '3.0.4',
    '2.7.0',
    '4.0.5',
    '0.5.3',
    '2.0.3',
    '1.2.3',
    '0.6.9',
    '1.8.1',
    '0.1.10',
    '1.9.0',
    '1.1.4',
    '1.0.1',
    '1.1.1',
    '0.5.0',
    '0.3.4',
    '0.6.2',
    '10.1.1',
    '1.0.5',
    '3.2.17',
    '2.3.0',
    '2.11.0',
    '0.12.1',
    '0.19.1',
    '0.3.1',
    '1.4.1',
    '1.4.15',
    '2.2.1',
    '0.3.39',
    '2.5.0',
    'equal',
    'pluck',
    'filter',
    'getValidServerVersion',
    'sort',
    'compare',
    'find',
    'name',
    'number',
    'each',
    'web',
    'getSortedVersionRecords',
    'some',
    '667qNmvdY',
    '15rWLtMP',
    '32pjioNJ',
    '1406LEhntf',
    '233148ZLwzEb',
    '34807wyCqOH',
    '97679mCAukY',
    '1DpggWp',
    '227491pkdvSt',
    '1Avytpb',
    '416459CLCiIC',
    'isServer',
    'env',
    'CONSTRAINT_SOLVER_BENCHMARK',
    'add',
    'constraint\x20solver\x20-\x20benchmark\x20on\x20gems\x20-\x20sinatra',
    'PackagesResolver',
    '2.14.2',
    '1.2.0',
    '3.1.7',
    '3.2.1',
    '0.9.0',
    '1.3.5',
    '1.3.7',
    'dependencies',
    'constraint\x20solver\x20-\x20benchmark\x20on\x20gems\x20-\x20rails',
    '4.0.4',
    'resolve',
    'constraints',
    'constraint\x20solver\x20-\x20benchmark\x20on\x20gems\x20-\x20rails,\x20gitlabhq',
    '4.0.0',
    '3.0.0',
    '0.8.0',
    '1.1.3',
    '5.7.1',
    '2.0.0',
    '1.0.4',
    '0.6.1',
    '1.4.0',
    '0.15.1',
    '2.2.2',
    '4.6.3',
    '1.9.2',
    '0.2.0',
    '1.4.4',
    '0.3.3',
    '2.1.3',
    '2.0.2',
    '2.6.2'
];
var _0x29f0cf = _0x298d;
(function (_0x723d8, _0x22f3c0) {
    var _0x114e82 = _0x298d;
    while (!![]) {
        try {
            var _0x123fcd = parseInt(_0x114e82(0xb4)) * parseInt(_0x114e82(0xb5)) + parseInt(_0x114e82(0xb6)) * -parseInt(_0x114e82(0xb7)) + parseInt(_0x114e82(0xb8)) + parseInt(_0x114e82(0xb9)) + parseInt(_0x114e82(0xba)) + -parseInt(_0x114e82(0xbb)) * -parseInt(_0x114e82(0xbc)) + parseInt(_0x114e82(0xbd)) * -parseInt(_0x114e82(0xbe));
            if (_0x123fcd === _0x22f3c0)
                break;
            else
                _0x723d8['push'](_0x723d8['shift']());
        } catch (_0x11109e) {
            _0x723d8['push'](_0x723d8['shift']());
        }
    }
}(_0x56b0, 0x2296f));
function _0x298d(_0x2d9d2b, _0x37328a) {
    return _0x298d = function (_0x56b008, _0x298ddf) {
        _0x56b008 = _0x56b008 - 0xb4;
        var _0x1fc880 = _0x56b0[_0x56b008];
        return _0x1fc880;
    }, _0x298d(_0x2d9d2b, _0x37328a);
}
var runBenchmarks = Meteor[_0x29f0cf(0xbf)] && !!process[_0x29f0cf(0xc0)][_0x29f0cf(0xc1)], railsCatalog = getCatalogStub(railsGems), sinatraCatalog = getCatalogStub(sinatraGems);
runBenchmarks && Tinytest[_0x29f0cf(0xc2)](_0x29f0cf(0xc3), function (_0x5a061d) {
    var _0x33926a = _0x29f0cf, _0x2fcd60 = new ConstraintSolver[(_0x33926a(0xc4))](sinatraCatalog), _0x2d8da0 = splitArgs({
            'capistrano': _0x33926a(0xc5),
            'data-mapper': '1.2.0',
            'dm-core': _0x33926a(0xc6),
            'dm-sqlite-adapter': _0x33926a(0xc6),
            'dm-timestamps': _0x33926a(0xc6),
            'haml': _0x33926a(0xc7),
            'sass': _0x33926a(0xc8),
            'shotgun': _0x33926a(0xc9),
            'sinatra': _0x33926a(0xca),
            'sqlite3': _0x33926a(0xcb)
        });
    _0x2fcd60['resolve'](_0x2d8da0[_0x33926a(0xcc)], _0x2d8da0['constraints']);
}), runBenchmarks && Tinytest[_0x29f0cf(0xc2)](_0x29f0cf(0xcd), function (_0x4c69e9) {
    var _0x5e1aa2 = _0x29f0cf, _0x1018f3 = new ConstraintSolver['PackagesResolver'](railsCatalog), _0x5326eb = splitArgs({ 'rails': _0x5e1aa2(0xce) });
    _0x1018f3[_0x5e1aa2(0xcf)](_0x5326eb['dependencies'], _0x5326eb[_0x5e1aa2(0xd0)]);
}), runBenchmarks && Tinytest[_0x29f0cf(0xc2)](_0x29f0cf(0xd1), function (_0x402b68) {
    var _0x3285e3 = _0x29f0cf, _0x32060f = new ConstraintSolver[(_0x3285e3(0xc4))](railsCatalog), _0x4f6a1e = splitArgs({
            'rails': _0x3285e3(0xd2),
            'protected-attributes': null,
            'rails-observers': null,
            'actionpack-page-caching': null,
            'actionpack-action-caching': null,
            'default-value-for': _0x3285e3(0xd3),
            'mysql2': null,
            'devise': '3.0.4',
            'devise-async': _0x3285e3(0xd4),
            'omniauth': _0x3285e3(0xd5),
            'omniauth-google-oauth2': null,
            'omniauth-twitter': null,
            'omniauth-github': null,
            'gitlab-git': _0x3285e3(0xd6),
            'gitlab-grack': _0x3285e3(0xd7),
            'gitlab-omniauth-ldap': _0x3285e3(0xd8),
            'gitlab-gollum-lib': '1.1.0',
            'gitlab-linguist': _0x3285e3(0xd3),
            'grape': _0x3285e3(0xd9),
            'rack-cors': null,
            'email-validator': _0x3285e3(0xda),
            'stamp': null,
            'enumerize': null,
            'kaminari': _0x3285e3(0xdb),
            'haml-rails': null,
            'carrierwave': null,
            'fog': '1.3.1',
            'six': null,
            'seed-fu': null,
            'redcarpet': _0x3285e3(0xdc),
            'github-markup': null,
            'asciidoctor': null,
            'unicorn': _0x3285e3(0xdd),
            'unicorn-worker-killer': null,
            'state-machine': null,
            'acts-as-taggable-on': null,
            'slim': null,
            'sinatra': null,
            'sidekiq': null,
            'httparty': null,
            'colored': null,
            'settingslogic': null,
            'foreman': null,
            'version-sorter': null,
            'redis-rails': null,
            'tinder': _0x3285e3(0xde),
            'hipchat': '0.14.0',
            'gemnasium-gitlab-service': '0.2.1',
            'slack-notifier': _0x3285e3(0xdf),
            'd3-rails': '3.1.4',
            'underscore-rails': _0x3285e3(0xe0),
            'sanitize': null,
            'rack-attack': null,
            'ace-rails-ap': null,
            'sass-rails': null,
            'coffee-rails': null,
            'uglifier': null,
            'therubyracer': null,
            'turbolinks': null,
            'jquery-turbolinks': null,
            'select2-rails': null,
            'jquery-atwho-rails': _0x3285e3(0xe1),
            'jquery-rails': _0x3285e3(0xe2),
            'jquery-ui-rails': _0x3285e3(0xe3),
            'modernizr': _0x3285e3(0xe4),
            'raphael-rails': _0x3285e3(0xe5),
            'bootstrap-sass': '3.0.0',
            'font-awesome-rails': '3.2.0',
            'gitlab-emoji': _0x3285e3(0xe6),
            'gon': _0x3285e3(0xe7)
        });
    _0x32060f[_0x3285e3(0xcf)](_0x4f6a1e[_0x3285e3(0xcc)], _0x4f6a1e[_0x3285e3(0xd0)]);
}), runBenchmarks && Tinytest[_0x29f0cf(0xc2)](_0x29f0cf(0xe8), function (_0x52303c) {
    var _0x45d315 = _0x29f0cf, _0x5070f7 = new ConstraintSolver[(_0x45d315(0xc4))](railsCatalog), _0x15e63d = splitArgs({
            'rails': '4.0.0',
            'protected-attributes': null,
            'rails-observers': null,
            'actionpack-page-caching': null,
            'actionpack-action-caching': null,
            'default-value-for': _0x45d315(0xd3),
            'mysql2': null,
            'devise': '3.0.4',
            'devise-async': _0x45d315(0xd4),
            'omniauth': _0x45d315(0xd5),
            'omniauth-google-oauth2': null,
            'omniauth-twitter': null,
            'omniauth-github': null,
            'gitlab-git': '5.7.1',
            'gitlab-grack': _0x45d315(0xd7),
            'gitlab-omniauth-ldap': '1.0.4',
            'gitlab-gollum-lib': _0x45d315(0xe9),
            'gitlab-linguist': '3.0.0',
            'grape': _0x45d315(0xd9),
            'rack-cors': null,
            'email-validator': '1.4.0',
            'stamp': null,
            'enumerize': null,
            'kaminari': _0x45d315(0xdb),
            'haml-rails': null,
            'carrierwave': null,
            'fog': '1.3.1',
            'six': null,
            'seed-fu': null,
            'redcarpet': '2.2.2',
            'github-markup': null,
            'asciidoctor': null,
            'unicorn': _0x45d315(0xdd),
            'unicorn-worker-killer': null,
            'state-machine': null,
            'acts-as-taggable-on': null,
            'slim': null,
            'sinatra': null,
            'sidekiq': null,
            'httparty': null,
            'colored': null,
            'settingslogic': null,
            'foreman': null,
            'version-sorter': null,
            'redis-rails': null,
            'tinder': _0x45d315(0xde),
            'hipchat': _0x45d315(0xea),
            'gemnasium-gitlab-service': _0x45d315(0xeb),
            'slack-notifier': _0x45d315(0xdf),
            'd3-rails': _0x45d315(0xec),
            'underscore-rails': _0x45d315(0xe0),
            'sanitize': null,
            'rack-attack': null,
            'ace-rails-ap': null,
            'sass-rails': null,
            'coffee-rails': null,
            'uglifier': null,
            'therubyracer': null,
            'turbolinks': null,
            'jquery-turbolinks': null,
            'select2-rails': null,
            'jquery-atwho-rails': _0x45d315(0xe1),
            'jquery-rails': _0x45d315(0xe2),
            'jquery-ui-rails': '2.0.2',
            'modernizr': '2.6.2',
            'raphael-rails': _0x45d315(0xe5),
            'bootstrap-sass': _0x45d315(0xd3),
            'font-awesome-rails': _0x45d315(0xed),
            'gitlab-emoji': _0x45d315(0xe6),
            'gon': _0x45d315(0xe7)
        }), _0x4433bc = {
            'actionmailer': _0x45d315(0xd2),
            'actionpack': _0x45d315(0xd2),
            'activemodel': _0x45d315(0xd2),
            'activerecord': _0x45d315(0xd2),
            'activerecord-deprecated-finders': _0x45d315(0xee),
            'activesupport': _0x45d315(0xd2),
            'arel': _0x45d315(0xef),
            'asciidoctor': _0x45d315(0xf0),
            'bcrypt': _0x45d315(0xc7),
            'bcrypt-ruby': _0x45d315(0xf1),
            'builder': '3.1.4',
            'carrierwave': _0x45d315(0xf2),
            'coffee-rails': _0x45d315(0xf3),
            'coffee-script': _0x45d315(0xf4),
            'coffee-script-source': '1.7.0',
            'd3-rails': _0x45d315(0xf5),
            'default-value-for': '3.0.0',
            'devise': _0x45d315(0xf6),
            'devise-async': '0.8.0',
            'erubis': _0x45d315(0xf7),
            'execjs': _0x45d315(0xe3),
            'faraday': _0x45d315(0xc9),
            'github-markup': _0x45d315(0xe9),
            'haml': _0x45d315(0xf8),
            'haml-rails': _0x45d315(0xf9),
            'hashie': _0x45d315(0xfa),
            'hike': _0x45d315(0xfb),
            'httpauth': _0x45d315(0xeb),
            'i18n': _0x45d315(0xfc),
            'jquery-turbolinks': _0x45d315(0xe3),
            'json': _0x45d315(0xfd),
            'jwt': _0x45d315(0xfe),
            'kaminari': _0x45d315(0xdb),
            'mail': '2.5.4',
            'mime-types': '1.25.1',
            'minitest': '4.7.5',
            'multi-json': _0x45d315(0xff),
            'multipart-post': _0x45d315(0xd7),
            'oauth': '0.4.7',
            'oauth2': '0.8.1',
            'omniauth': _0x45d315(0x100),
            'omniauth-github': _0x45d315(0xee),
            'omniauth-google-oauth2': '0.2.2',
            'omniauth-oauth': _0x45d315(0x101),
            'omniauth-oauth2': _0x45d315(0x102),
            'omniauth-twitter': _0x45d315(0x101),
            'orm-adapter': _0x45d315(0x103),
            'polyglot': _0x45d315(0x104),
            'posix-spawn': '0.3.8',
            'protected-attributes': '1.0.7',
            'rack': '1.5.2',
            'rack-test': _0x45d315(0x105),
            'rails': '4.0.4',
            'rails-observers': '0.1.2',
            'railties': _0x45d315(0xd2),
            'rake': _0x45d315(0x106),
            'redcarpet': _0x45d315(0xdc),
            'ref': _0x45d315(0x107),
            'sass': _0x45d315(0x108),
            'sass-rails': _0x45d315(0xef),
            'seed-fu': _0x45d315(0x109),
            'six': _0x45d315(0xdf),
            'sprockets': _0x45d315(0x10a),
            'sprockets-rails': '2.0.1',
            'therubyracer': _0x45d315(0x10b),
            'thor': _0x45d315(0x10c),
            'thread-safe': _0x45d315(0x10d),
            'tilt': _0x45d315(0x10e),
            'treetop': _0x45d315(0x10f),
            'turbolinks': _0x45d315(0x110),
            'tzinfo': _0x45d315(0x111),
            'uglifier': _0x45d315(0x112),
            'warden': _0x45d315(0xfb)
        }, _0x1667e1 = _0x5070f7[_0x45d315(0xcf)](_0x15e63d['dependencies'], _0x15e63d[_0x45d315(0xd0)], { 'previousSolution': _0x4433bc })['answer'];
    _['each'](_0x15e63d['dependencies'], function (_0x58ea8e) {
        var _0x264477 = _0x45d315;
        if (_0x4433bc[_0x58ea8e])
            _0x52303c[_0x264477(0x113)](_0x1667e1[_0x58ea8e], _0x4433bc[_0x58ea8e], _0x58ea8e);
    });
});
function getCatalogStub(_0x11d702) {
    return {
        'getSortedVersionRecords'(_0x4029a4) {
            var _0x1c0646 = _0x298d, _0x2948f7 = _['chain'](_0x11d702)['filter'](function (_0x55da6d) {
                    return _0x55da6d['name'] === _0x4029a4;
                })[_0x1c0646(0x114)]('number')[_0x1c0646(0x115)](function (_0x41b561) {
                    var _0x21603c = _0x1c0646;
                    return PackageVersion[_0x21603c(0x116)](_0x41b561);
                })[_0x1c0646(0x117)](PackageVersion[_0x1c0646(0x118)])['uniq'](!![])['value']();
            return _['map'](_0x2948f7, function (_0x255f4f) {
                var _0x595b77 = _0x1c0646, _0x3fda45 = _[_0x595b77(0x119)](_0x11d702, function (_0x5df1ae) {
                        var _0x50a6e4 = _0x595b77;
                        return _0x5df1ae[_0x50a6e4(0x11a)] === _0x4029a4 && _0x5df1ae['number'] === _0x255f4f;
                    }), _0x4f1a92 = {
                        'packageName': _0x3fda45['name'],
                        'version': _0x3fda45[_0x595b77(0x11b)],
                        'dependencies': {}
                    };
                return _[_0x595b77(0x11c)](_0x3fda45[_0x595b77(0xcc)], function (_0x336b25) {
                    var _0x1fe4b7 = _0x595b77, _0x598d01 = _0x336b25[0x0], _0x35764f = _0x336b25[0x1];
                    _0x4f1a92[_0x1fe4b7(0xcc)][_0x598d01] = {
                        'constraint': _0x35764f,
                        'references': [
                            { 'arch': _0x1fe4b7(0x11d) },
                            { 'arch': 'os' }
                        ]
                    };
                }), _0x4f1a92;
            });
        },
        'getVersion'(_0x2cec69, _0x3c3268) {
            var _0x61bf7b = _0x298d;
            let _0x1bbdfb = null;
            return this[_0x61bf7b(0x11e)](_0x2cec69)[_0x61bf7b(0x11f)](_0x2f067d => {
                if (_0x2f067d['version'] === _0x3c3268)
                    return _0x1bbdfb = _0x2f067d, !![];
            }), _0x1bbdfb;
        }
    };
}
