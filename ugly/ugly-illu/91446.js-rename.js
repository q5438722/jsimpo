const path = require(`path`);

const child = require(`child_process`);

it(`Builds cache-dir with minimal config`, e => {
  const t = [require.resolve(`@babel/cli/bin/babel.js`), path.join(__dirname, `..`), `--config-file`, path.join(__dirname, `.babelrc`), `--ignore`, `**/__tests__`];
  const i = child.spawn(process.execPath, t);
  var n = ``;
  var o = ``;
  i.stderr.on(`data`, function (e) {
    n += e;
  });i.stdout.on(`data`, function (e) {
    o += e;
  });i.on(`close`, function () {
    expect(n).toEqual(``);expect(o).not.toEqual(``);e();
  });
}, 3e4);
