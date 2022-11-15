const path = require('path');
exports['createPages'] = async ({graphql, actions}) => {
    const {createPage} = actions;
    const {data} = await graphql('\n    {\n      allMongodbCloudDocuments(limit: 1000) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  ');
    const _0x32f0ec = path['resolve']('./src/templates/item.js');
    for (const {node} of data['allMongodbCloudDocuments']['edges']) {
        createPage({
            'path': '/item/' + node['id'] + '/',
            'component': _0x32f0ec,
            'context': { 'id': node['id'] }
        });
    }
};