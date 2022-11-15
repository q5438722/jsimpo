const {createUrl, resolveFixed, resolveFluid, resolveResize, generateImageSource, getBase64Image} = require('../extend-node-type');
describe('contentful\x20extend\x20node\x20type', () => {
    describe('createUrl', () => {
        it('allows\x20you\x20to\x20create\x20URls', () => {
            expect(createUrl('//images.contentful.com/dsf/bl.jpg', { 'width': 0x64 }))['toMatchSnapshot']();
        }), it('ignores\x20options\x20it\x20doesn\x27t\x20understand', () => {
            expect(createUrl('//images.contentful.com/dsf/bl.jpg', { 'happiness': 0x64 }))['toMatchSnapshot']();
        });
    });
    const _0xf011d4 = {
            'defaultLocale': 'en-US',
            'file': {
                'url': '//images.contentful.com/ubriaw6jfhm1/10TkaLheGeQG6qQGqWYqUI/5421d3108cbb699561acabd594fa2cb0/ryugj83mqwa1asojwtwb.jpg',
                'fileName': 'ryugj83mqwa1asojwtwb.jpg',
                'contentType': 'image/jpeg',
                'details': {
                    'size': 0x6f13,
                    'image': {
                        'width': '4500',
                        'height': '6000'
                    }
                }
            }
        }, _0x1c9f69 = {
            'defaultLocale': 'en-US',
            'file': null
        };
    describe('generateImageSource', () => {
        it('default', () => {
            const _0x36244a = generateImageSource('test.png', -0x1 * -0x1cf0 + 0x247b + -0x3fc7, 0x5f6 + -0x1 * -0x14f + -0x1 * 0x673, 'webp', null, {});
            expect(_0x36244a['src'])['toContain']('w=420'), expect(_0x36244a['src'])['toContain']('h=210'), expect(_0x36244a['src'])['toContain']('fm=webp'), expect(_0x36244a)['toMatchSnapshot']();
        }), it('supports\x20corner\x20radius', async () => {
            const _0x29049c = generateImageSource('test.png', 0x5 * 0xa5 + 0x307 + -0x49c, -0x1099 * 0x1 + -0x109 * 0x5 + 0x1698, 'webp', null, { 'cornerRadius': 0xa });
            expect(_0x29049c['src'])['toContain']('r=10'), expect(_0x29049c)['toMatchSnapshot']();
        }), it('transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x839405 = generateImageSource('test.png', -0x1b * -0xcf + 0x152a + -0x295b, -0x4 * -0x506 + -0x2506 * -0x1 + -0x384c, 'webp', null, { 'cornerRadius': -(-0x12a4 * -0x2 + 0x1484 + -0x39cb) });
            expect(_0x839405['src'])['toContain']('r=max'), expect(_0x839405)['toMatchSnapshot']();
        }), it('does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x534816 = generateImageSource('test.png', 0x1184 + -0x10a1 + 0x1 * 0xc1, 0x1 * 0x1ec7 + 0x97f + -0xa * 0x3f2, 'webp', null, {});
            expect(_0x534816['src'])['not']['toContain']('r='), expect(_0x534816)['toMatchSnapshot']();
        });
    }), describe('getBase64Image', () => {
        const _0x5ad595 = {
            'aspectRatio': 4.8698224852071,
            'baseUrl': '//images.ctfassets.net/k8iqpp6u0ior/3ljGfnpegOnBTFGhV07iC1/94257340bda15ad4ca8462da3a8afa07/347966-contentful-logo-wordmark-dark__1_-4cd185-original-1582664935__1_.png',
            'width': 0xc8,
            'height': 0x29,
            'image': {
                'contentful_id': '3ljGfnpegOnBTFGhV07iC1',
                'spaceId': 'k8iqpp6u0ior',
                'createdAt': '2021-03-22T10:10:34.647Z',
                'updatedAt': '2021-03-22T10:10:34.647Z',
                'file': { 'contentType': 'image/png' },
                'title': 'Contentful\x20Logo\x20PNG',
                'description': '',
                'node_locale': 'en-US'
            },
            'options': {
                'width': 0xc8,
                'quality': 0x32,
                'toFormat': '',
                'cropFocus': null,
                'cornerRadius': 0x0,
                'background': null
            }
        };
        test('keeps\x20image\x20format', async () => {
            const _0x3ac752 = await getBase64Image(_0x5ad595);
            expect(_0x3ac752)['toMatch']('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAECAMAAAC5ge+kAAAAllBMVEUAAABHl745rOE7tOc7tOcqMDkqMDkqMDkqMDnfzG9Pm7o7tOc7tOcqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDn4wF/eXWDtXGjtXGgqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDkqMDnbVmDpWGbtXGjtXGh1tTylAAAAMnRSTlMATd3gVSUjTCDgHRIscF+MeqB8qpqbk4ienYAxr+AeEipyZI9/aW+No4WJeWuuTdzgVnu3oiUAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAHdElNRQflCAUMNjFcK/NJAAAAMklEQVQI12NkBII/DCDA+htIsDEy/mBj4WDEBCwiyLwnIpyMjL/ZWASB7PMMMPAZTAIALlUHKTqI1/MAAAAASUVORK5CYII=');
        }), test('uses\x20given\x20image\x20format', async () => {
            const _0x4befc6 = await getBase64Image({
                ..._0x5ad595,
                'options': {
                    ..._0x5ad595['options'],
                    'toFormat': 'jpg'
                }
            });
            expect(_0x4befc6)['toMatch']('data:image/jpg;base64,/9j/4AAQSkZJRgABAQIAHAAcAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAEABQDASIAAhEBAxEB/8QAFwABAAMAAAAAAAAAAAAAAAAAAAIDBv/EACQQAAIBAgQHAQAAAAAAAAAAAAECAAMRBBITJAUUFSFBUWHB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgH/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIx/9oADAMBAAIRAxEAPwDV4NObWqM70dOoVvROUt9Psy7pYud5jO/jWiJM8lsDSFB+Do+Xe4xQosAtW35ERFC//9k=');
        });
    }), describe('resolveFixed', () => {
        it('generates\x20responsive\x20resolution\x20data\x20for\x20images\x20using\x20width\x20option', async () => {
            const _0x2cdf0f = await resolveFixed(_0xf011d4, { 'width': 0x190 });
            expect(_0x2cdf0f['srcSet']['length'])['toBeGreaterThan'](-0x1 * 0x1425 + -0x6d * -0x1f + 0x6f3), expect(_0x2cdf0f)['toMatchSnapshot']();
        }), it('generates\x20responsive\x20resolution\x20data\x20for\x20images\x20using\x20height\x20option', async () => {
            const _0x1e00c9 = await resolveFixed(_0xf011d4, { 'height': 0x190 });
            expect(_0x1e00c9['srcSet']['length'])['toBeGreaterThan'](0x97c + -0x1cb0 + 0x21 * 0x95), expect(_0x1e00c9)['toMatchSnapshot']();
        }), it('generates\x20responsive\x20resolution\x20data\x20for\x20images\x20using\x20all\x20options', async () => {
            const _0x1df4da = await resolveFixed(_0xf011d4, {
                'width': 0x1c2,
                'height': 0x18f,
                'quality': 0x32,
                'background': 'rgb:000000'
            });
            expect(_0x1df4da['srcSet']['length'])['toBeGreaterThan'](0xe6 * 0x1 + 0xe * -0x4d + -0x3 * -0x11b), expect(_0x1df4da)['toMatchSnapshot']();
        }), it('resorts\x20to\x20a\x20default\x20width\x20if\x20no\x20arguments\x20are\x20given', async () => {
            const _0x318dc5 = await resolveFixed(_0xf011d4, {});
            expect(_0x318dc5['width'])['toBe'](-0x3ba + 0xc37 + -0xc5 * 0x9), expect(_0x318dc5['height'])['toBe'](-0x6d8 + 0x118b + -0x2 * 0x44f);
        }), it('resolves\x20the\x20height\x20if\x20only\x20a\x20width\x20is\x20given', async () => {
            const _0x4fff4f = await resolveFixed(_0xf011d4, { 'width': 0x1c2 });
            expect(_0x4fff4f['width'])['toBe'](0x1880 + -0x2 * 0x5e7 + 0x7 * -0x190), expect(_0x4fff4f['height'])['toBe'](0xc5d + -0x10f * 0x18 + 0x3 * 0x521);
        }), it('resolves\x20the\x20width\x20if\x20only\x20a\x20height\x20is\x20given', async () => {
            const _0x12df37 = await resolveFixed(_0xf011d4, { 'height': 0x258 });
            expect(_0x12df37['width'])['toBe'](-0x1be5 + -0x8c2 * -0x2 + 0xc23 * 0x1), expect(_0x12df37['height'])['toBe'](0x1ea4 + -0x156d * 0x1 + -0x6df);
        }), it('returns\x20the\x20correct\x20width\x20and\x20height\x20when\x20both\x20are\x20supplied', async () => {
            const _0x189f97 = await resolveFixed(_0xf011d4, {
                'width': 0x1c2,
                'height': 0x18f
            });
            expect(_0x189f97['width'])['toBe'](0x25b * -0xf + 0x1277 + 0x12a0), expect(_0x189f97['height'])['toBe'](-0x7 * 0x469 + -0x13 * 0xb2 + 0x2da4);
        }), it('always\x20outputs\x20ints', async () => {
            const _0x113864 = await resolveFixed(_0xf011d4, {
                'width': 450.1,
                'height': 399.1
            });
            expect(_0x113864['width'])['toBe'](-0x8aa * 0x1 + -0x3 * -0x58b + -0x635 * 0x1), expect(_0x113864['height'])['toBe'](0x3ad * 0x7 + 0x214 + -0x1a40);
        }), it('handles\x20null', async () => {
            const _0x2b9439 = await resolveFixed(_0x1c9f69, { 'width': 0x190 });
            expect(_0x2b9439)['toBe'](null);
        }), it('filters\x20out\x20sizes\x20larger\x20than\x20the\x20image\x27s\x20width', async () => {
            const _0x3d26d7 = await resolveFixed(_0xf011d4, { 'width': 0x8ca });
            expect(_0x3d26d7['srcSet']['split'](',')['length'])['toBe'](0x472 + 0x8b2 + 0x1 * -0xd23), expect(_0x3d26d7)['toMatchSnapshot']();
        }), it('supports\x20corner\x20radius', async () => {
            const _0x1ce161 = await resolveFixed(_0xf011d4, { 'cornerRadius': 0xa });
            expect(_0x1ce161['srcSet'])['toContain']('r=10'), expect(_0x1ce161)['toMatchSnapshot']();
        }), it('transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x4eb01a = await resolveFixed(_0xf011d4, { 'cornerRadius': -(0x1 * 0x15ef + 0x1d35 * -0x1 + 0x747) });
            expect(_0x4eb01a['srcSet'])['toContain']('r=max'), expect(_0x4eb01a)['toMatchSnapshot']();
        }), it('does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x31764b = await resolveFixed(_0xf011d4, {});
            expect(_0x31764b['srcSet'])['not']['toContain']('r='), expect(_0x31764b)['toMatchSnapshot']();
        });
    }), describe('resolveFluid', () => {
        it('generates\x20responsive\x20size\x20data\x20for\x20images\x20using\x20a\x20default\x20maxWidth', async () => {
            const _0x359e0f = await resolveFluid(_0xf011d4, {});
            expect(_0x359e0f['srcSet']['length'])['toBeGreaterThan'](0x25c8 + 0xe4d + -0x3414), expect(_0x359e0f)['toMatchSnapshot']();
        }), it('generates\x20responsive\x20size\x20data\x20for\x20images\x20given\x20a\x20maxWidth', async () => {
            const _0x2b2eb5 = await resolveFluid(_0xf011d4, { 'maxWidth': 0x190 });
            expect(_0x2b2eb5['srcSet']['length'])['toBeGreaterThan'](-0x42f * -0x4 + 0x5 * -0x271 + -0x1 * 0x486), expect(_0x2b2eb5)['toMatchSnapshot']();
        }), it('generates\x20responsive\x20size\x20data\x20for\x20images\x20given\x20a\x20maxHeight', async () => {
            const _0x21d66f = await resolveFluid(_0xf011d4, { 'maxHeight': 0x190 });
            expect(_0x21d66f['srcSet']['length'])['toBeGreaterThan'](-0x1f46 + 0x42d + 0x1b1a), expect(_0x21d66f)['toMatchSnapshot']();
        }), it('generates\x20fluid\x20sizes\x20data\x20for\x20images\x20using\x20all\x20options', async () => {
            const _0x4cbe33 = await resolveFluid(_0xf011d4, {
                'maxWidth': 0x1c2,
                'maxHeight': 0x18f,
                'quality': 0x32,
                'background': 'rgb:000000'
            });
            expect(_0x4cbe33['srcSet']['length'])['toBeGreaterThan'](-0x16f1 * 0x1 + 0x4b1 + -0x1241 * -0x1), expect(_0x4cbe33)['toMatchSnapshot']();
        }), it('handles\x20null', async () => {
            const _0x235d6d = await resolveFluid(_0x1c9f69, { 'maxWidth': 0x190 });
            expect(_0x235d6d)['toBe'](null);
        }), it('filters\x20out\x20sizes\x20larger\x20than\x20the\x20image\x27s\x20width', async () => {
            const _0x18270f = await resolveFluid(_0xf011d4, { 'maxWidth': 0x8ca });
            expect(_0x18270f['srcSet']['split'](',')['length'])['toBe'](-0x4c0 * 0x2 + 0x1 * -0x21f1 + -0xadd * -0x4), expect(_0x18270f)['toMatchSnapshot']();
        }), it('supports\x20corner\x20radius', async () => {
            const _0xa6db15 = await resolveFluid(_0xf011d4, { 'cornerRadius': 0xa });
            expect(_0xa6db15['srcSet'])['toContain']('r=10'), expect(_0xa6db15)['toMatchSnapshot']();
        }), it('transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x1408e2 = await resolveFluid(_0xf011d4, { 'cornerRadius': -(0x552 * 0x5 + 0x30 + -0x1ac9) });
            expect(_0x1408e2['srcSet'])['toContain']('r=max'), expect(_0x1408e2)['toMatchSnapshot']();
        }), it('does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x36c3c1 = await resolveFluid(_0xf011d4, {});
            expect(_0x36c3c1['srcSet'])['not']['toContain']('r='), expect(_0x36c3c1)['toMatchSnapshot']();
        });
    }), describe('resolveResize', () => {
        it('generates\x20resized\x20images\x20using\x20a\x20default\x20width', async () => {
            const _0x32db08 = await resolveResize(_0xf011d4, {});
            expect(_0x32db08)['toMatchSnapshot']();
        }), it('generates\x20resized\x20images\x20given\x20a\x20certain\x20width', async () => {
            const _0x15265f = await resolveResize(_0xf011d4, { 'width': 0x190 });
            expect(_0x15265f)['toMatchSnapshot']();
        }), it('generates\x20resized\x20images\x20given\x20a\x20certain\x20height', async () => {
            const _0x35be3d = await resolveResize(_0xf011d4, { 'height': 0x258 });
            expect(_0x35be3d)['toMatchSnapshot']();
        }), it('generates\x20resized\x20images\x20using\x20all\x20options', async () => {
            const _0x4faf42 = await resolveResize(_0xf011d4, {
                'width': 0x1c2,
                'height': 0x18f,
                'quality': 0x32,
                'background': 'rgb:000000'
            });
            expect(_0x4faf42)['toMatchSnapshot']();
        }), it('handles\x20null', async () => {
            const _0x202e3 = await resolveResize(_0x1c9f69, { 'width': 0x190 });
            expect(_0x202e3)['toBe'](null);
        }), it('supports\x20corner\x20radius', async () => {
            const _0x49c891 = await resolveResize(_0xf011d4, { 'cornerRadius': 0xa });
            expect(_0x49c891['src'])['toContain']('r=10'), expect(_0x49c891)['toMatchSnapshot']();
        }), it('transforms\x20corner\x20radius\x20-1\x20to\x20max', async () => {
            const _0x39a4e2 = await resolveResize(_0xf011d4, { 'cornerRadius': -(-0x1 * 0x1f6 + -0x1 * 0xf79 + -0x10 * -0x117) });
            expect(_0x39a4e2['src'])['toContain']('r=max'), expect(_0x39a4e2)['toMatchSnapshot']();
        }), it('does\x20not\x20include\x20corner\x20by\x20default', async () => {
            const _0x192e94 = await resolveResize(_0xf011d4, {});
            expect(_0x192e94['src'])['not']['toContain']('r='), expect(_0x192e94)['toMatchSnapshot']();
        });
    });
});
