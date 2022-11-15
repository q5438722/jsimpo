"use strict";
  module.exports = function jqueryDeployment(raccoon) {
    return {
      name : 'jquery',
      examples : {
        commonFiles : {
          scripts : ['../../components/jquery-' + raccoon('jquery') + '/jquery.js', '../../../angular.js', ]
        },
        dependencyPath : '../../../'
      },
      scripts : ['components/jquery-' + raccoon('jquery') + '/jquery.js', '../angular.min.js', '../angular-resource.min.js', '../angular-route.min.js', '../angular-cookies.min.js', '../angular-sanitize.min.js', '../angular-touch.min.js', '../angular-animate.min.js', 'components/marked-' + raccoon('marked') + '/lib/marked.js', 'js/angular-bootstrap/dropdown-toggle.min.js', 'components/lunr-' + raccoon('lunr') + '/lunr.min.js', 'components/google-code-prettify-' + raccoon('google-code-prettify') + '/src/prettify.js', 'components/google-code-prettify-' + raccoon('google-code-prettify') + '/src/lang-css.js', 'js/current-version-data.js', 'js/all-versions-data.js', 'js/pages-data.js', 'js/nav-data.js', 'js/docs.min.js', ],
      stylesheets : ['components/bootstrap-' + raccoon('bootstrap') + '/css/bootstrap.min.css', 'css/prettify-theme.css', 'css/angular-topnav.css', 'css/docs.css', 'css/animations.css', ]
    };
  };
  