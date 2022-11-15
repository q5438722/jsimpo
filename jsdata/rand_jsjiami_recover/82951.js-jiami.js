'use strict';
module['exports'] = function jqueryDeployment(_0x302251) {
    return {
        'name': 'jquery',
        'examples': {
            'commonFiles': {
                'scripts': [
                    '../../components/jquery-' + _0x302251('jquery') + '/jquery.js',
                    '../../../angular.js'
                ]
            },
            'dependencyPath': '../../../'
        },
        'scripts': [
            'components/jquery-' + _0x302251('jquery') + '/jquery.js',
            '../angular.min.js',
            '../angular-resource.min.js',
            '../angular-route.min.js',
            '../angular-cookies.min.js',
            '../angular-sanitize.min.js',
            '../angular-touch.min.js',
            '../angular-animate.min.js',
            'components/marked-' + _0x302251('marked') + '/lib/marked.js',
            'js/angular-bootstrap/dropdown-toggle.min.js',
            'components/lunr-' + _0x302251('lunr') + '/lunr.min.js',
            'components/google-code-prettify-' + _0x302251('google-code-prettify') + '/src/prettify.js',
            'components/google-code-prettify-' + _0x302251('google-code-prettify') + '/src/lang-css.js',
            'js/current-version-data.js',
            'js/all-versions-data.js',
            'js/pages-data.js',
            'js/nav-data.js',
            'js/docs.min.js'
        ],
        'stylesheets': [
            'components/bootstrap-' + _0x302251('bootstrap') + '/css/bootstrap.min.css',
            'css/prettify-theme.css',
            'css/angular-topnav.css',
            'css/docs.css',
            'css/animations.css'
        ]
    };
};