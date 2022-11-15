export default function () {
    return function ({
        addUtilities: addUtilities,
        variants: variants
    }) {
        addUtilities({ '.appearance-none': { 'appearance': 'none' } }, variants('appearance'));
    };
}
