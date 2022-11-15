const log4js = require(_0x3a57fe(180)), shell = require(_0x3a57fe(181)), {graphql: baseGraphql} = require('@octokit/graphql');
let logger = log4js[_0x3a57fe(182)](_0x3a57fe(183));
require(_0x3a57fe(184))['config']();
const token = process['env'][_0x3a57fe(185)], host = _0x3a57fe(186) + token + _0x3a57fe(187), cacheDir = _0x3a57fe(188), owner = 'gatsbyjs', repoBase = _0x3a57fe(189), sourceRepo = _0x3a57fe(190), sourceRepoUrl = host + '/' + owner + '/' + sourceRepo, sourceRepoGitUrl = sourceRepoUrl + _0x3a57fe(191), syncLabelName = 'sync';
function getShortHash(_0x5a9a53) {
    const _0x303c10 = _0x3a57fe;
    return _0x5a9a53[_0x303c10(192)](0, 7);
}
function cloneOrUpdateRepo(_0x24aab5, _0x2139a0) {
    const _0x33e8f2 = _0x3a57fe;
    shell['ls'](_0x24aab5)[_0x33e8f2(193)] !== 0 ? (logger[_0x33e8f2(194)](_0x33e8f2(195) + _0x24aab5), shell[_0x33e8f2(196)]('git clone ' + _0x2139a0), shell['cd'](_0x24aab5)) : (shell['cd'](_0x24aab5), shell[_0x33e8f2(196)](_0x33e8f2(197)), shell[_0x33e8f2(196)](_0x33e8f2(198)));
}
function _0x4d1a(_0x2c0caf, _0x5507e2) {
    return _0x4d1a = function (_0x10a001, _0x4d1a71) {
        _0x10a001 = _0x10a001 - 171;
        let _0x41b466 = _0x10a0[_0x10a001];
        return _0x41b466;
    }, _0x4d1a(_0x2c0caf, _0x5507e2);
}
async function graphql(_0x3ffc30, _0x2f8080) {
    const _0x2e37fd = _0x3a57fe, _0x4c3440 = baseGraphql['defaults']({ 'headers': { 'authorization': _0x2e37fd(199) + token } });
    try {
        return await _0x4c3440(_0x3ffc30, _0x2f8080);
    } catch (_0x54fe28) {
        return logger['error'](_0x54fe28[_0x2e37fd(200)]), process[_0x2e37fd(201)](1);
    }
}
async function getRepository(_0x5b202a, _0x1c74a1) {
    const _0x1fbd7d = _0x3a57fe, {repository: _0x5443d1} = await graphql(_0x1fbd7d(202), {
            'owner': _0x5b202a,
            'name': _0x1c74a1,
            'syncLabel': syncLabelName
        });
    return _0x5443d1;
}
async function createLabel(_0x303860) {
    const _0x1ba71c = _0x3a57fe, {createLabel: _0x4fe549} = await graphql(_0x1ba71c(203), {
            'headers': { 'accept': _0x1ba71c(204) },
            'input': _0x303860
        });
    return _0x4fe549[_0x1ba71c(205)];
}
async function createPullRequest(_0x16d3ed) {
    const {createPullRequest: _0x4b412a} = await graphql('\n      mutation ($input: CreatePullRequestInput!) {\n        createPullRequest(input: $input) {\n          pullRequest {\n            id\n            number\n          }\n        }\n      }\n    ', {
        'headers': { 'accept': 'application/vnd.github.shadow-cat-preview+json' },
        'input': _0x16d3ed
    });
    return _0x4b412a['pullRequest'];
}
async function addLabelToPullRequest(_0x4a98cb, _0x3c5a54) {
    const _0x2dfbdf = _0x3a57fe;
    await graphql(_0x2dfbdf(206), {
        'headers': { 'accept': _0x2dfbdf(204) },
        'input': {
            'labelableId': _0x4a98cb['id'],
            'labelIds': [_0x3c5a54['id']]
        }
    });
}
function conflictPRBody(_0x302136, _0x3b2d04, _0x51c0fa) {
    const _0x42a891 = _0x3a57fe;
    return _0x42a891(207) + (_0x302136[_0x42a891(208)] <= 10 ? 'open' : '') + _0x42a891(209) + _0x302136[_0x42a891(208)] + _0x42a891(210) + _0x302136['map'](_0x51f67e => _0x42a891(211) + _0x51f67e)[_0x42a891(212)]('\n') + _0x42a891(213) + _0x3b2d04 + _0x42a891(214) + _0x51c0fa + _0x42a891(215);
}
function syncPRBody() {
    const _0x17d331 = _0x3a57fe;
    return _0x17d331(216);
}
async function syncTranslationRepo(_0x24b8a0) {
    const _0x2d1996 = _0x3a57fe;
    logger = log4js['getLogger']('sync:' + _0x24b8a0), logger[_0x2d1996(217)] = _0x2d1996(218);
    const _0x9a4cb1 = repoBase + '-' + _0x24b8a0, _0x1d0484 = host + '/' + owner + '/' + _0x9a4cb1;
    shell['cd'](cacheDir)[_0x2d1996(193)] !== 0 && (logger['debug']('creating ' + cacheDir), shell['mkdir'](cacheDir), shell['cd'](cacheDir));
    cloneOrUpdateRepo(_0x9a4cb1, _0x1d0484), shell[_0x2d1996(196)](_0x2d1996(219) + sourceRepoGitUrl), shell['exec'](_0x2d1996(220));
    const _0x4b30c2 = await getRepository(owner, _0x9a4cb1);
    _0x4b30c2[_0x2d1996(221)]['nodes'][_0x2d1996(208)] > 0 && (logger[_0x2d1996(218)](_0x2d1996(222)), process[_0x2d1996(201)](0));
    logger[_0x2d1996(218)]('No currently open sync pull requests.');
    let _0x2b8ba3;
    !_0x4b30c2[_0x2d1996(223)] ? (logger[_0x2d1996(218)](_0x2d1996(224) + syncLabelName + '" label. Creating one...'), _0x2b8ba3 = await createLabel({
        'repositoryId': _0x4b30c2['id'],
        'name': syncLabelName,
        'description': _0x2d1996(225),
        'color': _0x2d1996(226)
    })) : (logger['info'](_0x2d1996(227) + syncLabelName + _0x2d1996(228)), _0x2b8ba3 = _0x4b30c2[_0x2d1996(223)]);
    const _0x1e1849 = shell['exec'](_0x2d1996(229), { 'silent': !![] })[_0x2d1996(230)][_0x2d1996(231)]('\n', ''), _0xd59f24 = getShortHash(_0x1e1849), _0x5d7bc1 = shell[_0x2d1996(196)]('git rev-parse source/master', { 'silent': !![] })['stdout'][_0x2d1996(231)]('\n', ''), _0x1c5723 = getShortHash(_0x5d7bc1);
    logger[_0x2d1996(218)](_0x2d1996(232));
    const _0xf56226 = _0x2d1996(233) + _0x1c5723;
    shell['exec'](_0x2d1996(234) + _0xf56226, { 'silent': !![] })[_0x2d1996(193)] !== 0 && shell[_0x2d1996(196)](_0x2d1996(235) + _0xf56226);
    shell['exec'](_0x2d1996(236), { 'silent': !![] }), shell[_0x2d1996(196)](_0x2d1996(237)), shell[_0x2d1996(196)](_0x2d1996(238)), shell[_0x2d1996(196)](_0x2d1996(239) + _0xf56226), logger['info'](_0x2d1996(240));
    const _0x2c4f38 = await createPullRequest({
        'repositoryId': _0x4b30c2['id'],
        'baseRefName': _0x2d1996(241),
        'headRefName': _0xf56226,
        'title': _0x2d1996(242) + sourceRepo + _0x2d1996(243) + _0x1c5723,
        'body': syncPRBody(),
        'maintainerCanModify': !![]
    });
    await addLabelToPullRequest(_0x2c4f38, _0x2b8ba3), shell[_0x2d1996(196)](_0x2d1996(197));
    const _0x287552 = sourceRepoUrl + '/compare/' + _0xd59f24 + '..' + _0x1c5723;
    logger[_0x2d1996(218)]('Finding conflicts with source...');
    const _0x182534 = _0x2d1996(244) + _0x1c5723;
    shell[_0x2d1996(196)]('git checkout ' + _0x182534, { 'silent': !![] })['code'] !== 0 && shell[_0x2d1996(196)](_0x2d1996(235) + _0x182534);
    const _0x5974d1 = shell['exec'](_0x2d1996(245), { 'silent': !![] })['stdout'];
    _0x5974d1[_0x2d1996(246)](_0x2d1996(247)) && (logger[_0x2d1996(218)]('We are already up to date with source.'), process[_0x2d1996(201)](0));
    const _0x53af85 = _0x5974d1[_0x2d1996(248)]('\n'), _0x5074b6 = _0x53af85[_0x2d1996(249)](_0x46eb3a => _0x46eb3a[_0x2d1996(250)]('CONFLICT (content)'));
    _0x5074b6[_0x2d1996(208)] === 0 && (logger[_0x2d1996(218)]('No conflicting files found. Exiting...'), process[_0x2d1996(201)](0));
    const _0xda7dad = _0x5074b6['map'](_0x3ee8c8 => _0x3ee8c8['substr'](_0x3ee8c8[_0x2d1996(251)](' ') + 1));
    shell[_0x2d1996(196)](_0x2d1996(252), { 'silent': !![] }), shell[_0x2d1996(196)]('git add ' + _0xda7dad[_0x2d1996(212)](' '));
    const _0x16140f = _0x53af85['filter'](_0x2e1b40 => _0x2e1b40[_0x2d1996(250)](_0x2d1996(253))), _0x5d31ef = _0x16140f[_0x2d1996(254)](_0x3965e1 => _0x3965e1['replace'](_0x2d1996(255), '')[_0x2d1996(248)](' ')[0]);
    _0x5d31ef[_0x2d1996(208)] > 0 && shell['exec']('git rm ' + _0x5d31ef['join'](' '), { 'silent': !![] });
    shell[_0x2d1996(196)](_0x2d1996(256)), shell[_0x2d1996(196)](_0x2d1996(257), { 'silent': !![] }), shell[_0x2d1996(196)](_0x2d1996(258), { 'silent': !![] }), shell['exec'](_0x2d1996(239) + _0x182534), logger['info'](_0x2d1996(259));
    const _0xd1068e = await createPullRequest({
        'repositoryId': _0x4b30c2['id'],
        'baseRefName': _0x2d1996(241),
        'headRefName': _0x182534,
        'title': _0x2d1996(260) + sourceRepo + ' @ ' + _0x1c5723,
        'body': conflictPRBody(_0xda7dad, _0x287552, _0x2c4f38[_0x2d1996(261)]),
        'maintainerCanModify': !![],
        'draft': !![]
    });
    await addLabelToPullRequest(_0xd1068e, _0x2b8ba3);
}
const [langCode] = process['argv'][_0x3a57fe(262)](2);
syncTranslationRepo(langCode);