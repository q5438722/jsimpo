const gulp = require("gulp");

const console = require("better-console");

const fs = require("fs");

const autoprefixer = require("gulp-autoprefixer");

const chmod = require("gulp-chmod");

const clone = require("gulp-clone");

const gulpif = require("gulp-if");

const header = require("gulp-header");

const less = require("gulp-less");

const minifyCSS = require("gulp-clean-css");

const plumber = require("gulp-plumber");

const print = require("gulp-print").default;

const rename = require("gulp-rename");

const replace = require("gulp-replace");

const uglify = require("gulp-uglify");

const replaceExt = require("replace-ext");

const watch = require("gulp-watch");

var config = require("../config/docs");

const tasks = require("../config/tasks");

const configSetup = require("../config/project/config");

const install = require("../config/project/install");

const banner = tasks.banner;
const comments = tasks.regExp.comments;
const log = tasks.log;
const settings = tasks.settings;
var globs;
var assets;
var output;
var source;
require("../collections/internal")(gulp);module.exports = function () {
  config = configSetup.addDerivedValues(config);globs = config.globs;assets = config.paths.assets;output = config.paths.output;source = config.paths.source;gulp.watch(["src/**/*.*"], function (e) {
    console.clear();return gulp.src(e.path, { base: "src/" }).pipe(gulp.dest(output.less)).pipe(print(log.created));
  });gulp.watch(["examples/**/*.*"], function (e) {
    console.clear();return gulp.src(e.path, { base: "examples/" }).pipe(gulp.dest(output.examples)).pipe(print(log.created));
  });gulp.watch([source.config, source.definitions + "/**/*.less", source.site + "/**/*.{overrides,variables}", source.themes + "/**/*.{overrides,variables}"], function (e) {
    var s;
    var p;
    var i;
    var t;
    var r;
    var n;
    var o;
    var c;
    gulp.src(e.path).pipe(print(log.modified));c = e.path.indexOf("theme.config") !== -1 || e.path.indexOf("site.variables") !== -1;n = e.path.indexOf(source.themes) !== -1;o = e.path.indexOf(source.site) !== -1;r = e.path.indexOf(source.definitions) !== -1;if (c) {
      return;
    } else if (n) {
      console.log("Change detected in packaged theme");s = replaceExt(e.path, ".less");s = s.replace(tasks.regExp.theme, source.definitions);
    } else if (o) {
      console.log("Change detected in site theme");s = replaceExt(e.path, ".less");s = s.replace(source.site, source.definitions);
    } else {
      console.log("Change detected in definition");s = e.path;
    }if (fs.existsSync(s)) {
      p = gulp.src(s).pipe(plumber()).pipe(less(settings.less)).pipe(replace(comments.variables.in, comments.variables.out)).pipe(replace(comments.large.in, comments.large.out)).pipe(replace(comments.small.in, comments.small.out)).pipe(replace(comments.tiny.in, comments.tiny.out)).pipe(autoprefixer(settings.prefix)).pipe(gulpif(config.hasPermission, chmod(config.permission)));t = p.pipe(clone());i = p.pipe(clone());t.pipe(plumber()).pipe(replace(assets.source, assets.uncompressed)).pipe(header(banner, settings.header)).pipe(gulp.dest(output.uncompressed)).pipe(print(log.created)).on("end", function () {
        gulp.start("package uncompressed docs css");
      });i.pipe(plumber()).pipe(replace(assets.source, assets.compressed)).pipe(minifyCSS(settings.minify)).pipe(rename(settings.rename.minCSS)).pipe(header(banner, settings.header)).pipe(gulp.dest(output.compressed)).pipe(print(log.created)).on("end", function () {
        gulp.start("package compressed docs css");
      });
    } else {
      console.log("Cannot find UI definition at path", s);
    }
  });gulp.watch([source.definitions + "/**/*.js"], function (e) {
    gulp.src(e.path).pipe(plumber()).pipe(gulpif(config.hasPermission, chmod(config.permission))).pipe(gulp.dest(output.uncompressed)).pipe(print(log.created)).pipe(uglify(settings.uglify)).pipe(rename(settings.rename.minJS)).pipe(gulp.dest(output.compressed)).pipe(print(log.created)).on("end", function () {
      gulp.start("package compressed docs js");gulp.start("package uncompressed docs js");
    });
  });gulp.watch([source.themes + "/**/assets/**/" + globs.components + "?(s).*"], function (e) {
    gulp.src(e.path, { base: source.themes }).pipe(gulpif(config.hasPermission, chmod(config.permission))).pipe(gulp.dest(output.themes)).pipe(print(log.created));
  });
};
