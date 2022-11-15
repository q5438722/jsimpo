const gulp = require('gulp');
const browserify = require('browserify');
const streamify = require('gulp-streamify');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const source = require('vinyl-source-stream');
const OUTPUT_PATH = '../../build/browserify';
const TMP_FILE_PREFIX = '../../build/browserify_';
gulp['task']('build-bundle', function () {
    return browserify('main.js', { 'output': TMP_FILE_PREFIX + 'main.tmp' })['ignore'](require['resolve']('pdfjs-dist/build/pdf.worker'))['bundle']()['pipe'](source(TMP_FILE_PREFIX + 'main.tmp'))['pipe'](streamify(uglify()))['pipe'](rename('main.bundle.js'))['pipe'](gulp['dest'](OUTPUT_PATH));
});
gulp['task']('build-worker', function () {
    const _0x63a5c7 = require['resolve']('pdfjs-dist/build/pdf.worker.entry');
    return browserify(_0x63a5c7, { 'output': TMP_FILE_PREFIX + 'worker.tmp' })['bundle']()['pipe'](source(TMP_FILE_PREFIX + 'worker.tmp'))['pipe'](streamify(uglify({ 'compress': { 'sequences': ![] } })))['pipe'](rename('pdf.worker.bundle.js'))['pipe'](gulp['dest'](OUTPUT_PATH));
});
gulp['task']('build', gulp['series']('build-bundle', 'build-worker'));