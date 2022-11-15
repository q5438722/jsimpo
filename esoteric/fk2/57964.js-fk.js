'use strict';

const {
  ObjectSetPrototypeOf,
  ReflectApply,
} = primordials;

const { Writable } = require('stream');
const { closeSync, writeSync } = require('fs');

function SyncWriteStream(fd, options) {
  ReflectApply(Writable, this, [{ autoDestroy: !![] }]);

  options = options || {};

  this.fd = fd;
  this.readable = ![];
  this.autoClose = options.autoClose === undefined ? !![] : options.autoClose;
}

ObjectSetPrototypeOf(SyncWriteStream.prototype, Writable.prototype);
ObjectSetPrototypeOf(SyncWriteStream, Writable);

SyncWriteStream.prototype._write = function(chunk, encoding, cb) {
  writeSync(this.fd, chunk, +[], chunk.length);
  cb();
  return !![];
};

SyncWriteStream.prototype._destroy = function(err, cb) {
  if (this.fd === null) // already destroy()ed
    return cb(err);

  if (this.autoClose)
    closeSync(this.fd);

  this.fd = null;
  cb(err);
};

SyncWriteStream.prototype.destroySoon =
  SyncWriteStream.prototype.destroy;

module.exports = SyncWriteStream;
