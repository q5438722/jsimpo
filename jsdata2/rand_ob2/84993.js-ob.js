'use strict';
const _0x416e = [
    'webpackAliases',
    'pre',
    'source-map-loader',
    'image/avif',
    'asset',
    'file-loader',
    'babel-preset-react-app/webpack-overrides',
    'classic',
    'babel-plugin-named-asset-import',
    'react-scripts',
    'react-refresh/babel',
    'react-dev-utils',
    'icss',
    'local',
    'asset/resource',
    'appHtml',
    'appPath',
    'DefinePlugin',
    'static/css/[name].[contenthash:8].css',
    'static/css/[name].[contenthash:8].chunk.css',
    'asset-manifest.json',
    'reduce',
    'name',
    'main',
    'endsWith',
    'InjectManifest',
    'sync',
    'typescript',
    'appTsBuildInfoFile',
    'write-references',
    '../**/src/**/*.{ts,tsx}',
    '**/src/**/*.{ts,tsx}',
    '**/src/**/__tests__/**',
    '**/src/**/?(*.){spec|test}.*',
    '**/src/setupProxy.*',
    '**/src/setupTests.*',
    'mjs',
    'jsx',
    'tsx',
    'react-dev-utils/eslintFormatter',
    'eslint',
    '.cache/.eslintcache',
    'eslint-config-react-app/base',
    'error',
    '722500JKaNur',
    '2odOyIT',
    '819077QswWha',
    '726FiUymz',
    '609uBvPub',
    '481QFvvTj',
    '3191vEHIdM',
    '1383595undDIg',
    '11787rdHqGl',
    '9nYRUOI',
    '2148850lVNRyl',
    'path',
    'webpack',
    'resolve',
    'html-webpack-plugin',
    'case-sensitive-paths-webpack-plugin',
    'react-dev-utils/InlineChunkHtmlPlugin',
    'mini-css-extract-plugin',
    'webpack-manifest-plugin',
    'react-dev-utils/InterpolateHtmlPlugin',
    'workbox-webpack-plugin',
    'react-dev-utils/ModuleScopePlugin',
    'react-dev-utils/getCSSModuleLocalIdent',
    'eslint-webpack-plugin',
    './paths',
    './env',
    'react-dev-utils/ModuleNotFoundPlugin',
    'env',
    'TSC_COMPILE_ON_ERROR',
    'true',
    'react-dev-utils/ForkTsCheckerWarningWebpackPlugin',
    'react-dev-utils/ForkTsCheckerWebpackPlugin',
    '@pmmmwh/react-refresh-webpack-plugin',
    './webpack/persistentCache/createEnvironmentHash',
    'GENERATE_SOURCEMAP',
    'false',
    'react-refresh/runtime',
    'babel-preset-react-app',
    '@babel/runtime/regenerator',
    'ESLINT_NO_DEV_ERRORS',
    'DISABLE_ESLINT_PLUGIN',
    'IMAGE_INLINE_SIZE_LIMIT',
    'existsSync',
    'appTsConfig',
    'swSrc',
    'DISABLE_NEW_JSX_TRANSFORM',
    'react/jsx-runtime',
    'development',
    'production',
    'includes',
    '--profile',
    'publicUrlOrPath',
    'slice',
    'raw',
    'FAST_REFRESH',
    'style-loader',
    'loader',
    'startsWith',
    '../../',
    'css-loader',
    'postcss-loader',
    'postcss',
    'postcss-flexbugs-fixes',
    'postcss-normalize',
    'filter',
    'resolve-url-loader',
    'appSrc',
    'browserslist',
    'source-map',
    'cheap-module-source-map',
    'appIndexJs',
    'appBuild',
    'static/js/[name].[contenthash:8].js',
    'static/js/bundle.js',
    'static/js/[name].chunk.js',
    'static/media/[name].[hash][ext]',
    'relative',
    'replace',
    'filesystem',
    'pack',
    'webpack/lib/',
    'appJsConfig',
    'none',
    'node_modules',
    'appNodeModules',
    'concat',
    'additionalModulePaths',
    'moduleFileExtensions',
    'map',
    'react-native-web',
    'react-dom/profiling',
    'scheduler/tracing-profiling'
];
const _0x874d66 = _0x17c4;
(function (_0x29e8aa, _0x58b80b) {
    const _0x3cf326 = _0x17c4;
    while (!![]) {
        try {
            const _0x5278b0 = parseInt(_0x3cf326(0xcc)) + -parseInt(_0x3cf326(0xcd)) * -parseInt(_0x3cf326(0xce)) + -parseInt(_0x3cf326(0xcf)) * -parseInt(_0x3cf326(0xd0)) + -parseInt(_0x3cf326(0xd1)) * -parseInt(_0x3cf326(0xd2)) + -parseInt(_0x3cf326(0xd3)) + -parseInt(_0x3cf326(0xd4)) * -parseInt(_0x3cf326(0xd5)) + -parseInt(_0x3cf326(0xd6));
            if (_0x5278b0 === _0x58b80b)
                break;
            else
                _0x29e8aa['push'](_0x29e8aa['shift']());
        } catch (_0x4b019e) {
            _0x29e8aa['push'](_0x29e8aa['shift']());
        }
    }
}(_0x416e, 0xde7c1));
const fs = require('fs'), path = require(_0x874d66(0xd7)), webpack = require(_0x874d66(0xd8)), resolve = require(_0x874d66(0xd9)), HtmlWebpackPlugin = require(_0x874d66(0xda)), CaseSensitivePathsPlugin = require(_0x874d66(0xdb)), InlineChunkHtmlPlugin = require(_0x874d66(0xdc)), TerserPlugin = require('terser-webpack-plugin'), MiniCssExtractPlugin = require(_0x874d66(0xdd)), CssMinimizerPlugin = require('css-minimizer-webpack-plugin'), {WebpackManifestPlugin} = require(_0x874d66(0xde)), InterpolateHtmlPlugin = require(_0x874d66(0xdf)), WorkboxWebpackPlugin = require(_0x874d66(0xe0)), ModuleScopePlugin = require(_0x874d66(0xe1)), getCSSModuleLocalIdent = require(_0x874d66(0xe2)), ESLintPlugin = require(_0x874d66(0xe3)), paths = require(_0x874d66(0xe4)), modules = require('./modules'), getClientEnvironment = require(_0x874d66(0xe5)), ModuleNotFoundPlugin = require(_0x874d66(0xe6)), ForkTsCheckerWebpackPlugin = process[_0x874d66(0xe7)][_0x874d66(0xe8)] === _0x874d66(0xe9) ? require(_0x874d66(0xea)) : require(_0x874d66(0xeb)), ReactRefreshWebpackPlugin = require(_0x874d66(0xec)), getCacheIdentifier = require('react-dev-utils/getCacheIdentifier'), createEnvironmentHash = require(_0x874d66(0xed)), shouldUseSourceMap = process[_0x874d66(0xe7)][_0x874d66(0xee)] !== _0x874d66(0xef), reactRefreshRuntimeEntry = require['resolve'](_0x874d66(0xf0)), reactRefreshWebpackPluginRuntimeEntry = require[_0x874d66(0xd9)](_0x874d66(0xec)), babelRuntimeEntry = require['resolve'](_0x874d66(0xf1)), babelRuntimeEntryHelpers = require[_0x874d66(0xd9)]('@babel/runtime/helpers/esm/assertThisInitialized'), babelRuntimeRegenerator = require['resolve'](_0x874d66(0xf2)), shouldInlineRuntimeChunk = process[_0x874d66(0xe7)]['INLINE_RUNTIME_CHUNK'] !== _0x874d66(0xef), emitErrorsAsWarnings = process[_0x874d66(0xe7)][_0x874d66(0xf3)] === 'true', disableESLintPlugin = process[_0x874d66(0xe7)][_0x874d66(0xf4)] === _0x874d66(0xe9), imageInlineSizeLimit = parseInt(process[_0x874d66(0xe7)][_0x874d66(0xf5)] || '10000'), useTypeScript = fs[_0x874d66(0xf6)](paths[_0x874d66(0xf7)]), swSrc = paths[_0x874d66(0xf8)], cssRegex = /\.css$/, cssModuleRegex = /\.module\.css$/, sassRegex = /\.(scss|sass)$/, sassModuleRegex = /\.module\.(scss|sass)$/, hasJsxRuntime = (() => {
        const _0x3aac36 = _0x874d66;
        if (process[_0x3aac36(0xe7)][_0x3aac36(0xf9)] === 'true')
            return ![];
        try {
            return require['resolve'](_0x3aac36(0xfa)), !![];
        } catch (_0x2ae889) {
            return ![];
        }
    })();
