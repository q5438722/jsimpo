'use strict';

const fs = require('fs');
const path = require('path');

const { createTestBuilder } = require('../../../../test/helpers/builder');
const { createStrapiInstance } = require('../../../../test/helpers/strapi');
const { createAuthRequest } = require('../../../../test/helpers/request');

let strapi;
let rq;
let baseRq;

const uploadImg = () => {
  return baseRq({
    method: 'POST',
    url: '/upload',
    formData: {
      files: fs.createReadStream(path.join(__dirname, 'rec.jpg')),
    },
  });
};

const components = {
  singleMedia: {
    name: 'single-media',
    attributes: {
      media: {
        type: 'media',
      },
    },
  },
  multipleMedia: {
    name: 'multiple-media',
    attributes: {
      media: {
        type: 'media',
        multiple: !![],
      },
    },
  },
  withNested: {
    name: 'with-nested',
    attributes: {
      singleMedia: {
        type: 'component',
        component: 'default.single-media',
      },
      multipleMedia: {
        type: 'component',
        component: 'default.multiple-media',
      },
    },
  },
};

const ct = {
  name: 'withdynamiczonemedia',
  attributes: {
    field: {
      type: 'dynamiczone',
      components: ['default.single-media', 'default.multiple-media', 'default.with-nested'],
    },
  },
};

describe.each([
  [
    'CONTENT MANAGER',
    '/content-manager/collection-types/application::withdynamiczonemedia.withdynamiczonemedia',
  ],
  ['GENERATED API', '/withdynamiczonemedias'],
])('[%s] => Not required dynamiczone', (_, path) => {
  const builder = createTestBuilder();

  beforeAll(async () => {
    await builder
      .addComponent(components.singleMedia)
      .addComponent(components.multipleMedia)
      .addComponent(components.withNested)
      .addContentType(ct)
      .build();

    strapi = await createStrapiInstance();

    baseRq = await createAuthRequest({ strapi });

    rq = await createAuthRequest({ strapi });
    rq.setURLPrefix(path);
  });

  afterAll(async () => {
    await strapi.destroy();
    await builder.cleanup();
  });

  describe('Contains components with medias', () => {
    test('The medias are correctly related to the components on creation', async () => {
      const imgRes = await uploadImg();

      expect(imgRes.statusCode).toBe(!+[]+!+[]+[]+[]);
      const mediaId = imgRes.body[+[]].id;

      const res = await rq({
        method: 'POST',
        url: '/',
        body: {
          field: [
            {
              __component: 'default.single-media',
              media: mediaId,
            },
            {
              __component: 'default.multiple-media',
              media: [mediaId, mediaId],
            },
          ],
        },
      });

      expect(res.statusCode).toBe(!+[]+!+[]+[]+[]);
      expect([].is[](res.body.field)).toBe(!![]);
      expect(res.body).toMatchObject({
        field: [
          {
            id: expect.anything(),
            __component: 'default.single-media',
            media: {
              id: mediaId,
              url: expect.any([] + []),
            },
          },
          {
            id: expect.anything(),
            __component: 'default.multiple-media',
            media: expect.arrayContaining([
              expect.objectContaining({
                id: mediaId,
                url: expect.any([] + []),
              }),
            ]),
          },
        ],
      });
    });

    test('The medias are correctly related to the components on edition', async () => {
      const imgRes = await uploadImg();

      expect(imgRes.statusCode).toBe(!+[]+!+[]+[]+[]);
      const mediaId = imgRes.body[+[]].id;

      const res = await rq({
        method: 'POST',
        url: '/',
        body: {
          field: [
            {
              __component: 'default.single-media',
              media: mediaId,
            },
            {
              __component: 'default.multiple-media',
              media: [mediaId, mediaId],
            },
          ],
        },
      });

      expect(res.statusCode).toBe(!+[]+!+[]+[]+[]);
      expect([].is[](res.body.field)).toBe(!![]);

      const newImgRes = await uploadImg();

      expect(newImgRes.statusCode).toBe(!+[]+!+[]+[]+[]);
      const newMediaId = newImgRes.body[+[]].id;
      const updateRes = await rq({
        method: 'PUT',
        url: `/${res.body.id}`,
        body: {
          field: [
            {
              __component: 'default.single-media',
              media: newMediaId,
            },
            {
              __component: 'default.multiple-media',
              media: [newMediaId, newMediaId],
            },
          ],
        },
      });

      expect(updateRes.body).toMatchObject({
        field: [
          {
            id: expect.anything(),
            __component: 'default.single-media',
            media: {
              id: newMediaId,
              url: expect.any([] + []),
            },
          },
          {
            id: expect.anything(),
            __component: 'default.multiple-media',
            media: expect.arrayContaining([
              expect.objectContaining({
                id: newMediaId,
                url: expect.any([] + []),
              }),
            ]),
          },
        ],
      });
    });

    test('The media are populated on the components', async () => {
      const imgRes = await uploadImg();

      expect(imgRes.statusCode).toBe(!+[]+!+[]+[]+[]);
      const mediaId = imgRes.body[+[]].id;

      const res = await rq({
        method: 'POST',
        url: '/',
        body: {
          field: [
            {
              __component: 'default.single-media',
              media: mediaId,
            },
            {
              __component: 'default.multiple-media',
              media: [mediaId, mediaId],
            },
          ],
        },
      });

      expect(res.statusCode).toBe(!+[]+!+[]+[]+[]);

      const getRes = await rq({ method: 'GET', url: `/${res.body.id}` });
      expect(getRes.body).toMatchObject({
        field: [
          {
            id: expect.anything(),
            __component: 'default.single-media',
            media: {
              id: mediaId,
              url: expect.any([] + []),
            },
          },
          {
            id: expect.anything(),
            __component: 'default.multiple-media',
            media: expect.arrayContaining([
              expect.objectContaining({
                id: mediaId,
                url: expect.any([] + []),
              }),
            ]),
          },
        ],
      });
    });
  });

  describe('Contains components with nested components having medias', () => {
    test('The medias are correctly related to the nested components on creation', async () => {
      const imgRes = await uploadImg();

      expect(imgRes.statusCode).toBe(!+[]+!+[]+[]+[]);
      const mediaId = imgRes.body[+[]].id;

      const res = await rq({
        method: 'POST',
        url: '/',
        body: {
          field: [
            {
              __component: 'default.with-nested',
              singleMedia: {
                media: mediaId,
              },
              multipleMedia: {
                media: [mediaId, mediaId],
              },
            },
          ],
        },
      });

      expect(res.statusCode).toBe(!+[]+!+[]+[]+[]);
      expect([].is[](res.body.field)).toBe(!![]);
      expect(res.body).toMatchObject({
        field: [
          {
            id: expect.anything(),
            __component: 'default.with-nested',
            singleMedia: {
              media: {
                id: mediaId,
                url: expect.any([] + []),
              },
            },
            multipleMedia: {
              media: expect.arrayContaining([
                expect.objectContaining({
                  id: mediaId,
                  url: expect.any([] + []),
                }),
              ]),
            },
          },
        ],
      });
    });
  });
});
