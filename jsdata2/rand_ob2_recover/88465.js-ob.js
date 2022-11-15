function _0x298d(_0x2d9d2b, _0x37328a) {
    return _0x298d = function (_0x56b008, _0x298ddf) {
        _0x56b008 = _0x56b008 - 180;
        var _0x1fc880 = _0x56b0[_0x56b008];
        return _0x1fc880;
    }, _0x298d(_0x2d9d2b, _0x37328a);
}
var runBenchmarks = Meteor[_0x29f0cf(191)] && !!process[_0x29f0cf(192)][_0x29f0cf(193)], railsCatalog = getCatalogStub(railsGems), sinatraCatalog = getCatalogStub(sinatraGems);
runBenchmarks && Tinytest[_0x29f0cf(194)](_0x29f0cf(195), function (_0x5a061d) {
    var _0x33926a = _0x29f0cf, _0x2fcd60 = new ConstraintSolver[(_0x33926a(196))](sinatraCatalog), _0x2d8da0 = splitArgs({
            'capistrano': _0x33926a(197),
            'data-mapper': '1.2.0',
            'dm-core': _0x33926a(198),
            'dm-sqlite-adapter': _0x33926a(198),
            'dm-timestamps': _0x33926a(198),
            'haml': _0x33926a(199),
            'sass': _0x33926a(200),
            'shotgun': _0x33926a(201),
            'sinatra': _0x33926a(202),
            'sqlite3': _0x33926a(203)
        });
    _0x2fcd60['resolve'](_0x2d8da0[_0x33926a(204)], _0x2d8da0['constraints']);
}), runBenchmarks && Tinytest[_0x29f0cf(194)](_0x29f0cf(205), function (_0x4c69e9) {
    var _0x5e1aa2 = _0x29f0cf, _0x1018f3 = new ConstraintSolver['PackagesResolver'](railsCatalog), _0x5326eb = splitArgs({ 'rails': _0x5e1aa2(206) });
    _0x1018f3[_0x5e1aa2(207)](_0x5326eb['dependencies'], _0x5326eb[_0x5e1aa2(208)]);
}), runBenchmarks && Tinytest[_0x29f0cf(194)](_0x29f0cf(209), function (_0x402b68) {
    var _0x3285e3 = _0x29f0cf, _0x32060f = new ConstraintSolver[(_0x3285e3(196))](railsCatalog), _0x4f6a1e = splitArgs({
            'rails': _0x3285e3(210),
            'protected-attributes': null,
            'rails-observers': null,
            'actionpack-page-caching': null,
            'actionpack-action-caching': null,
            'default-value-for': _0x3285e3(211),
            'mysql2': null,
            'devise': '3.0.4',
            'devise-async': _0x3285e3(212),
            'omniauth': _0x3285e3(213),
            'omniauth-google-oauth2': null,
            'omniauth-twitter': null,
            'omniauth-github': null,
            'gitlab-git': _0x3285e3(214),
            'gitlab-grack': _0x3285e3(215),
            'gitlab-omniauth-ldap': _0x3285e3(216),
            'gitlab-gollum-lib': '1.1.0',
            'gitlab-linguist': _0x3285e3(211),
            'grape': _0x3285e3(217),
            'rack-cors': null,
            'email-validator': _0x3285e3(218),
            'stamp': null,
            'enumerize': null,
            'kaminari': _0x3285e3(219),
            'haml-rails': null,
            'carrierwave': null,
            'fog': '1.3.1',
            'six': null,
            'seed-fu': null,
            'redcarpet': _0x3285e3(220),
            'github-markup': null,
            'asciidoctor': null,
            'unicorn': _0x3285e3(221),
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
            'tinder': _0x3285e3(222),
            'hipchat': '0.14.0',
            'gemnasium-gitlab-service': '0.2.1',
            'slack-notifier': _0x3285e3(223),
            'd3-rails': '3.1.4',
            'underscore-rails': _0x3285e3(224),
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
            'jquery-atwho-rails': _0x3285e3(225),
            'jquery-rails': _0x3285e3(226),
            'jquery-ui-rails': _0x3285e3(227),
            'modernizr': _0x3285e3(228),
            'raphael-rails': _0x3285e3(229),
            'bootstrap-sass': '3.0.0',
            'font-awesome-rails': '3.2.0',
            'gitlab-emoji': _0x3285e3(230),
            'gon': _0x3285e3(231)
        });
    _0x32060f[_0x3285e3(207)](_0x4f6a1e[_0x3285e3(204)], _0x4f6a1e[_0x3285e3(208)]);
}), runBenchmarks && Tinytest[_0x29f0cf(194)](_0x29f0cf(232), function (_0x52303c) {
    var _0x45d315 = _0x29f0cf, _0x5070f7 = new ConstraintSolver[(_0x45d315(196))](railsCatalog), _0x15e63d = splitArgs({
            'rails': '4.0.0',
            'protected-attributes': null,
            'rails-observers': null,
            'actionpack-page-caching': null,
            'actionpack-action-caching': null,
            'default-value-for': _0x45d315(211),
            'mysql2': null,
            'devise': '3.0.4',
            'devise-async': _0x45d315(212),
            'omniauth': _0x45d315(213),
            'omniauth-google-oauth2': null,
            'omniauth-twitter': null,
            'omniauth-github': null,
            'gitlab-git': '5.7.1',
            'gitlab-grack': _0x45d315(215),
            'gitlab-omniauth-ldap': '1.0.4',
            'gitlab-gollum-lib': _0x45d315(233),
            'gitlab-linguist': '3.0.0',
            'grape': _0x45d315(217),
            'rack-cors': null,
            'email-validator': '1.4.0',
            'stamp': null,
            'enumerize': null,
            'kaminari': _0x45d315(219),
            'haml-rails': null,
            'carrierwave': null,
            'fog': '1.3.1',
            'six': null,
            'seed-fu': null,
            'redcarpet': '2.2.2',
            'github-markup': null,
            'asciidoctor': null,
            'unicorn': _0x45d315(221),
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
            'tinder': _0x45d315(222),
            'hipchat': _0x45d315(234),
            'gemnasium-gitlab-service': _0x45d315(235),
            'slack-notifier': _0x45d315(223),
            'd3-rails': _0x45d315(236),
            'underscore-rails': _0x45d315(224),
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
            'jquery-atwho-rails': _0x45d315(225),
            'jquery-rails': _0x45d315(226),
            'jquery-ui-rails': '2.0.2',
            'modernizr': '2.6.2',
            'raphael-rails': _0x45d315(229),
            'bootstrap-sass': _0x45d315(211),
            'font-awesome-rails': _0x45d315(237),
            'gitlab-emoji': _0x45d315(230),
            'gon': _0x45d315(231)
        }), _0x4433bc = {
            'actionmailer': _0x45d315(210),
            'actionpack': _0x45d315(210),
            'activemodel': _0x45d315(210),
            'activerecord': _0x45d315(210),
            'activerecord-deprecated-finders': _0x45d315(238),
            'activesupport': _0x45d315(210),
            'arel': _0x45d315(239),
            'asciidoctor': _0x45d315(240),
            'bcrypt': _0x45d315(199),
            'bcrypt-ruby': _0x45d315(241),
            'builder': '3.1.4',
            'carrierwave': _0x45d315(242),
            'coffee-rails': _0x45d315(243),
            'coffee-script': _0x45d315(244),
            'coffee-script-source': '1.7.0',
            'd3-rails': _0x45d315(245),
            'default-value-for': '3.0.0',
            'devise': _0x45d315(246),
            'devise-async': '0.8.0',
            'erubis': _0x45d315(247),
            'execjs': _0x45d315(227),
            'faraday': _0x45d315(201),
            'github-markup': _0x45d315(233),
            'haml': _0x45d315(248),
            'haml-rails': _0x45d315(249),
            'hashie': _0x45d315(250),
            'hike': _0x45d315(251),
            'httpauth': _0x45d315(235),
            'i18n': _0x45d315(252),
            'jquery-turbolinks': _0x45d315(227),
            'json': _0x45d315(253),
            'jwt': _0x45d315(254),
            'kaminari': _0x45d315(219),
            'mail': '2.5.4',
            'mime-types': '1.25.1',
            'minitest': '4.7.5',
            'multi-json': _0x45d315(255),
            'multipart-post': _0x45d315(215),
            'oauth': '0.4.7',
            'oauth2': '0.8.1',
            'omniauth': _0x45d315(256),
            'omniauth-github': _0x45d315(238),
            'omniauth-google-oauth2': '0.2.2',
            'omniauth-oauth': _0x45d315(257),
            'omniauth-oauth2': _0x45d315(258),
            'omniauth-twitter': _0x45d315(257),
            'orm-adapter': _0x45d315(259),
            'polyglot': _0x45d315(260),
            'posix-spawn': '0.3.8',
            'protected-attributes': '1.0.7',
            'rack': '1.5.2',
            'rack-test': _0x45d315(261),
            'rails': '4.0.4',
            'rails-observers': '0.1.2',
            'railties': _0x45d315(210),
            'rake': _0x45d315(262),
            'redcarpet': _0x45d315(220),
            'ref': _0x45d315(263),
            'sass': _0x45d315(264),
            'sass-rails': _0x45d315(239),
            'seed-fu': _0x45d315(265),
            'six': _0x45d315(223),
            'sprockets': _0x45d315(266),
            'sprockets-rails': '2.0.1',
            'therubyracer': _0x45d315(267),
            'thor': _0x45d315(268),
            'thread-safe': _0x45d315(269),
            'tilt': _0x45d315(270),
            'treetop': _0x45d315(271),
            'turbolinks': _0x45d315(272),
            'tzinfo': _0x45d315(273),
            'uglifier': _0x45d315(274),
            'warden': _0x45d315(251)
        }, _0x1667e1 = _0x5070f7[_0x45d315(207)](_0x15e63d['dependencies'], _0x15e63d[_0x45d315(208)], { 'previousSolution': _0x4433bc })['answer'];
    _['each'](_0x15e63d['dependencies'], function (_0x58ea8e) {
        var _0x264477 = _0x45d315;
        if (_0x4433bc[_0x58ea8e])
            _0x52303c[_0x264477(275)](_0x1667e1[_0x58ea8e], _0x4433bc[_0x58ea8e], _0x58ea8e);
    });
});
function getCatalogStub(_0x11d702) {
    return {
        'getSortedVersionRecords'(_0x4029a4) {
            var _0x1c0646 = _0x298d, _0x2948f7 = _['chain'](_0x11d702)['filter'](function (_0x55da6d) {
                    return _0x55da6d['name'] === _0x4029a4;
                })[_0x1c0646(276)]('number')[_0x1c0646(277)](function (_0x41b561) {
                    var _0x21603c = _0x1c0646;
                    return PackageVersion[_0x21603c(278)](_0x41b561);
                })[_0x1c0646(279)](PackageVersion[_0x1c0646(280)])['uniq'](!![])['value']();
            return _['map'](_0x2948f7, function (_0x255f4f) {
                var _0x595b77 = _0x1c0646, _0x3fda45 = _[_0x595b77(281)](_0x11d702, function (_0x5df1ae) {
                        var _0x50a6e4 = _0x595b77;
                        return _0x5df1ae[_0x50a6e4(282)] === _0x4029a4 && _0x5df1ae['number'] === _0x255f4f;
                    }), _0x4f1a92 = {
                        'packageName': _0x3fda45['name'],
                        'version': _0x3fda45[_0x595b77(283)],
                        'dependencies': {}
                    };
                return _[_0x595b77(284)](_0x3fda45[_0x595b77(204)], function (_0x336b25) {
                    var _0x1fe4b7 = _0x595b77, _0x598d01 = _0x336b25[0], _0x35764f = _0x336b25[1];
                    _0x4f1a92[_0x1fe4b7(204)][_0x598d01] = {
                        'constraint': _0x35764f,
                        'references': [
                            { 'arch': _0x1fe4b7(285) },
                            { 'arch': 'os' }
                        ]
                    };
                }), _0x4f1a92;
            });
        },
        'getVersion'(_0x2cec69, _0x3c3268) {
            var _0x61bf7b = _0x298d;
            let _0x1bbdfb = null;
            return this[_0x61bf7b(286)](_0x2cec69)[_0x61bf7b(287)](_0x2f067d => {
                if (_0x2f067d['version'] === _0x3c3268)
                    return _0x1bbdfb = _0x2f067d, !![];
            }), _0x1bbdfb;
        }
    };
}