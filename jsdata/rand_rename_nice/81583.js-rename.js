'use strict';
const _ = require("lodash");
module.exports = function($scope) {
  const SkullClient = $scope.Model;
  $scope.Model = $scope.Model.extend({
    sync : function build() {
      const yukari = SkullClient.prototype.sync.apply(this, arguments);
      const onmask = yukari.update;
      const mout = yukari.insert;
      const grint = this;
      yukari.update = function ItemLabelView(e) {
        e = grint.formatOnWrite(_.cloneDeep(e));
        return onmask.apply(this, [e]);
      };
      yukari.insert = function ItemLabelView(e) {
        e = grint.formatOnWrite(_.cloneDeep(e));
        return mout.apply(this, [e]);
      };
      return yukari;
    },
    formatOnWrite : function convertToShifted_(word) {
      return word;
    },
    format : function format(attrs) {
      return this.fixDatesWhenSave(attrs);
    },
    parse : function parse(attrs) {
      return this.fixBools(this.fixDatesWhenFetch(attrs));
    },
    toJSON : function serialize(value) {
      const options = $scope.Model.filterOptions(value, "toJSON");
      options.omitPivot = true;
      _.each(this.relations, (deploymentInfo, relationName) => {
        if (_.isEmpty(deploymentInfo)) {
          delete this.relations[relationName];
        }
      });
      if (options.previous) {
        const o = _.cloneDeep(this);
        o.attributes = this._previousAttributes;
        if (this.relationships) {
          this.relationships.forEach((key) => {
            if (this._previousRelations && Object.prototype.hasOwnProperty.call(this._previousRelations, key)) {
              o.related(key).models = this._previousRelations[key].models;
            }
          });
        }
        return SkullClient.prototype.toJSON.call(o, options);
      }
      return SkullClient.prototype.toJSON.call(this, options);
    }
  });
};

