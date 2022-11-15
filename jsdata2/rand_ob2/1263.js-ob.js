const _0x3ec5 = [
    'source.coffee:root-scope-used',
    'source.coffee',
    '::reopenItem()',
    'opens\x20the\x20uri\x20associated\x20with\x20the\x20last\x20closed\x20pane\x20that\x20isn\x27t\x20currently\x20open',
    'reopenItem',
    '::increase/decreaseFontSize()',
    'editor.fontSize',
    'increaseFontSize',
    'get',
    'decreaseFontSize',
    'resets\x20the\x20font\x20size\x20to\x20the\x20window\x27s\x20default\x20font\x20size',
    'editor.defaultFontSize',
    'resets\x20the\x20font\x20size\x20the\x20default\x20font\x20size\x20when\x20it\x20is\x20changed',
    'does\x20nothing\x20if\x20the\x20font\x20size\x20has\x20not\x20been\x20changed',
    'resets\x20the\x20font\x20size\x20when\x20the\x20editor\x27s\x20font\x20size\x20changes',
    '::openLicense()',
    'openLicense',
    '::isTextEditor(obj)',
    'isTextEditor',
    '::getActiveTextEditor()',
    'when\x20the\x20workspace\x20center\x27s\x20active\x20pane\x20item\x20is\x20a\x20text\x20editor',
    'returns\x20the\x20text\x20editor',
    'when\x20a\x20dock\x20has\x20focus',
    'when\x20the\x20workspace\x20center\x27s\x20active\x20pane\x20item\x20is\x20not\x20a\x20text\x20editor',
    'returns\x20undefined',
    'invokes\x20the\x20observer\x20with\x20current\x20and\x20future\x20text\x20editors',
    '::observeActiveTextEditor()',
    'invokes\x20the\x20observer\x20with\x20current\x20active\x20text\x20editor\x20and\x20each\x20time\x20a\x20different\x20text\x20editor\x20becomes\x20active',
    '::onDidChangeActiveTextEditor()',
    'invokes\x20the\x20observer\x20when\x20a\x20text\x20editor\x20becomes\x20the\x20workspace\x20center\x27s\x20active\x20pane\x20item\x20while\x20a\x20dock\x20has\x20focus',
    'onDidChangeActiveTextEditor',
    'invokes\x20the\x20observer\x20when\x20the\x20last\x20text\x20editor\x20is\x20closed',
    'destroyItem',
    'invokes\x20the\x20observer\x20when\x20the\x20workspace\x20center\x27s\x20active\x20pane\x20item\x20changes\x20from\x20an\x20editor\x20item\x20to\x20a\x20non-editor\x20item',
    'does\x20not\x20invoke\x20the\x20observer\x20when\x20the\x20workspace\x20center\x27s\x20active\x20pane\x20item\x20changes\x20from\x20a\x20non-editor\x20item\x20to\x20another\x20non-editor\x20item',
    'invokes\x20the\x20observer\x20when\x20closing\x20the\x20one\x20and\x20only\x20text\x20editor\x20after\x20deserialization',
    'closeActivePaneItemOrEmptyPaneOrWindow',
    'when\x20an\x20editor\x20is\x20destroyed',
    'removes\x20the\x20editor',
    'when\x20an\x20editor\x20is\x20copied\x20because\x20its\x20pane\x20is\x20split',
    'getGrammar',
    'JavaScript',
    'name',
    'language-todo',
    'sample.coffee',
    'initialize',
    'assign',
    'loadPackage',
    'getGrammars',
    'scopeName',
    'sort',
    'source.js',
    'source.js.regexp',
    'source.jsdoc',
    'source.litcoffee',
    'text.todo',
    'when\x20there\x20is\x20no\x20item\x20open',
    'sets\x20the\x20title\x20to\x20the\x20project\x20path',
    'title',
    'tildify',
    'sets\x20the\x20title\x20to\x20\x27untitled\x27\x20if\x20there\x20is\x20no\x20project\x20path',
    'sets\x20the\x20title\x20to\x20the\x20pane\x20item\x27s\x20title\x20plus\x20the\x20item\x27s\x20path',
    'dirname',
    'getTitle',
    'when\x20the\x20title\x20of\x20the\x20active\x20pane\x20item\x20changes',
    'buffer',
    'setPath',
    'join',
    'when\x20the\x20active\x20pane\x27s\x20item\x20changes',
    'updates\x20the\x20title\x20to\x20the\x20new\x20item\x27s\x20title\x20plus\x20the\x20project\x20path',
    'when\x20an\x20inactive\x20pane\x27s\x20item\x20changes',
    'does\x20not\x20update\x20the\x20title',
    'when\x20the\x20active\x20pane\x20item\x20is\x20inside\x20a\x20project\x20path',
    'when\x20there\x20is\x20an\x20active\x20pane\x20item',
    'sets\x20the\x20title\x20to\x20the\x20pane\x20item\x27s\x20title\x20plus\x20the\x20project\x20path',
    'updates\x20the\x20window\x20title\x20based\x20on\x20the\x20item\x27s\x20new\x20title',
    'updates\x20the\x20title\x20to\x20contain\x20the\x20project\x27s\x20path',
    'document\x20edited\x20status',
    'calls\x20setDocumentEdited\x20when\x20the\x20active\x20item\x20changes',
    'insertText',
    'isModified',
    'calls\x20atom.setDocumentEdited\x20when\x20the\x20active\x20item\x27s\x20modified\x20status\x20changes',
    'getStoppedChangingDelay',
    'undo',
    'getBuffer',
    'adding\x20panels',
    'constructor',
    'prototype',
    '__super__',
    'getModel',
    '::addLeftPanel(model)',
    'adds\x20a\x20panel\x20to\x20the\x20correct\x20panel\x20container',
    'getLeftPanels',
    'panelContainers',
    'addLeftPanel',
    'getView',
    'getItem',
    '::addRightPanel(model)',
    'addRightPanel',
    'getRightPanels',
    '::addTopPanel(model)',
    'getTopPanels',
    'onDidAddPanel',
    'addTopPanel',
    '::addBottomPanel(model)',
    'bottom',
    'getBottomPanels',
    '::addHeaderPanel(model)',
    'getHeaderPanels',
    'header',
    '::addFooterPanel(model)',
    'getFooterPanels',
    'footer',
    'addFooterPanel',
    '::addModalPanel(model)',
    'getModalPanels',
    'modal',
    'addModalPanel',
    '::panelForItem(item)',
    'returns\x20the\x20panel\x20associated\x20with\x20the\x20item',
    'panelForItem',
    'scan',
    'when\x20called\x20with\x20a\x20regex',
    'calls\x20the\x20callback\x20with\x20all\x20regex\x20results\x20in\x20all\x20files\x20in\x20the\x20project',
    'filePath',
    'localeCompare',
    'matches',
    'aaa',
    'aaa\x20bbb',
    'cc\x20aa\x20cc',
    'works\x20with\x20with\x20escaped\x20literals\x20(like\x20$\x20and\x20^)',
    'dollar$bill',
    'works\x20on\x20evil\x20filenames',
    'generateEvilFiles',
    'fixtures',
    'evil-files',
    'evil',
    'isWindows',
    'utfă.md',
    'ignores\x20case\x20if\x20the\x20regex\x20includes\x20the\x20`i`\x20flag',
    'oh-git',
    'a-dir',
    'file-with-newline-literal',
    'first\x0asecond\x5cnthird',
    'returns\x20correctly\x20the\x20context\x20lines',
    'first\x0asecond',
    'newline2',
    'newline3',
    'newline4',
    'newline5',
    'returns\x20multiple\x20results\x20from\x20the\x20same\x20line',
    'newline2\x0anewline3',
    'line4\x0ane',
    'newline4\x0anewline5',
    'second\x5cnthird',
    'pcre2\x20enabled',
    'supports\x20lookbehind\x20searches',
    'returns\x20results\x20on\x20lines\x20with\x20unicode\x20strings',
    'file-with-unicode',
    'line\x20with\x20unico',
    'file-detected-as-binary',
    'asciiProperty=Foo',
    'latin1Property=F��',
    'when\x20the\x20core.excludeVcsIgnoredPaths\x20config\x20is\x20used',
    'git',
    'Reader',
    'pipe',
    'error',
    'ignored.txt',
    'writeFileSync',
    'this\x20match\x20should\x20not\x20be\x20included',
    'existsSync',
    'removeSync',
    'core.excludeVcsIgnoredPaths',
    'does\x20not\x20exclude\x20ignored\x20files\x20when\x20core.excludeVcsIgnoredPaths\x20is\x20false',
    'does\x20not\x20exclude\x20files\x20when\x20searching\x20on\x20an\x20ignored\x20folder\x20even\x20when\x20core.excludeVcsIgnoredPaths\x20is\x20true',
    'mkdirSync',
    'poop',
    'whatever.txt',
    'result\x20found',
    'when\x20the\x20core.followSymlinks\x20config\x20is\x20used',
    'close',
    'symlinkSync',
    'follows\x20symlinks\x20when\x20core.followSymlinks\x20is\x20true',
    'core.followSymlinks',
    'symlink',
    'does\x20not\x20follow\x20symlinks\x20when\x20core.followSymlinks\x20is\x20false',
    'atom',
    'Writer',
    '.hidden',
    'includes\x20only\x20files\x20when\x20a\x20directory\x20filter\x20is\x20specified',
    'sep',
    'concat',
    '.text',
    'match\x20this',
    'core.ignoredNames',
    'scans\x20buffer\x20contents\x20if\x20the\x20buffer\x20is\x20modified',
    'toBeGreaterThan',
    'find',
    'Elephant',
    'ignores\x20buffers\x20outside\x20the\x20project',
    'when\x20the\x20project\x20has\x20multiple\x20root\x20directories',
    'a-second-dir',
    'a-file',
    'ccc\x20aaaa',
    'addPath',
    'searches\x20matching\x20files\x20in\x20all\x20of\x20the\x20project\x27s\x20root\x20directories',
    'when\x20an\x20inclusion\x20path\x20starts\x20with\x20the\x20basename\x20of\x20a\x20root\x20directory',
    'interprets\x20the\x20inclusion\x20path\x20as\x20starting\x20from\x20that\x20directory',
    'includes',
    'when\x20a\x20custom\x20directory\x20searcher\x20is\x20registered',
    'options',
    'promise',
    'hoistedResolve',
    'hoistedReject',
    'function',
    'apply',
    'cancel',
    'provide',
    'directorySearchers',
    'can\x20override\x20the\x20DefaultDirectorySearcher\x20on\x20a\x20per-directory\x20basis',
    'ssh://foreign-directory:8080/hello.txt',
    'Hello\x20world',
    'Hello',
    'didMatch',
    'didSearchPaths',
    'onPathsSearched',
    'can\x20be\x20cancelled\x20when\x20the\x20object\x20returned\x20by\x20scan()\x20has\x20its\x20cancel()\x20method\x20invoked',
    'fakeSearch\x20to\x20be\x20defined',
    'cancelled',
    'will\x20have\x20the\x20side-effect\x20of\x20failing\x20the\x20overall\x20search\x20if\x20it\x20fails',
    'serviceHub',
    'atom.directory-searcher',
    'leadingContextLineCount\x20and\x20trailingContextLineCount\x20options',
    'leadingContextLines',
    'trailingContextLines',
    'line\x201',
    'line\x203',
    'line\x204',
    'line\x205',
    'line\x207',
    'line\x208',
    'line\x209',
    'line\x2010',
    'result\x202',
    'result\x203',
    'line\x2011',
    'line\x2012',
    'result\x204',
    'line\x2013',
    'line\x2014',
    'line\x2015',
    'slice',
    '::replace(regex,\x20replacementText,\x20paths,\x20iterator)',
    'when\x20a\x20file\x20doesn\x27t\x20exist',
    'calls\x20back\x20with\x20an\x20error',
    '/not-a-file.js',
    'replaces\x20properly',
    'replace',
    'replacements',
    'when\x20a\x20buffer\x20is\x20already\x20open',
    'copyFileSync',
    'toBeFalsy',
    'sample-with-comments.js',
    'does\x20NOT\x20save\x20when\x20modified',
    'omg',
    'okthen',
    'toBeTruthy',
    'did-add-notification',
    'onDidAddNotification',
    'emits\x20a\x20warning\x20notification\x20when\x20the\x20file\x20cannot\x20be\x20saved',
    'save',
    '\x27/some/file\x27\x20is\x20a\x20directory',
    'emits\x20a\x20warning\x20notification\x20when\x20the\x20directory\x20cannot\x20be\x20written\x20to',
    'saveActivePaneItem',
    'emits\x20a\x20warning\x20notification\x20when\x20the\x20user\x20does\x20not\x20have\x20permission',
    '/Some/dir/and-a-file.js',
    'Unable\x20to\x20save',
    'emits\x20a\x20warning\x20notification\x20when\x20the\x20file\x20is\x20already\x20open\x20by\x20another\x20app',
    'EBUSY,\x20resource\x20busy\x20or\x20locked\x20\x27/Some/dir/and-a-file.js\x27',
    'emits\x20a\x20warning\x20notification\x20when\x20the\x20file\x20system\x20is\x20read-only',
    'EROFS,\x20read-only\x20file\x20system\x20\x27/Some/dir/and-a-file.js\x27',
    'EROFS',
    'no\x20one\x20knows',
    '::closeActivePaneItemOrEmptyPaneOrWindow',
    'closes\x20the\x20active\x20center\x20pane\x20item,\x20or\x20the\x20active\x20center\x20pane\x20if\x20it\x20is\x20empty,\x20or\x20the\x20current\x20window\x20if\x20there\x20is\x20only\x20the\x20empty\x20root\x20pane\x20in\x20the\x20center',
    'core.destroyEmptyPanes',
    'Impermanent\x20Dock\x20Item',
    '::activateNextPane',
    'when\x20the\x20active\x20workspace\x20pane\x20is\x20inside\x20a\x20dock',
    'activates\x20the\x20next\x20pane\x20in\x20the\x20dock',
    'activateNextPane',
    'when\x20the\x20active\x20workspace\x20pane\x20is\x20inside\x20the\x20workspace\x20center',
    'activates\x20the\x20next\x20pane\x20in\x20the\x20workspace\x20center',
    '::activatePreviousPane',
    'activates\x20the\x20previous\x20pane\x20in\x20the\x20dock',
    'activatePreviousPane',
    'activates\x20the\x20previous\x20pane\x20in\x20the\x20workspace\x20center',
    '::getVisiblePanes',
    'returns\x20all\x20panes\x20in\x20visible\x20pane\x20containers',
    'getVisiblePanes',
    'show',
    '::getVisiblePaneContainers',
    'getVisiblePaneContainers',
    'when\x20the\x20core.allowPendingPaneItems\x20option\x20is\x20falsy',
    'does\x20not\x20open\x20item\x20with\x20`pending:\x20true`\x20option\x20as\x20pending',
    'core.allowPendingPaneItems',
    'notifies\x20the\x20workspace\x20of\x20which\x20grammar\x20is\x20used',
    'ruby\x20grammar\x20used',
    'language-c:grammar-used',
    'language-ruby',
    'language-c',
    'source.c',
    'source.ruby',
    'useRealClock',
    'editor.confirmCheckoutHeadRevision',
    'reverts\x20to\x20the\x20version\x20of\x20its\x20file\x20checked\x20into\x20the\x20project\x20repository',
    '---\x0a',
    'lineTextForBufferRow',
    '---',
    'checkoutHeadRevision',
    'when\x20there\x27s\x20no\x20repository\x20for\x20the\x20editor\x27s\x20file',
    'doesn\x27t\x20do\x20anything',
    'stuff',
    'clears\x20the\x20location\x20if\x20it\x27s\x20the\x20default',
    'delete',
    '5hgIGuG',
    '83867YDQkDI',
    '340191hgEWvT',
    '1uBLbar',
    '9820tmADMB',
    '43jamAPX',
    '47429UzhVDd',
    '238347knmHug',
    '8363DjdYKH',
    '6ATYbHi',
    '124990NJXEMQ',
    'temp',
    'track',
    'dedent',
    'text-buffer',
    '../src/text-editor',
    './spec-helper-platform',
    'underscore-plus',
    '../src/atom-environment',
    './async-spec-helpers',
    'Workspace',
    'workspace',
    'resetFontSize',
    'applicationDelegate',
    'confirm',
    'setWindowDocumentEdited',
    'setPaths',
    'project',
    'getDirectories',
    'dir',
    'itemLocationStore',
    'cleanupSync',
    'serialize',
    'notifications',
    'packages',
    'bind',
    'grammars',
    'then',
    'config',
    'styles',
    'views',
    'assert',
    'textEditors',
    'deserialize',
    'deserializers',
    'serialization',
    'when\x20the\x20workspace\x20contains\x20text\x20editors',
    'constructs\x20the\x20view\x20with\x20the\x20same\x20panes',
    'getActivePane',
    'splitRight',
    'setText',
    'An\x20untitled\x20editor.',
    '../sample.js',
    'activateItem',
    'activeItem',
    'setCursorScreenPosition',
    'splitDown',
    'open',
    'getActiveItem',
    'activate',
    'length',
    'toBe',
    'getTextEditors',
    'toBeDefined',
    'getPath',
    'resolve',
    '../sample.txt',
    'toEqual',
    'toBeUndefined',
    'getText',
    'getPaths',
    'toMatch',
    'basename',
    'getLongTitle',
    '\x20\x5cu2014\x20',
    'where\x20there\x20are\x20no\x20open\x20panes\x20or\x20editors',
    'constructs\x20the\x20view\x20with\x20no\x20open\x20editors',
    'destroy',
    'onDidOpen',
    'push',
    'andCallThrough',
    'when\x20called\x20without\x20a\x20uri\x20or\x20item',
    'getActivePaneItem',
    'toHaveBeenCalled',
    'items',
    'when\x20called\x20with\x20a\x20uri',
    'when\x20the\x20active\x20pane\x20already\x20has\x20an\x20editor\x20for\x20the\x20given\x20uri',
    'activates\x20the\x20existing\x20editor\x20on\x20the\x20active\x20pane',
    'getRightDock',
    'atom://test',
    'left',
    'div',
    'addItem',
    'getPaneItems',
    'toHaveLength',
    'when\x20the\x20\x27activateItem\x27\x20option\x20is\x20false',
    'adds\x20the\x20item\x20to\x20the\x20workspace',
    'toContain',
    'not',
    'when\x20the\x20active\x20pane\x20does\x20not\x20have\x20an\x20editor\x20for\x20the\x20given\x20uri',
    'enablePersistence',
    'adds\x20and\x20activates\x20a\x20new\x20editor\x20for\x20the\x20given\x20path\x20on\x20the\x20active\x20pane',
    'getURI',
    'discovers\x20existing\x20editors\x20that\x20are\x20still\x20opening',
    'spartacus.txt',
    'createSpy',
    'andReturn',
    'right',
    'createElement',
    'getOpeners',
    'prefers\x20the\x20last\x20location\x20the\x20user\x20used\x20for\x20that\x20item',
    'load',
    'andCallFake',
    'when\x20an\x20item\x20with\x20the\x20given\x20uri\x20exists\x20in\x20an\x20inactive\x20pane\x20container',
    'activates\x20that\x20item\x20if\x20it\x20is\x20in\x20that\x20container\x27s\x20active\x20pane',
    'getLeftDock',
    'getActivePaneContainer',
    'getLocation',
    'center',
    'when\x20the\x20\x27searchAllPanes\x27\x20option\x20is\x20true',
    'when\x20an\x20editor\x20for\x20the\x20given\x20uri\x20is\x20already\x20open\x20on\x20an\x20inactive\x20pane',
    'activates\x20the\x20existing\x20editor\x20on\x20the\x20inactive\x20pane,\x20then\x20activates\x20that\x20pane',
    'all',
    'activates\x20the\x20pane\x20in\x20the\x20dock\x20with\x20the\x20matching\x20item',
    'paneForItem',
    'when\x20no\x20editor\x20for\x20the\x20given\x20uri\x20is\x20open\x20in\x20any\x20pane',
    'opens\x20an\x20editor\x20for\x20the\x20given\x20uri\x20in\x20the\x20active\x20pane',
    'when\x20attempting\x20to\x20open\x20an\x20editor\x20in\x20a\x20dock',
    'opens\x20the\x20editor\x20in\x20the\x20workspace\x20center',
    'sample.txt',
    'getCenter',
    'getFileName',
    'when\x20the\x20active\x20pane\x20already\x20contains\x20the\x20item',
    'activates\x20the\x20item',
    'getItems',
    'when\x20the\x20item\x20already\x20exists\x20in\x20another\x20pane',
    'rejects\x20the\x20promise',
    'message',
    'opens\x20the\x20editor\x20in\x20the\x20leftmost\x20pane\x20of\x20the\x20current\x20pane\x20axis',
    'focus',
    'opens\x20the\x20new\x20item\x20in\x20the\x20current\x20pane',
    'splitLeft',
    'when\x20the\x20\x27split\x27\x20option\x20is\x20\x27right\x27',
    'opens\x20the\x20editor\x20in\x20the\x20rightmost\x20pane\x20of\x20the\x20current\x20pane\x20axis',
    'getPanes',
    'filter',
    'opens\x20the\x20new\x20item\x20in\x20a\x20new\x20pane\x20split\x20to\x20the\x20right\x20of\x20the\x20current\x20pane',
    'paneContainer',
    'root',
    'children',
    'when\x20the\x20\x27split\x27\x20option\x20is\x20\x27up\x27',
    'opens\x20the\x20editor\x20in\x20the\x20topmost\x20pane\x20of\x20the\x20current\x20pane\x20axis',
    'when\x20a\x20pane\x20axis\x20is\x20the\x20topmost\x20sibling\x20of\x20the\x20current\x20pane',
    'splitUp',
    'when\x20the\x20\x27split\x27\x20option\x20is\x20\x27down\x27',
    'opens\x20the\x20editor\x20in\x20the\x20bottommost\x20pane\x20of\x20the\x20current\x20pane\x20axis',
    'when\x20a\x20pane\x20axis\x20is\x20the\x20bottommost\x20sibling\x20of\x20the\x20current\x20pane',
    'opens\x20the\x20new\x20item\x20in\x20a\x20new\x20pane\x20split\x20to\x20the\x20bottom\x20of\x20the\x20current\x20pane',
    'when\x20an\x20initialLine\x20and\x20initialColumn\x20are\x20specified',
    'moves\x20the\x20cursor\x20to\x20the\x20indicated\x20location',
    'getActiveTextEditor',
    'getCursorBufferPosition',
    'unfolds\x20the\x20fold\x20containing\x20the\x20line',
    '../sample-with-many-folds.js',
    'isFoldedAtBufferRow',
    'when\x20the\x20file\x20size\x20is\x20over\x20the\x20limit\x20defined\x20in\x20`core.warnOnLargeFileLimit`',
    'sample.js',
    'core.warnOnLargeFileLimit',
    'set',
    'when\x20passed\x20a\x20path\x20that\x20matches\x20a\x20custom\x20opener',
    'returns\x20the\x20resource\x20returned\x20by\x20the\x20custom\x20opener',
    'match',
    'addOpener',
    'there',
    'bar://baz',
    'adds\x20the\x20file\x20to\x20the\x20application\x27s\x20recent\x20documents\x20list',
    'platform',
    'darwin',
    'addRecentDocument',
    'something://a/url',
    'toHaveBeenCalledWith',
    './fixtures/dir/a',
    'newEditorHandler',
    'onDidAddTextEditor',
    'argsForCall',
    'textEditor',
    'when\x20there\x20is\x20an\x20error\x20opening\x20the\x20file',
    'creates\x20an\x20empty\x20buffer\x20for\x20the\x20specified\x20path',
    'not-a-file.md',
    'when\x20the\x20user\x20does\x20not\x20have\x20access\x20to\x20the\x20file',
    'openSync',
    'path',
    'code',
    'EACCES',
    'creates\x20a\x20notification',
    'mostRecentCall',
    'args',
    'warning',
    'getMessage',
    'Permission\x20denied',
    'file1',
    'when\x20the\x20the\x20operation\x20is\x20not\x20permitted',
    'EPERM,\x20operation\x20not\x20permitted\x20\x27',
    'EPERM',
    'getType',
    'Unable\x20to\x20open',
    'EBUSY,\x20resource\x20busy\x20or\x20locked\x20\x27',
    'I\x20dont\x20even\x20know\x20what\x20is\x20happening\x20right\x20now!!',
    'catch',
    'should\x20terminate\x20the\x20pending\x20state',
    'getPendingItem',
    'toBeNull',
    'when\x20opening\x20will\x20switch\x20from\x20a\x20pending\x20tab\x20to\x20a\x20permanent\x20tab',
    'keeps\x20the\x20pending\x20tab\x20open',
    'sample2.txt',
    'does\x20not\x20destroy\x20the\x20pane\x20even\x20if\x20core.destroyEmptyPanes\x20is\x20on',
    'when\x20opening\x20an\x20editor\x20with\x20a\x20buffer\x20that\x20isn\x27t\x20part\x20of\x20the\x20project',
    'getBuffers',
    'map',
    'text.plain.null-grammar',
    'can\x20identify\x20the\x20pane\x20and\x20pane\x20container\x20for\x20a\x20given\x20item\x20or\x20URI',
    'atom://test-pane-for-item',
    'paneContainerForItem',
    'paneForURI',
    'destroyActiveItem',
    'paneContainerForURI',
    '::hide(uri)',
    'Item',
    'when\x20called\x20with\x20a\x20URI',
    'if\x20the\x20item\x20for\x20the\x20given\x20URI\x20is\x20in\x20the\x20center,\x20removes\x20it',
    'hide',
    'if\x20the\x20item\x20for\x20the\x20given\x20URI\x20is\x20in\x20a\x20dock,\x20hides\x20the\x20dock',
    'isVisible',
    'when\x20called\x20with\x20an\x20item',
    'if\x20the\x20item\x20is\x20in\x20a\x20dock,\x20hides\x20the\x20dock',
    'when\x20the\x20location\x20resolves\x20to\x20a\x20dock',
    'toggle',
    'when\x20the\x20location\x20resolves\x20to\x20the\x20center',
    'adds\x20or\x20shows\x20the\x20item\x20if\x20it\x20is\x20not\x20currently\x20the\x20active\x20pane\x20item,\x20and\x20otherwise\x20removes\x20the\x20item',
    'element',
    'maintains\x20the\x20active\x20pane\x20and\x20item\x20globally\x20across\x20active\x20pane\x20containers',
    'addItems',
    'getBottomDock',
    'onDidChangeActivePaneContainer',
    'onDidChangeActivePaneItem',
    'invokes\x20observers\x20when\x20the\x20active\x20item\x20of\x20the\x20active\x20pane\x20stops\x20changing',
    'onDidStopChangingActivePaneItem',
    'activateNextItem',
    'activatePackage',
    'observeTextEditors',
    'javascript',
    'coffeescript',
    'triggerDeferredActivationHooks',
    'language-javascript:grammar-used',
    'onDidTriggerActivationHook',
    'language-coffee-script:grammar-used',
    'callCount',
    'assignLanguageMode',
    'the\x20root-scope-used\x20hook',
    'fires\x20when\x20opening\x20a\x20file\x20or\x20changing\x20the\x20grammar\x20of\x20an\x20open\x20file',
    'language-javascript',
    'language-coffee-script',
    'source.js:root-scope-used'
];
function _0x1441(_0x29afb9, _0x3e515f) {
    return _0x1441 = function (_0x3ec544, _0x1441bd) {
        _0x3ec544 = _0x3ec544 - 0x141;
        let _0x227621 = _0x3ec5[_0x3ec544];
        return _0x227621;
    }, _0x1441(_0x29afb9, _0x3e515f);
}
const _0xd79c49 = _0x1441;
(function (_0x52bad4, _0x489ea1) {
    const _0x55ef25 = _0x1441;
    while (!![]) {
        try {
            const _0x5707e1 = parseInt(_0x55ef25(0x141)) * parseInt(_0x55ef25(0x142)) + -parseInt(_0x55ef25(0x143)) * -parseInt(_0x55ef25(0x144)) + parseInt(_0x55ef25(0x145)) * -parseInt(_0x55ef25(0x146)) + -parseInt(_0x55ef25(0x147)) + -parseInt(_0x55ef25(0x148)) + parseInt(_0x55ef25(0x149)) * parseInt(_0x55ef25(0x14a)) + parseInt(_0x55ef25(0x14b));
            if (_0x5707e1 === _0x489ea1)
                break;
            else
                _0x52bad4['push'](_0x52bad4['shift']());
        } catch (_0x1c62e7) {
            _0x52bad4['push'](_0x52bad4['shift']());
        }
    }
}(_0x3ec5, 0x37562));
const path = require('path'), temp = require(_0xd79c49(0x14c))[_0xd79c49(0x14d)](), dedent = require(_0xd79c49(0x14e)), TextBuffer = require(_0xd79c49(0x14f)), TextEditor = require(_0xd79c49(0x150)), Workspace = require('../src/workspace'), Project = require('../src/project'), platform = require(_0xd79c49(0x151)), _ = require(_0xd79c49(0x152)), fstream = require('fstream'), fs = require('fs-plus'), AtomEnvironment = require(_0xd79c49(0x153)), {conditionPromise} = require(_0xd79c49(0x154));
describe(_0xd79c49(0x155), () => {
    const _0x1e7543 = _0xd79c49;
    let _0x5157f1, _0x4de6f5;
    beforeEach(() => {
        const _0x2f8bb6 = _0x1441;
        _0x5157f1 = atom[_0x2f8bb6(0x156)], _0x5157f1[_0x2f8bb6(0x157)](), spyOn(atom[_0x2f8bb6(0x158)], _0x2f8bb6(0x159)), _0x4de6f5 = spyOn(atom[_0x2f8bb6(0x158)], _0x2f8bb6(0x15a)), atom['project'][_0x2f8bb6(0x15b)]([atom[_0x2f8bb6(0x15c)][_0x2f8bb6(0x15d)]()[0x0]['resolve'](_0x2f8bb6(0x15e))]), waits(0x1), waitsForPromise(() => atom['workspace'][_0x2f8bb6(0x15f)]['clear']());
    }), afterEach(() => {
        const _0x34996f = _0x1441;
        try {
            temp[_0x34996f(0x160)]();
        } catch (_0x3ef548) {
        }
    });
    function _0x58c481() {
        waitsForPromise(() => {
            const _0x1776eb = _0x1441, _0x37907b = _0x5157f1[_0x1776eb(0x161)](), _0x317e11 = atom[_0x1776eb(0x15c)][_0x1776eb(0x161)]({ 'isUnloading': !![] });
            return _0x5157f1['destroy'](), atom[_0x1776eb(0x15c)]['destroy'](), atom[_0x1776eb(0x15c)] = new Project({
                'notificationManager': atom[_0x1776eb(0x162)],
                'packageManager': atom[_0x1776eb(0x163)],
                'confirm': atom[_0x1776eb(0x159)][_0x1776eb(0x164)](atom),
                'applicationDelegate': atom[_0x1776eb(0x158)],
                'grammarRegistry': atom[_0x1776eb(0x165)]
            }), atom[_0x1776eb(0x15c)]['deserialize'](_0x317e11)[_0x1776eb(0x166)](() => {
                const _0x2a268f = _0x1776eb;
                _0x5157f1 = atom['workspace'] = new Workspace({
                    'config': atom[_0x2a268f(0x167)],
                    'project': atom[_0x2a268f(0x15c)],
                    'packageManager': atom['packages'],
                    'grammarRegistry': atom['grammars'],
                    'styleManager': atom[_0x2a268f(0x168)],
                    'deserializerManager': atom['deserializers'],
                    'notificationManager': atom['notifications'],
                    'applicationDelegate': atom[_0x2a268f(0x158)],
                    'viewRegistry': atom[_0x2a268f(0x169)],
                    'assert': atom[_0x2a268f(0x16a)][_0x2a268f(0x164)](atom),
                    'textEditorRegistry': atom[_0x2a268f(0x16b)]
                }), _0x5157f1[_0x2a268f(0x16c)](_0x37907b, atom[_0x2a268f(0x16d)]);
            });
        });
    }
    describe(_0x1e7543(0x16e), () => {
        const _0x30f9dd = _0x1e7543;
        describe(_0x30f9dd(0x16f), () => {
            const _0x21bddd = _0x30f9dd;
            it(_0x21bddd(0x170), () => {
                const _0x203d4e = _0x21bddd, _0x4fcb7c = atom[_0x203d4e(0x156)][_0x203d4e(0x171)](), _0x26843a = _0x4fcb7c[_0x203d4e(0x172)]({ 'copyActiveItem': !![] }), _0x373d4c = _0x26843a['splitRight']({ 'copyActiveItem': !![] });
                let _0x188968 = null;
                waitsForPromise(() => atom[_0x203d4e(0x156)]['open'](null)['then'](_0xaf9c5b => _0xaf9c5b[_0x203d4e(0x173)](_0x203d4e(0x174)))), waitsForPromise(() => atom['workspace']['open']('b')[_0x203d4e(0x166)](_0x586a2b => _0x26843a['activateItem'](_0x586a2b['copy']()))), waitsForPromise(() => atom[_0x203d4e(0x156)]['open'](_0x203d4e(0x175))[_0x203d4e(0x166)](_0x4edd75 => _0x373d4c[_0x203d4e(0x176)](_0x4edd75))), runs(() => {
                    const _0xb95d88 = _0x203d4e;
                    _0x373d4c[_0xb95d88(0x177)][_0xb95d88(0x178)]([
                        0x2,
                        0x4
                    ]), _0x188968 = _0x26843a[_0xb95d88(0x179)]();
                }), waitsForPromise(() => atom[_0x203d4e(0x156)][_0x203d4e(0x17a)]('../sample.txt')['then'](_0x4e4cc8 => _0x188968[_0x203d4e(0x176)](_0x4e4cc8))), runs(() => {
                    const _0x560643 = _0x203d4e;
                    _0x188968[_0x560643(0x17b)]()[_0x560643(0x178)]([
                        0x0,
                        0x2
                    ]), _0x26843a[_0x560643(0x17c)]();
                }), _0x58c481(), runs(() => {
                    const _0x30085b = _0x203d4e;
                    expect(atom[_0x30085b(0x156)]['getTextEditors']()[_0x30085b(0x17d)])[_0x30085b(0x17e)](0x5);
                    const [_0x1d924c, _0x2b2779, _0x1f34f6, _0x2b120b, _0x3ed49a] = atom['workspace'][_0x30085b(0x17f)](), _0xb7933d = atom['project'][_0x30085b(0x15d)]()[0x0];
                    expect(_0xb7933d)[_0x30085b(0x180)](), expect(_0x1d924c[_0x30085b(0x181)]())[_0x30085b(0x17e)](_0xb7933d[_0x30085b(0x182)]('b')), expect(_0x2b2779[_0x30085b(0x181)]())[_0x30085b(0x17e)](_0xb7933d[_0x30085b(0x182)](_0x30085b(0x183))), expect(_0x2b2779['getCursorScreenPosition']())[_0x30085b(0x184)]([
                        0x0,
                        0x2
                    ]), expect(_0x2b120b['getPath']())[_0x30085b(0x17e)](_0xb7933d[_0x30085b(0x182)]('b')), expect(_0x3ed49a[_0x30085b(0x181)]())[_0x30085b(0x17e)](_0xb7933d[_0x30085b(0x182)](_0x30085b(0x175))), expect(_0x3ed49a['getCursorScreenPosition']())[_0x30085b(0x184)]([
                        0x2,
                        0x4
                    ]), expect(_0x1f34f6[_0x30085b(0x181)]())[_0x30085b(0x185)](), expect(_0x1f34f6[_0x30085b(0x186)]())['toBe'](_0x30085b(0x174)), expect(atom['workspace']['getActiveTextEditor']()['getPath']())[_0x30085b(0x17e)](_0x2b120b[_0x30085b(0x181)]());
                    const _0x204a06 = fs['tildify'](escapeStringRegex(atom[_0x30085b(0x15c)][_0x30085b(0x187)]()[0x0]));
                    expect(document['title'])[_0x30085b(0x188)](new RegExp('^' + path[_0x30085b(0x189)](_0x2b120b[_0x30085b(0x18a)]()) + _0x30085b(0x18b) + _0x204a06));
                });
            });
        }), describe(_0x30f9dd(0x18c), () => {
            const _0x33277a = _0x30f9dd;
            it(_0x33277a(0x18d), () => {
                const _0xc3b44a = _0x33277a;
                atom[_0xc3b44a(0x156)][_0xc3b44a(0x171)]()[_0xc3b44a(0x18e)](), expect(atom[_0xc3b44a(0x156)][_0xc3b44a(0x17f)]()[_0xc3b44a(0x17d)])[_0xc3b44a(0x17e)](0x0), _0x58c481(), runs(() => {
                    const _0x3f9983 = _0xc3b44a;
                    expect(atom[_0x3f9983(0x156)]['getTextEditors']()[_0x3f9983(0x17d)])[_0x3f9983(0x17e)](0x0);
                });
            });
        });
    }), describe('::open(itemOrURI,\x20options)', () => {
        const _0x3e86d4 = _0x1e7543;
        let _0x247b19 = null;
        beforeEach(() => {
            const _0x3e7ac4 = _0x1441;
            _0x247b19 = [], _0x5157f1[_0x3e7ac4(0x18f)](_0x4a5e2f => _0x247b19[_0x3e7ac4(0x190)](_0x4a5e2f)), spyOn(_0x5157f1['getActivePane'](), _0x3e7ac4(0x17c))[_0x3e7ac4(0x191)]();
        }), describe('when\x20the\x20\x27searchAllPanes\x27\x20option\x20is\x20false\x20(default)', () => {
            const _0x3bb29f = _0x1441;
            describe(_0x3bb29f(0x192), () => {
                it('adds\x20and\x20activates\x20an\x20empty\x20editor\x20on\x20the\x20active\x20pane', () => {
                    const _0x48f0f3 = _0x1441;
                    let _0x15a5e1, _0x134883;
                    waitsForPromise(() => _0x5157f1['open']()[_0x48f0f3(0x166)](_0x475fcd => {
                        _0x15a5e1 = _0x475fcd;
                    })), runs(() => {
                        const _0x417125 = _0x48f0f3;
                        expect(_0x15a5e1[_0x417125(0x181)]())['toBeUndefined'](), expect(_0x5157f1['getActivePane']()['items'])[_0x417125(0x184)]([_0x15a5e1]), expect(_0x5157f1[_0x417125(0x193)]())[_0x417125(0x17e)](_0x15a5e1), expect(_0x5157f1['getActivePane']()[_0x417125(0x17c)])[_0x417125(0x194)](), expect(_0x247b19)['toEqual']([{
                                'uri': undefined,
                                'pane': _0x5157f1[_0x417125(0x171)](),
                                'item': _0x15a5e1,
                                'index': 0x0
                            }]), _0x247b19 = [];
                    }), waitsForPromise(() => _0x5157f1['open']()[_0x48f0f3(0x166)](_0x227a2f => {
                        _0x134883 = _0x227a2f;
                    })), runs(() => {
                        const _0x22d5da = _0x48f0f3;
                        expect(_0x134883['getPath']())['toBeUndefined'](), expect(_0x5157f1[_0x22d5da(0x171)]()[_0x22d5da(0x195)])[_0x22d5da(0x184)]([
                            _0x15a5e1,
                            _0x134883
                        ]), expect(_0x5157f1[_0x22d5da(0x193)]())[_0x22d5da(0x17e)](_0x134883), expect(_0x5157f1[_0x22d5da(0x171)]()['activate'])['toHaveBeenCalled'](), expect(_0x247b19)[_0x22d5da(0x184)]([{
                                'uri': undefined,
                                'pane': _0x5157f1['getActivePane'](),
                                'item': _0x134883,
                                'index': 0x1
                            }]);
                    });
                });
            }), describe(_0x3bb29f(0x196), () => {
                const _0x486a90 = _0x3bb29f;
                describe(_0x486a90(0x197), () => {
                    const _0x1f1926 = _0x486a90;
                    it(_0x1f1926(0x198), () => {
                        const _0x20d492 = _0x1f1926;
                        let _0x561291 = null, _0x2348d6 = null, _0x444bad = null;
                        waitsForPromise(() => _0x5157f1[_0x20d492(0x17a)]('a')['then'](_0x252d90 => {
                            const _0x295cad = _0x20d492;
                            return _0x2348d6 = _0x252d90, _0x5157f1[_0x295cad(0x17a)]('b')[_0x295cad(0x166)](_0x110a6b => {
                                const _0x507bfc = _0x295cad;
                                return _0x444bad = _0x110a6b, _0x5157f1['open']('a')[_0x507bfc(0x166)](_0x3ecc16 => {
                                    _0x561291 = _0x3ecc16;
                                });
                            });
                        })), runs(() => {
                            const _0xcaf8e3 = _0x20d492;
                            expect(_0x561291)[_0xcaf8e3(0x17e)](_0x2348d6), expect(_0x5157f1[_0xcaf8e3(0x193)]())['toBe'](_0x561291), expect(_0x5157f1[_0xcaf8e3(0x171)]()[_0xcaf8e3(0x17c)])[_0xcaf8e3(0x194)]();
                            const _0x3d9d4f = atom[_0xcaf8e3(0x15c)][_0xcaf8e3(0x15d)]()[0x0];
                            expect(_0x3d9d4f)[_0xcaf8e3(0x180)](), expect(_0x247b19)[_0xcaf8e3(0x184)]([
                                {
                                    'uri': _0x3d9d4f['resolve']('a'),
                                    'item': _0x2348d6,
                                    'pane': atom[_0xcaf8e3(0x156)]['getActivePane'](),
                                    'index': 0x0
                                },
                                {
                                    'uri': _0x3d9d4f['resolve']('b'),
                                    'item': _0x444bad,
                                    'pane': atom[_0xcaf8e3(0x156)][_0xcaf8e3(0x171)](),
                                    'index': 0x1
                                },
                                {
                                    'uri': _0x3d9d4f[_0xcaf8e3(0x182)]('a'),
                                    'item': _0x2348d6,
                                    'pane': atom[_0xcaf8e3(0x156)][_0xcaf8e3(0x171)](),
                                    'index': 0x0
                                }
                            ]);
                        });
                    }), it('finds\x20items\x20in\x20docks', () => {
                        const _0x1525b4 = _0x1f1926, _0x57b4ec = atom[_0x1525b4(0x156)][_0x1525b4(0x199)](), _0x2afeab = _0x1525b4(0x19a), _0x1cc8fb = {
                                'getURI': () => _0x2afeab,
                                'getDefaultLocation': () => _0x1525b4(0x19b),
                                'getElement': () => document['createElement'](_0x1525b4(0x19c))
                            };
                        _0x57b4ec['getActivePane']()[_0x1525b4(0x19d)](_0x1cc8fb), expect(_0x57b4ec['getPaneItems']())['toHaveLength'](0x1), waitsForPromise(() => atom['workspace']['open'](_0x2afeab, { 'searchAllPanes': !![] })), runs(() => {
                            const _0x34d207 = _0x1525b4;
                            expect(atom['workspace'][_0x34d207(0x19e)]())[_0x34d207(0x19f)](0x1), expect(_0x57b4ec[_0x34d207(0x19e)]())['toHaveLength'](0x1), expect(_0x57b4ec['getPaneItems']()[0x0])['toBe'](_0x1cc8fb);
                        });
                    });
                }), describe(_0x486a90(0x1a0), () => {
                    const _0x3ba765 = _0x486a90;
                    it(_0x3ba765(0x1a1), () => {
                        const _0x2951cf = _0x3ba765;
                        let _0x5870f8;
                        waitsForPromise(() => _0x5157f1[_0x2951cf(0x17a)]('a')), waitsForPromise(() => _0x5157f1[_0x2951cf(0x17a)]('b', { 'activateItem': ![] })[_0x2951cf(0x166)](_0x2df9c9 => {
                            _0x5870f8 = _0x2df9c9;
                        })), runs(() => {
                            const _0x8955dd = _0x2951cf;
                            expect(_0x5157f1[_0x8955dd(0x19e)]())[_0x8955dd(0x1a2)](_0x5870f8), expect(_0x5157f1[_0x8955dd(0x193)]())[_0x8955dd(0x1a3)][_0x8955dd(0x17e)](_0x5870f8);
                        });
                    });
                }), describe(_0x486a90(0x1a4), () => {
                    const _0x432273 = _0x486a90;
                    beforeEach(() => {
                        const _0x7db87a = _0x1441;
                        atom[_0x7db87a(0x156)][_0x7db87a(0x1a5)] = !![];
                    }), afterEach(async () => {
                        const _0x549609 = _0x1441;
                        await atom[_0x549609(0x156)][_0x549609(0x15f)]['clear'](), atom[_0x549609(0x156)][_0x549609(0x1a5)] = ![];
                    }), it(_0x432273(0x1a6), () => {
                        const _0x597e0b = _0x432273;
                        let _0x38b39c = null;
                        waitsForPromise(() => _0x5157f1[_0x597e0b(0x17a)]('a')[_0x597e0b(0x166)](_0x265600 => {
                            _0x38b39c = _0x265600;
                        })), runs(() => {
                            const _0x2eb905 = _0x597e0b, _0x1bdccf = atom[_0x2eb905(0x15c)]['getDirectories']()[0x0];
                            expect(_0x1bdccf)[_0x2eb905(0x180)](), expect(_0x38b39c[_0x2eb905(0x1a7)]())[_0x2eb905(0x17e)](_0x1bdccf[_0x2eb905(0x182)]('a')), expect(_0x5157f1[_0x2eb905(0x193)]())[_0x2eb905(0x17e)](_0x38b39c), expect(_0x5157f1[_0x2eb905(0x171)]()[_0x2eb905(0x195)])[_0x2eb905(0x184)]([_0x38b39c]), expect(_0x5157f1[_0x2eb905(0x171)]()[_0x2eb905(0x17c)])[_0x2eb905(0x194)]();
                        });
                    }), it(_0x432273(0x1a8), () => {
                        const _0x46cc04 = _0x432273;
                        let _0x44e8ce = null, _0x323255 = null;
                        waitsForPromise(() => Promise['all']([
                            _0x5157f1[_0x46cc04(0x17a)](_0x46cc04(0x1a9))[_0x46cc04(0x166)](_0x3df67d => {
                                _0x44e8ce = _0x3df67d;
                            }),
                            _0x5157f1[_0x46cc04(0x17a)]('spartacus.txt')[_0x46cc04(0x166)](_0x3dc85e => {
                                _0x323255 = _0x3dc85e;
                            })
                        ])), runs(() => {
                            const _0x2c659f = _0x46cc04;
                            expect(_0x44e8ce)[_0x2c659f(0x184)](_0x323255), expect(_0x5157f1[_0x2c659f(0x171)]()['items'])[_0x2c659f(0x184)]([_0x44e8ce]);
                        });
                    }), it('uses\x20the\x20location\x20specified\x20by\x20the\x20model\x27s\x20`getDefaultLocation()`\x20method', () => {
                        const _0x3f527b = _0x432273, _0x5d9bc6 = {
                                'getDefaultLocation': jasmine[_0x3f527b(0x1aa)]()[_0x3f527b(0x1ab)](_0x3f527b(0x1ac)),
                                'getElement': () => document[_0x3f527b(0x1ad)](_0x3f527b(0x19c))
                            }, _0x26b460 = jasmine[_0x3f527b(0x1aa)]()[_0x3f527b(0x1ab)](_0x5d9bc6), _0x133c10 = atom['workspace'][_0x3f527b(0x199)]();
                        spyOn(atom['workspace']['itemLocationStore'], 'load')[_0x3f527b(0x1ab)](Promise['resolve']()), spyOn(atom[_0x3f527b(0x156)], _0x3f527b(0x1ae))['andReturn']([_0x26b460]), expect(_0x133c10[_0x3f527b(0x19e)]())[_0x3f527b(0x19f)](0x0), waitsForPromise(() => atom[_0x3f527b(0x156)][_0x3f527b(0x17a)]('a')), runs(() => {
                            const _0x5e09a7 = _0x3f527b;
                            expect(_0x133c10['getPaneItems']())[_0x5e09a7(0x19f)](0x1), expect(_0x26b460)[_0x5e09a7(0x194)](), expect(_0x5d9bc6['getDefaultLocation'])[_0x5e09a7(0x194)]();
                        });
                    }), it(_0x432273(0x1af), () => {
                        const _0x32def4 = _0x432273, _0x2b9b0e = _0x32def4(0x19a), _0xf4c943 = {
                                'getURI': () => _0x2b9b0e,
                                'getDefaultLocation': () => _0x32def4(0x19b),
                                'getElement': () => document[_0x32def4(0x1ad)]('div')
                            }, _0x4d7f7f = _0x5570e6 => _0x5570e6 === _0x2b9b0e ? _0xf4c943 : null, _0x50e468 = atom[_0x32def4(0x156)][_0x32def4(0x199)]();
                        spyOn(atom[_0x32def4(0x156)][_0x32def4(0x15f)], _0x32def4(0x1b0))[_0x32def4(0x1b1)](_0x101e34 => _0x101e34 === _0x32def4(0x19a) ? Promise['resolve'](_0x32def4(0x1ac)) : Promise[_0x32def4(0x182)]()), spyOn(atom[_0x32def4(0x156)], _0x32def4(0x1ae))[_0x32def4(0x1ab)]([_0x4d7f7f]), expect(_0x50e468[_0x32def4(0x19e)]())['toHaveLength'](0x0), waitsForPromise(() => atom[_0x32def4(0x156)][_0x32def4(0x17a)](_0x2b9b0e)), runs(() => {
                            const _0x5f5942 = _0x32def4;
                            expect(_0x50e468[_0x5f5942(0x19e)]())[_0x5f5942(0x19f)](0x1), expect(_0x50e468[_0x5f5942(0x19e)]()[0x0])[_0x5f5942(0x17e)](_0xf4c943);
                        });
                    });
                });
            }), describe(_0x3bb29f(0x1b2), () => {
                const _0x41588f = _0x3bb29f;
                it(_0x41588f(0x1b3), async () => {
                    const _0x251cf3 = _0x41588f, _0x1ef578 = await atom[_0x251cf3(0x156)][_0x251cf3(0x17a)]('a');
                    atom[_0x251cf3(0x156)][_0x251cf3(0x1b4)]()[_0x251cf3(0x17c)](), expect(await atom['workspace'][_0x251cf3(0x17a)]('a', { 'searchAllPanes': ![] }))[_0x251cf3(0x17e)](_0x1ef578), expect(atom[_0x251cf3(0x156)][_0x251cf3(0x1b5)]()[_0x251cf3(0x1b6)]())[_0x251cf3(0x17e)]('center'), expect(atom[_0x251cf3(0x156)][_0x251cf3(0x19e)]())[_0x251cf3(0x184)]([_0x1ef578]), atom[_0x251cf3(0x156)][_0x251cf3(0x171)]()['splitRight'](), atom['workspace'][_0x251cf3(0x1b4)]()['activate']();
                    const _0x52d592 = await atom[_0x251cf3(0x156)][_0x251cf3(0x17a)]('a', { 'searchAllPanes': ![] });
                    expect(_0x52d592)[_0x251cf3(0x1a3)][_0x251cf3(0x17e)](_0x1ef578), expect(atom['workspace'][_0x251cf3(0x1b5)]()['getLocation']())[_0x251cf3(0x17e)](_0x251cf3(0x1b7)), expect(atom[_0x251cf3(0x156)][_0x251cf3(0x19e)]())['toEqual']([
                        _0x1ef578,
                        _0x52d592
                    ]);
                });
            });
        }), describe(_0x3e86d4(0x1b8), () => {
            const _0x30f0fe = _0x3e86d4;
            describe(_0x30f0fe(0x1b9), () => {
                const _0x3f88b1 = _0x30f0fe;
                it(_0x3f88b1(0x1ba), () => {
                    const _0xdeb00c = _0x3f88b1;
                    let _0x379d95 = null, _0x16a3e3 = null;
                    const _0x23c8c4 = _0x5157f1[_0xdeb00c(0x171)](), _0x553638 = _0x5157f1['getActivePane']()[_0xdeb00c(0x172)]();
                    waitsForPromise(() => {
                        const _0x360949 = _0xdeb00c;
                        return _0x23c8c4[_0x360949(0x17c)](), _0x5157f1[_0x360949(0x17a)]('a')[_0x360949(0x166)](_0x2b3ef3 => {
                            _0x379d95 = _0x2b3ef3;
                        });
                    }), waitsForPromise(() => {
                        const _0x11ccd1 = _0xdeb00c;
                        return _0x553638[_0x11ccd1(0x17c)](), _0x5157f1[_0x11ccd1(0x17a)]('b')[_0x11ccd1(0x166)](_0x35f55f => {
                            _0x16a3e3 = _0x35f55f;
                        });
                    }), runs(() => expect(_0x5157f1[_0xdeb00c(0x193)]())['toBe'](_0x16a3e3)), waitsForPromise(() => _0x5157f1[_0xdeb00c(0x17a)]('a', { 'searchAllPanes': !![] })), runs(() => {
                        const _0x16e839 = _0xdeb00c;
                        expect(_0x5157f1[_0x16e839(0x171)]())[_0x16e839(0x17e)](_0x23c8c4), expect(_0x5157f1['getActivePaneItem']())[_0x16e839(0x17e)](_0x379d95);
                    });
                }), it('discovers\x20existing\x20editors\x20that\x20are\x20still\x20opening\x20in\x20an\x20inactive\x20pane', () => {
                    const _0x15cf70 = _0x3f88b1;
                    let _0x31d6be = null, _0x2692e1 = null;
                    const _0x476f44 = _0x5157f1[_0x15cf70(0x171)](), _0x33b750 = _0x5157f1[_0x15cf70(0x171)]()['splitRight']();
                    _0x476f44[_0x15cf70(0x17c)]();
                    const _0x2407a3 = _0x5157f1[_0x15cf70(0x17a)](_0x15cf70(0x1a9), { 'searchAllPanes': !![] })[_0x15cf70(0x166)](_0x1cb89f => {
                        _0x31d6be = _0x1cb89f;
                    });
                    _0x33b750[_0x15cf70(0x17c)]();
                    const _0x477d30 = _0x5157f1[_0x15cf70(0x17a)]('spartacus.txt', { 'searchAllPanes': !![] })['then'](_0x3fe3e3 => {
                        _0x2692e1 = _0x3fe3e3;
                    });
                    waitsForPromise(() => Promise[_0x15cf70(0x1bb)]([
                        _0x2407a3,
                        _0x477d30
                    ])), runs(() => {
                        const _0x1c4c98 = _0x15cf70;
                        expect(_0x31d6be)['toBeDefined'](), expect(_0x2692e1)[_0x1c4c98(0x180)](), expect(_0x31d6be)[_0x1c4c98(0x184)](_0x2692e1), expect(_0x5157f1[_0x1c4c98(0x171)]()[_0x1c4c98(0x195)])[_0x1c4c98(0x184)]([_0x31d6be]);
                    });
                }), it(_0x3f88b1(0x1bc), () => {
                    const _0x52ce07 = _0x3f88b1, _0x3bde95 = atom[_0x52ce07(0x156)][_0x52ce07(0x199)](), _0x241b97 = _0x52ce07(0x19a), _0x3033b9 = {
                            'getURI': () => _0x241b97,
                            'getDefaultLocation': jasmine[_0x52ce07(0x1aa)]()[_0x52ce07(0x1ab)](_0x52ce07(0x19b)),
                            'getElement': () => document['createElement'](_0x52ce07(0x19c))
                        };
                    _0x3bde95[_0x52ce07(0x171)]()[_0x52ce07(0x19d)](_0x3033b9), spyOn(_0x3bde95[_0x52ce07(0x1bd)](_0x3033b9), _0x52ce07(0x17c)), waitsForPromise(() => atom[_0x52ce07(0x156)]['open'](_0x241b97, { 'searchAllPanes': !![] })), runs(() => expect(_0x3bde95[_0x52ce07(0x1bd)](_0x3033b9)[_0x52ce07(0x17c)])[_0x52ce07(0x194)]());
                });
            }), describe(_0x30f0fe(0x1be), () => {
                const _0x244bef = _0x30f0fe;
                it(_0x244bef(0x1bf), () => {
                    const _0x566813 = _0x244bef;
                    let _0x169bda = null;
                    waitsForPromise(() => _0x5157f1['open']('a', { 'searchAllPanes': !![] })[_0x566813(0x166)](_0x76dd64 => {
                        _0x169bda = _0x76dd64;
                    })), runs(() => expect(_0x5157f1['getActivePaneItem']())[_0x566813(0x17e)](_0x169bda));
                });
            });
        }), describe(_0x3e86d4(0x1c0), () => {
            const _0x2ee374 = _0x3e86d4;
            it(_0x2ee374(0x1c1), async () => {
                const _0x1a06b9 = _0x2ee374;
                await atom['workspace'][_0x1a06b9(0x17a)](_0x1a06b9(0x1c2), { 'location': 'right' }), expect(atom[_0x1a06b9(0x156)][_0x1a06b9(0x1c3)]()['getActivePaneItem']()[_0x1a06b9(0x1c4)]())[_0x1a06b9(0x184)](_0x1a06b9(0x1c2));
            });
        }), describe('when\x20called\x20with\x20an\x20item\x20rather\x20than\x20a\x20URI', () => {
            const _0x158e20 = _0x3e86d4;
            it('adds\x20the\x20item\x20itself\x20to\x20the\x20workspace', async () => {
                const _0xcf9353 = _0x1441, _0x47b7e9 = document['createElement'](_0xcf9353(0x19c));
                await atom[_0xcf9353(0x156)][_0xcf9353(0x17a)](_0x47b7e9), expect(atom[_0xcf9353(0x156)][_0xcf9353(0x193)]())[_0xcf9353(0x17e)](_0x47b7e9);
            }), describe(_0x158e20(0x1c5), () => {
                const _0x59ac98 = _0x158e20;
                it(_0x59ac98(0x1c6), async () => {
                    const _0x4b2275 = _0x59ac98, _0x45ee5f = document['createElement']('div');
                    await atom[_0x4b2275(0x156)][_0x4b2275(0x17a)](_0x45ee5f), await atom['workspace'][_0x4b2275(0x17a)](), expect(atom[_0x4b2275(0x156)][_0x4b2275(0x193)]())[_0x4b2275(0x1a3)]['toBe'](_0x45ee5f), expect(atom[_0x4b2275(0x156)]['getActivePane']()[_0x4b2275(0x1c7)]()[_0x4b2275(0x17d)])[_0x4b2275(0x17e)](0x2), await atom[_0x4b2275(0x156)][_0x4b2275(0x17a)](_0x45ee5f), expect(atom[_0x4b2275(0x156)][_0x4b2275(0x193)]())['toBe'](_0x45ee5f), expect(atom[_0x4b2275(0x156)][_0x4b2275(0x171)]()['getItems']()[_0x4b2275(0x17d)])[_0x4b2275(0x17e)](0x2);
                });
            }), describe(_0x158e20(0x1c8), () => {
                const _0x944df0 = _0x158e20;
                it(_0x944df0(0x1c9), async () => {
                    const _0x586af1 = _0x944df0, _0x2c071c = document[_0x586af1(0x1ad)](_0x586af1(0x19c));
                    await atom[_0x586af1(0x156)][_0x586af1(0x17a)](_0x2c071c), await atom[_0x586af1(0x156)][_0x586af1(0x17a)](null, { 'split': 'right' }), expect(atom[_0x586af1(0x156)]['getActivePaneItem']())['not'][_0x586af1(0x17e)](_0x2c071c), expect(atom[_0x586af1(0x156)]['getActivePane']()['getItems']()[_0x586af1(0x17d)])[_0x586af1(0x17e)](0x1);
                    let _0xe49909;
                    try {
                        await atom[_0x586af1(0x156)]['open'](_0x2c071c);
                    } catch (_0x312b47) {
                        _0xe49909 = _0x312b47;
                    }
                    expect(_0xe49909[_0x586af1(0x1ca)])[_0x586af1(0x188)](/The workspace can only contain one instance of item/);
                });
            });
        }), describe('when\x20the\x20\x27split\x27\x20option\x20is\x20set', () => {
            const _0x47ca3b = _0x3e86d4;
            describe('when\x20the\x20\x27split\x27\x20option\x20is\x20\x27left\x27', () => {
                const _0x37c9bd = _0x1441;
                it(_0x37c9bd(0x1cb), () => {
                    const _0x30c295 = _0x37c9bd, _0x346e95 = _0x5157f1[_0x30c295(0x171)](), _0x4f1ca8 = _0x346e95['splitRight']();
                    expect(_0x5157f1[_0x30c295(0x171)]())[_0x30c295(0x17e)](_0x4f1ca8);
                    let _0x3322ad = null;
                    waitsForPromise(() => _0x5157f1[_0x30c295(0x17a)]('a', { 'split': _0x30c295(0x19b) })[_0x30c295(0x166)](_0xf8297c => {
                        _0x3322ad = _0xf8297c;
                    })), runs(() => {
                        const _0x3ff7c2 = _0x30c295;
                        expect(_0x5157f1[_0x3ff7c2(0x171)]())['toBe'](_0x346e95), expect(_0x346e95[_0x3ff7c2(0x195)])[_0x3ff7c2(0x184)]([_0x3322ad]), expect(_0x4f1ca8[_0x3ff7c2(0x195)])[_0x3ff7c2(0x184)]([]);
                    }), waitsForPromise(() => {
                        const _0x940d62 = _0x30c295;
                        return _0x4f1ca8[_0x940d62(0x1cc)](), _0x5157f1[_0x940d62(0x17a)]('a', { 'split': _0x940d62(0x19b) })[_0x940d62(0x166)](_0x3e208e => {
                            _0x3322ad = _0x3e208e;
                        });
                    }), runs(() => {
                        const _0x279531 = _0x30c295;
                        expect(_0x5157f1[_0x279531(0x171)]())[_0x279531(0x17e)](_0x346e95), expect(_0x346e95[_0x279531(0x195)])[_0x279531(0x184)]([_0x3322ad]), expect(_0x4f1ca8[_0x279531(0x195)])['toEqual']([]);
                    });
                });
            }), describe('when\x20a\x20pane\x20axis\x20is\x20the\x20leftmost\x20sibling\x20of\x20the\x20current\x20pane', () => {
                const _0x5f358d = _0x1441;
                it(_0x5f358d(0x1cd), () => {
                    const _0x17c3db = _0x5f358d;
                    let _0x357607 = null;
                    const _0x480668 = _0x5157f1['getActivePane'](), _0x42b166 = _0x480668[_0x17c3db(0x1ce)]();
                    _0x42b166[_0x17c3db(0x179)](), _0x480668[_0x17c3db(0x17c)](), expect(_0x5157f1[_0x17c3db(0x171)]())[_0x17c3db(0x17e)](_0x480668), waitsForPromise(() => _0x5157f1['open']('a', { 'split': _0x17c3db(0x19b) })[_0x17c3db(0x166)](_0x465451 => {
                        _0x357607 = _0x465451;
                    })), runs(() => {
                        const _0x3dc15c = _0x17c3db;
                        expect(_0x5157f1[_0x3dc15c(0x171)]())['toBe'](_0x480668), expect(_0x480668[_0x3dc15c(0x195)])['toEqual']([_0x357607]);
                    });
                });
            }), describe(_0x47ca3b(0x1cf), () => {
                const _0x2bc00d = _0x47ca3b;
                it(_0x2bc00d(0x1d0), () => {
                    const _0x2fc06d = _0x2bc00d;
                    let _0x296919 = null;
                    const _0x36f714 = _0x5157f1[_0x2fc06d(0x171)]();
                    let _0x556129 = null;
                    waitsForPromise(() => _0x5157f1[_0x2fc06d(0x17a)]('a', { 'split': 'right' })['then'](_0x59aec5 => {
                        _0x296919 = _0x59aec5;
                    })), runs(() => {
                        const _0x17213c = _0x2fc06d;
                        _0x556129 = _0x5157f1[_0x17213c(0x1d1)]()[_0x17213c(0x1d2)](_0x36940b => _0x36940b !== _0x36f714)[0x0], expect(_0x5157f1[_0x17213c(0x171)]())['toBe'](_0x556129), expect(_0x36f714[_0x17213c(0x195)])['toEqual']([]), expect(_0x556129[_0x17213c(0x195)])['toEqual']([_0x296919]);
                    }), waitsForPromise(() => {
                        const _0x5cbb8b = _0x2fc06d;
                        return _0x36f714[_0x5cbb8b(0x1cc)](), _0x5157f1[_0x5cbb8b(0x17a)]('a', { 'split': _0x5cbb8b(0x1ac) })[_0x5cbb8b(0x166)](_0x4e1d5f => {
                            _0x296919 = _0x4e1d5f;
                        });
                    }), runs(() => {
                        const _0x3eda9c = _0x2fc06d;
                        expect(_0x5157f1[_0x3eda9c(0x171)]())['toBe'](_0x556129), expect(_0x36f714['items'])['toEqual']([]), expect(_0x556129['items'])[_0x3eda9c(0x184)]([_0x296919]);
                    });
                }), describe('when\x20a\x20pane\x20axis\x20is\x20the\x20rightmost\x20sibling\x20of\x20the\x20current\x20pane', () => {
                    const _0x3cfb74 = _0x2bc00d;
                    it(_0x3cfb74(0x1d3), () => {
                        const _0x1f7b6f = _0x3cfb74;
                        let _0x3bea4c = null;
                        const _0xd0e01a = _0x5157f1[_0x1f7b6f(0x171)](), _0x4b5783 = _0xd0e01a[_0x1f7b6f(0x172)]();
                        _0x4b5783[_0x1f7b6f(0x179)](), _0xd0e01a[_0x1f7b6f(0x17c)](), expect(_0x5157f1[_0x1f7b6f(0x171)]())[_0x1f7b6f(0x17e)](_0xd0e01a);
                        let _0x3de359 = null;
                        waitsForPromise(() => _0x5157f1['open']('a', { 'split': _0x1f7b6f(0x1ac) })['then'](_0x32ac8b => {
                            _0x3bea4c = _0x32ac8b;
                        })), runs(() => {
                            const _0x23f1d1 = _0x1f7b6f;
                            _0x3de359 = _0x5157f1[_0x23f1d1(0x1d1)]()[_0x23f1d1(0x1d2)](_0x28ec3e => _0x28ec3e !== _0xd0e01a)[0x0], expect(_0x5157f1[_0x23f1d1(0x171)]())[_0x23f1d1(0x17e)](_0x3de359), expect(_0x3de359['items'])[_0x23f1d1(0x184)]([_0x3bea4c]), expect(_0x5157f1['getCenter']()[_0x23f1d1(0x1d4)][_0x23f1d1(0x1d5)][_0x23f1d1(0x1d6)][0x0])[_0x23f1d1(0x17e)](_0xd0e01a), expect(_0x5157f1[_0x23f1d1(0x1c3)]()['paneContainer']['root'][_0x23f1d1(0x1d6)][0x1])['toBe'](_0x3de359);
                        });
                    });
                });
            }), describe(_0x47ca3b(0x1d7), () => {
                const _0x174760 = _0x47ca3b;
                it(_0x174760(0x1d8), () => {
                    const _0x3e42d2 = _0x174760, _0x5f18ae = _0x5157f1[_0x3e42d2(0x171)](), _0x58fbf2 = _0x5f18ae[_0x3e42d2(0x179)]();
                    expect(_0x5157f1['getActivePane']())[_0x3e42d2(0x17e)](_0x58fbf2);
                    let _0x161e7b = null;
                    waitsForPromise(() => _0x5157f1[_0x3e42d2(0x17a)]('a', { 'split': 'up' })[_0x3e42d2(0x166)](_0x3ecdac => {
                        _0x161e7b = _0x3ecdac;
                    })), runs(() => {
                        const _0x1921d3 = _0x3e42d2;
                        expect(_0x5157f1[_0x1921d3(0x171)]())['toBe'](_0x5f18ae), expect(_0x5f18ae['items'])[_0x1921d3(0x184)]([_0x161e7b]), expect(_0x58fbf2[_0x1921d3(0x195)])[_0x1921d3(0x184)]([]);
                    }), waitsForPromise(() => {
                        const _0x275c50 = _0x3e42d2;
                        return _0x58fbf2[_0x275c50(0x1cc)](), _0x5157f1[_0x275c50(0x17a)]('a', { 'split': 'up' })[_0x275c50(0x166)](_0x3abb47 => {
                            _0x161e7b = _0x3abb47;
                        });
                    }), runs(() => {
                        const _0x22cc13 = _0x3e42d2;
                        expect(_0x5157f1[_0x22cc13(0x171)]())['toBe'](_0x5f18ae), expect(_0x5f18ae[_0x22cc13(0x195)])[_0x22cc13(0x184)]([_0x161e7b]), expect(_0x58fbf2['items'])['toEqual']([]);
                    });
                });
            }), describe(_0x47ca3b(0x1d9), () => {
                it('opens\x20the\x20new\x20item\x20in\x20the\x20current\x20pane', () => {
                    const _0x2c8505 = _0x1441;
                    let _0xfd8ea0 = null;
                    const _0x46711f = _0x5157f1['getActivePane'](), _0x7536f1 = _0x46711f[_0x2c8505(0x1da)]();
                    _0x7536f1[_0x2c8505(0x172)](), _0x46711f[_0x2c8505(0x17c)](), expect(_0x5157f1[_0x2c8505(0x171)]())[_0x2c8505(0x17e)](_0x46711f), waitsForPromise(() => _0x5157f1[_0x2c8505(0x17a)]('a', { 'split': 'up' })[_0x2c8505(0x166)](_0x4b186e => {
                        _0xfd8ea0 = _0x4b186e;
                    })), runs(() => {
                        const _0x1fe2cb = _0x2c8505;
                        expect(_0x5157f1['getActivePane']())[_0x1fe2cb(0x17e)](_0x46711f), expect(_0x46711f[_0x1fe2cb(0x195)])[_0x1fe2cb(0x184)]([_0xfd8ea0]);
                    });
                });
            }), describe(_0x47ca3b(0x1db), () => {
                const _0x40dad2 = _0x47ca3b;
                it(_0x40dad2(0x1dc), () => {
                    const _0x1e3046 = _0x40dad2;
                    let _0x19ad1e = null;
                    const _0x2219f7 = _0x5157f1[_0x1e3046(0x171)]();
                    let _0x171b61 = null;
                    waitsForPromise(() => _0x5157f1[_0x1e3046(0x17a)]('a', { 'split': 'down' })['then'](_0x26d0c3 => {
                        _0x19ad1e = _0x26d0c3;
                    })), runs(() => {
                        const _0x2f49f9 = _0x1e3046;
                        _0x171b61 = _0x5157f1['getPanes']()[_0x2f49f9(0x1d2)](_0x170e8b => _0x170e8b !== _0x2219f7)[0x0], expect(_0x5157f1[_0x2f49f9(0x171)]())[_0x2f49f9(0x17e)](_0x171b61), expect(_0x2219f7[_0x2f49f9(0x195)])['toEqual']([]), expect(_0x171b61[_0x2f49f9(0x195)])[_0x2f49f9(0x184)]([_0x19ad1e]);
                    }), waitsForPromise(() => {
                        const _0x46e5d4 = _0x1e3046;
                        return _0x2219f7[_0x46e5d4(0x1cc)](), _0x5157f1[_0x46e5d4(0x17a)]('a', { 'split': 'down' })[_0x46e5d4(0x166)](_0x3a3aa1 => {
                            _0x19ad1e = _0x3a3aa1;
                        });
                    }), runs(() => {
                        const _0x4815bd = _0x1e3046;
                        expect(_0x5157f1['getActivePane']())[_0x4815bd(0x17e)](_0x171b61), expect(_0x2219f7[_0x4815bd(0x195)])[_0x4815bd(0x184)]([]), expect(_0x171b61[_0x4815bd(0x195)])[_0x4815bd(0x184)]([_0x19ad1e]);
                    });
                }), describe(_0x40dad2(0x1dd), () => {
                    const _0x44ef61 = _0x40dad2;
                    it(_0x44ef61(0x1de), () => {
                        const _0x3a8612 = _0x44ef61;
                        let _0x1fda49 = null;
                        const _0x41c1f7 = _0x5157f1['getActivePane'](), _0x4957ae = _0x41c1f7[_0x3a8612(0x179)]();
                        _0x41c1f7[_0x3a8612(0x17c)](), expect(_0x5157f1['getActivePane']())[_0x3a8612(0x17e)](_0x41c1f7);
                        let _0xa5d0ee = null;
                        waitsForPromise(() => _0x5157f1[_0x3a8612(0x17a)]('a', { 'split': 'down' })[_0x3a8612(0x166)](_0x4cb5bf => {
                            _0x1fda49 = _0x4cb5bf;
                        })), runs(() => {
                            const _0x191453 = _0x3a8612;
                            _0xa5d0ee = _0x5157f1[_0x191453(0x1d1)]()[_0x191453(0x1d2)](_0x29ab20 => _0x29ab20 !== _0x41c1f7)[0x0], expect(_0x5157f1[_0x191453(0x171)]())['toBe'](_0xa5d0ee), expect(_0xa5d0ee['items'])[_0x191453(0x184)]([_0x1fda49]), expect(_0x5157f1[_0x191453(0x1c3)]()[_0x191453(0x1d4)][_0x191453(0x1d5)][_0x191453(0x1d6)][0x0])['toBe'](_0x41c1f7), expect(_0x5157f1[_0x191453(0x1c3)]()[_0x191453(0x1d4)]['root'][_0x191453(0x1d6)][0x1])[_0x191453(0x17e)](_0x4957ae);
                        });
                    });
                });
            });
        }), describe(_0x3e86d4(0x1df), () => {
            const _0x490b26 = _0x3e86d4;
            it(_0x490b26(0x1e0), () => {
                const _0x58152e = _0x490b26;
                waitsForPromise(() => _0x5157f1[_0x58152e(0x17a)]('a', {
                    'initialLine': 0x1,
                    'initialColumn': 0x5
                })), runs(() => expect(_0x5157f1[_0x58152e(0x1e1)]()[_0x58152e(0x1e2)]())['toEqual']([
                    0x1,
                    0x5
                ])), waitsForPromise(() => _0x5157f1[_0x58152e(0x17a)]('a', {
                    'initialLine': 0x2,
                    'initialColumn': 0x4
                })), runs(() => expect(_0x5157f1[_0x58152e(0x1e1)]()['getCursorBufferPosition']())[_0x58152e(0x184)]([
                    0x2,
                    0x4
                ])), waitsForPromise(() => _0x5157f1[_0x58152e(0x17a)]('a', {
                    'initialLine': 0x0,
                    'initialColumn': 0x0
                })), runs(() => expect(_0x5157f1['getActiveTextEditor']()['getCursorBufferPosition']())[_0x58152e(0x184)]([
                    0x0,
                    0x0
                ])), waitsForPromise(() => _0x5157f1[_0x58152e(0x17a)]('a', {
                    'initialLine': NaN,
                    'initialColumn': 0x4
                })), runs(() => expect(_0x5157f1[_0x58152e(0x1e1)]()[_0x58152e(0x1e2)]())['toEqual']([
                    0x0,
                    0x4
                ])), waitsForPromise(() => _0x5157f1[_0x58152e(0x17a)]('a', {
                    'initialLine': 0x2,
                    'initialColumn': NaN
                })), runs(() => expect(_0x5157f1['getActiveTextEditor']()[_0x58152e(0x1e2)]())[_0x58152e(0x184)]([
                    0x2,
                    0x0
                ])), waitsForPromise(() => _0x5157f1[_0x58152e(0x17a)]('a', {
                    'initialLine': Infinity,
                    'initialColumn': Infinity
                })), runs(() => expect(_0x5157f1[_0x58152e(0x1e1)]()[_0x58152e(0x1e2)]())[_0x58152e(0x184)]([
                    0x2,
                    0xb
                ]));
            }), it(_0x490b26(0x1e3), async () => {
                const _0x2e8721 = _0x490b26;
                let _0x5dd6d2;
                await _0x5157f1[_0x2e8721(0x17a)](_0x2e8721(0x1e4)), _0x5dd6d2 = _0x5157f1[_0x2e8721(0x1e1)](), _0x5dd6d2['foldBufferRow'](0x2), expect(_0x5dd6d2[_0x2e8721(0x1e5)](0x2))[_0x2e8721(0x17e)](!![]), expect(_0x5dd6d2[_0x2e8721(0x1e5)](0x3))['toBe'](!![]), await _0x5157f1[_0x2e8721(0x17a)](_0x2e8721(0x1e4), { 'initialLine': 0x2 }), expect(_0x5dd6d2[_0x2e8721(0x1e5)](0x2))[_0x2e8721(0x17e)](![]), expect(_0x5dd6d2['isFoldedAtBufferRow'](0x3))[_0x2e8721(0x17e)](![]);
            });
        }), describe(_0x3e86d4(0x1e6), () => {
            const _0x59edcb = async (_0x2e4add, _0x4f6538) => {
                const _0x43f6d4 = _0x1441;
                spyOn(fs, 'getSizeSync')['andReturn'](_0x2e4add * 0x100001);
                let _0x308cb1 = 0x1;
                atom['applicationDelegate'][_0x43f6d4(0x159)]['andCallFake']((_0x4b8f20, _0x1ab1b5) => _0x1ab1b5(_0x308cb1));
                let _0x4db110 = await _0x5157f1['open'](_0x43f6d4(0x1e7));
                _0x4f6538 ? (expect(_0x4db110)[_0x43f6d4(0x185)](), expect(atom[_0x43f6d4(0x158)]['confirm'])[_0x43f6d4(0x194)](), atom[_0x43f6d4(0x158)][_0x43f6d4(0x159)]['reset'](), _0x308cb1 = 0x0, _0x4db110 = await _0x5157f1[_0x43f6d4(0x17a)](_0x43f6d4(0x1e7)), expect(atom[_0x43f6d4(0x158)]['confirm'])[_0x43f6d4(0x194)]()) : expect(_0x4db110)['not'][_0x43f6d4(0x185)]();
            };
            it('prompts\x20before\x20opening\x20the\x20file', async () => {
                const _0x3c7ef5 = _0x1441;
                atom[_0x3c7ef5(0x167)]['set'](_0x3c7ef5(0x1e8), 0x14), await _0x59edcb(0x14, !![]);
            }), it('doesn\x27t\x20prompt\x20on\x20files\x20below\x20the\x20limit', async () => {
                const _0x9b4299 = _0x1441;
                atom['config'][_0x9b4299(0x1e9)]('core.warnOnLargeFileLimit', 0x1e), await _0x59edcb(0x14, ![]);
            }), it('prompts\x20for\x20smaller\x20files\x20with\x20a\x20lower\x20limit', async () => {
                const _0x43c032 = _0x1441;
                atom[_0x43c032(0x167)][_0x43c032(0x1e9)](_0x43c032(0x1e8), 0x5), await _0x59edcb(0xa, !![]);
            });
        }), describe(_0x3e86d4(0x1ea), () => {
            const _0x3ab36d = _0x3e86d4;
            it(_0x3ab36d(0x1eb), () => {
                const _0x3c606d = _0x3ab36d, _0x45c0f9 = (_0x5caa64, _0x50097d) => {
                        const _0x5d6fb4 = _0x1441;
                        if (_0x5caa64 != null ? _0x5caa64[_0x5d6fb4(0x1ec)](/\.foo/) : undefined)
                            return {
                                'foo': _0x5caa64,
                                'options': _0x50097d
                            };
                    }, _0x393218 = _0x65b16d => {
                        const _0x35e00a = _0x1441;
                        if (_0x65b16d != null ? _0x65b16d[_0x35e00a(0x1ec)](/^bar:\/\//) : undefined)
                            return { 'bar': _0x65b16d };
                    };
                _0x5157f1['addOpener'](_0x45c0f9), _0x5157f1[_0x3c606d(0x1ed)](_0x393218), waitsForPromise(() => {
                    const _0x4cc601 = _0x3c606d, _0x4d265c = atom[_0x4cc601(0x15c)]['getDirectories']()[0x0][_0x4cc601(0x182)]('a.foo');
                    return _0x5157f1[_0x4cc601(0x17a)](_0x4d265c, { 'hey': _0x4cc601(0x1ee) })['then'](_0x3003bd => expect(_0x3003bd)[_0x4cc601(0x184)]({
                        'foo': _0x4d265c,
                        'options': { 'hey': _0x4cc601(0x1ee) }
                    }));
                }), waitsForPromise(() => _0x5157f1['open'](_0x3c606d(0x1ef))['then'](_0x417a3c => expect(_0x417a3c)['toEqual']({ 'bar': 'bar://baz' })));
            });
        }), it(_0x3e86d4(0x1f0), () => {
            const _0x50c82 = _0x3e86d4;
            if (process[_0x50c82(0x1f1)] !== _0x50c82(0x1f2))
                return;
            spyOn(atom[_0x50c82(0x158)], _0x50c82(0x1f3)), waitsForPromise(() => _0x5157f1[_0x50c82(0x17a)]()), runs(() => expect(atom[_0x50c82(0x158)][_0x50c82(0x1f3)])[_0x50c82(0x1a3)]['toHaveBeenCalled']()), waitsForPromise(() => _0x5157f1[_0x50c82(0x17a)](_0x50c82(0x1f4))), runs(() => expect(atom['applicationDelegate'][_0x50c82(0x1f3)])[_0x50c82(0x1a3)]['toHaveBeenCalled']()), waitsForPromise(() => _0x5157f1[_0x50c82(0x17a)](__filename)), runs(() => expect(atom[_0x50c82(0x158)]['addRecentDocument'])[_0x50c82(0x1f5)](__filename));
        }), it('notifies\x20::onDidAddTextEditor\x20observers', () => {
            const _0x2b14d1 = _0x3e86d4, _0x3ef9aa = require[_0x2b14d1(0x182)](_0x2b14d1(0x1f6)), _0x41e2e2 = jasmine[_0x2b14d1(0x1aa)](_0x2b14d1(0x1f7));
            _0x5157f1[_0x2b14d1(0x1f8)](_0x41e2e2);
            let _0x522457 = null;
            waitsForPromise(() => _0x5157f1[_0x2b14d1(0x17a)](_0x3ef9aa)[_0x2b14d1(0x166)](_0x354cfd => {
                _0x522457 = _0x354cfd;
            })), runs(() => expect(_0x41e2e2[_0x2b14d1(0x1f9)][0x0][0x0][_0x2b14d1(0x1fa)])[_0x2b14d1(0x17e)](_0x522457));
        }), describe(_0x3e86d4(0x1fb), () => {
            const _0x2b0410 = _0x3e86d4;
            let _0x43bacf = null;
            beforeEach(() => atom[_0x2b0410(0x162)]['onDidAddNotification'](_0x43bacf = jasmine[_0x2b0410(0x1aa)]())), describe('when\x20a\x20file\x20does\x20not\x20exist', () => {
                const _0x10e8a6 = _0x2b0410;
                it(_0x10e8a6(0x1fc), () => {
                    const _0x107e32 = _0x10e8a6;
                    waitsForPromise(() => _0x5157f1[_0x107e32(0x17a)](_0x107e32(0x1fd))), runs(() => {
                        const _0xc51b24 = _0x107e32, _0xe71188 = _0x5157f1[_0xc51b24(0x1e1)]();
                        expect(_0x43bacf)['not'][_0xc51b24(0x194)](), expect(_0xe71188['getPath']())[_0xc51b24(0x1a2)]('not-a-file.md');
                    });
                });
            }), describe(_0x2b0410(0x1fe), () => {
                const _0xce7271 = _0x2b0410;
                beforeEach(() => spyOn(fs, _0xce7271(0x1ff))[_0xce7271(0x1b1)](_0x1defad => {
                    const _0x4ddcfb = _0xce7271, _0x111bcd = new Error('EACCES,\x20permission\x20denied\x20\x27' + _0x1defad + '\x27');
                    _0x111bcd[_0x4ddcfb(0x200)] = _0x1defad, _0x111bcd[_0x4ddcfb(0x201)] = _0x4ddcfb(0x202);
                    throw _0x111bcd;
                })), it(_0xce7271(0x203), () => {
                    const _0x15c46c = _0xce7271;
                    waitsForPromise(() => _0x5157f1[_0x15c46c(0x17a)]('file1')), runs(() => {
                        const _0x496460 = _0x15c46c;
                        expect(_0x43bacf)['toHaveBeenCalled']();
                        const _0x1baf79 = _0x43bacf[_0x496460(0x204)][_0x496460(0x205)][0x0];
                        expect(_0x1baf79['getType']())[_0x496460(0x17e)](_0x496460(0x206)), expect(_0x1baf79[_0x496460(0x207)]())[_0x496460(0x1a2)](_0x496460(0x208)), expect(_0x1baf79[_0x496460(0x207)]())['toContain'](_0x496460(0x209));
                    });
                });
            }), describe(_0x2b0410(0x20a), () => {
                const _0x2a5b61 = _0x2b0410;
                beforeEach(() => spyOn(fs, _0x2a5b61(0x1ff))['andCallFake'](_0x13e16a => {
                    const _0x97e3e7 = _0x2a5b61, _0x34e519 = new Error(_0x97e3e7(0x20b) + _0x13e16a + '\x27');
                    _0x34e519[_0x97e3e7(0x200)] = _0x13e16a, _0x34e519[_0x97e3e7(0x201)] = _0x97e3e7(0x20c);
                    throw _0x34e519;
                })), it('creates\x20a\x20notification', () => {
                    const _0x404c8c = _0x2a5b61;
                    waitsForPromise(() => _0x5157f1['open'](_0x404c8c(0x209))), runs(() => {
                        const _0x11893c = _0x404c8c;
                        expect(_0x43bacf)['toHaveBeenCalled']();
                        const _0x4d326 = _0x43bacf[_0x11893c(0x204)][_0x11893c(0x205)][0x0];
                        expect(_0x4d326[_0x11893c(0x20d)]())[_0x11893c(0x17e)]('warning'), expect(_0x4d326[_0x11893c(0x207)]())[_0x11893c(0x1a2)](_0x11893c(0x20e)), expect(_0x4d326[_0x11893c(0x207)]())[_0x11893c(0x1a2)](_0x11893c(0x209));
                    });
                });
            }), describe('when\x20the\x20the\x20file\x20is\x20already\x20open\x20in\x20windows', () => {
                const _0x1549f7 = _0x2b0410;
                beforeEach(() => spyOn(fs, 'openSync')[_0x1549f7(0x1b1)](_0x3bc03e => {
                    const _0x44900a = _0x1549f7, _0xfa3cdc = new Error(_0x44900a(0x20f) + _0x3bc03e + '\x27');
                    _0xfa3cdc['path'] = _0x3bc03e, _0xfa3cdc['code'] = 'EBUSY';
                    throw _0xfa3cdc;
                })), it('creates\x20a\x20notification', () => {
                    const _0x3385dd = _0x1549f7;
                    waitsForPromise(() => _0x5157f1[_0x3385dd(0x17a)](_0x3385dd(0x209))), runs(() => {
                        const _0x2deddb = _0x3385dd;
                        expect(_0x43bacf)[_0x2deddb(0x194)]();
                        const _0x527b63 = _0x43bacf[_0x2deddb(0x204)][_0x2deddb(0x205)][0x0];
                        expect(_0x527b63[_0x2deddb(0x20d)]())[_0x2deddb(0x17e)](_0x2deddb(0x206)), expect(_0x527b63[_0x2deddb(0x207)]())[_0x2deddb(0x1a2)](_0x2deddb(0x20e)), expect(_0x527b63[_0x2deddb(0x207)]())[_0x2deddb(0x1a2)](_0x2deddb(0x209));
                    });
                });
            }), describe('when\x20there\x20is\x20an\x20unhandled\x20error', () => {
                const _0x5a21d3 = _0x2b0410;
                beforeEach(() => spyOn(fs, _0x5a21d3(0x1ff))[_0x5a21d3(0x1b1)](_0x59450b => {
                    const _0x2f7085 = _0x5a21d3;
                    throw new Error(_0x2f7085(0x210));
                })), it(_0x5a21d3(0x1c9), () => {
                    waitsFor(_0x707a6a => {
                        const _0x15483c = _0x1441;
                        _0x5157f1[_0x15483c(0x17a)]('file1')[_0x15483c(0x211)](_0x56f2b0 => {
                            const _0x29cfc1 = _0x15483c;
                            expect(_0x56f2b0[_0x29cfc1(0x1ca)])[_0x29cfc1(0x17e)](_0x29cfc1(0x210)), _0x707a6a();
                        });
                    });
                });
            });
        }), describe('when\x20the\x20file\x20is\x20already\x20open\x20in\x20pending\x20state', () => {
            const _0x30c0db = _0x3e86d4;
            it(_0x30c0db(0x212), () => {
                const _0x1f1b86 = _0x30c0db;
                let _0x5befb7 = null, _0x28afe8 = null;
                waitsForPromise(() => atom[_0x1f1b86(0x156)][_0x1f1b86(0x17a)](_0x1f1b86(0x1e7), { 'pending': !![] })[_0x1f1b86(0x166)](_0x1f355f => {
                    const _0x10d86a = _0x1f1b86;
                    _0x5befb7 = _0x1f355f, _0x28afe8 = atom['workspace'][_0x10d86a(0x171)]();
                })), runs(() => expect(_0x28afe8[_0x1f1b86(0x213)]())[_0x1f1b86(0x184)](_0x5befb7)), waitsForPromise(() => atom['workspace'][_0x1f1b86(0x17a)]('sample.js')), runs(() => expect(_0x28afe8[_0x1f1b86(0x213)]())[_0x1f1b86(0x214)]());
            });
        }), describe(_0x3e86d4(0x215), () => {
            const _0x2ce48e = _0x3e86d4;
            it(_0x2ce48e(0x216), () => {
                const _0x3fcd7d = _0x2ce48e;
                let _0x36f707 = null, _0xedf805 = null;
                waitsForPromise(() => atom['workspace'][_0x3fcd7d(0x17a)](_0x3fcd7d(0x1c2))[_0x3fcd7d(0x166)](_0xf9c30f => {
                    _0x36f707 = _0xf9c30f;
                })), waitsForPromise(() => atom['workspace'][_0x3fcd7d(0x17a)](_0x3fcd7d(0x217), { 'pending': !![] })[_0x3fcd7d(0x166)](_0x4386a6 => {
                    _0xedf805 = _0x4386a6;
                })), runs(() => {
                    const _0x14e810 = _0x3fcd7d, _0x54cb7e = atom[_0x14e810(0x156)][_0x14e810(0x171)]();
                    _0x54cb7e[_0x14e810(0x176)](_0x36f707), expect(_0x54cb7e['getItems']()[_0x14e810(0x17d)])['toBe'](0x2), expect(_0x54cb7e[_0x14e810(0x1c7)]())[_0x14e810(0x184)]([
                        _0x36f707,
                        _0xedf805
                    ]);
                });
            });
        }), describe('when\x20replacing\x20a\x20pending\x20item\x20which\x20is\x20the\x20last\x20item\x20in\x20a\x20second\x20pane', () => {
            const _0x1a14c0 = _0x3e86d4;
            it(_0x1a14c0(0x218), () => {
                const _0x85ebdf = _0x1a14c0;
                atom['config'][_0x85ebdf(0x1e9)]('core.destroyEmptyPanes', !![]);
                let _0x2a1bf0 = null, _0x2550b5 = null;
                const _0xd54595 = atom[_0x85ebdf(0x156)][_0x85ebdf(0x171)]();
                let _0x366119 = null;
                waitsForPromise(() => atom[_0x85ebdf(0x156)][_0x85ebdf(0x17a)](_0x85ebdf(0x1e7), {
                    'pending': !![],
                    'split': 'right'
                })[_0x85ebdf(0x166)](_0xc6f69f => {
                    const _0x582e43 = _0x85ebdf;
                    _0x2a1bf0 = _0xc6f69f, _0x366119 = atom['workspace'][_0x582e43(0x171)](), spyOn(_0x366119, _0x582e43(0x18e))['andCallThrough']();
                })), runs(() => {
                    const _0x592a27 = _0x85ebdf;
                    expect(_0xd54595)[_0x592a27(0x1a3)][_0x592a27(0x17e)](_0x366119), expect(atom[_0x592a27(0x156)][_0x592a27(0x171)]())[_0x592a27(0x17e)](_0x366119), expect(atom[_0x592a27(0x156)]['getActivePane']()[_0x592a27(0x1c7)]()['length'])['toBe'](0x1), expect(_0x366119[_0x592a27(0x213)]())[_0x592a27(0x17e)](_0x2a1bf0);
                }), waitsForPromise(() => atom[_0x85ebdf(0x156)][_0x85ebdf(0x17a)](_0x85ebdf(0x1c2), { 'pending': !![] })['then'](_0x821889 => {
                    _0x2550b5 = _0x821889;
                })), runs(() => {
                    const _0x6a5806 = _0x85ebdf;
                    expect(_0x366119['getPendingItem']())['toBe'](_0x2550b5), expect(_0x366119[_0x6a5806(0x18e)]['callCount'])['toBe'](0x0);
                });
            });
        }), describe(_0x3e86d4(0x219), () => {
            it('adds\x20the\x20buffer\x20to\x20the\x20project', async () => {
                const _0x40941e = _0x1441, _0x267710 = new TextBuffer(), _0x479351 = new TextEditor({ 'buffer': _0x267710 });
                await atom['workspace']['open'](_0x479351), expect(atom['project'][_0x40941e(0x21a)]()[_0x40941e(0x21b)](_0x3722ff => _0x3722ff['id']))[_0x40941e(0x1a2)](_0x267710['id']), expect(_0x267710['getLanguageMode']()['getLanguageId']())['toBe'](_0x40941e(0x21c));
            });
        });
    }), describe('finding\x20items\x20in\x20the\x20workspace', () => {
        const _0x42bd32 = _0x1e7543;
        it(_0x42bd32(0x21d), () => {
            const _0x1b6212 = _0x42bd32, _0x5b7841 = _0x1b6212(0x21e), _0x44f8f4 = {
                    'element': document['createElement']('div'),
                    'getURI'() {
                        return _0x5b7841;
                    }
                };
            atom['workspace'][_0x1b6212(0x171)]()[_0x1b6212(0x176)](_0x44f8f4), expect(atom[_0x1b6212(0x156)][_0x1b6212(0x1bd)](_0x44f8f4))[_0x1b6212(0x17e)](atom[_0x1b6212(0x156)][_0x1b6212(0x1c3)]()['getActivePane']()), expect(atom[_0x1b6212(0x156)][_0x1b6212(0x21f)](_0x44f8f4))[_0x1b6212(0x17e)](atom[_0x1b6212(0x156)][_0x1b6212(0x1c3)]()), expect(atom[_0x1b6212(0x156)][_0x1b6212(0x220)](_0x5b7841))['toBe'](atom[_0x1b6212(0x156)]['getCenter']()[_0x1b6212(0x171)]()), expect(atom['workspace']['paneContainerForURI'](_0x5b7841))[_0x1b6212(0x17e)](atom[_0x1b6212(0x156)]['getCenter']()), atom[_0x1b6212(0x156)]['getActivePane']()[_0x1b6212(0x221)](), atom[_0x1b6212(0x156)][_0x1b6212(0x1b4)]()[_0x1b6212(0x171)]()[_0x1b6212(0x176)](_0x44f8f4), expect(atom[_0x1b6212(0x156)][_0x1b6212(0x1bd)](_0x44f8f4))[_0x1b6212(0x17e)](atom[_0x1b6212(0x156)][_0x1b6212(0x1b4)]()['getActivePane']()), expect(atom[_0x1b6212(0x156)][_0x1b6212(0x21f)](_0x44f8f4))['toBe'](atom[_0x1b6212(0x156)][_0x1b6212(0x1b4)]()), expect(atom[_0x1b6212(0x156)][_0x1b6212(0x220)](_0x5b7841))[_0x1b6212(0x17e)](atom[_0x1b6212(0x156)][_0x1b6212(0x1b4)]()[_0x1b6212(0x171)]()), expect(atom[_0x1b6212(0x156)][_0x1b6212(0x222)](_0x5b7841))[_0x1b6212(0x17e)](atom[_0x1b6212(0x156)][_0x1b6212(0x1b4)]());
        });
    }), describe(_0x1e7543(0x223), () => {
        const _0x19282f = _0x1e7543;
        let _0x49d84f;
        const _0x1cdcc4 = 'atom://hide-test';
        beforeEach(() => {
            const _0x320505 = _0x1441, _0x7cea67 = document[_0x320505(0x1ad)](_0x320505(0x19c));
            _0x49d84f = {
                'getTitle': () => _0x320505(0x224),
                'getElement': () => _0x7cea67,
                'getURI': () => _0x1cdcc4
            };
        }), describe(_0x19282f(0x225), () => {
            const _0x1b76be = _0x19282f;
            it(_0x1b76be(0x226), () => {
                const _0x489333 = _0x1b76be, _0x223fef = atom[_0x489333(0x156)][_0x489333(0x171)]();
                _0x223fef[_0x489333(0x19d)](_0x49d84f), atom['workspace'][_0x489333(0x227)](_0x1cdcc4), expect(_0x223fef[_0x489333(0x1c7)]()['length'])[_0x489333(0x17e)](0x0);
            }), it(_0x1b76be(0x228), () => {
                const _0x2fa33b = _0x1b76be, _0xdb9a22 = atom[_0x2fa33b(0x156)][_0x2fa33b(0x1b4)](), _0x1c26b6 = _0xdb9a22[_0x2fa33b(0x171)]();
                _0x1c26b6[_0x2fa33b(0x19d)](_0x49d84f), _0xdb9a22[_0x2fa33b(0x17c)](), expect(_0xdb9a22[_0x2fa33b(0x229)]())['toBe'](!![]);
                const _0x4fdca0 = atom[_0x2fa33b(0x156)][_0x2fa33b(0x227)](_0x1cdcc4);
                expect(_0x4fdca0)['toBe'](!![]), expect(_0xdb9a22[_0x2fa33b(0x229)]())[_0x2fa33b(0x17e)](![]);
            });
        }), describe(_0x19282f(0x22a), () => {
            const _0x3c4a2b = _0x19282f;
            it('if\x20the\x20item\x20is\x20in\x20the\x20center,\x20removes\x20it', () => {
                const _0x2ed3a6 = _0x1441, _0x3166d4 = atom[_0x2ed3a6(0x156)][_0x2ed3a6(0x171)]();
                _0x3166d4[_0x2ed3a6(0x19d)](_0x49d84f), atom[_0x2ed3a6(0x156)]['hide'](_0x49d84f), expect(_0x3166d4['getItems']()[_0x2ed3a6(0x17d)])[_0x2ed3a6(0x17e)](0x0);
            }), it(_0x3c4a2b(0x22b), () => {
                const _0x36f8e4 = _0x3c4a2b, _0xebd701 = atom['workspace'][_0x36f8e4(0x1b4)](), _0x376276 = _0xebd701[_0x36f8e4(0x171)]();
                _0x376276['addItem'](_0x49d84f), _0xebd701[_0x36f8e4(0x17c)](), expect(_0xebd701[_0x36f8e4(0x229)]())['toBe'](!![]);
                const _0x432fca = atom[_0x36f8e4(0x156)]['hide'](_0x49d84f);
                expect(_0x432fca)[_0x36f8e4(0x17e)](!![]), expect(_0xebd701[_0x36f8e4(0x229)]())['toBe'](![]);
            });
        });
    }), describe('::toggle(itemOrUri)', () => {
        const _0x540f40 = _0x1e7543;
        describe(_0x540f40(0x22c), () => {
            it('adds\x20or\x20shows\x20the\x20item\x20and\x20its\x20dock\x20if\x20it\x20is\x20not\x20currently\x20visible,\x20and\x20otherwise\x20hides\x20the\x20containing\x20dock', async () => {
                const _0x2f90d9 = _0x1441, _0x1dadb9 = {
                        'getDefaultLocation'() {
                            const _0x15bdb2 = _0x1441;
                            return _0x15bdb2(0x19b);
                        },
                        'getElement'() {
                            const _0x4026c6 = _0x1441;
                            return this['element'] = document[_0x4026c6(0x1ad)](_0x4026c6(0x19c));
                        }
                    }, _0x4f3c10 = {
                        'getDefaultLocation'() {
                            const _0x4c7fa1 = _0x1441;
                            return _0x4c7fa1(0x19b);
                        },
                        'getElement'() {
                            const _0x2b58f7 = _0x1441;
                            return this['element'] = document[_0x2b58f7(0x1ad)](_0x2b58f7(0x19c));
                        }
                    }, _0x3c79c4 = _0x5157f1[_0x2f90d9(0x1b4)]();
                expect(_0x3c79c4['isVisible']())['toBe'](![]), await _0x5157f1['toggle'](_0x1dadb9), expect(_0x3c79c4['isVisible']())[_0x2f90d9(0x17e)](!![]), expect(_0x3c79c4[_0x2f90d9(0x193)]())[_0x2f90d9(0x17e)](_0x1dadb9), await _0x5157f1[_0x2f90d9(0x22d)](_0x4f3c10), expect(_0x3c79c4[_0x2f90d9(0x229)]())['toBe'](!![]), expect(_0x3c79c4[_0x2f90d9(0x193)]())[_0x2f90d9(0x17e)](_0x4f3c10), await _0x5157f1[_0x2f90d9(0x22d)](_0x1dadb9), expect(_0x3c79c4[_0x2f90d9(0x229)]())[_0x2f90d9(0x17e)](!![]), expect(_0x3c79c4[_0x2f90d9(0x193)]())['toBe'](_0x1dadb9), await _0x5157f1[_0x2f90d9(0x22d)](_0x1dadb9), expect(_0x3c79c4[_0x2f90d9(0x229)]())[_0x2f90d9(0x17e)](![]), expect(_0x3c79c4[_0x2f90d9(0x193)]())['toBe'](_0x1dadb9), await _0x5157f1[_0x2f90d9(0x22d)](_0x4f3c10), expect(_0x3c79c4['isVisible']())[_0x2f90d9(0x17e)](!![]), expect(_0x3c79c4[_0x2f90d9(0x193)]())[_0x2f90d9(0x17e)](_0x4f3c10);
            });
        }), describe(_0x540f40(0x22e), () => {
            const _0x3d1a12 = _0x540f40;
            it(_0x3d1a12(0x22f), async () => {
                const _0x3eec21 = _0x3d1a12, _0x56cdb8 = {
                        'getDefaultLocation'() {
                            return 'center';
                        },
                        'getElement'() {
                            const _0x3b08b9 = _0x1441;
                            return this[_0x3b08b9(0x230)] = document[_0x3b08b9(0x1ad)]('div');
                        }
                    }, _0xb534f2 = {
                        'getDefaultLocation'() {
                            const _0x37e2c3 = _0x1441;
                            return _0x37e2c3(0x1b7);
                        },
                        'getElement'() {
                            const _0xc23769 = _0x1441;
                            return this[_0xc23769(0x230)] = document['createElement'](_0xc23769(0x19c));
                        }
                    };
                expect(_0x5157f1[_0x3eec21(0x193)]())[_0x3eec21(0x185)](), await _0x5157f1[_0x3eec21(0x22d)](_0x56cdb8), expect(_0x5157f1[_0x3eec21(0x193)]())[_0x3eec21(0x17e)](_0x56cdb8), await _0x5157f1['toggle'](_0xb534f2), expect(_0x5157f1[_0x3eec21(0x193)]())[_0x3eec21(0x17e)](_0xb534f2), await _0x5157f1[_0x3eec21(0x22d)](_0x56cdb8), expect(_0x5157f1[_0x3eec21(0x193)]())[_0x3eec21(0x17e)](_0x56cdb8), await _0x5157f1[_0x3eec21(0x22d)](_0x56cdb8), expect(_0x5157f1[_0x3eec21(0x1bd)](_0x56cdb8))[_0x3eec21(0x185)](), expect(_0x5157f1['getActivePaneItem']())[_0x3eec21(0x17e)](_0xb534f2);
            });
        });
    }), describe('active\x20pane\x20containers', () => {
        const _0xf8984b = _0x1e7543;
        it(_0xf8984b(0x231), () => {
            const _0x4a4744 = _0xf8984b, _0x40bd20 = _0x5157f1[_0x4a4744(0x1b4)](), _0x5454e1 = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x48773a = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x3a819e = { 'element': document['createElement'](_0x4a4744(0x19c)) }, _0x969059 = _0x40bd20[_0x4a4744(0x171)]();
            _0x969059['addItems']([
                _0x5454e1,
                _0x48773a
            ]);
            const _0x369c46 = _0x969059[_0x4a4744(0x179)]({ 'items': [_0x3a819e] }), _0x49b6ca = _0x5157f1[_0x4a4744(0x199)](), _0x2d6156 = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x344bc3 = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x2b8508 = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x68c455 = _0x49b6ca[_0x4a4744(0x171)]();
            _0x68c455[_0x4a4744(0x232)]([
                _0x2d6156,
                _0x344bc3
            ]);
            const _0x4cb44e = _0x68c455[_0x4a4744(0x179)]({ 'items': [_0x2b8508] }), _0x2390af = _0x5157f1[_0x4a4744(0x233)](), _0x44115e = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x65d5e2 = { 'element': document['createElement']('div') }, _0x57cc0e = { 'element': document['createElement'](_0x4a4744(0x19c)) }, _0x5aa9ca = _0x2390af[_0x4a4744(0x171)]();
            _0x5aa9ca[_0x4a4744(0x232)]([
                _0x44115e,
                _0x65d5e2
            ]);
            const _0x5c4d45 = _0x5aa9ca['splitDown']({ 'items': [_0x57cc0e] }), _0x31e2e3 = _0x5157f1[_0x4a4744(0x1c3)](), _0x100b12 = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x4e2f23 = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x35185c = { 'element': document[_0x4a4744(0x1ad)](_0x4a4744(0x19c)) }, _0x448fec = _0x31e2e3[_0x4a4744(0x171)]();
            _0x448fec[_0x4a4744(0x232)]([
                _0x100b12,
                _0x4e2f23
            ]);
            const _0x42d913 = _0x448fec[_0x4a4744(0x179)]({ 'items': [_0x35185c] }), _0xc8ec25 = [], _0x21222a = [], _0x491366 = [];
            _0x5157f1[_0x4a4744(0x234)](_0x28399e => _0xc8ec25[_0x4a4744(0x190)](_0x28399e)), _0x5157f1['onDidChangeActivePane'](_0x268db8 => _0x21222a[_0x4a4744(0x190)](_0x268db8)), _0x5157f1[_0x4a4744(0x235)](_0xcc652e => _0x491366[_0x4a4744(0x190)](_0xcc652e));
            function _0x34113c() {
                _0xc8ec25['length'] = 0x0, _0x21222a['length'] = 0x0, _0x491366['length'] = 0x0;
            }
            expect(_0x5157f1[_0x4a4744(0x1b5)]())['toBe'](_0x31e2e3), expect(_0x5157f1[_0x4a4744(0x171)]())['toBe'](_0x42d913), expect(_0x5157f1[_0x4a4744(0x193)]())['toBe'](_0x35185c), _0x40bd20['activate'](), expect(_0x5157f1[_0x4a4744(0x1b5)]())['toBe'](_0x40bd20), expect(_0x5157f1[_0x4a4744(0x171)]())[_0x4a4744(0x17e)](_0x369c46), expect(_0x5157f1['getActivePaneItem']())['toBe'](_0x3a819e), expect(_0xc8ec25)[_0x4a4744(0x184)]([_0x40bd20]), expect(_0x21222a)[_0x4a4744(0x184)]([_0x369c46]), expect(_0x491366)[_0x4a4744(0x184)]([_0x3a819e]), _0x34113c(), _0x969059[_0x4a4744(0x17c)](), _0x969059['activate'](), expect(_0x5157f1[_0x4a4744(0x1b5)]())[_0x4a4744(0x17e)](_0x40bd20), expect(_0x5157f1[_0x4a4744(0x171)]())[_0x4a4744(0x17e)](_0x969059), expect(_0x5157f1['getActivePaneItem']())[_0x4a4744(0x17e)](_0x5454e1), expect(_0xc8ec25)[_0x4a4744(0x184)]([]), expect(_0x21222a)[_0x4a4744(0x184)]([_0x969059]), expect(_0x491366)['toEqual']([_0x5454e1]), _0x34113c(), _0x969059[_0x4a4744(0x176)](_0x48773a), _0x969059[_0x4a4744(0x176)](_0x48773a), expect(_0x5157f1[_0x4a4744(0x1b5)]())[_0x4a4744(0x17e)](_0x40bd20), expect(_0x5157f1[_0x4a4744(0x171)]())[_0x4a4744(0x17e)](_0x969059), expect(_0x5157f1[_0x4a4744(0x193)]())[_0x4a4744(0x17e)](_0x48773a), expect(_0xc8ec25)[_0x4a4744(0x184)]([]), expect(_0x21222a)[_0x4a4744(0x184)]([]), expect(_0x491366)[_0x4a4744(0x184)]([_0x48773a]), _0x34113c(), expect(_0x49b6ca['getActivePane']())[_0x4a4744(0x17e)](_0x4cb44e), _0x68c455[_0x4a4744(0x17c)](), _0x68c455[_0x4a4744(0x17c)](), expect(_0x5157f1['getActivePaneContainer']())[_0x4a4744(0x17e)](_0x49b6ca), expect(_0x5157f1['getActivePane']())[_0x4a4744(0x17e)](_0x68c455), expect(_0x5157f1[_0x4a4744(0x193)]())['toBe'](_0x2d6156), expect(_0xc8ec25)[_0x4a4744(0x184)]([_0x49b6ca]), expect(_0x21222a)['toEqual']([_0x68c455]), expect(_0x491366)['toEqual']([_0x2d6156]), _0x34113c(), _0x68c455['activateItem'](_0x344bc3), expect(_0x5157f1[_0x4a4744(0x1b5)]())[_0x4a4744(0x17e)](_0x49b6ca), expect(_0x5157f1[_0x4a4744(0x171)]())[_0x4a4744(0x17e)](_0x68c455), expect(_0x5157f1[_0x4a4744(0x193)]())[_0x4a4744(0x17e)](_0x344bc3), expect(_0xc8ec25)['toEqual']([]), expect(_0x21222a)[_0x4a4744(0x184)]([]), expect(_0x491366)['toEqual']([_0x344bc3]), _0x34113c(), expect(_0x2390af['getActivePane']())[_0x4a4744(0x17e)](_0x5c4d45), _0x5c4d45[_0x4a4744(0x17c)](), _0x5c4d45['activate'](), expect(_0x5157f1[_0x4a4744(0x1b5)]())[_0x4a4744(0x17e)](_0x2390af), expect(_0x5157f1[_0x4a4744(0x171)]())[_0x4a4744(0x17e)](_0x5c4d45), expect(_0x5157f1[_0x4a4744(0x193)]())[_0x4a4744(0x17e)](_0x57cc0e), expect(_0xc8ec25)[_0x4a4744(0x184)]([_0x2390af]), expect(_0x21222a)[_0x4a4744(0x184)]([_0x5c4d45]), expect(_0x491366)[_0x4a4744(0x184)]([_0x57cc0e]), _0x34113c(), _0x31e2e3[_0x4a4744(0x17c)](), _0x31e2e3[_0x4a4744(0x17c)](), expect(_0x5157f1[_0x4a4744(0x1b5)]())[_0x4a4744(0x17e)](_0x31e2e3), expect(_0x5157f1[_0x4a4744(0x171)]())[_0x4a4744(0x17e)](_0x42d913), expect(_0x5157f1[_0x4a4744(0x193)]())[_0x4a4744(0x17e)](_0x35185c), expect(_0xc8ec25)[_0x4a4744(0x184)]([_0x31e2e3]), expect(_0x21222a)[_0x4a4744(0x184)]([_0x42d913]), expect(_0x491366)[_0x4a4744(0x184)]([_0x35185c]), _0x34113c(), _0x448fec[_0x4a4744(0x17c)](), _0x448fec['activate'](), expect(_0x5157f1['getActivePaneContainer']())[_0x4a4744(0x17e)](_0x31e2e3), expect(_0x5157f1['getActivePane']())[_0x4a4744(0x17e)](_0x448fec), expect(_0x5157f1[_0x4a4744(0x193)]())[_0x4a4744(0x17e)](_0x100b12), expect(_0xc8ec25)[_0x4a4744(0x184)]([]), expect(_0x21222a)[_0x4a4744(0x184)]([_0x448fec]), expect(_0x491366)['toEqual']([_0x100b12]);
        });
    }), describe('::onDidStopChangingActivePaneItem()', () => {
        const _0x4fb1a4 = _0x1e7543;
        it(_0x4fb1a4(0x236), () => {
            const _0x4b5e0b = _0x4fb1a4, _0x182873 = atom[_0x4b5e0b(0x156)]['getCenter']()['getActivePane'](), _0x5a3144 = _0x182873['splitRight']({
                    'items': [
                        document[_0x4b5e0b(0x1ad)](_0x4b5e0b(0x19c)),
                        document['createElement'](_0x4b5e0b(0x19c))
                    ]
                });
            atom['workspace'][_0x4b5e0b(0x1b4)]()[_0x4b5e0b(0x171)]()[_0x4b5e0b(0x19d)](document['createElement'](_0x4b5e0b(0x19c)));
            const _0x535ab8 = [];
            atom[_0x4b5e0b(0x156)][_0x4b5e0b(0x237)](_0x3210bf => _0x535ab8[_0x4b5e0b(0x190)](_0x3210bf)), _0x5a3144[_0x4b5e0b(0x238)](), _0x5a3144[_0x4b5e0b(0x238)](), _0x182873[_0x4b5e0b(0x17c)](), atom[_0x4b5e0b(0x156)]['getLeftDock']()['activate'](), advanceClock(0x64), expect(_0x535ab8)[_0x4b5e0b(0x184)]([atom[_0x4b5e0b(0x156)]['getLeftDock']()[_0x4b5e0b(0x193)]()]);
        });
    }), describe('the\x20grammar-used\x20hook', () => {
        it('fires\x20when\x20opening\x20a\x20file\x20or\x20changing\x20the\x20grammar\x20of\x20an\x20open\x20file', async () => {
            const _0x5b2e28 = _0x1441;
            await atom[_0x5b2e28(0x163)][_0x5b2e28(0x239)]('language-javascript'), await atom[_0x5b2e28(0x163)][_0x5b2e28(0x239)]('language-coffee-script');
            const _0x2ba01b = jasmine[_0x5b2e28(0x1aa)](_0x5b2e28(0x23a)), _0x2a4b4e = jasmine['createSpy'](_0x5b2e28(0x23b)), _0x377537 = jasmine[_0x5b2e28(0x1aa)](_0x5b2e28(0x23c));
            atom[_0x5b2e28(0x163)][_0x5b2e28(0x23d)](), atom[_0x5b2e28(0x163)]['onDidTriggerActivationHook'](_0x5b2e28(0x23e), () => {
                const _0x181d5c = _0x5b2e28;
                atom[_0x181d5c(0x156)]['observeTextEditors'](_0x2ba01b), _0x2a4b4e();
            }), atom['packages'][_0x5b2e28(0x23f)](_0x5b2e28(0x240), _0x377537), expect(_0x2a4b4e)['not'][_0x5b2e28(0x194)](), expect(_0x2ba01b)[_0x5b2e28(0x1a3)][_0x5b2e28(0x194)]();
            const _0x5e92e4 = await atom[_0x5b2e28(0x156)][_0x5b2e28(0x17a)](_0x5b2e28(0x1e7), { 'autoIndent': ![] });
            expect(_0x2a4b4e)['toHaveBeenCalled'](), expect(_0x2ba01b[_0x5b2e28(0x241)])[_0x5b2e28(0x17e)](0x1), expect(_0x377537)['not'][_0x5b2e28(0x194)](), atom[_0x5b2e28(0x165)][_0x5b2e28(0x242)](_0x5e92e4, 'source.coffee'), expect(_0x377537)[_0x5b2e28(0x194)]();
        });
    }), describe(_0x1e7543(0x243), () => {
        const _0x148e1a = _0x1e7543;
        it(_0x148e1a(0x244), async () => {
            const _0x753f18 = _0x148e1a;
            await atom['packages'][_0x753f18(0x239)](_0x753f18(0x245)), await atom['packages'][_0x753f18(0x239)](_0x753f18(0x246));
            const _0x4e5d10 = jasmine[_0x753f18(0x1aa)](_0x753f18(0x23a)), _0x533d76 = jasmine['createSpy']('javascript'), _0x46c482 = jasmine['createSpy'](_0x753f18(0x23c));
            atom[_0x753f18(0x163)]['triggerDeferredActivationHooks'](), atom[_0x753f18(0x163)][_0x753f18(0x23f)](_0x753f18(0x247), () => {
                const _0x46d8a1 = _0x753f18;
                atom['workspace'][_0x46d8a1(0x23a)](_0x4e5d10), _0x533d76();
            }), atom[_0x753f18(0x163)][_0x753f18(0x23f)](_0x753f18(0x248), _0x46c482), expect(_0x533d76)[_0x753f18(0x1a3)][_0x753f18(0x194)](), expect(_0x4e5d10)[_0x753f18(0x1a3)][_0x753f18(0x194)]();
            const _0x50b012 = await atom[_0x753f18(0x156)][_0x753f18(0x17a)]('sample.js', { 'autoIndent': ![] });
            expect(_0x533d76)[_0x753f18(0x194)](), expect(_0x4e5d10['callCount'])['toBe'](0x1), expect(_0x46c482)[_0x753f18(0x1a3)][_0x753f18(0x194)](), atom['grammars'][_0x753f18(0x242)](_0x50b012, _0x753f18(0x249)), expect(_0x46c482)[_0x753f18(0x194)]();
        });
    }), describe(_0x1e7543(0x24a), () => {
        const _0x49ae83 = _0x1e7543;
        it(_0x49ae83(0x24b), () => {
            const _0x2d5bb8 = _0x49ae83, _0x4b16d4 = _0x5157f1[_0x2d5bb8(0x171)]();
            waitsForPromise(() => _0x5157f1['open']('a')[_0x2d5bb8(0x166)](() => _0x5157f1['open']('b')[_0x2d5bb8(0x166)](() => _0x5157f1[_0x2d5bb8(0x17a)](_0x2d5bb8(0x209))['then'](() => _0x5157f1['open']())))), runs(() => {
                const _0x57c0ad = _0x2d5bb8;
                expect(_0x5157f1['getActivePaneItem']()[_0x57c0ad(0x1a7)]())['toBeUndefined'](), _0x4b16d4[_0x57c0ad(0x221)]();
            }), waitsForPromise(() => _0x5157f1['reopenItem']());
            const _0x179080 = atom[_0x2d5bb8(0x15c)][_0x2d5bb8(0x15d)]()[0x0];
            expect(_0x179080)[_0x2d5bb8(0x180)](), runs(() => {
                const _0x59c242 = _0x2d5bb8;
                expect(_0x5157f1[_0x59c242(0x193)]()[_0x59c242(0x1a7)]())[_0x59c242(0x1a3)][_0x59c242(0x185)](), expect(_0x5157f1[_0x59c242(0x193)]()[_0x59c242(0x1a7)]())[_0x59c242(0x17e)](_0x179080[_0x59c242(0x182)](_0x59c242(0x209))), _0x4b16d4[_0x59c242(0x221)](), expect(_0x5157f1[_0x59c242(0x193)]()[_0x59c242(0x1a7)]())[_0x59c242(0x17e)](_0x179080[_0x59c242(0x182)]('b')), _0x4b16d4[_0x59c242(0x221)](), expect(_0x5157f1['getActivePaneItem']()[_0x59c242(0x1a7)]())[_0x59c242(0x17e)](_0x179080[_0x59c242(0x182)]('a')), _0x4b16d4[_0x59c242(0x221)](), expect(_0x5157f1[_0x59c242(0x193)]())[_0x59c242(0x185)]();
            }), waitsForPromise(() => _0x5157f1['reopenItem']()), runs(() => expect(_0x5157f1[_0x2d5bb8(0x193)]()[_0x2d5bb8(0x1a7)]())[_0x2d5bb8(0x17e)](_0x179080[_0x2d5bb8(0x182)]('a'))), waitsForPromise(() => _0x5157f1[_0x2d5bb8(0x17a)]('b')), runs(() => expect(_0x5157f1[_0x2d5bb8(0x193)]()[_0x2d5bb8(0x1a7)]())['toBe'](_0x179080['resolve']('b'))), waitsForPromise(() => _0x5157f1[_0x2d5bb8(0x24c)]()), runs(() => expect(_0x5157f1[_0x2d5bb8(0x193)]()[_0x2d5bb8(0x1a7)]())[_0x2d5bb8(0x17e)](_0x179080[_0x2d5bb8(0x182)](_0x2d5bb8(0x209))));
        });
    }), describe(_0x1e7543(0x24d), () => {
        it('increases/decreases\x20the\x20font\x20size\x20without\x20going\x20below\x201', () => {
            const _0x9aaefb = _0x1441;
            atom[_0x9aaefb(0x167)]['set'](_0x9aaefb(0x24e), 0x1), _0x5157f1[_0x9aaefb(0x24f)](), expect(atom[_0x9aaefb(0x167)][_0x9aaefb(0x250)](_0x9aaefb(0x24e)))[_0x9aaefb(0x17e)](0x2), _0x5157f1[_0x9aaefb(0x24f)](), expect(atom['config']['get'](_0x9aaefb(0x24e)))[_0x9aaefb(0x17e)](0x3), _0x5157f1[_0x9aaefb(0x251)](), expect(atom[_0x9aaefb(0x167)]['get'](_0x9aaefb(0x24e)))[_0x9aaefb(0x17e)](0x2), _0x5157f1['decreaseFontSize'](), expect(atom[_0x9aaefb(0x167)]['get'](_0x9aaefb(0x24e)))[_0x9aaefb(0x17e)](0x1), _0x5157f1[_0x9aaefb(0x251)](), expect(atom[_0x9aaefb(0x167)][_0x9aaefb(0x250)](_0x9aaefb(0x24e)))['toBe'](0x1);
        });
    }), describe('::resetFontSize()', () => {
        const _0xdeec14 = _0x1e7543;
        it(_0xdeec14(0x252), () => {
            const _0x3a077f = _0xdeec14, _0x30fd58 = atom[_0x3a077f(0x167)][_0x3a077f(0x250)](_0x3a077f(0x253));
            _0x5157f1[_0x3a077f(0x24f)](), expect(atom[_0x3a077f(0x167)][_0x3a077f(0x250)]('editor.fontSize'))[_0x3a077f(0x17e)](_0x30fd58 + 0x1), _0x5157f1[_0x3a077f(0x157)](), expect(atom['config'][_0x3a077f(0x250)](_0x3a077f(0x24e)))[_0x3a077f(0x17e)](_0x30fd58), _0x5157f1[_0x3a077f(0x251)](), expect(atom[_0x3a077f(0x167)][_0x3a077f(0x250)]('editor.fontSize'))[_0x3a077f(0x17e)](_0x30fd58 - 0x1), _0x5157f1[_0x3a077f(0x157)](), expect(atom[_0x3a077f(0x167)]['get'](_0x3a077f(0x24e)))[_0x3a077f(0x17e)](_0x30fd58);
        }), it(_0xdeec14(0x254), () => {
            const _0x94abc4 = _0xdeec14, _0x47f28a = atom[_0x94abc4(0x167)][_0x94abc4(0x250)]('editor.defaultFontSize');
            _0x5157f1[_0x94abc4(0x24f)](), expect(atom[_0x94abc4(0x167)]['get'](_0x94abc4(0x24e)))[_0x94abc4(0x17e)](_0x47f28a + 0x1), atom['config'][_0x94abc4(0x1e9)](_0x94abc4(0x253), 0xe), _0x5157f1[_0x94abc4(0x157)](), expect(atom[_0x94abc4(0x167)][_0x94abc4(0x250)](_0x94abc4(0x24e)))[_0x94abc4(0x17e)](0xe);
        }), it(_0xdeec14(0x255), () => {
            const _0x3e35f0 = _0xdeec14, _0x361e3f = atom['config'][_0x3e35f0(0x250)]('editor.fontSize');
            _0x5157f1[_0x3e35f0(0x157)](), expect(atom[_0x3e35f0(0x167)][_0x3e35f0(0x250)](_0x3e35f0(0x24e)))[_0x3e35f0(0x17e)](_0x361e3f);
        }), it(_0xdeec14(0x256), () => {
            const _0x4468b9 = _0xdeec14, _0x43f79d = atom[_0x4468b9(0x167)]['get'](_0x4468b9(0x24e));
            atom[_0x4468b9(0x167)][_0x4468b9(0x1e9)](_0x4468b9(0x24e), _0x43f79d + 0x1), _0x5157f1[_0x4468b9(0x157)](), expect(atom[_0x4468b9(0x167)]['get'](_0x4468b9(0x24e)))[_0x4468b9(0x17e)](_0x43f79d), atom[_0x4468b9(0x167)][_0x4468b9(0x1e9)](_0x4468b9(0x24e), _0x43f79d - 0x1), _0x5157f1[_0x4468b9(0x157)](), expect(atom['config'][_0x4468b9(0x250)](_0x4468b9(0x24e)))[_0x4468b9(0x17e)](_0x43f79d);
        });
    }), describe(_0x1e7543(0x257), () => {
        it('opens\x20the\x20license\x20as\x20plain-text\x20in\x20a\x20buffer', () => {
            const _0x3b16ad = _0x1441;
            waitsForPromise(() => _0x5157f1[_0x3b16ad(0x258)]()), runs(() => expect(_0x5157f1[_0x3b16ad(0x193)]()['getText']())[_0x3b16ad(0x188)](/Copyright/));
        });
    }), describe(_0x1e7543(0x259), () => {
        it('returns\x20true\x20when\x20the\x20passed\x20object\x20is\x20an\x20instance\x20of\x20`TextEditor`', () => {
            const _0x59a80a = _0x1441;
            expect(_0x5157f1['isTextEditor'](new TextEditor()))[_0x59a80a(0x17e)](!![]), expect(_0x5157f1['isTextEditor']({ 'getText': () => null }))[_0x59a80a(0x17e)](![]), expect(_0x5157f1['isTextEditor'](null))['toBe'](![]), expect(_0x5157f1[_0x59a80a(0x25a)](undefined))[_0x59a80a(0x17e)](![]);
        });
    }), describe(_0x1e7543(0x25b), () => {
        const _0x19d7c1 = _0x1e7543;
        describe(_0x19d7c1(0x25c), () => {
            const _0x522962 = _0x19d7c1;
            describe('when\x20the\x20workspace\x20center\x20has\x20focus', () => {
                const _0x4570b5 = _0x1441;
                it(_0x4570b5(0x25d), () => {
                    const _0x5d654e = _0x4570b5, _0x5a19b3 = _0x5157f1[_0x5d654e(0x1c3)](), _0x2e276a = new TextEditor();
                    _0x5a19b3[_0x5d654e(0x171)]()[_0x5d654e(0x176)](_0x2e276a), _0x5a19b3['activate'](), expect(_0x5157f1['getActiveTextEditor']())[_0x5d654e(0x17e)](_0x2e276a);
                });
            }), describe(_0x522962(0x25e), () => {
                const _0x58b4b9 = _0x522962;
                it(_0x58b4b9(0x25d), () => {
                    const _0x1980d0 = _0x58b4b9, _0x33d10d = _0x5157f1['getCenter'](), _0x326fc9 = new TextEditor();
                    _0x33d10d[_0x1980d0(0x171)]()['activateItem'](_0x326fc9), _0x5157f1[_0x1980d0(0x1b4)]()[_0x1980d0(0x17c)](), expect(_0x5157f1[_0x1980d0(0x1e1)]())[_0x1980d0(0x17e)](_0x326fc9);
                });
            });
        }), describe(_0x19d7c1(0x25f), () => {
            const _0x591c8a = _0x19d7c1;
            it(_0x591c8a(0x260), () => {
                const _0x80cbe2 = _0x591c8a, _0x13e1b6 = _0x5157f1[_0x80cbe2(0x1c3)](), _0x4bbae6 = document[_0x80cbe2(0x1ad)](_0x80cbe2(0x19c));
                _0x13e1b6[_0x80cbe2(0x171)]()['activateItem'](_0x4bbae6), expect(_0x5157f1[_0x80cbe2(0x1e1)]())[_0x80cbe2(0x185)]();
            });
        });
    }), describe('::observeTextEditors()', () => {
        const _0x56453f = _0x1e7543;
        it(_0x56453f(0x261), () => {
            const _0x2f134b = _0x56453f, _0x4b0079 = [];
            waitsForPromise(() => _0x5157f1[_0x2f134b(0x17a)]()), waitsForPromise(() => _0x5157f1['open']()), waitsForPromise(() => _0x5157f1[_0x2f134b(0x258)]()), runs(() => _0x5157f1[_0x2f134b(0x23a)](_0x545a73 => _0x4b0079['push'](_0x545a73))), waitsForPromise(() => _0x5157f1[_0x2f134b(0x17a)]()), expect(_0x4b0079)[_0x2f134b(0x184)](_0x5157f1[_0x2f134b(0x17f)]());
        });
    }), describe(_0x1e7543(0x262), () => {
        const _0x5929b6 = _0x1e7543;
        it(_0x5929b6(0x263), () => {
            const _0x316859 = _0x5929b6, _0x488fa4 = _0x5157f1['getCenter']()[_0x316859(0x171)](), _0x12bedb = [], _0x304abc = new TextEditor(), _0x43a40e = new TextEditor();
            _0x488fa4[_0x316859(0x176)](_0x304abc), _0x488fa4[_0x316859(0x176)](_0x43a40e), _0x5157f1['observeActiveTextEditor'](_0x4f7015 => _0x12bedb[_0x316859(0x190)](_0x4f7015));
            const _0xb12c5d = new TextEditor();
            _0x488fa4[_0x316859(0x176)](_0xb12c5d), expect(_0x12bedb)[_0x316859(0x184)]([
                _0x43a40e,
                _0xb12c5d
            ]);
        });
    }), describe(_0x1e7543(0x264), () => {
        const _0x543b85 = _0x1e7543;
        let _0x3a643c, _0x527178, _0x444118;
        beforeEach(() => {
            const _0x260cbb = _0x1441;
            _0x3a643c = _0x5157f1[_0x260cbb(0x1c3)](), _0x527178 = _0x3a643c[_0x260cbb(0x171)](), _0x444118 = [];
        }), it(_0x543b85(0x265), () => {
            const _0x2bdfe6 = _0x543b85;
            _0x5157f1[_0x2bdfe6(0x266)](_0xdd6e95 => _0x444118[_0x2bdfe6(0x190)](_0xdd6e95));
            const _0x4f1df7 = _0x5157f1[_0x2bdfe6(0x1b4)]();
            _0x4f1df7[_0x2bdfe6(0x17c)](), expect(atom[_0x2bdfe6(0x156)][_0x2bdfe6(0x1b5)]())[_0x2bdfe6(0x17e)](_0x4f1df7);
            const _0x9e8b65 = new TextEditor();
            _0x3a643c[_0x2bdfe6(0x171)]()[_0x2bdfe6(0x176)](_0x9e8b65), expect(atom[_0x2bdfe6(0x156)][_0x2bdfe6(0x1b5)]())[_0x2bdfe6(0x17e)](_0x4f1df7), expect(_0x444118)['toEqual']([_0x9e8b65]);
        }), it(_0x543b85(0x267), () => {
            const _0x3d9332 = _0x543b85, _0x489575 = new TextEditor();
            _0x527178['activateItem'](_0x489575), _0x5157f1[_0x3d9332(0x266)](_0x21df61 => _0x444118[_0x3d9332(0x190)](_0x21df61)), _0x527178[_0x3d9332(0x268)](_0x489575), expect(_0x444118)[_0x3d9332(0x184)]([undefined]);
        }), it(_0x543b85(0x269), () => {
            const _0x50ccec = _0x543b85, _0x15e39f = new TextEditor(), _0x440d4f = document[_0x50ccec(0x1ad)](_0x50ccec(0x19c));
            _0x527178[_0x50ccec(0x176)](_0x15e39f), _0x5157f1['onDidChangeActiveTextEditor'](_0x194823 => _0x444118[_0x50ccec(0x190)](_0x194823)), _0x527178['activateItem'](_0x440d4f), expect(_0x444118)[_0x50ccec(0x184)]([undefined]);
        }), it(_0x543b85(0x26a), () => {
            const _0x853747 = _0x543b85;
            _0x5157f1['onDidChangeActiveTextEditor'](_0x5db53f => _0x444118[_0x853747(0x190)](_0x5db53f));
            const _0x5ec108 = document[_0x853747(0x1ad)]('div'), _0x57bbe0 = document[_0x853747(0x1ad)](_0x853747(0x19c));
            _0x527178[_0x853747(0x176)](_0x5ec108), _0x527178[_0x853747(0x176)](_0x57bbe0), expect(_0x444118)['toEqual']([]);
        }), it(_0x543b85(0x26b), async () => {
            _0x527178['activateItem'](new TextEditor()), _0x58c481(), runs(() => {
                const _0x26cb19 = _0x1441;
                _0x5157f1[_0x26cb19(0x266)](_0x438182 => _0x444118[_0x26cb19(0x190)](_0x438182)), _0x5157f1[_0x26cb19(0x26c)](), expect(_0x444118)[_0x26cb19(0x184)]([undefined]);
            });
        });
    }), describe(_0x1e7543(0x26d), () => {
        const _0x2aff93 = _0x1e7543;
        it(_0x2aff93(0x26e), async () => {
            const _0x9f2774 = _0x2aff93, _0x5a21d5 = await _0x5157f1[_0x9f2774(0x17a)]('a');
            expect(_0x5157f1[_0x9f2774(0x17f)]())[_0x9f2774(0x19f)](0x1), _0x5a21d5[_0x9f2774(0x18e)](), expect(_0x5157f1[_0x9f2774(0x17f)]())['toHaveLength'](0x0);
        });
    }), describe(_0x1e7543(0x26f), () => {
        it('sets\x20up\x20the\x20new\x20editor\x20to\x20be\x20configured\x20by\x20the\x20text\x20editor\x20registry', async () => {
            const _0x51f5ec = _0x1441;
            await atom[_0x51f5ec(0x163)][_0x51f5ec(0x239)](_0x51f5ec(0x245));
            const _0x205d0a = await _0x5157f1['open']('a');
            atom[_0x51f5ec(0x165)][_0x51f5ec(0x242)](_0x205d0a, 'source.js'), expect(_0x205d0a[_0x51f5ec(0x270)]()['name'])[_0x51f5ec(0x17e)](_0x51f5ec(0x271)), _0x5157f1[_0x51f5ec(0x171)]()[_0x51f5ec(0x172)]({ 'copyActiveItem': !![] });
            const _0x1177b6 = _0x5157f1['getActiveTextEditor']();
            expect(_0x1177b6)['not']['toBe'](_0x205d0a), expect(_0x1177b6[_0x51f5ec(0x270)]()[_0x51f5ec(0x272)])[_0x51f5ec(0x17e)](_0x51f5ec(0x271));
        });
    }), it('stores\x20the\x20active\x20grammars\x20used\x20by\x20all\x20the\x20open\x20editors', () => {
        const _0x4e8156 = _0x1e7543;
        waitsForPromise(() => atom[_0x4e8156(0x163)]['activatePackage'](_0x4e8156(0x245))), waitsForPromise(() => atom[_0x4e8156(0x163)]['activatePackage']('language-coffee-script')), waitsForPromise(() => atom[_0x4e8156(0x163)][_0x4e8156(0x239)](_0x4e8156(0x273))), waitsForPromise(() => atom[_0x4e8156(0x156)][_0x4e8156(0x17a)](_0x4e8156(0x274))), runs(() => {
            const _0x119c98 = _0x4e8156;
            atom[_0x119c98(0x156)]['getActiveTextEditor']()[_0x119c98(0x173)](dedent`
        i = /test/; #FIXME\
      `);
            const _0x51fb3d = new AtomEnvironment({ 'applicationDelegate': atom['applicationDelegate'] });
            _0x51fb3d[_0x119c98(0x275)]({
                'window': document['createElement'](_0x119c98(0x19c)),
                'document': Object[_0x119c98(0x276)](document['createElement'](_0x119c98(0x19c)), {
                    'body': document[_0x119c98(0x1ad)](_0x119c98(0x19c)),
                    'head': document[_0x119c98(0x1ad)](_0x119c98(0x19c))
                })
            }), _0x51fb3d['packages'][_0x119c98(0x277)](_0x119c98(0x245)), _0x51fb3d[_0x119c98(0x163)][_0x119c98(0x277)](_0x119c98(0x246)), _0x51fb3d[_0x119c98(0x163)][_0x119c98(0x277)](_0x119c98(0x273)), _0x51fb3d[_0x119c98(0x15c)]['deserialize'](atom[_0x119c98(0x15c)][_0x119c98(0x161)]()), _0x51fb3d[_0x119c98(0x156)]['deserialize'](atom[_0x119c98(0x156)][_0x119c98(0x161)](), _0x51fb3d['deserializers']), expect(_0x51fb3d[_0x119c98(0x165)][_0x119c98(0x278)]({ 'includeTreeSitter': !![] })[_0x119c98(0x21b)](_0x260862 => _0x260862[_0x119c98(0x279)])[_0x119c98(0x27a)]())['toEqual']([
                'source.coffee',
                'source.js',
                _0x119c98(0x27b),
                _0x119c98(0x27c),
                _0x119c98(0x27c),
                'source.js.regexp.replacement',
                'source.jsdoc',
                _0x119c98(0x27d),
                _0x119c98(0x27e),
                _0x119c98(0x21c),
                _0x119c98(0x27f)
            ]), _0x51fb3d[_0x119c98(0x18e)]();
        });
    }), describe('document.title', () => {
        const _0x1d1082 = _0x1e7543;
        describe(_0x1d1082(0x280), () => {
            const _0x4129de = _0x1d1082;
            it(_0x4129de(0x281), () => expect(document[_0x4129de(0x282)])[_0x4129de(0x188)](escapeStringRegex(fs[_0x4129de(0x283)](atom[_0x4129de(0x15c)][_0x4129de(0x187)]()[0x0])))), it(_0x4129de(0x284), () => {
                const _0x2931b6 = _0x4129de;
                atom[_0x2931b6(0x15c)][_0x2931b6(0x15b)]([]), expect(document[_0x2931b6(0x282)])['toMatch'](/^untitled/);
            });
        }), describe('when\x20the\x20active\x20pane\x20item\x27s\x20path\x20is\x20not\x20inside\x20a\x20project\x20path', () => {
            const _0x21cf1a = _0x1d1082;
            beforeEach(() => waitsForPromise(() => atom[_0x21cf1a(0x156)][_0x21cf1a(0x17a)]('b')[_0x21cf1a(0x166)](() => atom[_0x21cf1a(0x15c)]['setPaths']([])))), it(_0x21cf1a(0x285), () => {
                const _0x5cc4ed = _0x21cf1a, _0x2d9368 = atom[_0x5cc4ed(0x156)][_0x5cc4ed(0x193)](), _0x174fa7 = fs[_0x5cc4ed(0x283)](escapeStringRegex(path[_0x5cc4ed(0x286)](_0x2d9368['getPath']())));
                expect(document[_0x5cc4ed(0x282)])[_0x5cc4ed(0x188)](new RegExp('^' + _0x2d9368[_0x5cc4ed(0x287)]() + '\x20\x5cu2014\x20' + _0x174fa7));
            }), describe(_0x21cf1a(0x288), () => {
                it('updates\x20the\x20window\x20title\x20based\x20on\x20the\x20item\x27s\x20new\x20title', () => {
                    const _0x502460 = _0x1441, _0x1f16a0 = atom[_0x502460(0x156)][_0x502460(0x193)]();
                    _0x1f16a0[_0x502460(0x289)][_0x502460(0x28a)](path[_0x502460(0x28b)](temp[_0x502460(0x15e)], 'hi'));
                    const _0x41ed94 = fs[_0x502460(0x283)](escapeStringRegex(path[_0x502460(0x286)](_0x1f16a0[_0x502460(0x181)]())));
                    expect(document[_0x502460(0x282)])[_0x502460(0x188)](new RegExp('^' + _0x1f16a0[_0x502460(0x287)]() + _0x502460(0x18b) + _0x41ed94));
                });
            }), describe(_0x21cf1a(0x28c), () => {
                const _0x5bbcea = _0x21cf1a;
                it(_0x5bbcea(0x28d), () => {
                    const _0x59d4db = _0x5bbcea;
                    atom[_0x59d4db(0x156)]['getActivePane']()[_0x59d4db(0x238)]();
                    const _0x34262d = atom['workspace'][_0x59d4db(0x193)](), _0x2bde91 = fs[_0x59d4db(0x283)](escapeStringRegex(path[_0x59d4db(0x286)](_0x34262d[_0x59d4db(0x181)]())));
                    expect(document['title'])[_0x59d4db(0x188)](new RegExp('^' + _0x34262d[_0x59d4db(0x287)]() + _0x59d4db(0x18b) + _0x2bde91));
                });
            }), describe(_0x21cf1a(0x28e), () => {
                const _0xefbb4d = _0x21cf1a;
                it(_0xefbb4d(0x28f), () => {
                    const _0x6b29eb = _0xefbb4d, _0xfe4a4d = atom['workspace'][_0x6b29eb(0x171)]();
                    _0xfe4a4d[_0x6b29eb(0x172)]();
                    const _0x355b4e = document[_0x6b29eb(0x282)];
                    _0xfe4a4d[_0x6b29eb(0x238)](), expect(document[_0x6b29eb(0x282)])[_0x6b29eb(0x17e)](_0x355b4e);
                });
            });
        }), describe(_0x1d1082(0x290), () => {
            const _0x3128cb = _0x1d1082;
            beforeEach(() => waitsForPromise(() => atom[_0x3128cb(0x156)][_0x3128cb(0x17a)]('b'))), describe(_0x3128cb(0x291), () => {
                const _0x5e8df6 = _0x3128cb;
                it(_0x5e8df6(0x292), () => {
                    const _0x3d8a85 = _0x5e8df6, _0x8abf4c = atom[_0x3d8a85(0x156)]['getActivePaneItem'](), _0x3e9a48 = fs[_0x3d8a85(0x283)](escapeStringRegex(atom[_0x3d8a85(0x15c)]['getPaths']()[0x0]));
                    expect(document['title'])['toMatch'](new RegExp('^' + _0x8abf4c[_0x3d8a85(0x287)]() + _0x3d8a85(0x18b) + _0x3e9a48));
                });
            }), describe(_0x3128cb(0x288), () => {
                const _0x5b5e6a = _0x3128cb;
                it(_0x5b5e6a(0x293), () => {
                    const _0x2128ce = _0x5b5e6a, _0x32972c = atom[_0x2128ce(0x156)]['getActivePaneItem']();
                    _0x32972c[_0x2128ce(0x289)][_0x2128ce(0x28a)](path['join'](atom[_0x2128ce(0x15c)][_0x2128ce(0x187)]()[0x0], 'hi'));
                    const _0x4462a7 = fs[_0x2128ce(0x283)](escapeStringRegex(atom[_0x2128ce(0x15c)][_0x2128ce(0x187)]()[0x0]));
                    expect(document[_0x2128ce(0x282)])[_0x2128ce(0x188)](new RegExp('^' + _0x32972c[_0x2128ce(0x287)]() + _0x2128ce(0x18b) + _0x4462a7));
                });
            }), describe('when\x20the\x20active\x20pane\x27s\x20item\x20changes', () => {
                const _0x436506 = _0x3128cb;
                it(_0x436506(0x28d), () => {
                    const _0x62a133 = _0x436506;
                    atom['workspace']['getActivePane']()['activateNextItem']();
                    const _0x1771a3 = atom[_0x62a133(0x156)][_0x62a133(0x193)](), _0x2fbfe3 = fs['tildify'](escapeStringRegex(atom[_0x62a133(0x15c)]['getPaths']()[0x0]));
                    expect(document[_0x62a133(0x282)])[_0x62a133(0x188)](new RegExp('^' + _0x1771a3[_0x62a133(0x287)]() + _0x62a133(0x18b) + _0x2fbfe3));
                });
            }), describe('when\x20the\x20last\x20pane\x20item\x20is\x20removed', () => {
                it('updates\x20the\x20title\x20to\x20the\x20project\x27s\x20first\x20path', () => {
                    const _0x5a15ea = _0x1441;
                    atom[_0x5a15ea(0x156)][_0x5a15ea(0x171)]()[_0x5a15ea(0x18e)](), expect(atom[_0x5a15ea(0x156)][_0x5a15ea(0x193)]())[_0x5a15ea(0x185)](), expect(document[_0x5a15ea(0x282)])[_0x5a15ea(0x188)](escapeStringRegex(fs[_0x5a15ea(0x283)](atom[_0x5a15ea(0x15c)][_0x5a15ea(0x187)]()[0x0])));
                });
            }), describe(_0x3128cb(0x28e), () => {
                const _0x1bf64e = _0x3128cb;
                it(_0x1bf64e(0x28f), () => {
                    const _0x4df333 = _0x1bf64e, _0x586e45 = atom[_0x4df333(0x156)]['getActivePane']();
                    _0x586e45[_0x4df333(0x172)]();
                    const _0x3348ab = document[_0x4df333(0x282)];
                    _0x586e45[_0x4df333(0x238)](), expect(document['title'])['toBe'](_0x3348ab);
                });
            });
        }), describe('when\x20the\x20workspace\x20is\x20deserialized', () => {
            const _0x50ea20 = _0x1d1082;
            beforeEach(() => waitsForPromise(() => atom[_0x50ea20(0x156)][_0x50ea20(0x17a)]('a'))), it(_0x50ea20(0x294), () => {
                const _0x3574ac = _0x50ea20;
                document[_0x3574ac(0x282)] = null;
                const _0x4b3fbb = new AtomEnvironment({ 'applicationDelegate': atom[_0x3574ac(0x158)] });
                _0x4b3fbb['initialize']({
                    'window': document['createElement']('div'),
                    'document': Object[_0x3574ac(0x276)](document[_0x3574ac(0x1ad)](_0x3574ac(0x19c)), {
                        'body': document[_0x3574ac(0x1ad)](_0x3574ac(0x19c)),
                        'head': document[_0x3574ac(0x1ad)](_0x3574ac(0x19c))
                    })
                }), waitsForPromise(() => _0x4b3fbb[_0x3574ac(0x15c)][_0x3574ac(0x16c)](atom[_0x3574ac(0x15c)][_0x3574ac(0x161)]())), runs(() => {
                    const _0x1a4c87 = _0x3574ac;
                    _0x4b3fbb['workspace'][_0x1a4c87(0x16c)](atom[_0x1a4c87(0x156)][_0x1a4c87(0x161)](), _0x4b3fbb[_0x1a4c87(0x16d)]);
                    const _0x580537 = _0x4b3fbb[_0x1a4c87(0x156)][_0x1a4c87(0x193)](), _0x505d08 = fs[_0x1a4c87(0x283)](escapeStringRegex(atom[_0x1a4c87(0x15c)][_0x1a4c87(0x187)]()[0x0]));
                    expect(document[_0x1a4c87(0x282)])['toMatch'](new RegExp('^' + _0x580537['getLongTitle']() + _0x1a4c87(0x18b) + _0x505d08)), _0x4b3fbb[_0x1a4c87(0x18e)]();
                });
            });
        });
    }), describe(_0x1e7543(0x295), () => {
        const _0x53324c = _0x1e7543;
        let _0x2a5d4a, _0x152dcb;
        beforeEach(() => {
            const _0x171b7a = _0x1441;
            waitsForPromise(() => atom['workspace'][_0x171b7a(0x17a)]('a')), waitsForPromise(() => atom[_0x171b7a(0x156)][_0x171b7a(0x17a)]('b')), runs(() => {
                const _0x5dfaa5 = _0x171b7a;
                [_0x2a5d4a, _0x152dcb] = atom['workspace'][_0x5dfaa5(0x19e)]();
            });
        }), it(_0x53324c(0x296), () => {
            const _0x118302 = _0x53324c;
            expect(atom[_0x118302(0x156)]['getActivePaneItem']())['toBe'](_0x152dcb), _0x2a5d4a[_0x118302(0x297)]('a'), expect(_0x2a5d4a[_0x118302(0x298)]())[_0x118302(0x17e)](!![]), atom['workspace'][_0x118302(0x171)]()['activateNextItem'](), expect(_0x4de6f5)[_0x118302(0x1f5)](!![]);
        }), it(_0x53324c(0x299), () => {
            const _0x516c64 = _0x53324c;
            expect(atom['workspace'][_0x516c64(0x193)]())[_0x516c64(0x17e)](_0x152dcb), _0x152dcb[_0x516c64(0x297)]('a'), advanceClock(_0x152dcb['getBuffer']()[_0x516c64(0x29a)]()), expect(_0x152dcb[_0x516c64(0x298)]())[_0x516c64(0x17e)](!![]), expect(_0x4de6f5)[_0x516c64(0x1f5)](!![]), _0x152dcb[_0x516c64(0x29b)](), advanceClock(_0x152dcb[_0x516c64(0x29c)]()[_0x516c64(0x29a)]()), expect(_0x152dcb['isModified']())[_0x516c64(0x17e)](![]), expect(_0x4de6f5)[_0x516c64(0x1f5)](![]);
        });
    }), describe(_0x1e7543(0x29d), () => {
        const _0x5b72cd = _0x1e7543;
        class _0x4a2507 {
        }
        function _0x2aadca() {
            const _0x13dcd2 = _0x1441;
            this[_0x13dcd2(0x29e)] = _0x2aadca;
        }
        function _0x3ad977() {
            const _0xf256a8 = _0x1441;
            this[_0xf256a8(0x29e)] = _0x2aadca;
        }
        _0x3ad977[_0x5b72cd(0x29f)] = HTMLElement['prototype'], _0x2aadca[_0x5b72cd(0x29f)] = new _0x3ad977(), _0x2aadca[_0x5b72cd(0x2a0)] = HTMLElement[_0x5b72cd(0x29f)], _0x2aadca[_0x5b72cd(0x29f)]['initialize'] = function (_0x5bb0ed) {
            return this['model'] = _0x5bb0ed, this;
        }, _0x2aadca['prototype'][_0x5b72cd(0x2a1)] = function () {
            return this['model'];
        }, beforeEach(() => atom[_0x5b72cd(0x169)]['addViewProvider'](_0x4a2507, _0x2a972d => new _0x2aadca()[_0x5b72cd(0x275)](_0x2a972d))), describe(_0x5b72cd(0x2a2), () => {
            const _0x32980b = _0x5b72cd;
            it(_0x32980b(0x2a3), () => {
                const _0x5bb723 = _0x32980b;
                let _0x551cb1;
                expect(atom[_0x5bb723(0x156)][_0x5bb723(0x2a4)]()['length'])[_0x5bb723(0x17e)](0x0), atom[_0x5bb723(0x156)][_0x5bb723(0x2a5)][_0x5bb723(0x19b)]['onDidAddPanel'](_0x551cb1 = jasmine['createSpy']());
                const _0xae0444 = new _0x4a2507(), _0xc31da4 = atom[_0x5bb723(0x156)][_0x5bb723(0x2a6)]({ 'item': _0xae0444 });
                expect(_0xc31da4)[_0x5bb723(0x180)](), expect(_0x551cb1)[_0x5bb723(0x1f5)]({
                    'panel': _0xc31da4,
                    'index': 0x0
                });
                const _0x2bdcc6 = atom['views'][_0x5bb723(0x2a7)](atom[_0x5bb723(0x156)][_0x5bb723(0x2a4)]()[0x0][_0x5bb723(0x2a8)]());
                expect(_0x2bdcc6 instanceof _0x2aadca)[_0x5bb723(0x17e)](!![]), expect(_0x2bdcc6[_0x5bb723(0x2a1)]())[_0x5bb723(0x17e)](_0xae0444);
            });
        }), describe(_0x5b72cd(0x2a9), () => {
            const _0x377dbe = _0x5b72cd;
            it(_0x377dbe(0x2a3), () => {
                const _0x41eb87 = _0x377dbe;
                let _0x4f22e1;
                expect(atom[_0x41eb87(0x156)]['getRightPanels']()[_0x41eb87(0x17d)])[_0x41eb87(0x17e)](0x0), atom[_0x41eb87(0x156)][_0x41eb87(0x2a5)][_0x41eb87(0x1ac)]['onDidAddPanel'](_0x4f22e1 = jasmine[_0x41eb87(0x1aa)]());
                const _0x278a6f = new _0x4a2507(), _0xbce957 = atom[_0x41eb87(0x156)][_0x41eb87(0x2aa)]({ 'item': _0x278a6f });
                expect(_0xbce957)[_0x41eb87(0x180)](), expect(_0x4f22e1)[_0x41eb87(0x1f5)]({
                    'panel': _0xbce957,
                    'index': 0x0
                });
                const _0xd8ef02 = atom[_0x41eb87(0x169)]['getView'](atom[_0x41eb87(0x156)][_0x41eb87(0x2ab)]()[0x0]['getItem']());
                expect(_0xd8ef02 instanceof _0x2aadca)[_0x41eb87(0x17e)](!![]), expect(_0xd8ef02[_0x41eb87(0x2a1)]())[_0x41eb87(0x17e)](_0x278a6f);
            });
        }), describe(_0x5b72cd(0x2ac), () => {
            const _0x1de36f = _0x5b72cd;
            it(_0x1de36f(0x2a3), () => {
                const _0x55068f = _0x1de36f;
                let _0x4d54f1;
                expect(atom[_0x55068f(0x156)][_0x55068f(0x2ad)]()[_0x55068f(0x17d)])[_0x55068f(0x17e)](0x0), atom[_0x55068f(0x156)][_0x55068f(0x2a5)]['top'][_0x55068f(0x2ae)](_0x4d54f1 = jasmine['createSpy']());
                const _0x2c86e4 = new _0x4a2507(), _0x56a8e2 = atom[_0x55068f(0x156)][_0x55068f(0x2af)]({ 'item': _0x2c86e4 });
                expect(_0x56a8e2)[_0x55068f(0x180)](), expect(_0x4d54f1)[_0x55068f(0x1f5)]({
                    'panel': _0x56a8e2,
                    'index': 0x0
                });
                const _0x110510 = atom[_0x55068f(0x169)][_0x55068f(0x2a7)](atom[_0x55068f(0x156)][_0x55068f(0x2ad)]()[0x0]['getItem']());
                expect(_0x110510 instanceof _0x2aadca)[_0x55068f(0x17e)](!![]), expect(_0x110510[_0x55068f(0x2a1)]())[_0x55068f(0x17e)](_0x2c86e4);
            });
        }), describe(_0x5b72cd(0x2b0), () => {
            it('adds\x20a\x20panel\x20to\x20the\x20correct\x20panel\x20container', () => {
                const _0x5157ff = _0x1441;
                let _0x100a74;
                expect(atom[_0x5157ff(0x156)]['getBottomPanels']()[_0x5157ff(0x17d)])[_0x5157ff(0x17e)](0x0), atom[_0x5157ff(0x156)][_0x5157ff(0x2a5)][_0x5157ff(0x2b1)][_0x5157ff(0x2ae)](_0x100a74 = jasmine[_0x5157ff(0x1aa)]());
                const _0x13d291 = new _0x4a2507(), _0x45cd44 = atom[_0x5157ff(0x156)]['addBottomPanel']({ 'item': _0x13d291 });
                expect(_0x45cd44)['toBeDefined'](), expect(_0x100a74)['toHaveBeenCalledWith']({
                    'panel': _0x45cd44,
                    'index': 0x0
                });
                const _0x31b53b = atom[_0x5157ff(0x169)][_0x5157ff(0x2a7)](atom[_0x5157ff(0x156)][_0x5157ff(0x2b2)]()[0x0]['getItem']());
                expect(_0x31b53b instanceof _0x2aadca)[_0x5157ff(0x17e)](!![]), expect(_0x31b53b[_0x5157ff(0x2a1)]())[_0x5157ff(0x17e)](_0x13d291);
            });
        }), describe(_0x5b72cd(0x2b3), () => {
            const _0x537929 = _0x5b72cd;
            it(_0x537929(0x2a3), () => {
                const _0x1b2c61 = _0x537929;
                let _0xf35fae;
                expect(atom[_0x1b2c61(0x156)][_0x1b2c61(0x2b4)]()[_0x1b2c61(0x17d)])[_0x1b2c61(0x17e)](0x0), atom['workspace'][_0x1b2c61(0x2a5)][_0x1b2c61(0x2b5)][_0x1b2c61(0x2ae)](_0xf35fae = jasmine[_0x1b2c61(0x1aa)]());
                const _0x298c66 = new _0x4a2507(), _0x365bcb = atom[_0x1b2c61(0x156)]['addHeaderPanel']({ 'item': _0x298c66 });
                expect(_0x365bcb)['toBeDefined'](), expect(_0xf35fae)[_0x1b2c61(0x1f5)]({
                    'panel': _0x365bcb,
                    'index': 0x0
                });
                const _0xfd18e4 = atom[_0x1b2c61(0x169)][_0x1b2c61(0x2a7)](atom['workspace']['getHeaderPanels']()[0x0][_0x1b2c61(0x2a8)]());
                expect(_0xfd18e4 instanceof _0x2aadca)[_0x1b2c61(0x17e)](!![]), expect(_0xfd18e4[_0x1b2c61(0x2a1)]())[_0x1b2c61(0x17e)](_0x298c66);
            });
        }), describe(_0x5b72cd(0x2b6), () => {
            const _0x2ac621 = _0x5b72cd;
            it(_0x2ac621(0x2a3), () => {
                const _0x4c2327 = _0x2ac621;
                let _0x44a1af;
                expect(atom[_0x4c2327(0x156)][_0x4c2327(0x2b7)]()[_0x4c2327(0x17d)])['toBe'](0x0), atom['workspace'][_0x4c2327(0x2a5)][_0x4c2327(0x2b8)][_0x4c2327(0x2ae)](_0x44a1af = jasmine[_0x4c2327(0x1aa)]());
                const _0x320950 = new _0x4a2507(), _0x180bdb = atom[_0x4c2327(0x156)][_0x4c2327(0x2b9)]({ 'item': _0x320950 });
                expect(_0x180bdb)[_0x4c2327(0x180)](), expect(_0x44a1af)['toHaveBeenCalledWith']({
                    'panel': _0x180bdb,
                    'index': 0x0
                });
                const _0x219f96 = atom['views'][_0x4c2327(0x2a7)](atom[_0x4c2327(0x156)][_0x4c2327(0x2b7)]()[0x0][_0x4c2327(0x2a8)]());
                expect(_0x219f96 instanceof _0x2aadca)[_0x4c2327(0x17e)](!![]), expect(_0x219f96[_0x4c2327(0x2a1)]())[_0x4c2327(0x17e)](_0x320950);
            });
        }), describe(_0x5b72cd(0x2ba), () => {
            it('adds\x20a\x20panel\x20to\x20the\x20correct\x20panel\x20container', () => {
                const _0x5c7391 = _0x1441;
                let _0x32b516;
                expect(atom[_0x5c7391(0x156)][_0x5c7391(0x2bb)]()[_0x5c7391(0x17d)])['toBe'](0x0), atom[_0x5c7391(0x156)][_0x5c7391(0x2a5)][_0x5c7391(0x2bc)][_0x5c7391(0x2ae)](_0x32b516 = jasmine['createSpy']());
                const _0x51819b = new _0x4a2507(), _0xdc70ad = atom[_0x5c7391(0x156)][_0x5c7391(0x2bd)]({ 'item': _0x51819b });
                expect(_0xdc70ad)[_0x5c7391(0x180)](), expect(_0x32b516)['toHaveBeenCalledWith']({
                    'panel': _0xdc70ad,
                    'index': 0x0
                });
                const _0x4760ba = atom[_0x5c7391(0x169)][_0x5c7391(0x2a7)](atom[_0x5c7391(0x156)][_0x5c7391(0x2bb)]()[0x0][_0x5c7391(0x2a8)]());
                expect(_0x4760ba instanceof _0x2aadca)['toBe'](!![]), expect(_0x4760ba[_0x5c7391(0x2a1)]())[_0x5c7391(0x17e)](_0x51819b);
            });
        }), describe(_0x5b72cd(0x2be), () => {
            const _0x34b01d = _0x5b72cd;
            it(_0x34b01d(0x2bf), () => {
                const _0xb40aad = _0x34b01d, _0x3f8704 = new _0x4a2507(), _0x3f6896 = atom[_0xb40aad(0x156)][_0xb40aad(0x2a6)]({ 'item': _0x3f8704 }), _0x2da26b = new _0x4a2507();
                expect(atom['workspace'][_0xb40aad(0x2c0)](_0x3f8704))[_0xb40aad(0x17e)](_0x3f6896), expect(atom[_0xb40aad(0x156)]['panelForItem'](_0x2da26b))[_0xb40aad(0x17e)](null);
            });
        });
    });
    for (const _0x200626 of [
            !![],
            ![]
        ]) {
        describe('::scan(regex,\x20options,\x20callback)\x20{\x20ripgrep:\x20' + _0x200626 + '\x20}', () => {
            const _0x21801a = _0x1e7543;
            function _0x7dab41(_0x5e1754, _0x5a97d1, _0x47bbd7) {
                const _0x37450d = _0x1441;
                return atom['workspace'][_0x37450d(0x2c1)](_0x5e1754, {
                    ..._0x5a97d1,
                    'ripgrep': _0x200626
                }, _0x47bbd7);
            }
            describe(_0x21801a(0x2c2), () => {
                const _0x5eb482 = _0x21801a;
                it(_0x5eb482(0x2c3), async () => {
                    const _0xd9249a = _0x5eb482, _0x4340e7 = [];
                    await _0x7dab41(/(a)+/, {
                        'leadingContextLineCount': 0x1,
                        'trailingContextLineCount': 0x1
                    }, _0x4654ab => _0x4340e7[_0xd9249a(0x190)](_0x4654ab)), _0x4340e7[_0xd9249a(0x27a)]((_0x46ab40, _0x301582) => _0x46ab40[_0xd9249a(0x2c4)][_0xd9249a(0x2c5)](_0x301582[_0xd9249a(0x2c4)])), expect(_0x4340e7[_0xd9249a(0x17d)])['toBeGreaterThan'](0x0), expect(_0x4340e7[0x0][_0xd9249a(0x2c4)])['toBe'](atom[_0xd9249a(0x15c)]['getDirectories']()[0x0][_0xd9249a(0x182)]('a')), expect(_0x4340e7[0x0][_0xd9249a(0x2c6)])[_0xd9249a(0x19f)](0x3), expect(_0x4340e7[0x0]['matches'][0x0])[_0xd9249a(0x184)]({
                        'matchText': _0xd9249a(0x2c7),
                        'lineText': _0xd9249a(0x2c8),
                        'lineTextOffset': 0x0,
                        'range': [
                            [
                                0x0,
                                0x0
                            ],
                            [
                                0x0,
                                0x3
                            ]
                        ],
                        'leadingContextLines': [],
                        'trailingContextLines': [_0xd9249a(0x2c9)]
                    });
                }), it(_0x5eb482(0x2ca), async () => {
                    const _0x198c63 = _0x5eb482, _0x1bb192 = [];
                    await _0x7dab41(/\$\w+/, {
                        'leadingContextLineCount': 0x1,
                        'trailingContextLineCount': 0x1
                    }, _0x1139fe => _0x1bb192[_0x198c63(0x190)](_0x1139fe)), expect(_0x1bb192['length'])[_0x198c63(0x17e)](0x1);
                    const {
                        filePath: _0x10be63,
                        matches: _0x9e2b11
                    } = _0x1bb192[0x0];
                    expect(_0x10be63)['toBe'](atom[_0x198c63(0x15c)][_0x198c63(0x15d)]()[0x0][_0x198c63(0x182)]('a')), expect(_0x9e2b11)[_0x198c63(0x19f)](0x1), expect(_0x9e2b11[0x0])['toEqual']({
                        'matchText': '$bill',
                        'lineText': _0x198c63(0x2cb),
                        'lineTextOffset': 0x0,
                        'range': [
                            [
                                0x2,
                                0x6
                            ],
                            [
                                0x2,
                                0xb
                            ]
                        ],
                        'leadingContextLines': [_0x198c63(0x2c9)],
                        'trailingContextLines': []
                    });
                }), it(_0x5eb482(0x2cc), async () => {
                    const _0x3039d3 = _0x5eb482;
                    atom[_0x3039d3(0x167)]['set']('core.excludeVcsIgnoredPaths', ![]), platform[_0x3039d3(0x2cd)](), atom[_0x3039d3(0x15c)]['setPaths']([path['join'](__dirname, _0x3039d3(0x2ce), _0x3039d3(0x2cf))]);
                    const _0x588dd2 = [];
                    let _0x49a7c0 = [];
                    await _0x7dab41(/evil/, {}, _0x27ea87 => {
                        const _0x599319 = _0x3039d3;
                        _0x588dd2['push'](_0x27ea87['filePath']), _0x49a7c0 = _0x49a7c0['concat'](_0x27ea87[_0x599319(0x2c6)]);
                    }), _0x588dd2[_0x3039d3(0x27a)](), _['each'](_0x49a7c0, _0x552cbd => expect(_0x552cbd['matchText'])[_0x3039d3(0x184)](_0x3039d3(0x2d0))), platform[_0x3039d3(0x2d1)]() ? (expect(_0x588dd2[_0x3039d3(0x17d)])[_0x3039d3(0x17e)](0x3), expect(_0x588dd2[0x0])[_0x3039d3(0x188)](/a_file_with_utf8.txt$/), expect(_0x588dd2[0x1])[_0x3039d3(0x188)](/file with spaces.txt$/), expect(path[_0x3039d3(0x189)](_0x588dd2[0x2]))[_0x3039d3(0x17e)](_0x3039d3(0x2d2))) : (expect(_0x588dd2[_0x3039d3(0x17d)])[_0x3039d3(0x17e)](0x5), expect(_0x588dd2[0x0])[_0x3039d3(0x188)](/a_file_with_utf8.txt$/), expect(_0x588dd2[0x1])['toMatch'](/file with spaces.txt$/), expect(_0x588dd2[0x2])['toMatch'](/goddam\nnewlines$/m), expect(_0x588dd2[0x3])[_0x3039d3(0x188)](/quote".txt$/m), expect(path[_0x3039d3(0x189)](_0x588dd2[0x4]))[_0x3039d3(0x17e)]('utfă.md'));
                }), it(_0x5eb482(0x2d3), async () => {
                    const _0x765e7a = _0x5eb482, _0x3aaf34 = [];
                    await _0x7dab41(/DOLLAR/i, {}, _0x1f4589 => _0x3aaf34[_0x765e7a(0x190)](_0x1f4589)), expect(_0x3aaf34)[_0x765e7a(0x19f)](0x1);
                }), _0x200626 && (it('returns\x20empty\x20text\x20matches', async () => {
                    const _0x4f91d0 = _0x5eb482, _0x1a9bdf = [];
                    await _0x7dab41(/^\s{0}/, { 'paths': [_0x4f91d0(0x2d4)] }, _0xe343e5 => _0x1a9bdf[_0x4f91d0(0x190)](_0xe343e5)), expect(_0x1a9bdf['length'])[_0x4f91d0(0x17e)](0x1);
                    const {
                        filePath: _0x2b8fd6,
                        matches: _0x2ddd01
                    } = _0x1a9bdf[0x0];
                    expect(_0x2b8fd6)['toBe'](atom['project'][_0x4f91d0(0x15d)]()[0x0]['resolve'](path['join'](_0x4f91d0(0x2d5), 'oh-git'))), expect(_0x2ddd01)[_0x4f91d0(0x19f)](0x1), expect(_0x2ddd01[0x0])[_0x4f91d0(0x184)]({
                        'matchText': '',
                        'lineText': 'bbb\x20aaaa',
                        'lineTextOffset': 0x0,
                        'range': [
                            [
                                0x0,
                                0x0
                            ],
                            [
                                0x0,
                                0x0
                            ]
                        ],
                        'leadingContextLines': [],
                        'trailingContextLines': []
                    });
                }), describe('newlines\x20on\x20regexps', async () => {
                    const _0x4a7eef = _0x5eb482;
                    it('returns\x20multiline\x20results\x20from\x20regexps', async () => {
                        const _0x2a8f6a = _0x1441, _0x3a62d1 = [];
                        await _0x7dab41(/first\nsecond/, {}, _0x51cb32 => _0x3a62d1[_0x2a8f6a(0x190)](_0x51cb32)), expect(_0x3a62d1[_0x2a8f6a(0x17d)])[_0x2a8f6a(0x17e)](0x1);
                        const {
                            filePath: _0x355d6b,
                            matches: _0x294229
                        } = _0x3a62d1[0x0];
                        expect(_0x355d6b)[_0x2a8f6a(0x17e)](atom['project']['getDirectories']()[0x0][_0x2a8f6a(0x182)](_0x2a8f6a(0x2d6))), expect(_0x294229)[_0x2a8f6a(0x19f)](0x1), expect(_0x294229[0x0])[_0x2a8f6a(0x184)]({
                            'matchText': 'first\x0asecond',
                            'lineText': _0x2a8f6a(0x2d7),
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x3,
                                    0x0
                                ],
                                [
                                    0x4,
                                    0x6
                                ]
                            ],
                            'leadingContextLines': [],
                            'trailingContextLines': []
                        });
                    }), it(_0x4a7eef(0x2d8), async () => {
                        const _0x36da56 = _0x4a7eef, _0xfb88a7 = [];
                        await _0x7dab41(/first\nsecond/, {
                            'leadingContextLineCount': 0x2,
                            'trailingContextLineCount': 0x2
                        }, _0x24c99f => _0xfb88a7[_0x36da56(0x190)](_0x24c99f)), expect(_0xfb88a7[_0x36da56(0x17d)])[_0x36da56(0x17e)](0x1);
                        const {
                            filePath: _0x29bd38,
                            matches: _0x16b226
                        } = _0xfb88a7[0x0];
                        expect(_0x29bd38)[_0x36da56(0x17e)](atom['project'][_0x36da56(0x15d)]()[0x0][_0x36da56(0x182)]('file-with-newline-literal')), expect(_0x16b226)[_0x36da56(0x19f)](0x1), expect(_0x16b226[0x0])[_0x36da56(0x184)]({
                            'matchText': _0x36da56(0x2d9),
                            'lineText': 'first\x0asecond\x5cnthird',
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x3,
                                    0x0
                                ],
                                [
                                    0x4,
                                    0x6
                                ]
                            ],
                            'leadingContextLines': [
                                _0x36da56(0x2da),
                                _0x36da56(0x2db)
                            ],
                            'trailingContextLines': [
                                _0x36da56(0x2dc),
                                _0x36da56(0x2dd)
                            ]
                        });
                    }), it(_0x4a7eef(0x2de), async () => {
                        const _0x179dbd = _0x4a7eef, _0x47106e = [];
                        await _0x7dab41(/line\d\nne/, {}, _0x466543 => _0x47106e[_0x179dbd(0x190)](_0x466543)), _0x47106e[_0x179dbd(0x27a)]((_0x2f4750, _0x4c0a40) => _0x2f4750[_0x179dbd(0x2c4)]['localeCompare'](_0x4c0a40[_0x179dbd(0x2c4)])), expect(_0x47106e[_0x179dbd(0x17d)])[_0x179dbd(0x17e)](0x1);
                        const {
                            filePath: _0x31ee5c,
                            matches: _0x4a9e24
                        } = _0x47106e[0x0];
                        expect(_0x31ee5c)[_0x179dbd(0x17e)](atom[_0x179dbd(0x15c)][_0x179dbd(0x15d)]()[0x0][_0x179dbd(0x182)](_0x179dbd(0x2d6))), expect(_0x4a9e24)[_0x179dbd(0x19f)](0x3), expect(_0x4a9e24[0x0])[_0x179dbd(0x184)]({
                            'matchText': 'line1\x0ane',
                            'lineText': 'newline1\x0anewline2',
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x0,
                                    0x3
                                ],
                                [
                                    0x1,
                                    0x2
                                ]
                            ],
                            'leadingContextLines': [],
                            'trailingContextLines': []
                        }), expect(_0x4a9e24[0x1])[_0x179dbd(0x184)]({
                            'matchText': 'line2\x0ane',
                            'lineText': _0x179dbd(0x2df),
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x1,
                                    0x3
                                ],
                                [
                                    0x2,
                                    0x2
                                ]
                            ],
                            'leadingContextLines': [],
                            'trailingContextLines': []
                        }), expect(_0x4a9e24[0x2])[_0x179dbd(0x184)]({
                            'matchText': _0x179dbd(0x2e0),
                            'lineText': _0x179dbd(0x2e1),
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x5,
                                    0x3
                                ],
                                [
                                    0x6,
                                    0x2
                                ]
                            ],
                            'leadingContextLines': [],
                            'trailingContextLines': []
                        });
                    }), it('works\x20with\x20escaped\x20newlines', async () => {
                        const _0x5fdb2e = _0x4a7eef, _0x28f8d8 = [];
                        await _0x7dab41(/second\\nthird/, {}, _0x54b516 => _0x28f8d8[_0x5fdb2e(0x190)](_0x54b516)), expect(_0x28f8d8[_0x5fdb2e(0x17d)])[_0x5fdb2e(0x17e)](0x1);
                        const {
                            filePath: _0x184a9c,
                            matches: _0x5161c7
                        } = _0x28f8d8[0x0];
                        expect(_0x184a9c)[_0x5fdb2e(0x17e)](atom[_0x5fdb2e(0x15c)]['getDirectories']()[0x0][_0x5fdb2e(0x182)]('file-with-newline-literal')), expect(_0x5161c7)[_0x5fdb2e(0x19f)](0x1), expect(_0x5161c7[0x0])['toEqual']({
                            'matchText': _0x5fdb2e(0x2e2),
                            'lineText': _0x5fdb2e(0x2e2),
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x4,
                                    0x0
                                ],
                                [
                                    0x4,
                                    0xd
                                ]
                            ],
                            'leadingContextLines': [],
                            'trailingContextLines': []
                        });
                    }), it('matches\x20a\x20regexp\x20ending\x20with\x20a\x20newline', async () => {
                        const _0x22f074 = _0x4a7eef, _0x1fa011 = [];
                        await _0x7dab41(/newline3\n/, {}, _0x7e260b => _0x1fa011['push'](_0x7e260b)), expect(_0x1fa011[_0x22f074(0x17d)])[_0x22f074(0x17e)](0x1);
                        const {
                            filePath: _0x187f95,
                            matches: _0x2c97c8
                        } = _0x1fa011[0x0];
                        expect(_0x187f95)[_0x22f074(0x17e)](atom[_0x22f074(0x15c)][_0x22f074(0x15d)]()[0x0][_0x22f074(0x182)](_0x22f074(0x2d6))), expect(_0x2c97c8)['toHaveLength'](0x1), expect(_0x2c97c8[0x0])[_0x22f074(0x184)]({
                            'matchText': 'newline3\x0a',
                            'lineText': _0x22f074(0x2db),
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x2,
                                    0x0
                                ],
                                [
                                    0x3,
                                    0x0
                                ]
                            ],
                            'leadingContextLines': [],
                            'trailingContextLines': []
                        });
                    });
                }), describe(_0x5eb482(0x2e3), async () => {
                    const _0x441cb9 = _0x5eb482;
                    it(_0x441cb9(0x2e4), async () => {
                        const _0x24f718 = _0x441cb9, _0x363aa0 = [];
                        await _0x7dab41(/(?<!a)aa\b/, { 'PCRE2': !![] }, _0xb385a5 => _0x363aa0['push'](_0xb385a5)), expect(_0x363aa0['length'])[_0x24f718(0x17e)](0x1);
                        const {
                            filePath: _0x40b97b,
                            matches: _0x26c44b
                        } = _0x363aa0[0x0];
                        expect(_0x40b97b)['toBe'](atom['project'][_0x24f718(0x15d)]()[0x0][_0x24f718(0x182)]('a')), expect(_0x26c44b)[_0x24f718(0x19f)](0x1), expect(_0x26c44b[0x0])[_0x24f718(0x184)]({
                            'matchText': 'aa',
                            'lineText': _0x24f718(0x2c9),
                            'lineTextOffset': 0x0,
                            'range': [
                                [
                                    0x1,
                                    0x3
                                ],
                                [
                                    0x1,
                                    0x5
                                ]
                            ],
                            'leadingContextLines': [],
                            'trailingContextLines': []
                        });
                    });
                })), it(_0x5eb482(0x2e5), async () => {
                    const _0x13b4d5 = _0x5eb482, _0x23159b = [];
                    await _0x7dab41(/line with unico/, {}, _0x392dc2 => _0x23159b[_0x13b4d5(0x190)](_0x392dc2)), expect(_0x23159b['length'])[_0x13b4d5(0x17e)](0x1);
                    const {
                        filePath: _0x33b917,
                        matches: _0x273169
                    } = _0x23159b[0x0];
                    expect(_0x33b917)['toBe'](atom[_0x13b4d5(0x15c)][_0x13b4d5(0x15d)]()[0x0][_0x13b4d5(0x182)](_0x13b4d5(0x2e6))), expect(_0x273169)[_0x13b4d5(0x19f)](0x1), expect(_0x273169[0x0])[_0x13b4d5(0x184)]({
                        'matchText': _0x13b4d5(0x2e7),
                        'lineText': 'ДДДДДДДДДДДДДДДДДД\x20line\x20with\x20unicode',
                        'lineTextOffset': 0x0,
                        'range': [
                            [
                                0x0,
                                0x13
                            ],
                            [
                                0x0,
                                0x22
                            ]
                        ],
                        'leadingContextLines': [],
                        'trailingContextLines': []
                    });
                }), it('returns\x20results\x20on\x20files\x20detected\x20as\x20binary', async () => {
                    const _0x3c3947 = _0x5eb482, _0x195788 = [];
                    await _0x7dab41(/asciiProperty=Foo/, { 'trailingContextLineCount': 0x2 }, _0x92752c => _0x195788[_0x3c3947(0x190)](_0x92752c)), expect(_0x195788[_0x3c3947(0x17d)])[_0x3c3947(0x17e)](0x1);
                    const {
                        filePath: _0x3020b1,
                        matches: _0x2be8f1
                    } = _0x195788[0x0];
                    expect(_0x3020b1)[_0x3c3947(0x17e)](atom[_0x3c3947(0x15c)][_0x3c3947(0x15d)]()[0x0][_0x3c3947(0x182)](_0x3c3947(0x2e8))), expect(_0x2be8f1)['toHaveLength'](0x1), expect(_0x2be8f1[0x0])['toEqual']({
                        'matchText': _0x3c3947(0x2e9),
                        'lineText': _0x3c3947(0x2e9),
                        'lineTextOffset': 0x0,
                        'range': [
                            [
                                0x0,
                                0x0
                            ],
                            [
                                0x0,
                                0x11
                            ]
                        ],
                        'leadingContextLines': [],
                        'trailingContextLines': [
                            'utf8Property=Fòò',
                            _0x3c3947(0x2ea)
                        ]
                    });
                }), describe(_0x5eb482(0x2eb), () => {
                    const _0x2cac5a = _0x5eb482;
                    let _0x5758c9, _0x1aa300;
                    beforeEach(async () => {
                        const _0x267515 = _0x1441, _0x54b86a = path[_0x267515(0x28b)](__dirname, _0x267515(0x2ce), _0x267515(0x2ec), 'working-dir');
                        _0x5758c9 = path[_0x267515(0x28b)](temp['mkdirSync']('atom'));
                        const _0x51670e = fstream['Writer'](_0x5758c9);
                        fstream[_0x267515(0x2ed)](_0x54b86a)[_0x267515(0x2ee)](_0x51670e), await new Promise(_0x557b20 => {
                            const _0x22351e = _0x267515;
                            _0x51670e['on']('close', _0x557b20), _0x51670e['on'](_0x22351e(0x2ef), _0x557b20);
                        }), fs['renameSync'](path[_0x267515(0x28b)](_0x5758c9, 'git.git'), path[_0x267515(0x28b)](_0x5758c9, '.git')), _0x1aa300 = path[_0x267515(0x28b)](_0x5758c9, _0x267515(0x2f0)), fs[_0x267515(0x2f1)](_0x1aa300, _0x267515(0x2f2));
                    }), afterEach(() => {
                        const _0x331332 = _0x1441;
                        fs[_0x331332(0x2f3)](_0x5758c9) && fs[_0x331332(0x2f4)](_0x5758c9);
                    }), it('excludes\x20ignored\x20files\x20when\x20core.excludeVcsIgnoredPaths\x20is\x20true', async () => {
                        const _0x35baa9 = _0x1441;
                        atom[_0x35baa9(0x15c)][_0x35baa9(0x15b)]([_0x5758c9]), atom[_0x35baa9(0x167)][_0x35baa9(0x1e9)](_0x35baa9(0x2f5), !![]);
                        const _0x521e14 = jasmine[_0x35baa9(0x1aa)]('result\x20found');
                        await _0x7dab41(/match/, {}, ({filePath: _0x264eca}) => _0x521e14(_0x264eca)), expect(_0x521e14)[_0x35baa9(0x1a3)][_0x35baa9(0x194)]();
                    }), it(_0x2cac5a(0x2f6), async () => {
                        const _0x34afa7 = _0x2cac5a;
                        atom[_0x34afa7(0x15c)][_0x34afa7(0x15b)]([_0x5758c9]), atom[_0x34afa7(0x167)][_0x34afa7(0x1e9)](_0x34afa7(0x2f5), ![]);
                        const _0x2bb79e = jasmine[_0x34afa7(0x1aa)]('result\x20found');
                        await _0x7dab41(/match/, {}, ({filePath: _0x2b6202}) => _0x2bb79e(_0x2b6202)), expect(_0x2bb79e)[_0x34afa7(0x1f5)](path[_0x34afa7(0x28b)](_0x5758c9, 'ignored.txt'));
                    }), it(_0x2cac5a(0x2f7), async () => {
                        const _0x5d8b26 = _0x2cac5a;
                        fs[_0x5d8b26(0x2f8)](path[_0x5d8b26(0x28b)](_0x5758c9, _0x5d8b26(0x2f9))), _0x1aa300 = path[_0x5d8b26(0x28b)](path['join'](_0x5758c9, _0x5d8b26(0x2f9), _0x5d8b26(0x2fa))), fs['writeFileSync'](_0x1aa300, 'this\x20match\x20should\x20be\x20included'), atom[_0x5d8b26(0x15c)]['setPaths']([_0x5758c9]), atom[_0x5d8b26(0x167)]['set'](_0x5d8b26(0x2f5), !![]);
                        const _0x33a58d = jasmine[_0x5d8b26(0x1aa)](_0x5d8b26(0x2fb));
                        await _0x7dab41(/match/, { 'paths': [_0x5d8b26(0x2f9)] }, ({filePath: _0x4e5f76}) => _0x33a58d(_0x4e5f76)), expect(_0x33a58d)[_0x5d8b26(0x1f5)](_0x1aa300);
                    });
                }), describe(_0x5eb482(0x2fc), () => {
                    const _0x48e8f4 = _0x5eb482;
                    let _0x52561e;
                    beforeEach(async () => {
                        const _0x4ad50d = _0x1441, _0x2c269a = path[_0x4ad50d(0x28b)](__dirname, _0x4ad50d(0x2ce), 'dir', _0x4ad50d(0x2d5));
                        _0x52561e = path[_0x4ad50d(0x28b)](temp['mkdirSync']('atom'));
                        const _0x5130a7 = fstream['Writer'](_0x52561e);
                        fstream[_0x4ad50d(0x2ed)](_0x2c269a)[_0x4ad50d(0x2ee)](_0x5130a7), await new Promise(_0x32c1dc => {
                            const _0x33c7f4 = _0x4ad50d;
                            _0x5130a7['on'](_0x33c7f4(0x2fd), _0x32c1dc), _0x5130a7['on'](_0x33c7f4(0x2ef), _0x32c1dc);
                        }), fs[_0x4ad50d(0x2fe)](path[_0x4ad50d(0x28b)](__dirname, _0x4ad50d(0x2ce), _0x4ad50d(0x15e), 'b'), path[_0x4ad50d(0x28b)](_0x52561e, 'symlink'));
                    }), afterEach(() => {
                        const _0x234146 = _0x1441;
                        fs['existsSync'](_0x52561e) && fs[_0x234146(0x2f4)](_0x52561e);
                    }), it(_0x48e8f4(0x2ff), async () => {
                        const _0x136304 = _0x48e8f4;
                        atom[_0x136304(0x15c)]['setPaths']([_0x52561e]), atom[_0x136304(0x167)][_0x136304(0x1e9)](_0x136304(0x300), !![]);
                        const _0x3fc29a = jasmine[_0x136304(0x1aa)](_0x136304(0x2fb));
                        await _0x7dab41(/ccc/, {}, ({filePath: _0x211d1f}) => _0x3fc29a(_0x211d1f)), expect(_0x3fc29a)['toHaveBeenCalledWith'](path[_0x136304(0x28b)](_0x52561e, _0x136304(0x301)));
                    }), it(_0x48e8f4(0x302), async () => {
                        const _0x187d4d = _0x48e8f4;
                        atom['project'][_0x187d4d(0x15b)]([_0x52561e]), atom[_0x187d4d(0x167)][_0x187d4d(0x1e9)](_0x187d4d(0x300), ![]);
                        const _0x11b426 = jasmine['createSpy'](_0x187d4d(0x2fb));
                        await _0x7dab41(/ccc/, {}, ({filePath: _0x59ebd0}) => _0x11b426(_0x59ebd0)), expect(_0x11b426)[_0x187d4d(0x1a3)]['toHaveBeenCalled']();
                    });
                }), describe('when\x20there\x20are\x20hidden\x20files', () => {
                    let _0x29c85a;
                    beforeEach(async () => {
                        const _0x59aa0a = _0x1441, _0xeb005 = path['join'](__dirname, _0x59aa0a(0x2ce), _0x59aa0a(0x15e), _0x59aa0a(0x2d5));
                        _0x29c85a = path[_0x59aa0a(0x28b)](temp[_0x59aa0a(0x2f8)](_0x59aa0a(0x303)));
                        const _0x5c06af = fstream[_0x59aa0a(0x304)](_0x29c85a);
                        fstream[_0x59aa0a(0x2ed)](_0xeb005)['pipe'](_0x5c06af), await new Promise(_0x528904 => {
                            const _0x257169 = _0x59aa0a;
                            _0x5c06af['on']('close', _0x528904), _0x5c06af['on'](_0x257169(0x2ef), _0x528904);
                        }), fs['writeFileSync'](path[_0x59aa0a(0x28b)](_0x29c85a, _0x59aa0a(0x305)), 'ccc');
                    }), afterEach(() => {
                        const _0x119c22 = _0x1441;
                        fs[_0x119c22(0x2f3)](_0x29c85a) && fs[_0x119c22(0x2f4)](_0x29c85a);
                    }), it('searches\x20on\x20hidden\x20files', async () => {
                        const _0x3ee89c = _0x1441;
                        atom[_0x3ee89c(0x15c)][_0x3ee89c(0x15b)]([_0x29c85a]);
                        const _0x1d2c17 = jasmine['createSpy']('result\x20found');
                        await _0x7dab41(/ccc/, {}, ({filePath: _0xe8f3c9}) => _0x1d2c17(_0xe8f3c9)), expect(_0x1d2c17)['toHaveBeenCalledWith'](path['join'](_0x29c85a, _0x3ee89c(0x305)));
                    });
                }), it(_0x5eb482(0x306), async () => {
                    const _0x2562fd = _0x5eb482, _0x51e224 = path['join'](path[_0x2562fd(0x28b)](__dirname, _0x2562fd(0x2ce), 'dir'));
                    atom['project'][_0x2562fd(0x15b)]([_0x51e224]);
                    const _0xab55a4 = path[_0x2562fd(0x28b)](_0x51e224, _0x2562fd(0x2d5), _0x2562fd(0x2d4)), _0x24d7c4 = [];
                    let _0x2324dd = [];
                    await _0x7dab41(/aaa/, { 'paths': [_0x2562fd(0x2d5) + path[_0x2562fd(0x307)]] }, _0x19ba55 => {
                        const _0xbf112d = _0x2562fd;
                        _0x24d7c4[_0xbf112d(0x190)](_0x19ba55['filePath']), _0x2324dd = _0x2324dd[_0xbf112d(0x308)](_0x19ba55[_0xbf112d(0x2c6)]);
                    }), expect(_0x24d7c4[_0x2562fd(0x17d)])[_0x2562fd(0x17e)](0x1), expect(_0x24d7c4[0x0])[_0x2562fd(0x17e)](_0xab55a4), expect(_0x2324dd[_0x2562fd(0x17d)])[_0x2562fd(0x17e)](0x1);
                }), it('includes\x20files\x20and\x20folders\x20that\x20begin\x20with\x20a\x20\x27.\x27', async () => {
                    const _0x4de422 = _0x5eb482, _0x3217f2 = temp['mkdirSync']('atom-spec-workspace'), _0x418db0 = path[_0x4de422(0x28b)](_0x3217f2, _0x4de422(0x309));
                    fs[_0x4de422(0x2f1)](_0x418db0, _0x4de422(0x30a)), atom['project'][_0x4de422(0x15b)]([_0x3217f2]);
                    const _0x2a24f5 = [];
                    let _0xb1dab2 = [];
                    await _0x7dab41(/match this/, {}, _0x14b3a1 => {
                        _0x2a24f5['push'](_0x14b3a1['filePath']), _0xb1dab2 = _0xb1dab2['concat'](_0x14b3a1['matches']);
                    }), expect(_0x2a24f5[_0x4de422(0x17d)])[_0x4de422(0x17e)](0x1), expect(_0x2a24f5[0x0])[_0x4de422(0x17e)](_0x418db0), expect(_0xb1dab2[_0x4de422(0x17d)])[_0x4de422(0x17e)](0x1);
                }), it('excludes\x20values\x20in\x20core.ignoredNames', async () => {
                    const _0x532a63 = _0x5eb482, _0x57e318 = atom[_0x532a63(0x167)][_0x532a63(0x250)](_0x532a63(0x30b));
                    _0x57e318['push']('a'), atom[_0x532a63(0x167)][_0x532a63(0x1e9)](_0x532a63(0x30b), _0x57e318);
                    const _0x2bcfb1 = jasmine[_0x532a63(0x1aa)]('result\x20found');
                    await _0x7dab41(/dollar/, {}, () => _0x2bcfb1()), expect(_0x2bcfb1)[_0x532a63(0x1a3)][_0x532a63(0x194)]();
                }), it(_0x5eb482(0x30c), async () => {
                    const _0x18b49b = _0x5eb482, _0x3bbcb5 = [], _0x1c2ccd = await atom[_0x18b49b(0x156)][_0x18b49b(0x17a)]('a');
                    _0x1c2ccd[_0x18b49b(0x173)]('Elephant'), await _0x7dab41(/a|Elephant/, {}, _0x5d540d => _0x3bbcb5[_0x18b49b(0x190)](_0x5d540d)), expect(_0x3bbcb5[_0x18b49b(0x17d)])[_0x18b49b(0x30d)](0x0);
                    const _0x1cb335 = _[_0x18b49b(0x30e)](_0x3bbcb5, ({filePath: _0x168721}) => path['basename'](_0x168721) === 'a');
                    expect(_0x1cb335[_0x18b49b(0x2c6)])['toHaveLength'](0x1), expect(_0x1cb335[_0x18b49b(0x2c6)][0x0]['matchText'])[_0x18b49b(0x17e)](_0x18b49b(0x30f));
                }), it(_0x5eb482(0x310), async () => {
                    const _0xa5147c = _0x5eb482, _0xd9c737 = [], _0x51a3d7 = await atom[_0xa5147c(0x156)]['open'](temp[_0xa5147c(0x1ff)]()['path']);
                    _0x51a3d7[_0xa5147c(0x173)](_0xa5147c(0x30f)), await _0x7dab41(/Elephant/, {}, _0x1d7c2e => _0xd9c737[_0xa5147c(0x190)](_0x1d7c2e)), expect(_0xd9c737)[_0xa5147c(0x19f)](0x0);
                }), describe(_0x5eb482(0x311), () => {
                    const _0x5c74ed = _0x5eb482;
                    let _0xd9a866, _0x5e77aa, _0x39098d, _0x2eb0b3;
                    beforeEach(() => {
                        const _0xe56a85 = _0x1441;
                        _0xd9a866 = atom[_0xe56a85(0x15c)]['getPaths']()[0x0], _0x39098d = path['join'](_0xd9a866, _0xe56a85(0x2d5), _0xe56a85(0x2d4)), _0x5e77aa = temp[_0xe56a85(0x2f8)](_0xe56a85(0x312));
                        const _0x627e6b = path[_0xe56a85(0x28b)](_0x5e77aa, 'a-dir');
                        _0x2eb0b3 = path[_0xe56a85(0x28b)](_0x627e6b, _0xe56a85(0x313)), fs[_0xe56a85(0x2f8)](_0x627e6b), fs[_0xe56a85(0x2f1)](_0x2eb0b3, _0xe56a85(0x314)), atom['project'][_0xe56a85(0x315)](_0x5e77aa);
                    }), it(_0x5c74ed(0x316), async () => {
                        const _0x428056 = _0x5c74ed, _0x40e777 = [];
                        await _0x7dab41(/aaaa/, {}, ({filePath: _0x250cf9}) => _0x40e777[_0x428056(0x190)](_0x250cf9)), expect(_0x40e777[_0x428056(0x27a)]())[_0x428056(0x184)]([
                            _0x39098d,
                            _0x2eb0b3
                        ][_0x428056(0x27a)]());
                    }), describe(_0x5c74ed(0x317), () => {
                        const _0x4ff219 = _0x5c74ed;
                        it(_0x4ff219(0x318), async () => {
                            const _0x578ada = _0x4ff219;
                            let _0x43f112 = [];
                            await _0x7dab41(/aaaa/, { 'paths': [_0x578ada(0x15e)] }, ({filePath: _0x961eee}) => {
                                !_0x43f112['includes'](_0x961eee) && _0x43f112['push'](_0x961eee);
                            }), expect(_0x43f112)['toEqual']([_0x39098d]), _0x43f112 = [], await _0x7dab41(/aaaa/, { 'paths': [path[_0x578ada(0x28b)](_0x578ada(0x15e), _0x578ada(0x2d5))] }, ({filePath: _0x23e4fd}) => {
                                const _0x131b4e = _0x578ada;
                                !_0x43f112[_0x131b4e(0x319)](_0x23e4fd) && _0x43f112['push'](_0x23e4fd);
                            }), expect(_0x43f112)[_0x578ada(0x184)]([_0x39098d]), _0x43f112 = [], await _0x7dab41(/aaaa/, { 'paths': [path['basename'](_0x5e77aa)] }, ({filePath: _0x2ab5ba}) => {
                                const _0x5d5ae9 = _0x578ada;
                                !_0x43f112[_0x5d5ae9(0x319)](_0x2ab5ba) && _0x43f112['push'](_0x2ab5ba);
                            }), expect(_0x43f112)[_0x578ada(0x184)]([_0x2eb0b3]), _0x43f112 = [], await _0x7dab41(/aaaa/, { 'paths': [path[_0x578ada(0x28b)](path['basename'](_0x5e77aa), _0x578ada(0x2d5))] }, ({filePath: _0x327b09}) => {
                                !_0x43f112['includes'](_0x327b09) && _0x43f112['push'](_0x327b09);
                            }), expect(_0x43f112)['toEqual']([_0x2eb0b3]);
                        });
                    }), describe(_0x5c74ed(0x31a), () => {
                        const _0x121976 = _0x5c74ed;
                        let _0x2b16aa = null, _0x4878b5 = null;
                        class _0x45aae1 {
                            constructor(_0x55d3e5) {
                                const _0x12d2db = _0x1441;
                                this[_0x12d2db(0x31b)] = _0x55d3e5, this[_0x12d2db(0x31c)] = new Promise((_0x5b7365, _0x19b1bc) => {
                                    const _0x2abd2d = _0x12d2db;
                                    this[_0x2abd2d(0x31d)] = _0x5b7365, this[_0x2abd2d(0x31e)] = _0x19b1bc, typeof _0x4878b5 === _0x2abd2d(0x31f) && _0x4878b5(this);
                                });
                            }
                            [_0x121976(0x166)](..._0x50aa85) {
                                const _0x3171e5 = _0x121976;
                                return this[_0x3171e5(0x31c)]['then'][_0x3171e5(0x320)](this['promise'], _0x50aa85);
                            }
                            [_0x121976(0x321)]() {
                                const _0x399126 = _0x121976;
                                this['cancelled'] = !![], this[_0x399126(0x31d)]();
                            }
                        }
                        beforeEach(() => {
                            const _0x42f6f0 = _0x121976;
                            _0x2b16aa = null, _0x4878b5 = null, atom[_0x42f6f0(0x163)]['serviceHub'][_0x42f6f0(0x322)]('atom.directory-searcher', '0.1.0', {
                                'canSearchDirectory'(_0x1773bb) {
                                    return _0x1773bb['getPath']() === _0xd9a866;
                                },
                                'search'(_0x2c3ef4, _0xecf7b, _0x259bb6) {
                                    return _0x2b16aa = new _0x45aae1(_0x259bb6), _0x2b16aa;
                                }
                            }), waitsFor(() => atom[_0x42f6f0(0x156)][_0x42f6f0(0x323)][_0x42f6f0(0x17d)] > 0x0);
                        }), it(_0x121976(0x324), async () => {
                            const _0xe467c8 = _0x121976, _0x3b571d = _0xe467c8(0x325), _0x11b487 = 0x1, _0x3d18d5 = 0xa, _0x1720f2 = {
                                    'filePath': _0x3b571d,
                                    'matches': [{
                                            'lineText': _0xe467c8(0x326),
                                            'lineTextOffset': 0x0,
                                            'matchText': _0xe467c8(0x327),
                                            'range': [
                                                [
                                                    0x0,
                                                    0x0
                                                ],
                                                [
                                                    0x0,
                                                    0x5
                                                ]
                                            ]
                                        }]
                                };
                            _0x4878b5 = _0x4c4668 => {
                                const _0x398d1f = _0xe467c8;
                                _0x4c4668['options'][_0x398d1f(0x328)](_0x1720f2), _0x4c4668[_0x398d1f(0x31b)][_0x398d1f(0x329)](_0x3d18d5), _0x4c4668[_0x398d1f(0x31d)]();
                            };
                            const _0x59b462 = [], _0x28be49 = jasmine['createSpy'](_0xe467c8(0x32a));
                            await _0x7dab41(/aaaa/, { 'onPathsSearched': _0x28be49 }, ({filePath: _0x497e40}) => _0x59b462[_0xe467c8(0x190)](_0x497e40)), expect(_0x59b462[_0xe467c8(0x27a)]())[_0xe467c8(0x184)]([
                                _0x3b571d,
                                _0x2eb0b3
                            ]['sort']()), expect(_0x28be49[_0xe467c8(0x241)])[_0xe467c8(0x17e)](0x2), expect(_0x28be49[_0xe467c8(0x204)]['args'][0x0])[_0xe467c8(0x17e)](_0x3d18d5 + _0x11b487);
                        }), it(_0x121976(0x32b), async () => {
                            const _0x3fb7bc = _0x121976, _0x479a54 = _0x7dab41(/aaaa/, {}, () => {
                                });
                            let _0x27df9e = null;
                            waitsFor(_0x3fb7bc(0x32c), () => _0x2b16aa != null), runs(() => {
                                const _0x20c63e = _0x3fb7bc;
                                expect(_0x2b16aa[_0x20c63e(0x32d)])[_0x20c63e(0x17e)](undefined), _0x479a54['cancel'](), expect(_0x2b16aa['cancelled'])[_0x20c63e(0x17e)](!![]);
                            }), waitsForPromise(() => _0x479a54[_0x3fb7bc(0x166)](_0x5ca12e => {
                                _0x27df9e = _0x5ca12e;
                            })), runs(() => expect(_0x27df9e)[_0x3fb7bc(0x17e)](_0x3fb7bc(0x32d)));
                        }), it(_0x121976(0x32e), () => {
                            const _0x1d97a6 = _0x121976;
                            let _0x27d56f, _0x5b9154 = null;
                            atom[_0x1d97a6(0x163)][_0x1d97a6(0x32f)][_0x1d97a6(0x322)](_0x1d97a6(0x330), '0.1.0', {
                                'canSearchDirectory'(_0x281281) {
                                    return _0x281281['getPath']() === _0x5e77aa;
                                },
                                'search'(_0x41fb38, _0x323540, _0x155949) {
                                    return _0x5b9154 = new _0x45aae1(_0x155949), _0x5b9154;
                                }
                            });
                            let _0x1faa59 = ![];
                            const _0x1cee4e = _0x27d56f = _0x7dab41(/aaaa/, () => {
                            });
                            waitsFor(_0x1d97a6(0x32c), () => _0x2b16aa != null), runs(() => _0x2b16aa[_0x1d97a6(0x31e)]()), waitsForPromise(() => _0x27d56f[_0x1d97a6(0x211)](() => {
                                _0x1faa59 = !![];
                            })), waitsFor(_0x587f48 => _0x1cee4e[_0x1d97a6(0x166)](null, _0x587f48)), runs(() => {
                                const _0x2b8102 = _0x1d97a6;
                                expect(_0x1faa59)['toBe'](!![]), expect(_0x5b9154[_0x2b8102(0x32d)])[_0x2b8102(0x17e)](!![]);
                            });
                        });
                    });
                });
            }), describe(_0x21801a(0x331), () => {
                const _0x154fe0 = _0x21801a;
                async function _0x4a3f8d({
                    leadingContextLineCount: _0x3ae9a7,
                    trailingContextLineCount: _0x1a8402
                }) {
                    const _0x33c3a0 = _0x1441, _0x59bd70 = [];
                    return await _0x7dab41(/result/, {
                        'leadingContextLineCount': _0x3ae9a7,
                        'trailingContextLineCount': _0x1a8402
                    }, _0x477647 => _0x59bd70['push'](_0x477647)), {
                        'leadingContext': _0x59bd70[0x0][_0x33c3a0(0x2c6)][_0x33c3a0(0x21b)](_0x21b720 => _0x21b720[_0x33c3a0(0x332)]),
                        'trailingContext': _0x59bd70[0x0][_0x33c3a0(0x2c6)][_0x33c3a0(0x21b)](_0x151611 => _0x151611[_0x33c3a0(0x333)])
                    };
                }
                const _0x48cda0 = [
                        [
                            _0x154fe0(0x334),
                            'line\x202',
                            _0x154fe0(0x335),
                            _0x154fe0(0x336),
                            _0x154fe0(0x337)
                        ],
                        [
                            'line\x206',
                            _0x154fe0(0x338),
                            _0x154fe0(0x339),
                            _0x154fe0(0x33a),
                            'line\x2010'
                        ],
                        [
                            'line\x207',
                            _0x154fe0(0x339),
                            _0x154fe0(0x33a),
                            'line\x2010',
                            'result\x202'
                        ],
                        [
                            _0x154fe0(0x33b),
                            _0x154fe0(0x33c),
                            _0x154fe0(0x33d),
                            _0x154fe0(0x33e),
                            'line\x2012'
                        ]
                    ], _0xb27ca6 = [
                        [
                            'line\x206',
                            _0x154fe0(0x338),
                            _0x154fe0(0x339),
                            'line\x209',
                            _0x154fe0(0x33b)
                        ],
                        [
                            _0x154fe0(0x33d),
                            'line\x2011',
                            _0x154fe0(0x33f),
                            _0x154fe0(0x340),
                            _0x154fe0(0x341)
                        ],
                        [
                            _0x154fe0(0x33e),
                            'line\x2012',
                            _0x154fe0(0x340),
                            'line\x2013',
                            _0x154fe0(0x342)
                        ],
                        [
                            'line\x2013',
                            _0x154fe0(0x342),
                            _0x154fe0(0x343)
                        ]
                    ];
                it('returns\x20valid\x20contexts\x20no\x20matter\x20how\x20many\x20lines\x20are\x20requested', async () => {
                    const _0x4a8874 = _0x154fe0;
                    expect(await _0x4a3f8d({}))[_0x4a8874(0x184)]({
                        'leadingContext': [
                            [],
                            [],
                            [],
                            []
                        ],
                        'trailingContext': [
                            [],
                            [],
                            [],
                            []
                        ]
                    }), expect(await _0x4a3f8d({
                        'leadingContextLineCount': 0x1,
                        'trailingContextLineCount': 0x1
                    }))[_0x4a8874(0x184)]({
                        'leadingContext': _0x48cda0[_0x4a8874(0x21b)](_0x1e1ba1 => _0x1e1ba1[_0x4a8874(0x344)](-0x1)),
                        'trailingContext': _0xb27ca6[_0x4a8874(0x21b)](_0x30e893 => _0x30e893['slice'](0x0, 0x1))
                    }), expect(await _0x4a3f8d({
                        'leadingContextLineCount': 0x2,
                        'trailingContextLineCount': 0x2
                    }))['toEqual']({
                        'leadingContext': _0x48cda0[_0x4a8874(0x21b)](_0x49c385 => _0x49c385['slice'](-0x2)),
                        'trailingContext': _0xb27ca6[_0x4a8874(0x21b)](_0x5f4d04 => _0x5f4d04[_0x4a8874(0x344)](0x0, 0x2))
                    }), expect(await _0x4a3f8d({
                        'leadingContextLineCount': 0x5,
                        'trailingContextLineCount': 0x5
                    }))[_0x4a8874(0x184)]({
                        'leadingContext': _0x48cda0[_0x4a8874(0x21b)](_0x305512 => _0x305512[_0x4a8874(0x344)](-0x5)),
                        'trailingContext': _0xb27ca6[_0x4a8874(0x21b)](_0x4c3285 => _0x4c3285[_0x4a8874(0x344)](0x0, 0x5))
                    }), expect(await _0x4a3f8d({
                        'leadingContextLineCount': 0x2,
                        'trailingContextLineCount': 0x3
                    }))['toEqual']({
                        'leadingContext': _0x48cda0[_0x4a8874(0x21b)](_0x2a3d7c => _0x2a3d7c[_0x4a8874(0x344)](-0x2)),
                        'trailingContext': _0xb27ca6['map'](_0x4af342 => _0x4af342[_0x4a8874(0x344)](0x0, 0x3))
                    });
                });
            });
        });
    }
    describe(_0x1e7543(0x345), () => {
        const _0x29c171 = _0x1e7543;
        let _0x17515f, _0x2ef875;
        beforeEach(() => {
            const _0x247211 = _0x1441;
            _0x17515f = path['dirname'](atom[_0x247211(0x15c)]['getPaths']()[0x0]), _0x2ef875 = temp[_0x247211(0x2f8)](_0x247211(0x303)), atom[_0x247211(0x15c)][_0x247211(0x15b)]([_0x2ef875]);
        }), describe(_0x29c171(0x346), () => {
            const _0x2648cf = _0x29c171;
            it(_0x2648cf(0x347), () => {
                const _0x5b901c = _0x2648cf, _0x4b3576 = [], _0x7e98a3 = path[_0x5b901c(0x182)](_0x5b901c(0x348));
                expect(fs['existsSync'](_0x7e98a3))['toBeFalsy'](), waitsForPromise(() => atom[_0x5b901c(0x156)]['replace'](/items/gi, _0x5b901c(0x195), [_0x7e98a3], (_0x467247, _0x17ec9f) => _0x4b3576['push'](_0x17ec9f))), runs(() => {
                    const _0x2daca4 = _0x5b901c;
                    expect(_0x4b3576)[_0x2daca4(0x19f)](0x1), expect(_0x4b3576[0x0][_0x2daca4(0x200)])['toBe'](_0x7e98a3);
                });
            });
        }), describe('when\x20called\x20with\x20unopened\x20files', () => {
            const _0x45ec6f = _0x29c171;
            it(_0x45ec6f(0x349), () => {
                const _0x109ae7 = _0x45ec6f, _0x3d1eb9 = path[_0x109ae7(0x28b)](_0x2ef875, _0x109ae7(0x1e7));
                fs['copyFileSync'](path[_0x109ae7(0x28b)](_0x17515f, _0x109ae7(0x1e7)), _0x3d1eb9);
                const _0x2c212e = [];
                waitsForPromise(() => atom[_0x109ae7(0x156)][_0x109ae7(0x34a)](/items/gi, _0x109ae7(0x195), [_0x3d1eb9], _0x232b0a => _0x2c212e[_0x109ae7(0x190)](_0x232b0a))), runs(() => {
                    const _0x3db9bc = _0x109ae7;
                    expect(_0x2c212e)[_0x3db9bc(0x19f)](0x1), expect(_0x2c212e[0x0][_0x3db9bc(0x2c4)])[_0x3db9bc(0x17e)](_0x3d1eb9), expect(_0x2c212e[0x0][_0x3db9bc(0x34b)])['toBe'](0x6);
                });
            }), it('does\x20not\x20discard\x20the\x20multiline\x20flag', () => {
                const _0x1ada92 = _0x45ec6f, _0x3f74d4 = path['join'](_0x2ef875, _0x1ada92(0x1e7));
                fs['copyFileSync'](path['join'](_0x17515f, 'sample.js'), _0x3f74d4);
                const _0x450440 = [];
                waitsForPromise(() => atom['workspace'][_0x1ada92(0x34a)](/;$/gim, _0x1ada92(0x195), [_0x3f74d4], _0x3219ed => _0x450440[_0x1ada92(0x190)](_0x3219ed))), runs(() => {
                    const _0x26531c = _0x1ada92;
                    expect(_0x450440)[_0x26531c(0x19f)](0x1), expect(_0x450440[0x0][_0x26531c(0x2c4)])['toBe'](_0x3f74d4), expect(_0x450440[0x0][_0x26531c(0x34b)])[_0x26531c(0x17e)](0x8);
                });
            });
        }), describe(_0x29c171(0x34c), () => {
            const _0x5d1d77 = _0x29c171;
            it('replaces\x20properly\x20and\x20saves\x20when\x20not\x20modified', () => {
                const _0x4c811a = _0x1441, _0x26db29 = path[_0x4c811a(0x28b)](_0x2ef875, _0x4c811a(0x1e7));
                fs[_0x4c811a(0x34d)](path[_0x4c811a(0x28b)](_0x17515f, 'sample.js'), path[_0x4c811a(0x28b)](_0x2ef875, 'sample.js'));
                let _0x4f25e0 = null;
                const _0x57d406 = [];
                waitsForPromise(() => atom[_0x4c811a(0x156)][_0x4c811a(0x17a)]('sample.js')[_0x4c811a(0x166)](_0x2a4b3c => {
                    _0x4f25e0 = _0x2a4b3c;
                })), runs(() => expect(_0x4f25e0[_0x4c811a(0x298)]())[_0x4c811a(0x34e)]()), waitsForPromise(() => atom[_0x4c811a(0x156)]['replace'](/items/gi, _0x4c811a(0x195), [_0x26db29], _0x28936c => _0x57d406[_0x4c811a(0x190)](_0x28936c))), runs(() => {
                    const _0x4deee7 = _0x4c811a;
                    expect(_0x57d406)['toHaveLength'](0x1), expect(_0x57d406[0x0][_0x4deee7(0x2c4)])[_0x4deee7(0x17e)](_0x26db29), expect(_0x57d406[0x0]['replacements'])['toBe'](0x6), expect(_0x4f25e0['isModified']())[_0x4deee7(0x34e)]();
                });
            }), it('does\x20not\x20replace\x20when\x20the\x20path\x20is\x20not\x20specified', () => {
                const _0x20c08a = _0x1441, _0x2d9390 = path[_0x20c08a(0x28b)](_0x2ef875, _0x20c08a(0x1e7)), _0x4b5560 = path['join'](_0x2ef875, _0x20c08a(0x34f));
                fs[_0x20c08a(0x34d)](path[_0x20c08a(0x28b)](_0x17515f, _0x20c08a(0x1e7)), _0x2d9390), fs[_0x20c08a(0x34d)](path[_0x20c08a(0x28b)](_0x17515f, _0x20c08a(0x34f)), path[_0x20c08a(0x28b)](_0x2ef875, _0x20c08a(0x34f)));
                const _0x310791 = [];
                waitsForPromise(() => atom['workspace'][_0x20c08a(0x17a)](_0x20c08a(0x34f))), waitsForPromise(() => atom[_0x20c08a(0x156)]['replace'](/items/gi, 'items', [_0x4b5560], _0x1b0a4f => _0x310791[_0x20c08a(0x190)](_0x1b0a4f))), runs(() => {
                    const _0x2351ee = _0x20c08a;
                    expect(_0x310791)['toHaveLength'](0x1), expect(_0x310791[0x0][_0x2351ee(0x2c4)])[_0x2351ee(0x17e)](_0x4b5560);
                });
            }), it(_0x5d1d77(0x350), () => {
                const _0x1c1f9d = _0x5d1d77, _0x3345b2 = path['join'](_0x2ef875, _0x1c1f9d(0x1e7));
                fs[_0x1c1f9d(0x34d)](path[_0x1c1f9d(0x28b)](_0x17515f, 'sample.js'), _0x3345b2);
                let _0x341c88 = null;
                const _0xd0f1aa = [];
                waitsForPromise(() => atom[_0x1c1f9d(0x156)]['open']('sample.js')['then'](_0x116013 => {
                    _0x341c88 = _0x116013;
                })), runs(() => {
                    const _0xb8e0b7 = _0x1c1f9d;
                    _0x341c88[_0xb8e0b7(0x289)]['setTextInRange']([
                        [
                            0x0,
                            0x0
                        ],
                        [
                            0x0,
                            0x0
                        ]
                    ], _0xb8e0b7(0x351)), expect(_0x341c88['isModified']())['toBeTruthy']();
                }), waitsForPromise(() => atom[_0x1c1f9d(0x156)][_0x1c1f9d(0x34a)](/items/gi, _0x1c1f9d(0x352), [_0x3345b2], _0x13f6ea => _0xd0f1aa[_0x1c1f9d(0x190)](_0x13f6ea))), runs(() => {
                    const _0x410206 = _0x1c1f9d;
                    expect(_0xd0f1aa)[_0x410206(0x19f)](0x1), expect(_0xd0f1aa[0x0][_0x410206(0x2c4)])[_0x410206(0x17e)](_0x3345b2), expect(_0xd0f1aa[0x0]['replacements'])['toBe'](0x6), expect(_0x341c88[_0x410206(0x298)]())[_0x410206(0x353)]();
                });
            });
        });
    }), describe('::saveActivePaneItem()', () => {
        let _0x178bd6, _0x286b61;
        beforeEach(() => {
            const _0x229186 = _0x1441;
            waitsForPromise(() => atom['workspace'][_0x229186(0x17a)](_0x229186(0x1e7))[_0x229186(0x166)](_0x49736b => {
                _0x178bd6 = _0x49736b;
            })), _0x286b61 = jasmine[_0x229186(0x1aa)](_0x229186(0x354)), atom['notifications'][_0x229186(0x355)](_0x286b61);
        }), describe('when\x20there\x20is\x20an\x20error', () => {
            const _0x3559a8 = _0x1441;
            it(_0x3559a8(0x356), () => {
                const _0x4d5f7c = _0x3559a8;
                spyOn(_0x178bd6, _0x4d5f7c(0x357))['andCallFake'](() => {
                    const _0x1ddf55 = _0x4d5f7c;
                    throw new Error(_0x1ddf55(0x358));
                }), waitsForPromise(() => atom['workspace']['saveActivePaneItem']()[_0x4d5f7c(0x166)](() => {
                    const _0x174038 = _0x4d5f7c;
                    expect(_0x286b61)[_0x174038(0x194)](), expect(_0x286b61[_0x174038(0x204)][_0x174038(0x205)][0x0][_0x174038(0x20d)]())['toBe'](_0x174038(0x206)), expect(_0x286b61[_0x174038(0x204)][_0x174038(0x205)][0x0][_0x174038(0x207)]())[_0x174038(0x1a2)]('Unable\x20to\x20save');
                }));
            }), it(_0x3559a8(0x359), () => {
                const _0x5cd82a = _0x3559a8;
                spyOn(_0x178bd6, 'save')['andCallFake'](() => {
                    throw new Error('ENOTDIR,\x20not\x20a\x20directory\x20\x27/Some/dir/and-a-file.js\x27');
                }), waitsForPromise(() => atom[_0x5cd82a(0x156)][_0x5cd82a(0x35a)]()[_0x5cd82a(0x166)](() => {
                    const _0x4e79a5 = _0x5cd82a;
                    expect(_0x286b61)[_0x4e79a5(0x194)](), expect(_0x286b61[_0x4e79a5(0x204)][_0x4e79a5(0x205)][0x0][_0x4e79a5(0x20d)]())[_0x4e79a5(0x17e)](_0x4e79a5(0x206)), expect(_0x286b61[_0x4e79a5(0x204)][_0x4e79a5(0x205)][0x0][_0x4e79a5(0x207)]())[_0x4e79a5(0x1a2)]('Unable\x20to\x20save');
                }));
            }), it(_0x3559a8(0x35b), () => {
                const _0x41f576 = _0x3559a8;
                spyOn(_0x178bd6, _0x41f576(0x357))[_0x41f576(0x1b1)](() => {
                    const _0x2d5112 = _0x41f576, _0x33cab7 = new Error('EACCES,\x20permission\x20denied\x20\x27/Some/dir/and-a-file.js\x27');
                    _0x33cab7[_0x2d5112(0x201)] = _0x2d5112(0x202), _0x33cab7[_0x2d5112(0x200)] = _0x2d5112(0x35c);
                    throw _0x33cab7;
                }), waitsForPromise(() => atom[_0x41f576(0x156)][_0x41f576(0x35a)]()['then'](() => {
                    const _0x2e4e15 = _0x41f576;
                    expect(_0x286b61)[_0x2e4e15(0x194)](), expect(_0x286b61[_0x2e4e15(0x204)][_0x2e4e15(0x205)][0x0][_0x2e4e15(0x20d)]())['toBe'](_0x2e4e15(0x206)), expect(_0x286b61['mostRecentCall'][_0x2e4e15(0x205)][0x0][_0x2e4e15(0x207)]())['toContain'](_0x2e4e15(0x35d));
                }));
            }), it('emits\x20a\x20warning\x20notification\x20when\x20the\x20operation\x20is\x20not\x20permitted', () => {
                const _0x6a28ae = _0x3559a8;
                spyOn(_0x178bd6, 'save')[_0x6a28ae(0x1b1)](() => {
                    const _0x50b9b0 = _0x6a28ae, _0x1b90ac = new Error('EPERM,\x20operation\x20not\x20permitted\x20\x27/Some/dir/and-a-file.js\x27');
                    _0x1b90ac[_0x50b9b0(0x201)] = 'EPERM', _0x1b90ac['path'] = _0x50b9b0(0x35c);
                    throw _0x1b90ac;
                }), waitsForPromise(() => atom[_0x6a28ae(0x156)][_0x6a28ae(0x35a)]()[_0x6a28ae(0x166)](() => {
                    const _0x408f04 = _0x6a28ae;
                    expect(_0x286b61)[_0x408f04(0x194)](), expect(_0x286b61[_0x408f04(0x204)]['args'][0x0][_0x408f04(0x20d)]())['toBe'](_0x408f04(0x206)), expect(_0x286b61['mostRecentCall'][_0x408f04(0x205)][0x0][_0x408f04(0x207)]())['toContain'](_0x408f04(0x35d));
                }));
            }), it(_0x3559a8(0x35e), () => {
                const _0xc08029 = _0x3559a8;
                spyOn(_0x178bd6, _0xc08029(0x357))[_0xc08029(0x1b1)](() => {
                    const _0x2e575d = _0xc08029, _0x17e879 = new Error(_0x2e575d(0x35f));
                    _0x17e879[_0x2e575d(0x201)] = 'EBUSY', _0x17e879[_0x2e575d(0x200)] = _0x2e575d(0x35c);
                    throw _0x17e879;
                }), waitsForPromise(() => atom[_0xc08029(0x156)][_0xc08029(0x35a)]()[_0xc08029(0x166)](() => {
                    const _0x1aeb1b = _0xc08029;
                    expect(_0x286b61)['toHaveBeenCalled'](), expect(_0x286b61['mostRecentCall'][_0x1aeb1b(0x205)][0x0]['getType']())[_0x1aeb1b(0x17e)](_0x1aeb1b(0x206)), expect(_0x286b61[_0x1aeb1b(0x204)]['args'][0x0][_0x1aeb1b(0x207)]())[_0x1aeb1b(0x1a2)]('Unable\x20to\x20save');
                }));
            }), it(_0x3559a8(0x360), () => {
                const _0x3bc368 = _0x3559a8;
                spyOn(_0x178bd6, _0x3bc368(0x357))[_0x3bc368(0x1b1)](() => {
                    const _0x367c5f = _0x3bc368, _0x4ea957 = new Error(_0x367c5f(0x361));
                    _0x4ea957[_0x367c5f(0x201)] = _0x367c5f(0x362), _0x4ea957['path'] = _0x367c5f(0x35c);
                    throw _0x4ea957;
                }), waitsForPromise(() => atom[_0x3bc368(0x156)]['saveActivePaneItem']()['then'](() => {
                    const _0x537ae2 = _0x3bc368;
                    expect(_0x286b61)[_0x537ae2(0x194)](), expect(_0x286b61[_0x537ae2(0x204)][_0x537ae2(0x205)][0x0][_0x537ae2(0x20d)]())['toBe'](_0x537ae2(0x206)), expect(_0x286b61[_0x537ae2(0x204)]['args'][0x0][_0x537ae2(0x207)]())['toContain'](_0x537ae2(0x35d));
                }));
            }), it(_0x3559a8(0x356), () => {
                const _0x2a85b6 = _0x3559a8;
                spyOn(_0x178bd6, 'save')[_0x2a85b6(0x1b1)](() => {
                    const _0x13efbb = _0x2a85b6;
                    throw new Error(_0x13efbb(0x363));
                }), waitsForPromise({ 'shouldReject': !![] }, () => atom['workspace'][_0x2a85b6(0x35a)]());
            });
        });
    }), describe(_0x1e7543(0x364), () => {
        const _0x33ed13 = _0x1e7543;
        beforeEach(() => {
            const _0x3fdb60 = _0x1441;
            spyOn(atom, _0x3fdb60(0x2fd)), waitsForPromise(() => atom[_0x3fdb60(0x156)]['open']());
        }), it(_0x33ed13(0x365), async () => {
            const _0x5334f9 = _0x33ed13;
            atom['config']['set'](_0x5334f9(0x366), ![]);
            const _0x57659f = atom[_0x5334f9(0x156)]['getActivePane'](), _0x44519e = _0x57659f[_0x5334f9(0x172)]({ 'copyActiveItem': !![] });
            expect(atom[_0x5334f9(0x156)][_0x5334f9(0x1c3)]()[_0x5334f9(0x1d1)]()[_0x5334f9(0x17d)])[_0x5334f9(0x17e)](0x2), expect(_0x44519e[_0x5334f9(0x1c7)]()['length'])[_0x5334f9(0x17e)](0x1), atom[_0x5334f9(0x156)][_0x5334f9(0x26c)](), expect(atom['workspace'][_0x5334f9(0x1c3)]()['getPanes']()[_0x5334f9(0x17d)])[_0x5334f9(0x17e)](0x2), expect(_0x44519e[_0x5334f9(0x1c7)]()[_0x5334f9(0x17d)])[_0x5334f9(0x17e)](0x0), atom[_0x5334f9(0x156)][_0x5334f9(0x26c)](), expect(atom[_0x5334f9(0x156)][_0x5334f9(0x1c3)]()[_0x5334f9(0x1d1)]()[_0x5334f9(0x17d)])[_0x5334f9(0x17e)](0x1), expect(_0x57659f[_0x5334f9(0x1c7)]()[_0x5334f9(0x17d)])['toBe'](0x1), atom[_0x5334f9(0x156)][_0x5334f9(0x26c)](), expect(atom[_0x5334f9(0x156)][_0x5334f9(0x1c3)]()[_0x5334f9(0x1d1)]()[_0x5334f9(0x17d)])['toBe'](0x1), expect(_0x57659f[_0x5334f9(0x1c7)]()[_0x5334f9(0x17d)])['toBe'](0x0), expect(atom['workspace'][_0x5334f9(0x1c3)]()[_0x5334f9(0x1d1)]()[_0x5334f9(0x17d)])[_0x5334f9(0x17e)](0x1), await atom[_0x5334f9(0x156)][_0x5334f9(0x17a)]({
                'getTitle': () => 'Permanent\x20Dock\x20Item',
                'element': document[_0x5334f9(0x1ad)]('div'),
                'getDefaultLocation': () => _0x5334f9(0x19b),
                'isPermanentDockItem': () => !![]
            }), await atom[_0x5334f9(0x156)]['open']({
                'getTitle': () => _0x5334f9(0x367),
                'element': document['createElement'](_0x5334f9(0x19c)),
                'getDefaultLocation': () => _0x5334f9(0x19b)
            }), expect(atom[_0x5334f9(0x156)]['getLeftDock']()[_0x5334f9(0x19e)]()['length'])[_0x5334f9(0x17e)](0x2), atom[_0x5334f9(0x156)]['closeActivePaneItemOrEmptyPaneOrWindow'](), expect(atom[_0x5334f9(0x2fd)])[_0x5334f9(0x194)]();
        });
    }), describe(_0x1e7543(0x368), () => {
        const _0x26947b = _0x1e7543;
        describe(_0x26947b(0x369), () => {
            const _0x4429c4 = _0x26947b;
            it(_0x4429c4(0x36a), () => {
                const _0x572e0d = _0x4429c4, _0x445212 = atom[_0x572e0d(0x156)][_0x572e0d(0x1b4)](), _0x30774a = _0x445212['getPanes']()[0x0], _0x3b4af0 = _0x30774a['splitRight']();
                _0x3b4af0[_0x572e0d(0x1cc)](), expect(atom['workspace'][_0x572e0d(0x171)]())['toBe'](_0x3b4af0), atom[_0x572e0d(0x156)][_0x572e0d(0x36b)](), expect(atom['workspace']['getActivePane']())[_0x572e0d(0x17e)](_0x30774a);
            });
        }), describe(_0x26947b(0x36c), () => {
            const _0x163c02 = _0x26947b;
            it(_0x163c02(0x36d), () => {
                const _0x53e606 = _0x163c02, _0x30bd60 = atom[_0x53e606(0x156)]['getCenter'](), _0x909229 = _0x30bd60[_0x53e606(0x1d1)]()[0x0], _0x55a00e = _0x909229[_0x53e606(0x172)]();
                _0x55a00e['focus'](), expect(atom[_0x53e606(0x156)][_0x53e606(0x171)]())[_0x53e606(0x17e)](_0x55a00e), atom[_0x53e606(0x156)][_0x53e606(0x36b)](), expect(atom[_0x53e606(0x156)][_0x53e606(0x171)]())[_0x53e606(0x17e)](_0x909229);
            });
        });
    }), describe(_0x1e7543(0x36e), () => {
        const _0x6263ca = _0x1e7543;
        describe(_0x6263ca(0x369), () => {
            const _0x544237 = _0x6263ca;
            it(_0x544237(0x36f), () => {
                const _0x4a7a3b = _0x544237, _0x39c215 = atom[_0x4a7a3b(0x156)]['getLeftDock'](), _0x4ae7f7 = _0x39c215[_0x4a7a3b(0x1d1)]()[0x0], _0x43f45c = _0x4ae7f7['splitRight']();
                _0x4ae7f7[_0x4a7a3b(0x1cc)](), expect(atom[_0x4a7a3b(0x156)]['getActivePane']())[_0x4a7a3b(0x17e)](_0x4ae7f7), atom[_0x4a7a3b(0x156)][_0x4a7a3b(0x370)](), expect(atom[_0x4a7a3b(0x156)]['getActivePane']())['toBe'](_0x43f45c);
            });
        }), describe('when\x20the\x20active\x20workspace\x20pane\x20is\x20inside\x20the\x20workspace\x20center', () => {
            const _0x219dc1 = _0x6263ca;
            it(_0x219dc1(0x371), () => {
                const _0x4f7fce = _0x219dc1, _0x383d84 = atom['workspace'][_0x4f7fce(0x1c3)](), _0x48f7ae = _0x383d84[_0x4f7fce(0x1d1)]()[0x0], _0x3a50d9 = _0x48f7ae[_0x4f7fce(0x172)]();
                _0x48f7ae[_0x4f7fce(0x1cc)](), expect(atom['workspace'][_0x4f7fce(0x171)]())[_0x4f7fce(0x17e)](_0x48f7ae), atom['workspace'][_0x4f7fce(0x370)](), expect(atom[_0x4f7fce(0x156)]['getActivePane']())['toBe'](_0x3a50d9);
            });
        });
    }), describe(_0x1e7543(0x372), () => {
        const _0x4f35d6 = _0x1e7543;
        it(_0x4f35d6(0x373), () => {
            const _0x31eaad = _0x4f35d6, _0x5da91d = _0x5157f1[_0x31eaad(0x1c3)](), _0x4243c7 = _0x5157f1[_0x31eaad(0x1b4)](), _0x5dad1c = _0x5157f1['getRightDock'](), _0x5b0513 = _0x5157f1[_0x31eaad(0x233)](), _0x437084 = _0x5da91d[_0x31eaad(0x1d1)]()[0x0], _0x922d72 = _0x4243c7[_0x31eaad(0x1d1)]()[0x0], _0x90311e = _0x5dad1c[_0x31eaad(0x1d1)]()[0x0], _0x49a24b = _0x5b0513[_0x31eaad(0x1d1)]()[0x0];
            _0x4243c7[_0x31eaad(0x227)](), _0x5dad1c[_0x31eaad(0x227)](), _0x5b0513[_0x31eaad(0x227)](), expect(_0x5157f1['getVisiblePanes']())[_0x31eaad(0x1a2)](_0x437084), expect(_0x5157f1['getVisiblePanes']())[_0x31eaad(0x1a3)]['toContain'](_0x922d72), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a3)][_0x31eaad(0x1a2)](_0x90311e), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a3)][_0x31eaad(0x1a2)](_0x49a24b), _0x4243c7[_0x31eaad(0x375)](), expect(_0x5157f1['getVisiblePanes']())[_0x31eaad(0x1a2)](_0x437084), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a2)](_0x922d72), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a3)]['toContain'](_0x90311e), expect(_0x5157f1['getVisiblePanes']())[_0x31eaad(0x1a3)][_0x31eaad(0x1a2)](_0x49a24b), _0x5dad1c['show'](), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a2)](_0x437084), expect(_0x5157f1['getVisiblePanes']())[_0x31eaad(0x1a2)](_0x922d72), expect(_0x5157f1['getVisiblePanes']())['toContain'](_0x90311e), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a3)][_0x31eaad(0x1a2)](_0x49a24b), _0x5b0513[_0x31eaad(0x375)](), expect(_0x5157f1[_0x31eaad(0x374)]())['toContain'](_0x437084), expect(_0x5157f1[_0x31eaad(0x374)]())['toContain'](_0x922d72), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a2)](_0x90311e), expect(_0x5157f1[_0x31eaad(0x374)]())[_0x31eaad(0x1a2)](_0x49a24b);
        });
    }), describe(_0x1e7543(0x376), () => {
        it('returns\x20all\x20visible\x20pane\x20containers', () => {
            const _0x1a1ab5 = _0x1441, _0x10bf98 = _0x5157f1[_0x1a1ab5(0x1c3)](), _0x17de7d = _0x5157f1[_0x1a1ab5(0x1b4)](), _0x503941 = _0x5157f1['getRightDock'](), _0x255930 = _0x5157f1[_0x1a1ab5(0x233)]();
            _0x17de7d['hide'](), _0x503941[_0x1a1ab5(0x227)](), _0x255930[_0x1a1ab5(0x227)](), expect(_0x5157f1[_0x1a1ab5(0x377)]())['toEqual']([_0x10bf98]), _0x17de7d[_0x1a1ab5(0x375)](), expect(_0x5157f1['getVisiblePaneContainers']()[_0x1a1ab5(0x27a)]())[_0x1a1ab5(0x184)]([
                _0x10bf98,
                _0x17de7d
            ]), _0x503941[_0x1a1ab5(0x375)](), expect(_0x5157f1['getVisiblePaneContainers']()[_0x1a1ab5(0x27a)]())[_0x1a1ab5(0x184)]([
                _0x10bf98,
                _0x17de7d,
                _0x503941
            ]), _0x255930['show'](), expect(_0x5157f1[_0x1a1ab5(0x377)]()[_0x1a1ab5(0x27a)]())[_0x1a1ab5(0x184)]([
                _0x10bf98,
                _0x17de7d,
                _0x503941,
                _0x255930
            ]);
        });
    }), describe(_0x1e7543(0x378), () => {
        const _0x36aa8a = _0x1e7543;
        it(_0x36aa8a(0x379), () => {
            const _0x3c0b8d = _0x36aa8a;
            let _0x2c20f3 = null;
            atom['config'][_0x3c0b8d(0x1e9)](_0x3c0b8d(0x37a), ![]), waitsForPromise(() => atom[_0x3c0b8d(0x156)][_0x3c0b8d(0x17a)](_0x3c0b8d(0x1e7), { 'pending': !![] })[_0x3c0b8d(0x166)](() => {
                _0x2c20f3 = atom['workspace']['getActivePane']();
            })), runs(() => expect(_0x2c20f3[_0x3c0b8d(0x213)]())[_0x3c0b8d(0x34e)]());
        });
    }), describe('grammar\x20activation', () => {
        const _0x79dcaa = _0x1e7543;
        it(_0x79dcaa(0x37b), async () => {
            const _0x3f9721 = _0x79dcaa;
            atom[_0x3f9721(0x163)][_0x3f9721(0x23d)]();
            const _0x49b3c4 = jasmine[_0x3f9721(0x1aa)]('js\x20grammar\x20used'), _0x37465e = jasmine[_0x3f9721(0x1aa)](_0x3f9721(0x37c)), _0x562bea = jasmine[_0x3f9721(0x1aa)]('c\x20grammar\x20used');
            atom[_0x3f9721(0x163)][_0x3f9721(0x23f)]('language-javascript:grammar-used', _0x49b3c4), atom['packages'][_0x3f9721(0x23f)]('language-ruby:grammar-used', _0x37465e), atom[_0x3f9721(0x163)][_0x3f9721(0x23f)](_0x3f9721(0x37d), _0x562bea), await atom[_0x3f9721(0x163)]['activatePackage'](_0x3f9721(0x37e)), await atom[_0x3f9721(0x163)][_0x3f9721(0x239)](_0x3f9721(0x245)), await atom['packages'][_0x3f9721(0x239)](_0x3f9721(0x37f)), await atom[_0x3f9721(0x156)][_0x3f9721(0x17a)](_0x3f9721(0x34f)), expect(_0x49b3c4)[_0x3f9721(0x194)](), atom[_0x3f9721(0x165)]['assignLanguageMode'](atom[_0x3f9721(0x156)][_0x3f9721(0x1e1)](), _0x3f9721(0x380)), expect(_0x562bea)['toHaveBeenCalled'](), atom['workspace'][_0x3f9721(0x171)]()[_0x3f9721(0x172)]({ 'copyActiveItem': !![] }), atom[_0x3f9721(0x165)]['assignLanguageMode'](atom[_0x3f9721(0x156)]['getActiveTextEditor'](), _0x3f9721(0x381)), expect(_0x37465e)[_0x3f9721(0x194)]();
        });
    }), describe('.checkoutHeadRevision()', () => {
        const _0x3f302c = _0x1e7543;
        let _0x24a062 = null;
        beforeEach(async () => {
            const _0x3c8e6f = _0x1441;
            jasmine[_0x3c8e6f(0x382)](), atom[_0x3c8e6f(0x167)][_0x3c8e6f(0x1e9)](_0x3c8e6f(0x383), ![]), _0x24a062 = await atom[_0x3c8e6f(0x156)]['open']('sample-with-comments.js');
        }), it(_0x3f302c(0x384), async () => {
            const _0x2af300 = _0x3f302c;
            _0x24a062['setCursorBufferPosition']([
                0x0,
                0x0
            ]), _0x24a062[_0x2af300(0x297)](_0x2af300(0x385)), expect(_0x24a062[_0x2af300(0x386)](0x0))[_0x2af300(0x17e)](_0x2af300(0x387)), atom[_0x2af300(0x156)][_0x2af300(0x388)](_0x24a062), await conditionPromise(() => _0x24a062['lineTextForBufferRow'](0x0) === '');
        }), describe(_0x3f302c(0x389), () => {
            const _0x55880a = _0x3f302c;
            it(_0x55880a(0x38a), async () => {
                const _0x1ba1e2 = _0x55880a;
                _0x24a062 = new TextEditor(), _0x24a062['setText'](_0x1ba1e2(0x38b)), atom[_0x1ba1e2(0x156)]['checkoutHeadRevision'](_0x24a062), atom[_0x1ba1e2(0x156)]['checkoutHeadRevision'](_0x24a062);
            });
        });
    }), describe('when\x20an\x20item\x20is\x20moved', () => {
        const _0x3d9aff = _0x1e7543;
        beforeEach(() => {
            const _0x1b0b9b = _0x1441;
            atom[_0x1b0b9b(0x156)][_0x1b0b9b(0x1a5)] = !![];
        }), afterEach(async () => {
            const _0x2faf58 = _0x1441;
            await atom[_0x2faf58(0x156)][_0x2faf58(0x15f)]['clear'](), atom[_0x2faf58(0x156)]['enablePersistence'] = ![];
        }), it('stores\x20the\x20new\x20location\x20if\x20it\x27s\x20not\x20the\x20default', () => {
            const _0xaf4eaa = _0x1441, _0x18edc3 = _0xaf4eaa(0x19a), _0xd9f495 = {
                    'getURI': () => _0x18edc3,
                    'getDefaultLocation': () => _0xaf4eaa(0x19b),
                    'getElement': () => document[_0xaf4eaa(0x1ad)](_0xaf4eaa(0x19c))
                }, _0x34b436 = _0x5157f1[_0xaf4eaa(0x171)]();
            _0x34b436[_0xaf4eaa(0x19d)](_0xd9f495);
            const _0x37510c = atom[_0xaf4eaa(0x156)]['getRightDock']()['getActivePane']();
            spyOn(_0x5157f1[_0xaf4eaa(0x15f)], 'save'), _0x34b436['moveItemToPane'](_0xd9f495, _0x37510c), expect(_0x5157f1[_0xaf4eaa(0x15f)]['save'])[_0xaf4eaa(0x1f5)](_0x18edc3, _0xaf4eaa(0x1ac));
        }), it(_0x3d9aff(0x38c), () => {
            const _0x429441 = _0x3d9aff, _0x4e8265 = 'atom://test', _0x330ff = {
                    'getURI': () => _0x4e8265,
                    'getDefaultLocation': () => _0x429441(0x1ac),
                    'getElement': () => document[_0x429441(0x1ad)](_0x429441(0x19c))
                }, _0x16fe2a = _0x5157f1[_0x429441(0x171)]();
            _0x16fe2a[_0x429441(0x19d)](_0x330ff);
            const _0x4cf076 = atom[_0x429441(0x156)][_0x429441(0x199)]()[_0x429441(0x171)]();
            spyOn(_0x5157f1['itemLocationStore'], _0x429441(0x357)), spyOn(_0x5157f1[_0x429441(0x15f)], _0x429441(0x38d)), _0x16fe2a['moveItemToPane'](_0x330ff, _0x4cf076), expect(_0x5157f1['itemLocationStore'][_0x429441(0x38d)])[_0x429441(0x1f5)](_0x4e8265), expect(_0x5157f1[_0x429441(0x15f)][_0x429441(0x357)])[_0x429441(0x1a3)]['toHaveBeenCalled']();
        });
    });
});
function escapeStringRegex(_0xf90213) {
    const _0x4bc132 = _0xd79c49;
    return _0xf90213[_0x4bc132(0x34a)](/[|\\{}()[\]^$+*?.]/g, '\x5c$&');
}
