const fs = require(`fs-extra`);

const path = require(`path`);

const fileType = require(`file-type`);

var { createFileNode } = require(`./create-file-node`);

var { createFilePath } = require(`./utils`);

var { createContentDigest } = require(`gatsby-core-utils`);

const cacheId = e => `create-file-node-from-buffer-${e}`;

const writeBuffer = (e, a) => new Promise((t, r) => {
  fs.writeFile(e, a, e => e ? r(e) : t());
});

async function processBufferNode({ buffer: e, hash: t, cache: r, createNode: a, parentNodeId: c, createNodeId: o, ext: s, name: i }) {
  const n = r.directory;
  var f = await r.get(cacheId(t));
  if (!f) {
    if (typeof s === `undefined`) {
      const h = await fileType.fromBuffer(e);
      s = h ? `.${h.ext}` : `.bin`;
    }f = createFilePath(path.join(n, t), i, s);await fs.ensureDir(path.dirname(f));await writeBuffer(f, e);await r.set(cacheId(t), f);
  }const u = await createFileNode(f, o, {});
  u.internal.description = `File "Buffer<${t}>"`;u.hash = t;u.parent = c;await a(u, { name: `gatsby-source-filesystem` });return u;
}const processingCache = {};
module.exports = ({ buffer: e, hash: t, cache: r, createNode: a, getCache: c, parentNodeId: o = null, createNodeId: s, ext: i, name: n = t }) => {
  if (typeof s !== `function`) {
    throw new Error(`createNodeId must be a function, was ${typeof s}`);
  }if (typeof a !== `function`) {
    throw new Error(`createNode must be a function, was ${typeof a}`);
  }if (typeof c === `function`) {
    r = c(`gatsby-source-filesystem`);
  }if (typeof r !== `object`) {
    throw new Error(`Neither "cache" or "getCache" was passed. getCache must be function that return Gatsby cache, "cache" must be the Gatsby cache, was ${typeof r}`);
  }if (!e) {
    return Promise.reject(`bad buffer: ${e}`);
  }if (!t) {
    t = createContentDigest(e);
  }if (processingCache[t]) {
    return processingCache[t];
  }const f = processBufferNode({ buffer: e, hash: t, cache: r, createNode: a, parentNodeId: o, createNodeId: s, ext: i, name: n });
  processingCache[t] = f;return processingCache[t];
};
