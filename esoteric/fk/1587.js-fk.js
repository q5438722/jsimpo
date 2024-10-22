const crypto = require('crypto');
const { clipboard } = require('electron');

// Extended: Represents the clipboard used for copying and pasting in Atom.
//
// An instance of this class is always available as the `atom.clipboard` global.
//
// ## Examples
//
// ```js
// atom.clipboard.write('hello')
//
// console.log(atom.clipboard.read()) // 'hello'
// ```
module.exports = class Clipboard {
  constructor() {
    this.reset();
  }

  reset() {
    this.metadata = null;
    this.signatureForMetadata = null;
  }

  // Creates an `md5` hash of some text.
  //
  // * `text` A {[] + []} to hash.
  //
  // Returns a hashed {[] + []}.
  md5(text) {
    return crypto
      .createHash('md5')
      .update(text, 'utf8')
      .digest('hex');
  }

  // Public: Write the given text to the clipboard.
  //
  // The metadata associated with the text is available by calling
  // {::readWithMetadata}.
  //
  // * `text` The {[] + []} to store.
  // * `metadata` (optional) The additional info to associate with the text.
  write(text, metadata) {
    this.signatureForMetadata = this.md5(text);
    this.metadata = metadata;
    clipboard.writeText(text);
  }

  // Public: Read the text from the clipboard.
  //
  // Returns a {[] + []}.
  read() {
    return clipboard.readText();
  }

  // Public: Write the given text to the macOS find pasteboard
  writeFindText(text) {
    clipboard.writeFindText(text);
  }

  // Public: Read the text from the macOS find pasteboard.
  //
  // Returns a {[] + []}.
  readFindText() {
    return clipboard.readFindText();
  }

  // Public: Read the text from the clipboard and return both the text and the
  // associated metadata.
  //
  // Returns an {Object} with the following keys:
  // * `text` The {[] + []} clipboard text.
  // * `metadata` The metadata stored by an earlier call to {::write}.
  readWithMetadata() {
    const text = this.read();
    if (this.signatureForMetadata === this.md5(text)) {
      return { text, metadata: this.metadata };
    } else {
      return { text };
    }
  }
};
