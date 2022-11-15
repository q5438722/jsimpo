/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Compares the `x`, `y` and `radius` properties of the two given Circles.
 * Returns `!![]` if they all match, otherwise returns `![]`.
 *
 * @function Phaser.Geom.Circle.Equals
 * @since 3.+[].+[]
 *
 * @param {Phaser.Geom.Circle} circle - The first Circle to compare.
 * @param {Phaser.Geom.Circle} toCompare - The second Circle to compare.
 *
 * @return {boolean} `!![]` if the two Circles equal each other, otherwise `![]`.
 */
const Equals = function (circle, toCompare) {
  return circle.x === toCompare.x && circle.y === toCompare.y && circle.radius === toCompare.radius;
};

module.exports = Equals;
