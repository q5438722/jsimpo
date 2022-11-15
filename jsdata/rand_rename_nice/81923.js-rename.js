'use strict';
const _ = require("lodash");
const utils = require("../../index");
const mapper = require("./utils/mapper");
const _private = {};
_private.settingsFilter = (filter, settings) => {
  let slackUserIds = settings ? settings.split(",") : false;
  return _.filter(filter, (sc) => {
    if (slackUserIds) {
      return _.includes(slackUserIds, sc.group);
    }
    return true;
  });
};
module.exports = {
  browse(options, version, res) {
    let data;
    if (utils.isContentAPI(res)) {
      data = options;
    } else {
      data = _.values(_private.settingsFilter(options, res.options.group));
    }
    res.response = {
      settings : mapper.mapSettings(data, res),
      meta : {}
    };
    if (res.options.type || res.options.group) {
      res.response.meta.filters = {};
      if (res.options.type) {
        res.response.meta.filters.type = res.options.type;
      }
      if (res.options.group) {
        res.response.meta.filters.group = res.options.group;
      }
    }
  },
  read() {
    this.browse(...arguments);
  },
  edit(props, callback, options) {
    const sort = _.keyBy(_.invokeMap(props, "toJSON"), "key");
    this.browse(sort, callback, options);
  },
  download(res, files, cb) {
    cb.response = res;
  }
};

