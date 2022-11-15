const fs = require('fs'), path = require(_0x4f8f30(447)), pageComponents = fs['readdirSync'](path['join'](__dirname, '../../../app/components')), pageContainers = fs['readdirSync'](path['join'](__dirname, _0x4f8f30(448))), components = pageComponents[_0x4f8f30(449)](pageContainers);
function componentExists(_0x4ef8e2) {
    const _0x4ac8a = _0x4f8f30;
    return components[_0x4ac8a(450)](_0x4ef8e2) >= 0;
}
module[_0x4f8f30(451)] = componentExists;