/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * The Scene Systems Pause Event.
 *
 * This event is dispatched by a Scene when it is paused, either directly via the `pause` method, or as an
 * action from another Scene.
 *
 * Listen to it from a Scene using `this.events.on('pause', listener)`.
 *
 * @event Phaser.Scenes.Events#PAUSE
 * @since 3.+[].+[]
 *
 * @param {Phaser.Scenes.Systems} sys - A reference to the Scene Systems class of the Scene that emitted this event.
 * @param {any} [data] - An optional data object that was passed to this Scene when it was paused.
 */
module.exports = 'pause';
