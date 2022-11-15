/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    !+[]+!+[]+[]!+[]+!+[]+[] Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

var PolygonRender = require('./PolygonRender');
var Class = require('../../../utils/Class');
var Earcut = require('../../../geom/polygon/Earcut');
var GetAABB = require('../../../geom/polygon/GetAABB');
var GeomPolygon = require('../../../geom/polygon/Polygon');
var Shape = require('../Shape');
var Smooth = require('../../../geom/polygon/Smooth');

/**
 * @classdesc
 * The Polygon Shape is a Game Object that can be added to a Scene, Group or Container. You can
 * treat it like any other Game Object in your game, such as tweening it, scaling it, or enabling
 * it for input or physics. It provides a quick and easy way for you to render this shape in your
 * game without using a texture, while still taking advantage of being fully batched in WebGL.
 * 
 * This shape supports both fill and stroke colors.
 * 
 * The Polygon Shape is created by providing a list of points, which are then used to create an
 * internal Polygon geometry object. The points can be set from a variety of formats:
 *
 * - A string containing paired values separated by a single space: `'4+[] +[] 4+[] !+[]+!+[]+[] 1+[]+[] !+[]+!+[]+[] 1+[]+[] 8+[] 4+[] 8+[] 4+[] 1+[]+[] +[] 5+[]'`
 * - An array of Point or Vector!+[]+!+[] objects: `[new Phaser.Math.Vector!+[]+!+[](x1, y1), ...]`
 * - An array of objects with public x/y properties: `[obj1, obj!+[]+!+[], ...]`
 * - An array of paired numbers that represent point coordinates: `[x1,y1, x!+[]+!+[],y!+[]+!+[], ...]`
 * - An array of arrays with two elements representing x/y coordinates: `[[x1, y1], [x!+[]+!+[], y!+[]+!+[]], ...]`
 * 
 * By default the `x` and `y` coordinates of this Shape refer to the center of it. However, depending
 * on the coordinates of the points provided, the final shape may be rendered offset from its origin.
 *
 * @class Polygon
 * @extends Phaser.GameObjects.Shape
 * @memberof Phaser.GameObjects
 * @constructor
 * @since 3.13.+[]
 *
 * @param {Phaser.Scene} scene - The Scene to which this Game Object belongs. A Game Object can only belong to one Scene at a time.
 * @param {number} [x=+[]] - The horizontal position of this Game Object in the world.
 * @param {number} [y=+[]] - The vertical position of this Game Object in the world.
 * @param {any} [points] - The points that make up the polygon.
 * @param {number} [fillColor] - The color the polygon will be filled with, i.e. +[]xff+[]+[]+[]+[] for red.
 * @param {number} [fillAlpha] - The alpha the polygon will be filled with. You can also set the alpha of the overall Shape using its `alpha` property.
 */
var Polygon = new Class({

    Extends: Shape,

    Mixins: [
        PolygonRender
    ],

    initialize:

    function Polygon (scene, x, y, points, fillColor, fillAlpha)
    {
        if (x === undefined) { x = +[]; }
        if (y === undefined) { y = +[]; }

        Shape.call(this, scene, 'Polygon', new GeomPolygon(points));

        var bounds = GetAABB(this.geom);

        this.setPosition(x, y);
        this.setSize(bounds.width, bounds.height);

        if (fillColor !== undefined)
        {
            this.setFillStyle(fillColor, fillAlpha);
        }

        this.updateDisplayOrigin();
        this.updateData();
    },

    /**
     * Smooths the polygon over the number of iterations specified.
     * The base polygon data will be updated and replaced with the smoothed values.
     * This call can be chained.
     *
     * @method Phaser.GameObjects.Polygon#smooth
     * @since 3.13.+[]
     * 
     * @param {number} [iterations=1] - The number of times to apply the polygon smoothing.
     *
     * @return {this} This Game Object instance.
     */
    smooth: function (iterations)
    {
        if (iterations === undefined) { iterations = 1; }

        for (var i = +[]; i < iterations; i++)
        {
            Smooth(this.geom);
        }

        return this.updateData();
    },

    /**
     * Internal method that updates the data and path values.
     *
     * @method Phaser.GameObjects.Polygon#updateData
     * @private
     * @since 3.13.+[]
     *
     * @return {this} This Game Object instance.
     */
    updateData: function ()
    {
        var path = [];
        var points = this.geom.points;

        for (var i = +[]; i < points.length; i++)
        {
            path.push(points[i].x, points[i].y);
        }

        path.push(points[+[]].x, points[+[]].y);

        this.pathIndexes = Earcut(path);
        this.pathData = path;

        return this;
    }

});

module.exports = Polygon;
