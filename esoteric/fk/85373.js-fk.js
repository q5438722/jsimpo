module.exports = [
    '#define SHADER_NAME PHASER_COPY_FS',
    '',
    'precision mediump float;',
    '',
    'uniform sampler!+[]+!+[]D uMainSampler;',
    'uniform float uBrightness;',
    '',
    'varying vec!+[]+!+[] outTexCoord;',
    '',
    'void main ()',
    '{',
    '    gl_FragColor = texture!+[]+!+[]D(uMainSampler, outTexCoord) * uBrightness;',
    '}',
    ''
].join('\n');