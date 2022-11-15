export default function transformer(_0x229981, _0x1dba63, _0x57b143) {
    const _0x508825 = _0x1dba63['jscodeshift'], _0x2a35da = _0x508825(_0x229981['source']), _0x56227e = _0x57b143['printOptions'] || { 'quote': 'single' }, _0x6a57a2 = [
            'FilterOptionsState',
            'createFilterOptions',
            'CreateFilterOptionsConfig',
            'AutocompleteFreeSoloValueMapping',
            'Value',
            'UseAutocompleteProps',
            'AutocompleteHighlightChangeReason',
            'AutocompleteInputChangeReason',
            'AutocompleteChangeReason',
            'AutocompleteCloseReason',
            'useAutocomplete'
        ];
    let _0x31aa6f;
    return _0x2a35da['find'](_0x508825['ImportDeclaration'])['filter'](_0x11b135 => _0x11b135['node']['source']['value']['match'](/^@material-ui\/lab\/?(useAutocomplete)?$/))['forEach'](_0x156781 => {
        const _0x442174 = [];
        _0x156781['node']['specifiers']['forEach']((_0x37a888, _0x261554) => {
            _0x6a57a2['includes'](_0x37a888['imported'] ? _0x37a888['imported']['name'] : _0x37a888['local']['name']) && (_0x37a888['local']['name'] === 'useAutocomplete' ? _0x442174['push'](_0x508825['importDefaultSpecifier'](_0x508825['identifier']('useAutocomplete'))) : _0x442174['push'](_0x37a888), delete _0x156781['node']['specifiers'][_0x261554]);
        }), _0x442174['length'] && (!_0x31aa6f ? (_0x31aa6f = _0x508825['importDeclaration'](_0x442174, _0x508825['literal']('@material-ui/core/useAutocomplete')), _0x156781['insertAfter'](_0x31aa6f)) : _0x31aa6f['specifiers']['push'](..._0x442174));
    })['filter'](_0x131c91 => !Object['keys'](_0x131c91['node']['specifiers'])['length'])['remove'](), _0x2a35da['toSource'](_0x56227e);
}
