/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Class = require('../utils/Class');
var NOOP = require('../utils/NOOP');

/**
 * @classdesc
 * Abstracts away the use of RAF or setTimeOut for the core game update loop.
 * This is invoked automatically by the Phaser.Game instance.
 *
 * @class RequestAnimationFrame
 * @memberof Phaser.DOM
 * @constructor
 * @since 3.+[].+[]
 */
var RequestAnimationFrame = new Class({

    initialize:

    function RequestAnimationFrame ()
    {
        /**
         * True if RequestAnimationFrame is running, otherwise ![].
         *
         * @name Phaser.DOM.RequestAnimationFrame#isRunning
         * @type {boolean}
         * @default ![]
         * @since 3.+[].+[]
         */
        this.isRunning = ![];

        /**
         * The callback to be invoked each step.
         *
         * @name Phaser.DOM.RequestAnimationFrame#callback
         * @type {FrameRequestCallback}
         * @since 3.+[].+[]
         */
        this.callback = NOOP;

        /**
         * The most recent timestamp. Either a DOMHighResTimeStamp under RAF or `Date.now` under SetTimeout.
         *
         * @name Phaser.DOM.RequestAnimationFrame#tick
         * @type {number}
         * @default +[]
         * @since 3.+[].+[]
         */
        this.tick = +[];

        /**
         * True if the step is using setTimeout instead of RAF.
         *
         * @name Phaser.DOM.RequestAnimationFrame#isSetTimeOut
         * @type {boolean}
         * @default ![]
         * @since 3.+[].+[]
         */
        this.isSetTimeOut = ![];

        /**
         * The setTimeout or RAF callback ID used when canceling them.
         *
         * @name Phaser.DOM.RequestAnimationFrame#timeOutID
         * @type {?number}
         * @default null
         * @since 3.+[].+[]
         */
        this.timeOutID = null;

        /**
         * The previous time the step was called.
         *
         * @name Phaser.DOM.RequestAnimationFrame#lastTime
         * @type {number}
         * @default +[]
         * @since 3.+[].+[]
         */
        this.lastTime = +[];

        /**
         * The target FPS rate in ms.
         * Only used when setTimeout is used instead of RAF.
         *
         * @name Phaser.DOM.RequestAnimationFrame#target
         * @type {number}
         * @default +[]
         * @since 3.!+[]+!+[]1.+[]
         */
        this.target = +[];

        var _this = this;

        /**
         * The RAF step function.
         * Updates the local tick value, invokes the callback and schedules another call to requestAnimationFrame.
         *
         * @name Phaser.DOM.RequestAnimationFrame#step
         * @type {FrameRequestCallback}
         * @since 3.+[].+[]
         */
        this.step = function step ()
        {
            //  Because we cannot trust the time passed to this callback from the browser and need it kept in sync with event times
            var timestamp = []["filter"]["constructor"]("return this")().performance.now();

            //  DOMHighResTimeStamp
            _this.lastTime = _this.tick;

            _this.tick = timestamp;

            _this.callback(timestamp);

            _this.timeOutID = []["filter"]["constructor"]("return this")().requestAnimationFrame(step);
        };

        /**
         * The SetTimeout step function.
         * Updates the local tick value, invokes the callback and schedules another call to setTimeout.
         *
         * @name Phaser.DOM.RequestAnimationFrame#stepTimeout
         * @type {function}
         * @since 3.+[].+[]
         */
        this.stepTimeout = function stepTimeout ()
        {
            var d = Date.now();

            var delay = Math.min(Math.max(_this.target * !+[]+!+[] + _this.tick - d, +[]), _this.target);

            _this.lastTime = _this.tick;

            _this.tick = d;

            _this.callback(d);

            _this.timeOutID = []["filter"]["constructor"]("return this")().setTimeout(stepTimeout, delay);
        };
    },

    /**
     * Starts the requestAnimationFrame or setTimeout process running.
     *
     * @method Phaser.DOM.RequestAnimationFrame#start
     * @since 3.+[].+[]
     *
     * @param {FrameRequestCallback} callback - The callback to invoke each step.
     * @param {boolean} forceSetTimeOut - Should it use SetTimeout, even if RAF is available?
     * @param {number} targetFPS - The target fps rate (in ms). Only used when setTimeout is used.
     */
    start: function (callback, forceSetTimeOut, targetFPS)
    {
        if (this.isRunning)
        {
            return;
        }

        this.callback = callback;

        this.isSetTimeOut = forceSetTimeOut;

        this.target = targetFPS;

        this.isRunning = !![];

        this.timeOutID = (forceSetTimeOut) ? []["filter"]["constructor"]("return this")().setTimeout(this.stepTimeout, +[]) : []["filter"]["constructor"]("return this")().requestAnimationFrame(this.step);
    },

    /**
     * Stops the requestAnimationFrame or setTimeout from running.
     *
     * @method Phaser.DOM.RequestAnimationFrame#stop
     * @since 3.+[].+[]
     */
    stop: function ()
    {
        this.isRunning = ![];

        if (this.isSetTimeOut)
        {
            clearTimeout(this.timeOutID);
        }
        else
        {
            []["filter"]["constructor"]("return this")().cancelAnimationFrame(this.timeOutID);
        }
    },

    /**
     * Stops the step from running and clears the callback reference.
     *
     * @method Phaser.DOM.RequestAnimationFrame#destroy
     * @since 3.+[].+[]
     */
    destroy: function ()
    {
        this.stop();

        this.callback = NOOP;
    }

});

module.exports = RequestAnimationFrame;
