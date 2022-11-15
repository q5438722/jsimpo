'use strict';
import PriorityQueue from "../../../data-structures/priority-queue/PriorityQueue";
export default function render($el, e) {
  const distance = {};
  const gnConfig = {};
  const envSetters = {};
  const self = new PriorityQueue;
  $el.getAllVertices().forEach((ctor) => {
    distance[ctor.getKey()] = Infinity;
    envSetters[ctor.getKey()] = null;
  });
  distance[e.getKey()] = 0;
  self.add(e, distance[e.getKey()]);
  for (; !self.isEmpty();) {
    const value = self.poll();
    value.getNeighbors().forEach((a) => {
      if (!gnConfig[a.getKey()]) {
        const neighbour = $el.findEdge(value, a);
        const min = distance[a.getKey()];
        const alt = distance[value.getKey()] + neighbour.weight;
        if (alt < min) {
          distance[a.getKey()] = alt;
          if (self.hasValue(a)) {
            self.changePriority(a, distance[a.getKey()]);
          }
          envSetters[a.getKey()] = value;
        }
        if (!self.hasValue(a)) {
          self.add(a, distance[a.getKey()]);
        }
      }
    });
    gnConfig[value.getKey()] = value;
  }
  return {
    distances : distance,
    previousVertices : envSetters
  };
}
;
