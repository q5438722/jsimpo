import _0x5b8ae5 from 'dayjs';
const locale = {
    'name': 'mt',
    'weekdays': 'Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt'['split']('_'),
    'months': 'Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru'['split']('_'),
    'weekStart': 0x1,
    'weekdaysShort': 'Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib'['split']('_'),
    'monthsShort': 'Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ'['split']('_'),
    'weekdaysMin': 'Ħa_Tn_Tl_Er_Ħa_Ġi_Si'['split']('_'),
    'ordinal': _0x490264 => _0x490264,
    'formats': {
        'LT': 'HH:mm',
        'LTS': 'HH:mm:ss',
        'L': 'DD/MM/YYYY',
        'LL': 'D\x20MMMM\x20YYYY',
        'LLL': 'D\x20MMMM\x20YYYY\x20HH:mm',
        'LLLL': 'dddd,\x20D\x20MMMM\x20YYYY\x20HH:mm'
    },
    'relativeTime': {
        'future': 'f’\x20%s',
        'past': '%s\x20ilu',
        's': 'ftit\x20sekondi',
        'm': 'minuta',
        'mm': '%d\x20minuti',
        'h': 'siegħa',
        'hh': '%d\x20siegħat',
        'd': 'ġurnata',
        'dd': '%d\x20ġranet',
        'M': 'xahar',
        'MM': '%d\x20xhur',
        'y': 'sena',
        'yy': '%d\x20sni'
    }
};
_0x5b8ae5['locale'](locale, null, !![]);
export default locale;
