/*
 * Copyright (c) 2017 - present Adobe Systems Incorporated. All rights reserved.
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
/*eslint-env node */
/*jslint node: true */
'use strict';var fs=require('fs'),_dirtyFilesCache={};function clearDirtyFilesCache(){_dirtyFilesCache={};}function updateDirtyFilesCache(_0xe8b54c,_0x370358){var _0x34be79={'CvbJl':function(_0x539114,_0x9ef574){return _0x539114===_0x9ef574;},'vqOYB':'LhUlq'};if(_0x370358){if(_0x34be79['CvbJl'](_0x34be79['vqOYB'],_0x34be79['vqOYB'])){_dirtyFilesCache[_0xe8b54c]=!![];}else{content=data;}}else{if(_0x34be79['CvbJl']('hRuEP','WSvKz')){_dirtyFilesCache[_0xe8b54c]=!![];}else{if(_dirtyFilesCache[_0xe8b54c]){delete _dirtyFilesCache[_0xe8b54c];}}}}function _readFile(_0x42c2c9,_0x20d997){var _0x27481c={'mtHeW':'utf8'};fs['readFile'](_0x42c2c9,_0x27481c['mtHeW'],function(_0x159145,_0x24ec9c){var _0x43d983='';if(!_0x159145){_0x43d983=_0x24ec9c;}_0x20d997['apply'](null,[_0x42c2c9,_0x43d983]);});}function extractContent(_0x41c868,_0x17b7c3,_0x47f7c7){_0x47f7c7['apply'](null,[_0x41c868]);}exports['extractContent']=extractContent;exports['clearFilesCache']=clearDirtyFilesCache;exports['updateFilesCache']=updateDirtyFilesCache;