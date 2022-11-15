  var raccoon; // webpack
  
  raccoon = require("webpack");
  module.exports = {
    context : __dirname,
    entry : "./app.js",
    module : {
      loaders : [{
        loader : require.resolve("babel-loader"),
        test : new RegExp("\\.js$", ""),
        exclude : new RegExp("node_modules", ""),
        query : {
          presets : [require.resolve("@babel/preset-env"), require.resolve("@babel/preset-react"), ],
          plugins : [require.resolve("@babel/plugin-proposal-class-properties"), ]
        }
      }, ]
    },
    plugins : [new raccoon.DefinePlugin({
      "process.env" : {
        NODE_ENV : JSON.stringify("development")
      }
    }), ],
    resolve : {
      alias : {
        react : require.resolve("react")
      }
    }
  };
  