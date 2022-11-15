'use strict';
const _ = require("lodash");
const Promise = require("bluebird");
const $errUtils = require("../../cypress/error_utils");
module.exports = (object, client, conn) => {
  object.addAll({
    readFile(filePath, err, request = {}) {
      let value = request;
      if (_.isObject(err)) {
        value = err;
        err = null;
      }
      request = _.defaults({}, value, {
        encoding : err != null ? err : "utf8",
        log : true
      });
      const style = {};
      if (request.log) {
        request._log = client.log({
          message : filePath,
          timeout : request.timeout,
          consoleProps() {
            return style;
          }
        });
      }
      if (!filePath || !_.isString(filePath)) {
        $errUtils.throwErrByPath("files.invalid_argument", {
          onFail : request._log,
          args : {
            cmd : "readFile",
            file : filePath
          }
        });
      }
      const readFile = () => {
        return client.backend("read:file", filePath, _.pick(request, "encoding")).catch((err) => {
          if (err.code === "ENOENT") {
            return {
              contents : null,
              filePath : err.filePath
            };
          }
          return $errUtils.throwErrByPath("files.unexpected_error", {
            onFail : request._log,
            args : {
              cmd : "readFile",
              action : "read",
              file : filePath,
              filePath : err.filePath,
              error : err.message
            }
          });
        }).then(({
          contents : data,
          filePath : width
        }) => {
          style["File Path"] = width;
          style["Contents"] = data;
          return conn.verifyUpcomingAssertions(data, request, {
            ensureExistenceFor : "subject",
            onFail(message) {
              if (message.type !== "existence") {
                return;
              }
              const result = data ? "files.existent" : "files.nonexistent";
              const {
                message : msg,
                docsUrl : type
              } = $errUtils.cypressErrByPath(result, {
                args : {
                  file : filePath,
                  filePath : width
                }
              });
              message.message = msg;
              message.docsUrl = type;
            },
            onRetry : readFile
          });
        });
      };
      return readFile();
    },
    writeFile(filePath, data, charset, params = {}) {
      let options = params;
      if (_.isObject(charset)) {
        options = charset;
        charset = null;
      }
      params = _.defaults({}, options, {
        encoding : charset ? charset : "utf8",
        flag : options.flag ? options.flag : "w",
        log : true
      });
      const item = {};
      if (params.log) {
        params._log = client.log({
          message : filePath,
          timeout : 0,
          consoleProps() {
            return item;
          }
        });
      }
      if (!filePath || !_.isString(filePath)) {
        $errUtils.throwErrByPath("files.invalid_argument", {
          onFail : params._log,
          args : {
            cmd : "writeFile",
            file : filePath
          }
        });
      }
      if (!(_.isString(data) || _.isObject(data))) {
        $errUtils.throwErrByPath("files.invalid_contents", {
          onFail : params._log,
          args : {
            contents : data
          }
        });
      }
      if (_.isObject(data)) {
        data = JSON.stringify(data, null, 2);
      }
      return client.backend("write:file", filePath, data, _.pick(params, ["encoding", "flag"])).then(({
        contents : fileName,
        filePath : line
      }) => {
        item["File Path"] = line;
        item["Contents"] = fileName;
        return null;
      }).catch(Promise.TimeoutError, () => {
        return $errUtils.throwErrByPath("files.timed_out", {
          onFail : params._log,
          args : {
            cmd : "writeFile",
            file : filePath,
            timeout : params.timeout
          }
        });
      }).catch((data) => {
        return $errUtils.throwErrByPath("files.unexpected_error", {
          onFail : params._log,
          args : {
            cmd : "writeFile",
            action : "write",
            file : filePath,
            filePath : data.filePath,
            error : data.message
          }
        });
      });
    }
  });
};

