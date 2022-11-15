const oldNoDeprecationValue = process['noDeprecation'];
try {
    process['noDeprecation'] = !![], NpmModuleMongodb = Npm['require']('mongodb');
} finally {
    process['noDeprecation'] = oldNoDeprecationValue;
}
NpmModuleMongodbVersion = Npm['require']('mongodb/package.json')['version'];
