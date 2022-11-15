'use strict';
const fs = require("fs");
const path = require("path");
const {
  createTestBuilder : createTestBuilder
} = require("../../../../test/helpers/builder");
const {
  createStrapiInstance : createStrapiInstance
} = require("../../../../test/helpers/strapi");
const {
  createAuthRequest : createAuthRequest
} = require("../../../../test/helpers/request");
let strapi;
let rq;
let baseRq;
const uploadImg = () => {
  return baseRq({
    method : "POST",
    url : "/upload",
    formData : {
      files : fs.createReadStream(path.join(__dirname, "rec.jpg"))
    }
  });
};
const components = {
  singleMedia : {
    name : "single-media",
    attributes : {
      media : {
        type : "media"
      }
    }
  },
  multipleMedia : {
    name : "multiple-media",
    attributes : {
      media : {
        type : "media",
        multiple : true
      }
    }
  },
  withNested : {
    name : "with-nested",
    attributes : {
      singleMedia : {
        type : "component",
        component : "default.single-media"
      },
      multipleMedia : {
        type : "component",
        component : "default.multiple-media"
      }
    }
  }
};
const ct = {
  name : "withdynamiczonemedia",
  attributes : {
    field : {
      type : "dynamiczone",
      components : ["default.single-media", "default.multiple-media", "default.with-nested"]
    }
  }
};
describe.each([["CONTENT MANAGER", "/content-manager/collection-types/application::withdynamiczonemedia.withdynamiczonemedia"], ["GENERATED API", "/withdynamiczonemedias"]])("[%s] => Not required dynamiczone", (canCreateDiscussions, results) => {
  const item = createTestBuilder();
  beforeAll(async() => {
    await item.addComponent(components.singleMedia).addComponent(components.multipleMedia).addComponent(components.withNested).addContentType(ct).build();
    strapi = await createStrapiInstance();
    baseRq = await createAuthRequest({
      strapi : strapi
    });
    rq = await createAuthRequest({
      strapi : strapi
    });
    rq.setURLPrefix(results);
  });
  afterAll(async() => {
    await strapi.destroy();
    await item.cleanup();
  });
  describe("Contains components with medias", () => {
    test("The medias are correctly related to the components on creation", async() => {
      const finalResponse = await uploadImg();
      expect(finalResponse.statusCode).toBe(200);
      const videoId = finalResponse.body[0].id;
      const err = await rq({
        method : "POST",
        url : "/",
        body : {
          field : [{
            __component : "default.single-media",
            media : videoId
          }, {
            __component : "default.multiple-media",
            media : [videoId, videoId]
          }]
        }
      });
      expect(err.statusCode).toBe(200);
      expect(Array.isArray(err.body.field)).toBe(true);
      expect(err.body).toMatchObject({
        field : [{
          id : expect.anything(),
          __component : "default.single-media",
          media : {
            id : videoId,
            url : expect.any(String)
          }
        }, {
          id : expect.anything(),
          __component : "default.multiple-media",
          media : expect.arrayContaining([expect.objectContaining({
            id : videoId,
            url : expect.any(String)
          })])
        }]
      });
    });
    test("The medias are correctly related to the components on edition", async() => {
      const finalResponse = await uploadImg();
      expect(finalResponse.statusCode).toBe(200);
      const exportJSONMedia = finalResponse.body[0].id;
      const response = await rq({
        method : "POST",
        url : "/",
        body : {
          field : [{
            __component : "default.single-media",
            media : exportJSONMedia
          }, {
            __component : "default.multiple-media",
            media : [exportJSONMedia, exportJSONMedia]
          }]
        }
      });
      expect(response.statusCode).toBe(200);
      expect(Array.isArray(response.body.field)).toBe(true);
      const response1 = await uploadImg();
      expect(response1.statusCode).toBe(200);
      const videoId = response1.body[0].id;
      const updatedArticle = await rq({
        method : "PUT",
        url : `/${response.body.id}`,
        body : {
          field : [{
            __component : "default.single-media",
            media : videoId
          }, {
            __component : "default.multiple-media",
            media : [videoId, videoId]
          }]
        }
      });
      expect(updatedArticle.body).toMatchObject({
        field : [{
          id : expect.anything(),
          __component : "default.single-media",
          media : {
            id : videoId,
            url : expect.any(String)
          }
        }, {
          id : expect.anything(),
          __component : "default.multiple-media",
          media : expect.arrayContaining([expect.objectContaining({
            id : videoId,
            url : expect.any(String)
          })])
        }]
      });
    });
    test("The media are populated on the components", async() => {
      const finalResponse = await uploadImg();
      expect(finalResponse.statusCode).toBe(200);
      const videoId = finalResponse.body[0].id;
      const response = await rq({
        method : "POST",
        url : "/",
        body : {
          field : [{
            __component : "default.single-media",
            media : videoId
          }, {
            __component : "default.multiple-media",
            media : [videoId, videoId]
          }]
        }
      });
      expect(response.statusCode).toBe(200);
      const updatedArticle = await rq({
        method : "GET",
        url : `/${response.body.id}`
      });
      expect(updatedArticle.body).toMatchObject({
        field : [{
          id : expect.anything(),
          __component : "default.single-media",
          media : {
            id : videoId,
            url : expect.any(String)
          }
        }, {
          id : expect.anything(),
          __component : "default.multiple-media",
          media : expect.arrayContaining([expect.objectContaining({
            id : videoId,
            url : expect.any(String)
          })])
        }]
      });
    });
  });
  describe("Contains components with nested components having medias", () => {
    test("The medias are correctly related to the nested components on creation", async() => {
      const finalResponse = await uploadImg();
      expect(finalResponse.statusCode).toBe(200);
      const videoId = finalResponse.body[0].id;
      const err = await rq({
        method : "POST",
        url : "/",
        body : {
          field : [{
            __component : "default.with-nested",
            singleMedia : {
              media : videoId
            },
            multipleMedia : {
              media : [videoId, videoId]
            }
          }]
        }
      });
      expect(err.statusCode).toBe(200);
      expect(Array.isArray(err.body.field)).toBe(true);
      expect(err.body).toMatchObject({
        field : [{
          id : expect.anything(),
          __component : "default.with-nested",
          singleMedia : {
            media : {
              id : videoId,
              url : expect.any(String)
            }
          },
          multipleMedia : {
            media : expect.arrayContaining([expect.objectContaining({
              id : videoId,
              url : expect.any(String)
            })])
          }
        }]
      });
    });
  });
});

