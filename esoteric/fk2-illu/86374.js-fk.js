/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Copy the values of one Point to a destination Point.
 *
 * @function Phaser.Geom.Point.CopyFrom
 * @since 3.+[].+[]
 *
 * @generic {Phaser.Geom.Point} O - [dest,$return]
 *
 * @param {Phaser.Geom.Point} source - The source Point to copy the values from.
 * @param {Phaser.Geom.Point} dest - The destination Point to copy the values to.
 *
 * @return {Phaser.Geom.Point} The destination Point.
 */
const CopyFrom = function (source, dest) {
  return dest.setTo(source.x, source.y);
};

module.exports = CopyFrom;
