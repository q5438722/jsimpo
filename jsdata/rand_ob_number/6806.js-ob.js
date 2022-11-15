const fs = require('fs'), path = require('path'), pageComponents = fs['readdirSync'](path['join'](__dirname, '../../../app/components')), pageContainers = fs['readdirSync'](path['join'](__dirname, '../../../app/containers')), components = pageComponents['concat'](pageContainers);
function componentExists(_0x302574) {
    return components['indexOf'](_0x302574) >= 0x102e + 0xa2 * 0x12 + 0x1b92 * -0x1;
}
module['exports'] = componentExists;
