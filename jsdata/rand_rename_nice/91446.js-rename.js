'use strict';
const path = require(`path`);
const child = require(`child_process`);
it(`Builds cache-dir with minimal config`, (saveNotifs) => {
  const termArgs = [require.resolve(`@babel/cli/bin/babel.js`), path.join(__dirname, `..`), `--config-file`, path.join(__dirname, `.babelrc`), `--ignore`, `**/__tests__`];
  const zfsSend = child.spawn(process.execPath, termArgs);
  let value = ``;
  let segment = ``;
  zfsSend.stderr.on(`data`, function(e) {
    value = value + e;
  });
  zfsSend.stdout.on(`data`, function(graphemeCluster) {
    segment = segment + graphemeCluster;
  });
  zfsSend.on(`close`, function() {
    expect(value).toEqual(``);
    expect(segment).not.toEqual(``);
    saveNotifs();
  });
}, 3e4);

