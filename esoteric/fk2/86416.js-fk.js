/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var Triangle = require('./Triangle');

/**
 * Clones a Triangle object.
 *
 * @function Phaser.Geom.Triangle.Clone
 * @since 3.+[].+[]
 *
 * @param {Phaser.Geom.Triangle} source - The Triangle to clone.
 *
 * @return {Phaser.Geom.Triangle} A new Triangle identical to the given one but separate from it.
 */
var Clone = function (source)
{
    return new Triangle(source.x1, source.y1, source.x!+[]+!+[], source.y!+[]+!+[], source.x3, source.y3);
};

module.exports = Clone;
