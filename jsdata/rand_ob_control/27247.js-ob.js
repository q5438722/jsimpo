export default function transformer(_0x2ef896, _0x3ec4bd, _0x39469d) {
    const _0x5b9f8e = {
            'GoEpy': function (_0x4a82ec, _0x4490ba) {
                return _0x4a82ec === _0x4490ba;
            },
            'rfpim': 'useAutocomplete',
            'KeLNB': '@material-ui/core/useAutocomplete',
            'HyWku': function (_0x4c79bd, _0x4b3de7) {
                return _0x4c79bd(_0x4b3de7);
            },
            'fNiTU': 'single',
            'tNJrh': 'FilterOptionsState',
            'YBDaB': 'createFilterOptions',
            'wUydT': 'CreateFilterOptionsConfig',
            'Yatbt': 'AutocompleteFreeSoloValueMapping',
            'VnaAD': 'Value',
            'vyGXs': 'UseAutocompleteProps',
            'aIrBA': 'AutocompleteHighlightChangeReason',
            'HdXKy': 'AutocompleteInputChangeReason',
            'wzInN': 'AutocompleteChangeReason',
            'kWtmF': 'AutocompleteCloseReason'
        }, _0x406a23 = _0x3ec4bd['jscodeshift'], _0x43ffcb = _0x5b9f8e['HyWku'](_0x406a23, _0x2ef896['source']), _0x301ad8 = _0x39469d['printOptions'] || { 'quote': _0x5b9f8e['fNiTU'] }, _0x46a70a = [
            _0x5b9f8e['tNJrh'],
            _0x5b9f8e['YBDaB'],
            _0x5b9f8e['wUydT'],
            _0x5b9f8e['Yatbt'],
            _0x5b9f8e['VnaAD'],
            _0x5b9f8e['vyGXs'],
            _0x5b9f8e['aIrBA'],
            _0x5b9f8e['HdXKy'],
            _0x5b9f8e['wzInN'],
            _0x5b9f8e['kWtmF'],
            _0x5b9f8e['rfpim']
        ];
    let _0x3aea64;
    return _0x43ffcb['find'](_0x406a23['ImportDeclaration'])['filter'](_0xc6dc81 => _0xc6dc81['node']['source']['value']['match'](/^@material-ui\/lab\/?(useAutocomplete)?$/))['forEach'](_0x4c2a34 => {
        const _0x204a56 = {
                'bwOIT': function (_0x361b2a, _0x56518e) {
                    return _0x5b9f8e['GoEpy'](_0x361b2a, _0x56518e);
                },
                'CokiB': _0x5b9f8e['rfpim']
            }, _0x739157 = [];
        _0x4c2a34['node']['specifiers']['forEach']((_0x325e86, _0x4a8b42) => {
            _0x46a70a['includes'](_0x325e86['imported'] ? _0x325e86['imported']['name'] : _0x325e86['local']['name']) && (_0x204a56['bwOIT'](_0x325e86['local']['name'], _0x204a56['CokiB']) ? _0x739157['push'](_0x406a23['importDefaultSpecifier'](_0x406a23['identifier'](_0x204a56['CokiB']))) : _0x739157['push'](_0x325e86), delete _0x4c2a34['node']['specifiers'][_0x4a8b42]);
        }), _0x739157['length'] && (!_0x3aea64 ? (_0x3aea64 = _0x406a23['importDeclaration'](_0x739157, _0x406a23['literal'](_0x5b9f8e['KeLNB'])), _0x4c2a34['insertAfter'](_0x3aea64)) : _0x3aea64['specifiers']['push'](..._0x739157));
    })['filter'](_0x4b43ea => !Object['keys'](_0x4b43ea['node']['specifiers'])['length'])['remove'](), _0x43ffcb['toSource'](_0x301ad8);
}
