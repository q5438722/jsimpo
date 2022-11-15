'use strict';
import{
  flatten as flatten
}from "lodash";
import curriculum from "../../../../config/curriculum.json";
function _globalStorageUsage() {
  return Object.keys(curriculum).map((container_type) => {
    return curriculum[container_type].blocks;
  }).reduce((canCreateDiscussions, c) => {
    const nextSchemas = Object.keys(c).map((r) => {
      return c[r].challenges;
    });
    return [...canCreateDiscussions, ...flatten(nextSchemas)];
  }, []);
}
export{
  _globalStorageUsage as getChallenges
};

