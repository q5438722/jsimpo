'use strict';
const {isBlockComment} = require('./utils.js');
const ignoredProperties = new Set([
    'range',
    'raw',
    'comments',
    'leadingComments',
    'trailingComments',
    'innerComments',
    'extra',
    'start',
    'end',
    'loc',
    'flags',
    'errors',
    'tokens'
]);
const removeTemplateElementsValue = _0xa78d4d => {
    for (const _0x42bdf1 of _0xa78d4d['quasis']) {
        if ('hzDuj' === 'hzDuj') {
            delete _0x42bdf1['value'];
        } else {
            newObj['decimal'] = Number(newObj['decimal']);
        }
    }
};
function clean(_0x2d4268, _0x1a49eb, _0x4a8284) {
    if (_0x2d4268['type'] === 'Program') {
        delete _0x1a49eb['sourceType'];
    }
    if (_0x2d4268['type'] === 'BigIntLiteral' || _0x2d4268['type'] === 'BigIntLiteralTypeAnnotation') {
        if (_0x1a49eb['value']) {
            _0x1a49eb['value'] = _0x1a49eb['value']['toLowerCase']();
        }
    }
    if (_0x2d4268['type'] === 'BigIntLiteral' || _0x2d4268['type'] === 'Literal') {
        if (_0x1a49eb['bigint']) {
            if ('wGowS' === 'lIplH') {
                removeTemplateElementsValue(prop['value']['elements'][0]);
            } else {
                _0x1a49eb['bigint'] = _0x1a49eb['bigint']['toLowerCase']();
            }
        }
    }
    if (_0x2d4268['type'] === 'DecimalLiteral') {
        if ('BGNYl' !== 'BGNYl') {
            delete templateElement['value'];
        } else {
            _0x1a49eb['value'] = Number(_0x1a49eb['value']);
        }
    }
    if (_0x2d4268['type'] === 'Literal' && _0x1a49eb['decimal']) {
        _0x1a49eb['decimal'] = Number(_0x1a49eb['decimal']);
    }
    if (_0x2d4268['type'] === 'EmptyStatement') {
        if ('GnxEh' === 'IUiLF') {
            if (_0x1a49eb['bigint']) {
                _0x1a49eb['bigint'] = _0x1a49eb['bigint']['toLowerCase']();
            }
        } else {
            return null;
        }
    }
    if (_0x2d4268['type'] === 'JSXText') {
        return null;
    }
    if (_0x2d4268['type'] === 'JSXExpressionContainer' && (_0x2d4268['expression']['type'] === 'Literal' || _0x2d4268['expression']['type'] === 'StringLiteral') && _0x2d4268['expression']['value'] === ' ') {
        return null;
    }
    if ((_0x2d4268['type'] === 'Property' || _0x2d4268['type'] === 'ObjectProperty' || _0x2d4268['type'] === 'MethodDefinition' || _0x2d4268['type'] === 'ClassProperty' || _0x2d4268['type'] === 'ClassMethod' || _0x2d4268['type'] === 'PropertyDefinition' || _0x2d4268['type'] === 'TSDeclareMethod' || _0x2d4268['type'] === 'TSPropertySignature' || _0x2d4268['type'] === 'ObjectTypeProperty') && typeof _0x2d4268['key'] === 'object' && _0x2d4268['key'] && (_0x2d4268['key']['type'] === 'Literal' || _0x2d4268['key']['type'] === 'NumericLiteral' || _0x2d4268['key']['type'] === 'StringLiteral' || _0x2d4268['key']['type'] === 'Identifier')) {
        delete _0x1a49eb['key'];
    }
    if (_0x2d4268['type'] === 'JSXElement' && _0x2d4268['openingElement']['name']['name'] === 'style' && _0x2d4268['openingElement']['attributes']['some'](_0x14674e => _0x14674e['name']['name'] === 'jsx')) {
        for (const {type, expression} of _0x1a49eb['children']) {
            if (type === 'JSXExpressionContainer' && _0x663200['type'] === 'TemplateLiteral') {
                removeTemplateElementsValue(_0x663200);
            }
        }
    }
    if (_0x2d4268['type'] === 'JSXAttribute' && _0x2d4268['name']['name'] === 'css' && _0x2d4268['value']['type'] === 'JSXExpressionContainer' && _0x2d4268['value']['expression']['type'] === 'TemplateLiteral') {
        if ('JqbOJ' === 'JqbOJ') {
            removeTemplateElementsValue(_0x1a49eb['value']['expression']);
        } else {
            removeTemplateElementsValue(prop['value']);
        }
    }
    if (_0x2d4268['type'] === 'JSXAttribute' && _0x2d4268['value'] && _0x2d4268['value']['type'] === 'Literal' && /["']|&quot;|&apos;/['test'](_0x2d4268['value']['value'])) {
        _0x1a49eb['value']['value'] = _0x1a49eb['value']['value']['replace'](/["']|&quot;|&apos;/g, '"');
    }
    const _0x663200 = _0x2d4268['expression'] || _0x2d4268['callee'];
    if (_0x2d4268['type'] === 'Decorator' && _0x663200['type'] === 'CallExpression' && _0x663200['callee']['name'] === 'Component' && _0x663200['arguments']['length'] === 1) {
        const _0xc39e30 = _0x2d4268['expression']['arguments'][0]['properties'];
        for (const [_0x6c7f70, _0x3e1afa] of _0x1a49eb['expression']['arguments'][0]['properties']['entries']()) {
            if ('bAYdB' !== 'TntIC') {
                switch (_0xc39e30[_0x6c7f70]['key']['name']) {
                case 'styles':
                    if (_0x3e1afa['value']['type'] === 'ArrayExpression') {
                        if ('jeMCc' !== 'jeMCc') {
                            for (const {type, _0x663200} of _0x1a49eb['children']) {
                                if (type === 'JSXExpressionContainer' && _0x663200['type'] === 'TemplateLiteral') {
                                    removeTemplateElementsValue(_0x663200);
                                }
                            }
                        } else {
                            removeTemplateElementsValue(_0x3e1afa['value']['elements'][0]);
                        }
                    }
                    break;
                case 'template':
                    if (_0x3e1afa['value']['type'] === 'TemplateLiteral') {
                        if ('oGrNx' !== 'oGrNx') {
                            return null;
                        } else {
                            removeTemplateElementsValue(_0x3e1afa['value']);
                        }
                    }
                    break;
                }
            } else {
                _0x1a49eb['bigint'] = _0x1a49eb['bigint']['toLowerCase']();
            }
        }
    }
    if (_0x2d4268['type'] === 'TaggedTemplateExpression' && (_0x2d4268['tag']['type'] === 'MemberExpression' || _0x2d4268['tag']['type'] === 'Identifier' && (_0x2d4268['tag']['name'] === 'gql' || _0x2d4268['tag']['name'] === 'graphql' || _0x2d4268['tag']['name'] === 'css' || _0x2d4268['tag']['name'] === 'md' || _0x2d4268['tag']['name'] === 'markdown' || _0x2d4268['tag']['name'] === 'html') || _0x2d4268['tag']['type'] === 'CallExpression')) {
        removeTemplateElementsValue(_0x1a49eb['quasi']);
    }
    if (_0x2d4268['type'] === 'TemplateLiteral') {
        if ('OfijN' !== 'wdwni') {
            const _0x5d7cec = _0x2d4268['leadingComments'] && _0x2d4268['leadingComments']['some'](_0x2f50f2 => isBlockComment(_0x2f50f2) && [
                'GraphQL',
                'HTML'
            ]['some'](_0xe95a98 => _0x2f50f2['value'] === ' ' + _0xe95a98 + ' '));
            if (_0x5d7cec || _0x4a8284['type'] === 'CallExpression' && _0x4a8284['callee']['name'] === 'graphql' || !_0x2d4268['leadingComments']) {
                removeTemplateElementsValue(_0x1a49eb);
            }
        } else {
            _0x1a49eb['value'] = _0x1a49eb['value']['toLowerCase']();
        }
    }
    if (_0x2d4268['type'] === 'InterpreterDirective') {
        _0x1a49eb['value'] = _0x1a49eb['value']['trimEnd']();
    }
    if ((_0x2d4268['type'] === 'TSIntersectionType' || _0x2d4268['type'] === 'TSUnionType') && _0x2d4268['types']['length'] === 1) {
        return _0x1a49eb['types'][0];
    }
}
clean['ignoredProperties'] = ignoredProperties;
module['exports'] = clean;