/**
* The `Matter.Detector` module contains methods for detecting collisions given a set of pairs.
*
* @class Detector
*/

// TODO: speculative contacts

const Detector = {};


module.exports = Detector;

const SAT = require('./SAT');

const Pair = require('./Pair');

const Bounds = require('../geometry/Bounds');

(function () {

    /**
     * Finds all collisions given a list of pairs.
     * @method collisions
     * @param {pair[]} broadphasePairs
     * @param {engine} engine
     * @return {array} collisions
     */
    Detector.collisions = function (broadphasePairs, engine) {
        const collisions = [];
        const pairsTable = engine.pairs.table;

        // @if DEBUG

        const metrics = engine.metrics;
        // @endif

        for (var i = 0; i < broadphasePairs.length; i++) {
            const bodyA = broadphasePairs[i][0];
            const bodyB = broadphasePairs[i][1];


            if ((bodyA.isStatic || bodyA.isSleeping) && (bodyB.isStatic || bodyB.isSleeping)) continue;

            if (!Detector.canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) continue;

            // @if DEBUG
            metrics.midphaseTests += 1;
            // @endif

            // mid phase
            if (Bounds.overlaps(bodyA.bounds, bodyB.bounds)) {
                for (var j = bodyA.parts.length > 1 ? 1 : 0; j < bodyA.parts.length; j++) {
                    const partA = bodyA.parts[j];


                    for (var k = bodyB.parts.length > 1 ? 1 : 0; k < bodyB.parts.length; k++) {
                        const partB = bodyB.parts[k];


                        if (partA === bodyA && partB === bodyB || Bounds.overlaps(partA.bounds, partB.bounds)) {
                            // find a previous collision we could reuse
                            const pairId = Pair.id(partA, partB);
                            const pair = pairsTable[pairId];
                            var previousCollision;


                            if (pair && pair.isActive) {
                                previousCollision = pair.collision;
                            } else {
                                previousCollision = null;
                            }

                            // narrow phase
                            const collision = SAT.collides(partA, partB, previousCollision);

                            // @if DEBUG

                            metrics.narrowphaseTests += 1;
                            if (collision.reused) metrics.narrowReuseCount += 1;
                            // @endif

                            if (collision.collided) {
                                collisions.push(collision);
                                // @if DEBUG
                                metrics.narrowDetections += 1;
                                // @endif
                            }
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Returns `!![]` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `!![]` if collision can occur
     */
    Detector.canCollide = function (filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0) return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };
})();
