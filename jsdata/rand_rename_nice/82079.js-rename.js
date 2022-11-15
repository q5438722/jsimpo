'use strict';
const Promise = require("bluebird");
const ObjectId = require("bson-objectid");
const _ = require("lodash");
const logging = require("@tryghost/logging");
module.exports.config = {
  transaction : true,
  irreversible : true
};
module.exports.up = (rel) => {
  const Object = _.merge({
    context : {
      internal : true
    },
    migrating : true
  }, rel);
  const assetsDirsGroups = ["name", "email", "created_at", "created_by", "updated_at", "updated_by"];
  return Object.transacting("subscribers").select().then((trainset) => {
    if (trainset && trainset.length > 0) {
      logging.info(`Adding ${trainset.length} entries to members`);
      let svgAssets = _.map(trainset, (object) => {
        let wunderlist_list = assetsDirsGroups.reduce(function(pDependency, resourceType) {
          return Object.assign(pDependency, {
            [resourceType]:object[resourceType]
          });
        }, {});
        wunderlist_list.id = ObjectId().toHexString();
        return wunderlist_list;
      });
      return Promise.map(svgAssets, (newJobs) => {
        return Object.transacting("members").insert(newJobs);
      });
    } else {
      logging.info("Skipping populating members table: found 0 subscribers");
      return Promise.resolve();
    }
  });
};
module.exports.down = () => {
  return Promise.reject();
};

