'use strict';

const markdownLineEnding = require('../character/markdown-line-ending.js');

const chunkedSplice = require('../util/chunked-splice.js');

const prefixSize = require('../util/prefix-size.js');

const factorySpace = require('./factory-space.js');

const codeIndented = {
  name: 'codeIndented',
  tokenize: tokenizeCodeIndented,
  resolve: resolveCodeIndented
};
const indentedContentConstruct = {
  tokenize: tokenizeIndentedContent,
  partial: true
};


function resolveCodeIndented(events, context) {
  const code = {
    type: 'codeIndented',
    start: events[0][1].start,
    end: events[events.length - 1][1].end
  };

  chunkedSplice(events, 0, 0, [['enter', { type: 'codeIndented', start: events[0][1].start, end: events[events.length - 1][1].end }, context]]);
  chunkedSplice(events, events.length, 0, [['exit', { type: 'codeIndented', start: events[0][1].start, end: events[events.length - 1][1].end }, context]]);
  return events;
}

function tokenizeCodeIndented(effects, ok, nok) {
  return effects.attempt(indentedContentConstruct, afterPrefix, nok);

  function afterPrefix(code) {
    if (code === null) {
      return ok(code);
    }

    if (markdownLineEnding(code)) {
      return effects.attempt(indentedContentConstruct, afterPrefix, ok)(code);
    }

    effects.enter('codeFlowValue');
    return content(code);
  }

  function content(code) {
    if (code === null || markdownLineEnding(code)) {
      effects.exit('codeFlowValue');
      return afterPrefix(code);
    }

    effects.consume(code);
    return content;
  }
}

function tokenizeIndentedContent(effects, ok, nok) {
  const self = this;

  return factorySpace(effects, afterPrefix, 'linePrefix', 5);

  function afterPrefix(code) {
    if (markdownLineEnding(code)) {
      effects.enter('lineEnding');
      effects.consume(code);
      effects.exit('lineEnding');
      return factorySpace(effects, afterPrefix, 'linePrefix', 5);
    }

    return prefixSize(self.events, 'linePrefix') < 4 ? nok(code) : ok(code);
  }
}

module.exports = codeIndented;
