'use strict';
var expect = require('expect'), gulp = require('../');
describe('gulp', function () {
    describe('hasOwnProperty', function () {
        it('src', function (_0x567f4c) {
            expect(gulp['hasOwnProperty']('src'))['toEqual'](!![]), _0x567f4c();
        }), it('dest', function (_0x156629) {
            expect(gulp['hasOwnProperty']('dest'))['toEqual'](!![]), _0x156629();
        }), it('symlink', function (_0x8b9abc) {
            expect(gulp['hasOwnProperty']('symlink'))['toEqual'](!![]), _0x8b9abc();
        }), it('watch', function (_0x12af2d) {
            expect(gulp['hasOwnProperty']('watch'))['toEqual'](!![]), _0x12af2d();
        }), it('task', function (_0x4b2c7e) {
            expect(gulp['hasOwnProperty']('task'))['toEqual'](!![]), _0x4b2c7e();
        }), it('series', function (_0x203b8f) {
            expect(gulp['hasOwnProperty']('series'))['toEqual'](!![]), _0x203b8f();
        }), it('parallel', function (_0x4a8077) {
            expect(gulp['hasOwnProperty']('parallel'))['toEqual'](!![]), _0x4a8077();
        }), it('tree', function (_0x41c0f8) {
            expect(gulp['hasOwnProperty']('tree'))['toEqual'](!![]), _0x41c0f8();
        }), it('lastRun', function (_0x13c246) {
            expect(gulp['hasOwnProperty']('lastRun'))['toEqual'](!![]), _0x13c246();
        }), it('registry', function (_0x53506a) {
            expect(gulp['hasOwnProperty']('registry'))['toEqual'](!![]), _0x53506a();
        });
    });
});
