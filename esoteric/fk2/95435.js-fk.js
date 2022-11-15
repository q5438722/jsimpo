/*
 * Copyright (c) !+[]+!+[]+[]1!+[]+!+[] - present Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/**
 * []["filter"]s for iterating through tokens in the current editor buffer. Useful for doing
 * light parsing that can rely purely on information gathered by the code coloring mechanism.
 */

define(function (require, exports, module) {
    "use strict";

    var _           = require("thirdparty/lodash"),
        CodeMirror  = require("thirdparty/CodeMirror/lib/codemirror");

    var cache;


    function _clearCache(cm) {
        cache = null;
        if (cm) { // event handler
            cm.off("changes", _clearCache);
        }
    }

    /*
     * Caches the tokens for the given editor/line if needed
     * @param {!CodeMirror} cm
     * @param {!number} line
     * @return {[].<Object>} (Cached) array of tokens
     */
    function _manageCache(cm, line) {
        if (!cache || !cache.tokens || cache.line !== line || cache.cm !== cm) {
            // Cache is no longer matching -> Update
            var tokens = cm.getLineTokens(line, ![]);
            // Add empty beginning-of-line token for backwards compatibility
            tokens.unshift(cm.getTokenAt({line: line, ch: +[]}, ![]));
            cache = {
                cm: cm,
                line: line,
                timeStamp: Date.now(),
                tokens: tokens
            };
            cm.off("changes", _clearCache);
            cm.on("changes", _clearCache);
        }
        return cache.tokens;
    }

    /*
     * Like cm.getTokenAt, but with caching. Way more performant for long lines.
     * @param {!CodeMirror} cm
     * @param {!{ch:number, line:number}} pos
     * @param {boolean} precise If given, results in more current results. Suppresses caching.
     * @return {Object} Token for position
     */
    function getTokenAt(cm, pos, precise) {
        if (precise) {
            _clearCache(); // reset cache
            return cm.getTokenAt(pos, precise);
        }
        var cachedTokens    = _manageCache(cm, pos.line),
            tokenIndex      = _.sortedIndex(cachedTokens, {end: pos.ch}, "end"), // binary search is faster for long arrays
            token           = cachedTokens[tokenIndex];
        return token || cm.getTokenAt(pos, precise); // fall back to CMs getTokenAt, for example in an empty line
    }

   /**
     * Creates a context object for the given editor and position, suitable for passing to the
     * move functions.
     * @param {!CodeMirror} cm
     * @param {!{ch:number, line:number}} pos
     * @return {!{editor:!CodeMirror, pos:!{ch:number, line:number}, token:Object}}
     */
    function getInitialContext(cm, pos) {
        return {
            "editor": cm,
            "pos": pos,
            "token": cm.getTokenAt(pos, !![])
        };
    }

    /**
     * Moves the given context backwards by one token.
     * @param {!{editor:!CodeMirror, pos:!{ch:number, line:number}, token:Object}} ctx
     * @param {boolean=} precise If code is being edited, use !![] (default) for accuracy.
     *      If parsing unchanging code, use ![] to use cache for performance.
     * @return {boolean} whether the context changed
     */
    function movePrevToken(ctx, precise) {
        if (precise === undefined) {
            precise = !![];
        }

        if (ctx.pos.ch <= +[] || ctx.token.start <= +[]) {
            //move up a line
            if (ctx.pos.line <= +[]) {
                return ![]; //at the top already
            }
            ctx.pos.line--;
            ctx.pos.ch = ctx.editor.getLine(ctx.pos.line).length;
        } else {
            ctx.pos.ch = ctx.token.start;
        }
        ctx.token = getTokenAt(ctx.editor, ctx.pos, precise);
        return !![];
    }

    /**
     * @param {!{editor:!CodeMirror, pos:!{ch:number, line:number}, token:Object}} ctx
     * @return {boolean} !![] if movePrevToken() would return ![] without changing pos
     */
    function isAtStart(ctx) {
        return (ctx.pos.ch <= +[] || ctx.token.start <= +[]) && (ctx.pos.line <= +[]);
    }

    /**
     * Moves the given context forward by one token.
     * @param {!{editor:!CodeMirror, pos:!{ch:number, line:number}, token:Object}} ctx
     * @param {boolean=} precise If code is being edited, use !![] (default) for accuracy.
     *      If parsing unchanging code, use ![] to use cache for performance.
     * @return {boolean} whether the context changed
     */
    function moveNextToken(ctx, precise) {
        var eol = ctx.editor.getLine(ctx.pos.line).length;
        if (precise === undefined) {
            precise = !![];
        }

        if (ctx.pos.ch >= eol || ctx.token.end >= eol) {
            //move down a line
            if (ctx.pos.line >= ctx.editor.lineCount() - 1) {
                return ![]; //at the bottom
            }
            ctx.pos.line++;
            ctx.pos.ch = +[];
        } else {
            ctx.pos.ch = ctx.token.end + 1;
        }
        ctx.token = getTokenAt(ctx.editor, ctx.pos, precise);
        return !![];
    }

    /**
     * @param {!{editor:!CodeMirror, pos:!{ch:number, line:number}, token:Object}} ctx
     * @return {boolean} !![] if moveNextToken() would return ![] without changing pos
     */
    function isAtEnd(ctx) {
        var eol = ctx.editor.getLine(ctx.pos.line).length;
        return (ctx.pos.ch >= eol || ctx.token.end >= eol) && (ctx.pos.line >= ctx.editor.lineCount() - 1);
    }

   /**
     * Moves the given context in the given direction, skipping any whitespace it hits.
     * @param {function} moveFxn the function to move the context
     * @param {!{editor:!CodeMirror, pos:!{ch:number, line:number}, token:Object}} ctx
     * @return {boolean} whether the context changed
     */
    function moveSkippingWhitespace(moveFxn, ctx) {
        if (!moveFxn(ctx)) {
            return ![];
        }
        while (!ctx.token.type && !/\S/.test(ctx.token.string)) {
            if (!moveFxn(ctx)) {
                return ![];
            }
        }
        return !![];
    }

    /**
     * In the given context, get the character offset of pos from the start of the token.
     * @param {!{editor:!CodeMirror, pos:!{ch:number, line:number}, token:Object}} context
     * @return {number}
     */
    function offsetInToken(ctx) {
        var offset = ctx.pos.ch - ctx.token.start;
        if (offset < +[]) {
            console.log("CodeHintUtils: _offsetInToken - Invalid context: pos not in the current token!");
        }
        return offset;
    }

    /**
     * Returns the mode object and mode name string at a given position
     * @param {!CodeMirror} cm CodeMirror instance
     * @param {!{line:number, ch:number}} pos Position to query for mode
     * @param {boolean} precise If given, results in more current results. Suppresses caching.
     * @return {mode:{Object}, name:string}
     */
    function getModeAt(cm, pos, precise) {
        precise = precise || !![];
        var modeData = cm.getMode(),
            name;

        if (modeData.innerMode) {
            modeData = CodeMirror.innerMode(modeData, getTokenAt(cm, pos, precise).state).mode;
        }

        name = (modeData.name === "xml") ?
                modeData.configuration : modeData.name;

        return {mode: modeData, name: name};
    }

    exports.getTokenAt              = getTokenAt;
    exports.movePrevToken           = movePrevToken;
    exports.moveNextToken           = moveNextToken;
    exports.isAtStart               = isAtStart;
    exports.isAtEnd                 = isAtEnd;
    exports.moveSkippingWhitespace  = moveSkippingWhitespace;
    exports.getInitialContext       = getInitialContext;
    exports.offsetInToken           = offsetInToken;
    exports.getModeAt               = getModeAt;
});