function _0x17c4(_0x12b3a7, _0x5c6c6d) {
    return _0x17c4 = function (_0x416ecb, _0x17c44a) {
        _0x416ecb = _0x416ecb - 0xcc;
        let _0x34e6c8 = _0x416e[_0x416ecb];
        return _0x34e6c8;
    }, _0x17c4(_0x12b3a7, _0x5c6c6d);
}
module['exports'] = function (_0x3112f7) {
    const _0x403610 = _0x874d66, _0x39693b = _0x3112f7 === _0x403610(0xfb), _0x3532df = _0x3112f7 === _0x403610(0xfc), _0x1e99bd = _0x3532df && process['argv'][_0x403610(0xfd)](_0x403610(0xfe)), _0xb89533 = getClientEnvironment(paths[_0x403610(0xff)][_0x403610(0x100)](0x0, -0x1)), _0x2c743f = _0xb89533[_0x403610(0x101)][_0x403610(0x102)], _0x4693dd = (_0x5792ad, _0x5ad5ca) => {
            const _0x3a33de = _0x403610, _0x1b8afd = [
                    _0x39693b && require[_0x3a33de(0xd9)](_0x3a33de(0x103)),
                    _0x3532df && {
                        'loader': MiniCssExtractPlugin[_0x3a33de(0x104)],
                        'options': paths[_0x3a33de(0xff)][_0x3a33de(0x105)]('.') ? { 'publicPath': _0x3a33de(0x106) } : {}
                    },
                    {
                        'loader': require['resolve'](_0x3a33de(0x107)),
                        'options': _0x5792ad
                    },
                    {
                        'loader': require['resolve'](_0x3a33de(0x108)),
                        'options': {
                            'postcssOptions': {
                                'ident': _0x3a33de(0x109),
                                'plugins': [
                                    _0x3a33de(0x10a),
                                    [
                                        'postcss-preset-env',
                                        {
                                            'autoprefixer': { 'flexbox': 'no-2009' },
                                            'stage': 0x3
                                        }
                                    ],
                                    _0x3a33de(0x10b)
                                ]
                            },
                            'sourceMap': _0x3532df ? shouldUseSourceMap : _0x39693b
                        }
                    }
                ][_0x3a33de(0x10c)](Boolean);
            return _0x5ad5ca && _0x1b8afd['push']({
                'loader': require[_0x3a33de(0xd9)](_0x3a33de(0x10d)),
                'options': {
                    'sourceMap': _0x3532df ? shouldUseSourceMap : _0x39693b,
                    'root': paths[_0x3a33de(0x10e)]
                }
            }, {
                'loader': require['resolve'](_0x5ad5ca),
                'options': { 'sourceMap': !![] }
            }), _0x1b8afd;
        };
    return {
        'target': [_0x403610(0x10f)],
        'mode': _0x3532df ? _0x403610(0xfc) : _0x39693b && _0x403610(0xfb),
        'bail': _0x3532df,
        'devtool': _0x3532df ? shouldUseSourceMap ? _0x403610(0x110) : ![] : _0x39693b && _0x403610(0x111),
        'entry': paths[_0x403610(0x112)],
        'output': {
            'path': paths[_0x403610(0x113)],
            'pathinfo': _0x39693b,
            'filename': _0x3532df ? _0x403610(0x114) : _0x39693b && _0x403610(0x115),
            'chunkFilename': _0x3532df ? 'static/js/[name].[contenthash:8].chunk.js' : _0x39693b && _0x403610(0x116),
            'assetModuleFilename': _0x403610(0x117),
            'publicPath': paths[_0x403610(0xff)],
            'devtoolModuleFilenameTemplate': _0x3532df ? _0xb7416b => path[_0x403610(0x118)](paths[_0x403610(0x10e)], _0xb7416b['absoluteResourcePath'])['replace'](/\\/g, '/') : _0x39693b && (_0x57d428 => path['resolve'](_0x57d428['absoluteResourcePath'])[_0x403610(0x119)](/\\/g, '/'))
        },
        'cache': {
            'type': _0x403610(0x11a),
            'version': createEnvironmentHash(_0xb89533[_0x403610(0x101)]),
            'cacheDirectory': paths['appWebpackCache'],
            'store': _0x403610(0x11b),
            'buildDependencies': {
                'defaultWebpack': [_0x403610(0x11c)],
                'config': [__filename],
                'tsconfig': [
                    paths[_0x403610(0xf7)],
                    paths[_0x403610(0x11d)]
                ][_0x403610(0x10c)](_0x4a154a => fs[_0x403610(0xf6)](_0x4a154a))
            }
        },
        'infrastructureLogging': { 'level': _0x403610(0x11e) },
        'optimization': {
            'minimize': _0x3532df,
            'minimizer': [
                new TerserPlugin({
                    'terserOptions': {
                        'parse': { 'ecma': 0x8 },
                        'compress': {
                            'ecma': 0x5,
                            'warnings': ![],
                            'comparisons': ![],
                            'inline': 0x2
                        },
                        'mangle': { 'safari10': !![] },
                        'keep_classnames': _0x1e99bd,
                        'keep_fnames': _0x1e99bd,
                        'output': {
                            'ecma': 0x5,
                            'comments': ![],
                            'ascii_only': !![]
                        }
                    }
                }),
                new CssMinimizerPlugin()
            ]
        },
        'resolve': {
            'modules': [
                _0x403610(0x11f),
                paths[_0x403610(0x120)]
            ][_0x403610(0x121)](modules[_0x403610(0x122)] || []),
            'extensions': paths[_0x403610(0x123)][_0x403610(0x124)](_0xe9a72b => '.' + _0xe9a72b)[_0x403610(0x10c)](_0x5cdc9a => useTypeScript || !_0x5cdc9a[_0x403610(0xfd)]('ts')),
            'alias': {
                'react-native': _0x403610(0x125),
                ..._0x1e99bd && {
                    'react-dom$': _0x403610(0x126),
                    'scheduler/tracing': _0x403610(0x127)
                },
                ...modules[_0x403610(0x128)] || {}
            },
            'plugins': [new ModuleScopePlugin(paths[_0x403610(0x10e)], [
                    paths['appPackageJson'],
                    reactRefreshRuntimeEntry,
                    reactRefreshWebpackPluginRuntimeEntry,
                    babelRuntimeEntry,
                    babelRuntimeEntryHelpers,
                    babelRuntimeRegenerator
                ])]
        },
        'module': {
            'strictExportPresence': !![],
            'rules': [
                shouldUseSourceMap && {
                    'enforce': _0x403610(0x129),
                    'exclude': /@babel(?:\/|\\{1,2})runtime/,
                    'test': /\.(js|mjs|jsx|ts|tsx|css)$/,
                    'use': _0x403610(0x12a)
                },
                {
                    'oneOf': [
                        {
                            'test': [/\.avif$/],
                            'type': 'asset',
                            'mimetype': _0x403610(0x12b),
                            'parser': { 'dataUrlCondition': { 'maxSize': imageInlineSizeLimit } }
                        },
                        {
                            'test': [
                                /\.bmp$/,
                                /\.gif$/,
                                /\.jpe?g$/,
                                /\.png$/
                            ],
                            'type': _0x403610(0x12c),
                            'parser': { 'dataUrlCondition': { 'maxSize': imageInlineSizeLimit } }
                        },
                        {
                            'test': /\.svg$/,
                            'use': [
                                {
                                    'loader': '@svgr/webpack',
                                    'options': {
                                        'prettier': ![],
                                        'svgo': ![],
                                        'svgoConfig': { 'plugins': [{ 'removeViewBox': ![] }] },
                                        'titleProp': !![],
                                        'ref': !![]
                                    }
                                },
                                {
                                    'loader': _0x403610(0x12d),
                                    'options': { 'name': 'static/media/[name].[hash].[ext]' }
                                }
                            ],
                            'issuer': { 'and': [/\.(ts|tsx|js|jsx|md|mdx)$/] }
                        },
                        {
                            'test': /\.(js|mjs|jsx|ts|tsx)$/,
                            'include': paths[_0x403610(0x10e)],
                            'loader': require['resolve']('babel-loader'),
                            'options': {
                                'customize': require[_0x403610(0xd9)](_0x403610(0x12e)),
                                'presets': [[
                                        require[_0x403610(0xd9)](_0x403610(0xf1)),
                                        { 'runtime': hasJsxRuntime ? 'automatic' : _0x403610(0x12f) }
                                    ]],
                                'babelrc': ![],
                                'configFile': ![],
                                'cacheIdentifier': getCacheIdentifier(_0x3532df ? _0x403610(0xfc) : _0x39693b && 'development', [
                                    _0x403610(0x130),
                                    'babel-preset-react-app',
                                    'react-dev-utils',
                                    _0x403610(0x131)
                                ]),
                                'plugins': [_0x39693b && _0x2c743f && require[_0x403610(0xd9)](_0x403610(0x132))][_0x403610(0x10c)](Boolean),
                                'cacheDirectory': !![],
                                'cacheCompression': ![],
                                'compact': _0x3532df
                            }
                        },
                        {
                            'test': /\.(js|mjs)$/,
                            'exclude': /@babel(?:\/|\\{1,2})runtime/,
                            'loader': require[_0x403610(0xd9)]('babel-loader'),
                            'options': {
                                'babelrc': ![],
                                'configFile': ![],
                                'compact': ![],
                                'presets': [[
                                        require['resolve']('babel-preset-react-app/dependencies'),
                                        { 'helpers': !![] }
                                    ]],
                                'cacheDirectory': !![],
                                'cacheCompression': ![],
                                'cacheIdentifier': getCacheIdentifier(_0x3532df ? _0x403610(0xfc) : _0x39693b && 'development', [
                                    _0x403610(0x130),
                                    _0x403610(0xf1),
                                    _0x403610(0x133),
                                    _0x403610(0x131)
                                ]),
                                'sourceMaps': shouldUseSourceMap,
                                'inputSourceMap': shouldUseSourceMap
                            }
                        },
                        {
                            'test': cssRegex,
                            'exclude': cssModuleRegex,
                            'use': _0x4693dd({
                                'importLoaders': 0x1,
                                'sourceMap': _0x3532df ? shouldUseSourceMap : _0x39693b,
                                'modules': { 'mode': _0x403610(0x134) }
                            }),
                            'sideEffects': !![]
                        },
                        {
                            'test': cssModuleRegex,
                            'use': _0x4693dd({
                                'importLoaders': 0x1,
                                'sourceMap': _0x3532df ? shouldUseSourceMap : _0x39693b,
                                'modules': {
                                    'mode': _0x403610(0x135),
                                    'getLocalIdent': getCSSModuleLocalIdent
                                }
                            })
                        },
                        {
                            'test': sassRegex,
                            'exclude': sassModuleRegex,
                            'use': _0x4693dd({
                                'importLoaders': 0x3,
                                'sourceMap': _0x3532df ? shouldUseSourceMap : _0x39693b,
                                'modules': { 'mode': _0x403610(0x134) }
                            }, 'sass-loader'),
                            'sideEffects': !![]
                        },
                        {
                            'test': sassModuleRegex,
                            'use': _0x4693dd({
                                'importLoaders': 0x3,
                                'sourceMap': _0x3532df ? shouldUseSourceMap : _0x39693b,
                                'modules': {
                                    'mode': _0x403610(0x135),
                                    'getLocalIdent': getCSSModuleLocalIdent
                                }
                            }, 'sass-loader')
                        },
                        {
                            'exclude': [
                                /^$/,
                                /\.(js|mjs|jsx|ts|tsx)$/,
                                /\.html$/,
                                /\.json$/
                            ],
                            'type': _0x403610(0x136)
                        }
                    ]
                }
            ][_0x403610(0x10c)](Boolean)
        },
        'plugins': [
            new HtmlWebpackPlugin(Object['assign']({}, {
                'inject': !![],
                'template': paths[_0x403610(0x137)]
            }, _0x3532df ? {
                'minify': {
                    'removeComments': !![],
                    'collapseWhitespace': !![],
                    'removeRedundantAttributes': !![],
                    'useShortDoctype': !![],
                    'removeEmptyAttributes': !![],
                    'removeStyleLinkTypeAttributes': !![],
                    'keepClosingSlash': !![],
                    'minifyJS': !![],
                    'minifyCSS': !![],
                    'minifyURLs': !![]
                }
            } : undefined)),
            _0x3532df && shouldInlineRuntimeChunk && new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime-.+[.]js/]),
            new InterpolateHtmlPlugin(HtmlWebpackPlugin, _0xb89533['raw']),
            new ModuleNotFoundPlugin(paths[_0x403610(0x138)]),
            new webpack[(_0x403610(0x139))](_0xb89533['stringified']),
            _0x39693b && _0x2c743f && new ReactRefreshWebpackPlugin({ 'overlay': ![] }),
            _0x39693b && new CaseSensitivePathsPlugin(),
            _0x3532df && new MiniCssExtractPlugin({
                'filename': _0x403610(0x13a),
                'chunkFilename': _0x403610(0x13b)
            }),
            new WebpackManifestPlugin({
                'fileName': _0x403610(0x13c),
                'publicPath': paths['publicUrlOrPath'],
                'generate': (_0x1becfe, _0x512236, _0x522d70) => {
                    const _0x49f177 = _0x403610, _0x10a4f8 = _0x512236[_0x49f177(0x13d)]((_0x17e8c0, _0x26016b) => {
                            const _0x42be87 = _0x49f177;
                            return _0x17e8c0[_0x26016b[_0x42be87(0x13e)]] = _0x26016b[_0x42be87(0xd7)], _0x17e8c0;
                        }, _0x1becfe), _0x3af51b = _0x522d70[_0x49f177(0x13f)][_0x49f177(0x10c)](_0xf5f64b => !_0xf5f64b[_0x49f177(0x140)]('.map'));
                    return {
                        'files': _0x10a4f8,
                        'entrypoints': _0x3af51b
                    };
                }
            }),
            new webpack['IgnorePlugin']({
                'resourceRegExp': /^\.\/locale$/,
                'contextRegExp': /moment$/
            }),
            _0x3532df && fs[_0x403610(0xf6)](swSrc) && new WorkboxWebpackPlugin[(_0x403610(0x141))]({
                'swSrc': swSrc,
                'dontCacheBustURLsMatching': /\.[0-9a-f]{8}\./,
                'exclude': [
                    /\.map$/,
                    /asset-manifest\.json$/,
                    /LICENSE/
                ],
                'maximumFileSizeToCacheInBytes': 0x5 * 0x400 * 0x400
            }),
            useTypeScript && new ForkTsCheckerWebpackPlugin({
                'async': _0x39693b,
                'typescript': {
                    'typescriptPath': resolve[_0x403610(0x142)](_0x403610(0x143), { 'basedir': paths[_0x403610(0x120)] }),
                    'configOverwrite': {
                        'compilerOptions': {
                            'sourceMap': _0x3532df ? shouldUseSourceMap : _0x39693b,
                            'skipLibCheck': !![],
                            'inlineSourceMap': ![],
                            'declarationMap': ![],
                            'noEmit': !![],
                            'incremental': !![],
                            'tsBuildInfoFile': paths[_0x403610(0x144)]
                        }
                    },
                    'context': paths[_0x403610(0x138)],
                    'diagnosticOptions': { 'syntactic': !![] },
                    'mode': _0x403610(0x145)
                },
                'issue': {
                    'include': [
                        { 'file': _0x403610(0x146) },
                        { 'file': _0x403610(0x147) }
                    ],
                    'exclude': [
                        { 'file': _0x403610(0x148) },
                        { 'file': _0x403610(0x149) },
                        { 'file': _0x403610(0x14a) },
                        { 'file': _0x403610(0x14b) }
                    ]
                },
                'logger': { 'infrastructure': 'silent' }
            }),
            !disableESLintPlugin && new ESLintPlugin({
                'extensions': [
                    'js',
                    _0x403610(0x14c),
                    _0x403610(0x14d),
                    'ts',
                    _0x403610(0x14e)
                ],
                'formatter': require[_0x403610(0xd9)](_0x403610(0x14f)),
                'eslintPath': require[_0x403610(0xd9)](_0x403610(0x150)),
                'failOnError': !(_0x39693b && emitErrorsAsWarnings),
                'context': paths[_0x403610(0x10e)],
                'cache': !![],
                'cacheLocation': path['resolve'](paths['appNodeModules'], _0x403610(0x151)),
                'cwd': paths[_0x403610(0x138)],
                'resolvePluginsRelativeTo': __dirname,
                'baseConfig': {
                    'extends': [require['resolve'](_0x403610(0x152))],
                    'rules': { ...!hasJsxRuntime && { 'react/react-in-jsx-scope': _0x403610(0x153) } }
                }
            })
        ][_0x403610(0x10c)](Boolean),
        'performance': ![]
    };
};
