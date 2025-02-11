const fs = require('fs');
const path = require('path');
const pageComponents = fs['readdirSync'](path['join'](__dirname, '../../../app/components'));
const pageContainers = fs['readdirSync'](path['join'](__dirname, '../../../app/containers'));
const components = pageComponents['concat'](pageContainers);
function componentExists(_0xb28399) {
    return components['indexOf'](_0xb28399) >= 0;
}
module['exports'] = componentExists;