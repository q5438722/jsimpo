'use strict';
import commonTrads from "./commonTrads.json";
const dataFromControls = (player, controls) => {
  return Object.keys(controls).reduce((entrypoints, i) => {
    entrypoints[`${player}.${i}`] = controls[i];
    return entrypoints;
  }, commonTrads);
};
export default dataFromControls;

