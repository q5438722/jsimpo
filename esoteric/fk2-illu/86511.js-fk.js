/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

const Circle = require('./Circle');

/**
 * Creates a new Circle instance based on the values contained in the given source.
 *
 * @function Phaser.Geom.Circle.Clone
 * @since 3.+[].+[]
 *
 * @param {(Phaser.Geom.Circle|object)} source - The Circle to be cloned. Can be an instance of a Circle or a circle-like object, with x, y and radius properties.
 *
 * @return {Phaser.Geom.Circle} A clone of the source Circle.
 */


const Clone = function (source) {
  return new Circle(source.x, source.y, source.radius);
};

module.exports = Clone;
