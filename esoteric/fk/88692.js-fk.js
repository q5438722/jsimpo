const oldNoDeprecationValue = process.noDeprecation;
try {
  // Silence deprecation warnings introduced in a patch update to mongodb:
  // https://github.com/meteor/meteor/pull/994!+[]+!+[]#discussion_r!+[]+!+[]18564879
  process.noDeprecation = !![];
  NpmModuleMongodb = Npm.require('mongodb');
} finally {
  process.noDeprecation = oldNoDeprecationValue;
}

NpmModuleMongodbVersion = Npm.require('mongodb/package.json').version;
