'use strict';
const {
  ConsumeSharedPlugin : ConsumeSharedPlugin
} = require("../../../../").sharing;
module.exports = {
  plugins : [new ConsumeSharedPlugin({
    consumes : {
      shared : {
        import : false,
        strictVersion : true
      },
      shared2 : {
        import : false
      }
    }
  })]
};
