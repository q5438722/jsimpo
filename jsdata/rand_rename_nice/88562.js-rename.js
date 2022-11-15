'use strict';
var gju = GeoJSON;
Tinytest.add("geojson-utils - line intersects", function(test) {
  var diagonalUp = {
    type : "LineString",
    coordinates : [[0, 0], [10, 10]]
  };
  var diagonalDown = {
    type : "LineString",
    coordinates : [[10, 0], [0, 10]]
  };
  var farAway = {
    type : "LineString",
    coordinates : [[100, 100], [110, 110]]
  };
  test.isTrue(gju.lineStringsIntersect(diagonalUp, diagonalDown));
  test.isFalse(gju.lineStringsIntersect(diagonalUp, farAway));
});
var box = {
  type : "Polygon",
  coordinates : [[[0, 0], [10, 0], [10, 10], [0, 10]]]
};
Tinytest.add("geojson-utils - inside/outside of the box", function(test) {
  var inBox = {
    type : "Point",
    coordinates : [5, 5]
  };
  var outBox = {
    type : "Point",
    coordinates : [15, 15]
  };
  test.isTrue(gju.pointInPolygon(inBox, box));
  test.isFalse(gju.pointInPolygon(outBox, box));
});
Tinytest.add("geojson-utils - drawCircle", function(inRevIdx) {
  inRevIdx.length(gju.drawCircle(10, {
    type : "Point",
    coordinates : [0, 0]
  }).coordinates[0], 15);
  inRevIdx.length(gju.drawCircle(10, {
    type : "Point",
    coordinates : [0, 0]
  }, 50).coordinates[0], 50);
});
Tinytest.add("geojson-utils - centroid", function(t) {
  var content = gju.rectangleCentroid(box);
  t.equal(content.coordinates[0], 5);
  t.equal(content.coordinates[1], 5);
});
Tinytest.add("geojson-utils - point distance", function(t) {
  var fairyLand = {
    type : "Point",
    coordinates : [-122.260000705719, 37.80919060818706]
  };
  var navalBase = {
    type : "Point",
    coordinates : [-122.32083320617676, 37.78774223089045]
  };
  t.equal(Math.floor(gju.pointDistance(fairyLand, navalBase)), 5852);
});
Tinytest.add("geojson-utils - points distance generated tests", function(helper) {
  function toGeoJSONPoint(coordinates) {
    return {
      type : "Point",
      coordinates : coordinates
    };
  }
  var expiredPokemons = [[[-19.416501816827804, -13.442164216190577], [8.694866622798145, -8.511979941977188]], [[151.2841189110186, -56.14564002258703], [167.77983197313733, .05544793023727834]], [[100.28413630579598, -88.02313695591874], [36.48786173714325, 53.44207073468715]], [[-70.34899035631679, 76.51596869179048], [154.91605914011598, -73.60970971290953]], [[96.28682994353585, 58.77288202662021], [-118.33936230326071, 72.07877089688554]], [[140.35530551429838, 10.507104953983799], [-67.73368513956666, 
  38.075836981181055]], [[69.55582775664516, 86.25450283149257], [-18.446230484172702, 6.116170521359891]], [[163.83647522330284, -65.7211532376241], [-159.2198902608361, -78.42975475382991]], [[-178.9383797585033, -54.87420454365201], [-175.35227065649815, -84.04084282391705]], [[-48.63219943456352, 11.284161149058491], [-179.12627786491066, -51.95622375886887]], [[140.29684206470847, -67.20720696030185], [-109.37452355003916, 36.03131077555008]], [[-154.6698773431126, 58.322094617411494], [61.18583445576951, 
  -4.3424885796848685]], [[122.5562841903884, 10.43972848681733], [-11.756078708684072, -43.86124441982247]], [[-67.91648306301795, -86.38826347864233], [163.577536230674, 12.987319261068478]], [[91.65140007715672, 17.595150742679834], [135.80393003183417, 22.307532118167728]], [[-112.70280818711035, 34.45729674655013], [-127.42168210959062, -25.51327457977459]], [[-161.55807900894433, -77.40711871231906], [-92.66313794790767, -89.12077954714186]], [[39.966264681424946, 9.890176948625594], [-159.88646019320004, 
  40.60383598925546]], [[-57.48232689569704, 86.64061016729102], [59.53941993578337, -75.73194969259202]], [[-142.0938081513159, 80.76813141163439], [14.891517050098628, 64.56322408467531]]];
  var Edge = [3115066.253657889, 6423493.23217478, 15848950.040260147, 18714226.542508014, 5223022.773112786, 13874476.31351122, 9314403.330938946, 1831929.5917785936, 3244710.9344544266, 13691492.4666934, 14525055.646223146, 13261602.433637196, 14275427.551162094, 11699799.361568067, 4628773.112942989, 6846704.025301012, 1368055.9401701286, 14041503.040981486, 18560499.734697536, 3793112.6186894816];
  _.each(expiredPokemons, function(t, edge) {
    var localEventY = GeoJSON.pointDistance.apply(this, _.map(t, toGeoJSONPoint));
    helper.isTrue(Math.abs(localEventY - Edge[edge]) < 1e-6, "Wrong distance between points " + JSON.stringify(t) + ": " + localEventY + ", " + Math.abs(localEventY - Edge[edge]) + " differenc");
  });
});

