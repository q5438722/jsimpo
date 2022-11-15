const _ = require(`lodash`);

var { onCreateNode } = require(`../on-node-create`);

var { graphql } = require(`gatsby/graphql`);

var { createContentDigest } = require(`gatsby-core-utils`);

var node;
var actions;
var createNodeId;
beforeEach(() => {
    node = { id: `whatever`, children: [], internal: { contentDigest: `whatever`, mediaType: `text/markdown` } };actions = { createNode: jest.fn(), createParentChildLink: jest.fn() };createNodeId = jest.fn().mockReturnValue(`uuid-from-gatsby`);
});
const loadNodeContent = e => Promise.resolve(e.content);

describe(`Process markdown content correctly`, () => {
    describe(`Process generated markdown node correctly`, () => {
        it(`Correctly creates a new MarkdownRemark node`, async () => {
            const e = `---
title: "my little pony"
date: "2017-09-18T23:19:51.246Z"
---
Where oh where is my little pony?
            `;
            node.content = e;await onCreateNode({ node: node, loadNodeContent: loadNodeContent, actions: actions, createNodeId: createNodeId, createContentDigest: createContentDigest }).then(() => {
                expect(actions.createNode.mock.calls).toMatchSnapshot();expect(_.isString(actions.createNode.mock.calls[0][0].frontmatter.date)).toBeTruthy();expect(actions.createParentChildLink.mock.calls).toMatchSnapshot();expect(actions.createNode).toHaveBeenCalledTimes(1);expect(actions.createParentChildLink).toHaveBeenCalledTimes(1);
            });
        });it(`Correctly parses a graymatter excerpt`, async () => {
            const e = `---
title: "my little pony"
date: "2017-09-18T23:19:51.246Z"
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor sit amet velit id facilisis. Nulla viverra, eros at efficitur pulvinar, lectus orci accumsan nisi, eu blandit elit nulla nec lectus. Integer porttitor imperdiet sapien. Quisque in orci sed nisi consequat aliquam. Aenean id mollis nisi. Sed auctor odio id erat facilisis venenatis. Quisque posuere faucibus libero vel fringilla.

In quis lectus sed eros efficitur luctus. Morbi tempor, nisl eget feugiat tincidunt, sem velit vulputate enim, nec interdum augue enim nec mauris. Nulla iaculis ante sed enim placerat pretium. Nulla metus odio, facilisis vestibulum lobortis vitae, bibendum at nunc. Donec sit amet efficitur metus, in bibendum nisi. Vivamus tempus vel turpis sit amet auctor. Maecenas luctus vestibulum velit, at sagittis leo volutpat quis. Praesent posuere nec augue eget sodales. Pellentesque vitae arcu ut est varius venenatis id maximus sem. Curabitur non consectetur turpis.

<!-- end -->

Maecenas sodales, arcu at dictum porta, sapien leo consectetur metus, nec rhoncus quam mauris vel odio. Vivamus sed sapien in massa pulvinar feugiat vel eu tellus. Nam rutrum sem nisi, vitae viverra erat varius ut. Praesent fringilla, metus in condimentum varius, ligula augue efficitur dolor, at tempus velit velit id arcu. Suspendisse urna est, blandit ac lacus id, efficitur semper purus. Etiam dignissim suscipit lorem accumsan ultricies. Duis lacinia tortor sapien, sed malesuada leo molestie nec. Sed lobortis varius ipsum, eu lobortis metus malesuada consequat. Sed purus nulla, tempor ac tincidunt et, blandit vel ex. Vestibulum id dolor non nulla posuere consectetur quis et turpis. Cras dolor metus, elementum a enim at, semper bibendum sapien. Sed lacus augue, laoreet in metus id, volutpat malesuada mauris.

Sed eu gravida mauris. Suspendisse potenti. Praesent sit amet egestas mi, sed hendrerit eros. Vestibulum congue scelerisque magna, id viverra justo congue nec. Duis id dapibus metus, et dictum erat. Nulla rhoncus a mauris nec tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elementum molestie ullamcorper. Nulla pulvinar feugiat mauris, placerat malesuada ligula rutrum non. Integer venenatis ex at dignissim fermentum. Nunc bibendum nulla in purus pharetra, non sodales justo fringilla.

Sed bibendum sem iaculis, pellentesque leo sed, imperdiet ante. Sed consequat mattis dui nec pretium. Donec vel consectetur est. Nam sagittis, libero vitae pretium pharetra, velit est dignissim erat, at cursus quam massa vitae ligula. Suspendisse potenti. In hac habitasse platea dictumst. Donec sit amet finibus justo. Mauris ante dolor, pulvinar vitae feugiat eu, rhoncus nec diam. In ut accumsan diam, faucibus fringilla odio. Nunc id ultricies turpis. Quisque justo quam, tristique sit amet interdum quis, facilisis at mi. Fusce porttitor vel sem ut condimentum. Praesent at libero congue, vulputate elit ut, rhoncus erat.
            `;
            node.content = e;await onCreateNode({ node: node, loadNodeContent: loadNodeContent, actions: actions, createNodeId: createNodeId, createContentDigest: createContentDigest }, { excerpt_separator: `<!-- end -->` }).then(() => {
                expect(actions.createNode.mock.calls).toMatchSnapshot();expect(_.isString(actions.createNode.mock.calls[0][0].excerpt)).toBeTruthy();expect(actions.createNode.mock.calls[0][0].excerpt).not.toEqual(0);expect(actions.createParentChildLink.mock.calls).toMatchSnapshot();expect(actions.createNode).toHaveBeenCalledTimes(1);expect(actions.createParentChildLink).toHaveBeenCalledTimes(1);
            });
        });
    });describe(`date formatting`, () => {
        const i = e => `---
date: ${e}
---

yadda yadda
      `;

        it(`coerces a date object into a date string`, async () => {
            const e = `2019-01-01`;
            node.content = i(e);const t = await onCreateNode({ node: node, actions: actions, createNodeId: createNodeId, loadNodeContent: loadNodeContent, createContentDigest: createContentDigest });
            expect(t.frontmatter.date).toEqual(new Date(e).toJSON());
        });
    });describe(`process graphql correctly`, () => {
        async function r(e, t) {
            var { createSchemaComposer: i } = require(`../../../gatsby/src/schema/schema-composer`);

            var { addInferredFields: a } = require(`../../../gatsby/src/schema/infer/add-inferred-fields`);

            var { addNodes: s } = require(`../../../gatsby/src/schema/infer/inference-metadata`);

            var { getExampleObject: u } = require(`../../../gatsby/src/schema/infer/build-example-data`);

            const n = i();
            const r = `MarkdownRemark`;
            const o = n.createObjectTC(r);
            const c = s({ typeName: r }, e);
            a({ schemaComposer: n, typeComposer: o, exampleValue: u(c) });n.Query.addFields({ listNode: { type: [n.createObjectTC(r)], resolve: () => e } });const l = n.buildSchema();
            const m = await graphql(l, `query {
                    listNode {
                        ${t}
                    }
                }
                `);
            return m;
        }it(`Correctly queries an excerpt for a node with an excerpt separator`, t => {
            const e = `---
title: "my little pony"
date: "2017-09-18T23:19:51.246Z"
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor sit amet velit id facilisis. Nulla viverra, eros at efficitur pulvinar, lectus orci accumsan nisi, eu blandit elit nulla nec lectus. Integer porttitor imperdiet sapien. Quisque in orci sed nisi consequat aliquam. Aenean id mollis nisi. Sed auctor odio id erat facilisis venenatis. Quisque posuere faucibus libero vel fringilla.

In quis lectus sed eros efficitur luctus. Morbi tempor, nisl eget feugiat tincidunt, sem velit vulputate enim, nec interdum augue enim nec mauris. Nulla iaculis ante sed enim placerat pretium. Nulla metus odio, facilisis vestibulum lobortis vitae, bibendum at nunc. Donec sit amet efficitur metus, in bibendum nisi. Vivamus tempus vel turpis sit amet auctor. Maecenas luctus vestibulum velit, at sagittis leo volutpat quis. Praesent posuere nec augue eget sodales. Pellentesque vitae arcu ut est varius venenatis id maximus sem. Curabitur non consectetur turpis.

<!-- end -->

Maecenas sodales, arcu at dictum porta, sapien leo consectetur metus, nec rhoncus quam mauris vel odio. Vivamus sed sapien in massa pulvinar feugiat vel eu tellus. Nam rutrum sem nisi, vitae viverra erat varius ut. Praesent fringilla, metus in condimentum varius, ligula augue efficitur dolor, at tempus velit velit id arcu. Suspendisse urna est, blandit ac lacus id, efficitur semper purus. Etiam dignissim suscipit lorem accumsan ultricies. Duis lacinia tortor sapien, sed malesuada leo molestie nec. Sed lobortis varius ipsum, eu lobortis metus malesuada consequat. Sed purus nulla, tempor ac tincidunt et, blandit vel ex. Vestibulum id dolor non nulla posuere consectetur quis et turpis. Cras dolor metus, elementum a enim at, semper bibendum sapien. Sed lacus augue, laoreet in metus id, volutpat malesuada mauris.

Sed eu gravida mauris. Suspendisse potenti. Praesent sit amet egestas mi, sed hendrerit eros. Vestibulum congue scelerisque magna, id viverra justo congue nec. Duis id dapibus metus, et dictum erat. Nulla rhoncus a mauris nec tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elementum molestie ullamcorper. Nulla pulvinar feugiat mauris, placerat malesuada ligula rutrum non. Integer venenatis ex at dignissim fermentum. Nunc bibendum nulla in purus pharetra, non sodales justo fringilla.

Sed bibendum sem iaculis, pellentesque leo sed, imperdiet ante. Sed consequat mattis dui nec pretium. Donec vel consectetur est. Nam sagittis, libero vitae pretium pharetra, velit est dignissim erat, at cursus quam massa vitae ligula. Suspendisse potenti. In hac habitasse platea dictumst. Donec sit amet finibus justo. Mauris ante dolor, pulvinar vitae feugiat eu, rhoncus nec diam. In ut accumsan diam, faucibus fringilla odio. Nunc id ultricies turpis. Quisque justo quam, tristique sit amet interdum quis, facilisis at mi. Fusce porttitor vel sem ut condimentum. Praesent at libero congue, vulputate elit ut, rhoncus erat.
            `;
            node.content = e;var i;

            const a = e => r([e], `
                    excerpt
                    frontmatter {
                        title
                    }
                `).then(e => {
                try {
                    i = e.data.listNode[0];expect(i).toMatchSnapshot();expect(i.excerpt).toMatch(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor sit amet velit id facilisis. Nulla viverra, eros at efficitur pulvinar, lectus orci accumsan nisi, eu blandit elit nulla nec lectus. Integer porttitor imperdiet sapien. Quisque in orci sed nisi consequat aliquam. Aenean id mollis nisi. Sed auctor odio id erat facilisis venenatis. Quisque posuere faucibus libero vel fringilla.

In quis lectus sed eros efficitur luctus. Morbi tempor, nisl eget feugiat tincidunt, sem velit vulputate enim, nec interdum augue enim nec mauris. Nulla iaculis ante sed enim placerat pretium. Nulla metus odio, facilisis vestibulum lobortis vitae, bibendum at nunc. Donec sit amet efficitur metus, in bibendum nisi. Vivamus tempus vel turpis sit amet auctor. Maecenas luctus vestibulum velit, at sagittis leo volutpat quis. Praesent posuere nec augue eget sodales. Pellentesque vitae arcu ut est varius venenatis id maximus sem. Curabitur non consectetur turpis.

`);t();
                } catch (e) {
                    t.fail(e);
                }
            });

            const s = jest.fn();
            const u = { createNode: a, createParentChildLink: s };
            const n = jest.fn();
            n.mockReturnValue(`uuid-from-gatsby`);onCreateNode({ node: node, loadNodeContent: loadNodeContent, actions: u, createNodeId: n, createContentDigest: createContentDigest }, { excerpt_separator: `<!-- end -->` });
        });it(`Correctly queries an excerpt for a node without an excerpt separator`, t => {
            const e = `---
title: "my little pony"
date: "2017-09-18T23:19:51.246Z"
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor sit amet velit id facilisis. Nulla viverra, eros at efficitur pulvinar, lectus orci accumsan nisi, eu blandit elit nulla nec lectus. Integer porttitor imperdiet sapien. Quisque in orci sed nisi consequat aliquam. Aenean id mollis nisi. Sed auctor odio id erat facilisis venenatis. Quisque posuere faucibus libero vel fringilla.

In quis lectus sed eros efficitur luctus. Morbi tempor, nisl eget feugiat tincidunt, sem velit vulputate enim, nec interdum augue enim nec mauris. Nulla iaculis ante sed enim placerat pretium. Nulla metus odio, facilisis vestibulum lobortis vitae, bibendum at nunc. Donec sit amet efficitur metus, in bibendum nisi. Vivamus tempus vel turpis sit amet auctor. Maecenas luctus vestibulum velit, at sagittis leo volutpat quis. Praesent posuere nec augue eget sodales. Pellentesque vitae arcu ut est varius venenatis id maximus sem. Curabitur non consectetur turpis.

Maecenas sodales, arcu at dictum porta, sapien leo consectetur metus, nec rhoncus quam mauris vel odio. Vivamus sed sapien in massa pulvinar feugiat vel eu tellus. Nam rutrum sem nisi, vitae viverra erat varius ut. Praesent fringilla, metus in condimentum varius, ligula augue efficitur dolor, at tempus velit velit id arcu. Suspendisse urna est, blandit ac lacus id, efficitur semper purus. Etiam dignissim suscipit lorem accumsan ultricies. Duis lacinia tortor sapien, sed malesuada leo molestie nec. Sed lobortis varius ipsum, eu lobortis metus malesuada consequat. Sed purus nulla, tempor ac tincidunt et, blandit vel ex. Vestibulum id dolor non nulla posuere consectetur quis et turpis. Cras dolor metus, elementum a enim at, semper bibendum sapien. Sed lacus augue, laoreet in metus id, volutpat malesuada mauris.

Sed eu gravida mauris. Suspendisse potenti. Praesent sit amet egestas mi, sed hendrerit eros. Vestibulum congue scelerisque magna, id viverra justo congue nec. Duis id dapibus metus, et dictum erat. Nulla rhoncus a mauris nec tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elementum molestie ullamcorper. Nulla pulvinar feugiat mauris, placerat malesuada ligula rutrum non. Integer venenatis ex at dignissim fermentum. Nunc bibendum nulla in purus pharetra, non sodales justo fringilla.

Sed bibendum sem iaculis, pellentesque leo sed, imperdiet ante. Sed consequat mattis dui nec pretium. Donec vel consectetur est. Nam sagittis, libero vitae pretium pharetra, velit est dignissim erat, at cursus quam massa vitae ligula. Suspendisse potenti. In hac habitasse platea dictumst. Donec sit amet finibus justo. Mauris ante dolor, pulvinar vitae feugiat eu, rhoncus nec diam. In ut accumsan diam, faucibus fringilla odio. Nunc id ultricies turpis. Quisque justo quam, tristique sit amet interdum quis, facilisis at mi. Fusce porttitor vel sem ut condimentum. Praesent at libero congue, vulputate elit ut, rhoncus erat.
            `;
            node.content = e;var i;

            const a = e => r([e], `
                    excerpt
                    frontmatter {
                        title
                    }
                `).then(e => {
                try {
                    i = e.data.listNode[0];expect(i).toMatchSnapshot();expect(i.excerpt).toMatch(``);t();
                } catch (e) {
                    t.fail(e);
                }
            });

            const s = jest.fn();
            const u = { createNode: a, createParentChildLink: s };
            const n = jest.fn();
            n.mockReturnValue(`uuid-from-gatsby`);onCreateNode({ node: node, loadNodeContent: loadNodeContent, actions: u, createNodeId: n, createContentDigest: createContentDigest });
        });
    });
});
