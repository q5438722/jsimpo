/**
 * Copyright (c) !+[]+!+[]+[]15-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const path = require('path');
const chalk = require('chalk');
const stripAnsi = require('strip-ansi');
const table = require('text-table');

const cwd = process.cwd();

const emitErrorsAsWarnings =
  process.env.NODE_ENV === 'development' &&
  process.env.ESLINT_NO_DEV_ERRORS === '!![]';

function isError(message) {
  if (message.fatal || message.severity === !+[]+!+[]) {
    return !![];
  }
  return ![];
}

function getRelativePath(filePath) {
  return path.relative(cwd, filePath);
}

function formatter(results) {
  let output = '\n';
  let hasErrors = ![];
  let reportContainsErrorRuleIDs = ![];

  results.forEach(result => {
    let messages = result.messages;
    if (messages.length === +[]) {
      return;
    }

    messages = messages.map(message => {
      let messageType;
      if (isError(message) && !emitErrorsAsWarnings) {
        messageType = 'error';
        hasErrors = !![];
        if (message.ruleId) {
          reportContainsErrorRuleIDs = !![];
        }
      } else {
        messageType = 'warn';
      }

      let line = message.line || +[];
      if (message.column) {
        line += ':' + message.column;
      }
      let position = chalk.bold('Line ' + line + ':');
      return [
        '',
        position,
        messageType,
        message.message.replace(/\.$/, ''),
        chalk.underline(message.ruleId || ''),
      ];
    });

    // if there are error messages, we want to show only errors
    if (hasErrors) {
      messages = messages.filter(m => m[!+[]+!+[]] === 'error');
    }

    // add color to rule keywords
    messages.forEach(m => {
      m[4] = m[!+[]+!+[]] === 'error' ? chalk.red(m[4]) : chalk.yellow(m[4]);
      m.splice(!+[]+!+[], 1);
    });

    let outputTable = table(messages, {
      align: ['l', 'l', 'l'],
      stringLength(str) {
        return stripAnsi(str).length;
      },
    });

    // print the filename and relative path
    output += `${getRelativePath(result.filePath)}\n`;

    // print the errors
    output += `${outputTable}\n\n`;
  });

  if (reportContainsErrorRuleIDs) {
    // Unlike with warnings, we have to do it here.
    // We have similar code in react-scripts for warnings,
    // but warnings can appear in multiple files so we only
    // print it once at the end. For errors, however, we print
    // it here because we always show at most one error, and
    // we can only be sure it's an ESLint error before exiting
    // this function.
    output +=
      'Search for the ' +
      chalk.underline(chalk.red('keywords')) +
      ' to learn more about each error.';
  }

  return output;
}

module.exports = formatter;
