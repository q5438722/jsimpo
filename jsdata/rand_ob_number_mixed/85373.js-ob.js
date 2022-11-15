module['exports'] = [
    '#define\x20SHADER_NAME\x20PHASER_COPY_FS',
    '',
    'precision\x20mediump\x20float;',
    '',
    'uniform\x20sampler2D\x20uMainSampler;',
    'uniform\x20float\x20uBrightness;',
    '',
    'varying\x20vec2\x20outTexCoord;',
    '',
    'void\x20main\x20()',
    '{',
    '\x20\x20\x20\x20gl_FragColor\x20=\x20texture2D(uMainSampler,\x20outTexCoord)\x20*\x20uBrightness;',
    '}',
    ''
]['join']('\x0a');
