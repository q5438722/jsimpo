'use strict';
require('../common');
const assert = require('assert');
function makeIterableFunc(_0x396d18) {
    return Object['assign'](() => {
    }, {
        [Symbol['iterator']]() {
            return _0x396d18[Symbol['iterator']]();
        }
    });
}
{
    let params;
    params = new URLSearchParams(undefined);
    assert['strictEqual'](params['toString'](), '');
    params = new URLSearchParams(null);
    assert['strictEqual'](params['toString'](), '');
    params = new URLSearchParams(makeIterableFunc([
        [
            'key',
            'val'
        ],
        [
            'key2',
            'val2'
        ]
    ]));
    assert['strictEqual'](params['toString'](), 'key=val&key2=val2');
    params = new URLSearchParams(makeIterableFunc([
        [
            'key',
            'val'
        ],
        [
            'key2',
            'val2'
        ]
    ]['map'](makeIterableFunc)));
    assert['strictEqual'](params['toString'](), 'key=val&key2=val2');
    assert['throws'](() => new URLSearchParams([[1]]), tupleError);
    assert['throws'](() => new URLSearchParams([[
            1,
            2,
            3
        ]]), tupleError);
    assert['throws'](() => new URLSearchParams({ [Symbol['iterator']]: 42 }), iterableError);
    assert['throws'](() => new URLSearchParams([{}]), tupleError);
    assert['throws'](() => new URLSearchParams(['a']), tupleError);
    assert['throws'](() => new URLSearchParams([null]), tupleError);
    assert['throws'](() => new URLSearchParams([{ [Symbol['iterator']]: 42 }]), tupleError);
}
{
    const obj = {
        'toString'() {
            throw new Error('toString');
        },
        'valueOf'() {
            throw new Error('valueOf');
        }
    };
    const sym = Symbol();
    const toStringError = /^Error: toString$/;
    const symbolError = /^TypeError: Cannot convert a Symbol value to a string$/;
    assert['throws'](() => new URLSearchParams({ 'a': obj }), toStringError);
    assert['throws'](() => new URLSearchParams([[
            'a',
            obj
        ]]), toStringError);
    assert['throws'](() => new URLSearchParams(sym), symbolError);
    assert['throws'](() => new URLSearchParams({ [sym]: 'a' }), symbolError);
    assert['throws'](() => new URLSearchParams({ 'a': sym }), symbolError);
    assert['throws'](() => new URLSearchParams([[
            sym,
            'a'
        ]]), symbolError);
    assert['throws'](() => new URLSearchParams([[
            'a',
            sym
        ]]), symbolError);
}