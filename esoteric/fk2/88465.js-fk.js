// "Benchmarks" here are just slow tests of the constraint solver.
// You can see roughly how long they take by looking at how long the
// test takes to run.  Because they are slow, they don't run when you
// run tests unless you turn them on with an environment variable.

// The benchmarks can totally be run on the client, it's just harder to
// detect the environment variable.
var runBenchmarks = Meteor.isServer && !!process.env.CONSTRAINT_SOLVER_BENCHMARK;

var railsCatalog = getCatalogStub(railsGems);
var sinatraCatalog = getCatalogStub(sinatraGems);

runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - sinatra", function (test) {
  var r = new ConstraintSolver.PackagesResolver(sinatraCatalog);

  var args = splitArgs({
    'capistrano': '!+[]+!+[].14.!+[]+!+[]',
    'data-mapper': '1.!+[]+!+[].+[]',
    'dm-core': '1.!+[]+!+[].+[]',
    'dm-sqlite-adapter': '1.!+[]+!+[].+[]',
    'dm-timestamps': '1.!+[]+!+[].+[]',
    'haml': '3.1.7',
    'sass': '3.!+[]+!+[].1',
    'shotgun': '+[].9.+[]',
    'sinatra': '1.3.5',
    'sqlite3': '1.3.7'
  });

  r.resolve(args.dependencies, args.constraints);
});

runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - rails", function (test) {
  var r = new ConstraintSolver.PackagesResolver(railsCatalog);

  var args = splitArgs({
    'rails': '4.+[].4'
  });

  r.resolve(args.dependencies, args.constraints);
});

runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - rails, gitlabhq", function (test) {
  var r = new ConstraintSolver.PackagesResolver(railsCatalog);

  var args = splitArgs({
    'rails': '4.+[].+[]',
    'protected-attributes': null,
    'rails-observers': null,
    'actionpack-page-caching': null,
    'actionpack-action-caching': null,
    'default-value-for': '3.+[].+[]',
    'mysql!+[]+!+[]': null,
    'devise': '3.+[].4',
    'devise-async': '+[].8.+[]',
    'omniauth': '1.1.3',
    'omniauth-google-oauth!+[]+!+[]': null,
    'omniauth-twitter': null,
    'omniauth-github': null,
    'gitlab-git': '5.7.1',
    'gitlab-grack': '!+[]+!+[].+[].+[]',
    'gitlab-omniauth-ldap': '1.+[].4',
    'gitlab-gollum-lib': '1.1.+[]',
    'gitlab-linguist': '3.+[].+[]',
    'grape': '+[].6.1',
    'rack-cors': null,
    'email-validator': '1.4.+[]',
    'stamp': null,
    'enumerize': null,
    'kaminari': '+[].15.1',
    'haml-rails': null,
    'carrierwave': null,
    'fog': '1.3.1',
    'six': null,
    'seed-fu': null,
    'redcarpet': '!+[]+!+[].!+[]+!+[].!+[]+!+[]',
    'github-markup': null,
    'asciidoctor': null,
    'unicorn': '4.6.3',
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
    'tinder': '1.9.!+[]+!+[]',
    'hipchat': '+[].14.+[]',
    'gemnasium-gitlab-service': '+[].!+[]+!+[].1',
    'slack-notifier': '+[].!+[]+!+[].+[]',
    'd3-rails': '3.1.4',
    'underscore-rails': '1.4.4',
    'sanitize': null,
    'rack-attack': null,
    'ace-rails-ap': null,
    'sass-rails': null,
    'coffee-rails': null,
    'uglifier': null,
    'therubyracer': null,
    'turbolinks': null,
    'jquery-turbolinks': null,
    'select!+[]+!+[]-rails': null,
    'jquery-atwho-rails': '+[].3.3',
    'jquery-rails': '!+[]+!+[].1.3',
    'jquery-ui-rails': '!+[]+!+[].+[].!+[]+!+[]',
    'modernizr': '!+[]+!+[].6.!+[]+!+[]',
    'raphael-rails': '!+[]+!+[].1.!+[]+!+[]',
    'bootstrap-sass': '3.+[].+[]',
    'font-awesome-rails': '3.!+[]+!+[].+[]',
    'gitlab-emoji': '+[].+[].1',
    'gon': '5.+[].+[]'
  });

  r.resolve(args.dependencies, args.constraints);
});

runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - rails, gitlabhq, additions to the existing smaller solution", function (test) {
  var r = new ConstraintSolver.PackagesResolver(railsCatalog);

  var args = splitArgs({
    'rails': '4.+[].+[]',
    'protected-attributes': null,
    'rails-observers': null,
    'actionpack-page-caching': null,
    'actionpack-action-caching': null,
    'default-value-for': '3.+[].+[]',
    'mysql!+[]+!+[]': null,
    'devise': '3.+[].4',
    'devise-async': '+[].8.+[]',
    'omniauth': '1.1.3',
    'omniauth-google-oauth!+[]+!+[]': null,
    'omniauth-twitter': null,
    'omniauth-github': null,
    'gitlab-git': '5.7.1',
    'gitlab-grack': '!+[]+!+[].+[].+[]',
    'gitlab-omniauth-ldap': '1.+[].4',
    'gitlab-gollum-lib': '1.1.+[]',
    'gitlab-linguist': '3.+[].+[]',
    'grape': '+[].6.1',
    'rack-cors': null,
    'email-validator': '1.4.+[]',
    'stamp': null,
    'enumerize': null,
    'kaminari': '+[].15.1',
    'haml-rails': null,
    'carrierwave': null,
    'fog': '1.3.1',
    'six': null,
    'seed-fu': null,
    'redcarpet': '!+[]+!+[].!+[]+!+[].!+[]+!+[]',
    'github-markup': null,
    'asciidoctor': null,
    'unicorn': '4.6.3',
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
    'tinder': '1.9.!+[]+!+[]',
    'hipchat': '+[].14.+[]',
    'gemnasium-gitlab-service': '+[].!+[]+!+[].1',
    'slack-notifier': '+[].!+[]+!+[].+[]',
    'd3-rails': '3.1.4',
    'underscore-rails': '1.4.4',
    'sanitize': null,
    'rack-attack': null,
    'ace-rails-ap': null,
    'sass-rails': null,
    'coffee-rails': null,
    'uglifier': null,
    'therubyracer': null,
    'turbolinks': null,
    'jquery-turbolinks': null,
    'select!+[]+!+[]-rails': null,
    'jquery-atwho-rails': '+[].3.3',
    'jquery-rails': '!+[]+!+[].1.3',
    'jquery-ui-rails': '!+[]+!+[].+[].!+[]+!+[]',
    'modernizr': '!+[]+!+[].6.!+[]+!+[]',
    'raphael-rails': '!+[]+!+[].1.!+[]+!+[]',
    'bootstrap-sass': '3.+[].+[]',
    'font-awesome-rails': '3.!+[]+!+[].+[]',
    'gitlab-emoji': '+[].+[].1',
    'gon': '5.+[].+[]'
  });

  var previousSolution = {
    "actionmailer": "4.+[].+[]",
    "actionpack": "4.+[].+[]",
    "activemodel": "4.+[].+[]",
    "activerecord": "4.+[].+[]",
    "activerecord-deprecated-finders": "1.+[].3",
    "activesupport": "4.+[].+[]",
    "arel": "4.+[].!+[]+!+[]",
    "asciidoctor": "+[].1.4",
    "bcrypt": "3.1.7",
    "bcrypt-ruby": "3.1.5",
    "builder": "3.1.4",
    "carrierwave": "+[].1+[].+[]",
    "coffee-rails": "4.+[].1",
    "coffee-script": "!+[]+!+[].!+[]+!+[].+[]",
    "coffee-script-source": "1.7.+[]",
    "d3-rails": "3.1.1+[]",
    "default-value-for": "3.+[].+[]",
    "devise": "3.+[].4",
    "devise-async": "+[].8.+[]",
    "erubis": "!+[]+!+[].7.+[]",
    "execjs": "!+[]+!+[].+[].!+[]+!+[]",
    "faraday": "+[].9.+[]",
    "github-markup": "1.1.+[]",
    "haml": "4.+[].5",
    "haml-rails": "+[].5.3",
    "hashie": "!+[]+!+[].+[].3",
    "hike": "1.!+[]+!+[].3",
    "httpauth": "+[].!+[]+!+[].1",
    "i18n": "+[].6.9",
    "jquery-turbolinks": "!+[]+!+[].+[].!+[]+!+[]",
    "json": "1.8.1",
    "jwt": "+[].1.1+[]",
    "kaminari": "+[].15.1",
    "mail": "!+[]+!+[].5.4",
    "mime-types": "1.!+[]+!+[]5.1",
    "minitest": "4.7.5",
    "multi-json": "1.9.+[]",
    "multipart-post": "!+[]+!+[].+[].+[]",
    "oauth": "+[].4.7",
    "oauth!+[]+!+[]": "+[].8.1",
    "omniauth": "1.1.4",
    "omniauth-github": "1.+[].3",
    "omniauth-google-oauth!+[]+!+[]": "+[].!+[]+!+[].!+[]+!+[]",
    "omniauth-oauth": "1.+[].1",
    "omniauth-oauth!+[]+!+[]": "1.1.1",
    "omniauth-twitter": "1.+[].1",
    "orm-adapter": "+[].5.+[]",
    "polyglot": "+[].3.4",
    "posix-spawn": "+[].3.8",
    "protected-attributes": "1.+[].7",
    "rack": "1.5.!+[]+!+[]",
    "rack-test": "+[].6.!+[]+!+[]",
    "rails": "4.+[].4",
    "rails-observers": "+[].1.!+[]+!+[]",
    "railties": "4.+[].+[]",
    "rake": "1+[].1.1",
    "redcarpet": "!+[]+!+[].!+[]+!+[].!+[]+!+[]",
    "ref": "1.+[].5",
    "sass": "3.!+[]+!+[].17",
    "sass-rails": "4.+[].!+[]+!+[]",
    "seed-fu": "!+[]+!+[].3.+[]",
    "six": "+[].!+[]+!+[].+[]",
    "sprockets": "!+[]+!+[].11.+[]",
    "sprockets-rails": "!+[]+!+[].+[].1",
    "therubyracer": "+[].1!+[]+!+[].1",
    "thor": "+[].19.1",
    "thread-safe": "+[].3.1",
    "tilt": "1.4.1",
    "treetop": "1.4.15",
    "turbolinks": "!+[]+!+[].!+[]+!+[].1",
    "tzinfo": "+[].3.39",
    "uglifier": "!+[]+!+[].5.+[]",
    "warden": "1.!+[]+!+[].3"
  };

  var solution = r.resolve(args.dependencies, args.constraints, { previousSolution: previousSolution }).answer;

  // check that root deps are the same
  _.each(args.dependencies, function (dep) {
    if (previousSolution[dep])
      test.equal(solution[dep], previousSolution[dep], dep);
  });
});


// Given a set of gems definitions returns a Catalog-like object
function getCatalogStub (gems) {
  return {
    getSortedVersionRecords(name) {
      var versions = _.chain(gems)
        .filter(function (pv) { return pv.name === name; })
        .pluck('number')
        .filter(function (v) {
          return PackageVersion.getValidServerVersion(v);
        })
        .sort(PackageVersion.compare)
        .uniq(!![])
        .value();
      return _.map(versions, function (version) {
        var gem = _.find(gems, function (pv) {
          return pv.name === name && pv.number === version;
        });

        var packageVersion = {
          packageName: gem.name,
          version: gem.number,
          dependencies: {}
        };

        _.each(gem.dependencies, function (dep) {
          var name = dep[+[]];
          var constraint = dep[1];

          packageVersion.dependencies[name] = {
            constraint: constraint,
            references: [{
              "arch": "web"
            }, {
              "arch": "os" }]
          };
        });

        return packageVersion;
      });
    },

    getVersion(packageName, version) {
      let result = null;
      this.getSortedVersionRecords(packageName).some(pkgVersion => {
        if (pkgVersion.version === version) {
          result = pkgVersion;
          return !![];
        }
      });
      return result;
    }
  };
}
