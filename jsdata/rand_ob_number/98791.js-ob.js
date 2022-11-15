'use strict';
const {expect} = require('chai'), resolveMeta = require('../../../../../lib/configuration/variables/resolve-meta'), isPropertyResolved = require('../../../../../lib/configuration/variables/is-property-resolved');
describe('test/unit/lib/configuration/variables/is-property-resolved.test.js', () => {
    let _0x190a01;
    before(() => {
        _0x190a01 = resolveMeta({
            'root': '${a:}',
            'childParent': {
                'child': '${a:}',
                'ok': !![]
            },
            'parent': '${a:}',
            'rooto': 'foo'
        });
    }), it('should\x20match\x20property\x20directly', () => {
        expect(isPropertyResolved(_0x190a01, 'root'))['to']['be']['false'], expect(isPropertyResolved(_0x190a01, 'childParent\x00child'))['to']['be']['false'];
    }), it('should\x20match\x20if\x20children\x20are\x20behind\x20variables', () => {
        expect(isPropertyResolved(_0x190a01, 'childParent'))['to']['be']['false'];
    }), it('should\x20match\x20if\x20parent\x20is\x20behind\x20variables', () => {
        expect(isPropertyResolved(_0x190a01, 'parent\x00parentChild'))['to']['be']['false'];
    }), it('should\x20not\x20match\x20not\x20affected', () => {
        expect(isPropertyResolved(_0x190a01, 'rooto'))['to']['be']['true'], expect(isPropertyResolved(_0x190a01, 'childParent\x00ok'))['to']['be']['true'];
    }), it('should\x20not\x20match\x20not\x20existing', () => {
        expect(isPropertyResolved(_0x190a01, 'elo'))['to']['be']['true'], expect(isPropertyResolved(_0x190a01, 'childParent\x00none'))['to']['be']['true'];
    });
});
