"use strict";

const matricesDiffer = function (e, r) {
  if (e === r) {
    return false;
  }return !e || !r || e[12] !== r[12] || e[13] !== r[13] || e[14] !== r[14] || e[5] !== r[5] || e[10] !== r[10] || e[0] !== r[0] || e[1] !== r[1] || e[2] !== r[2] || e[3] !== r[3] || e[4] !== r[4] || e[6] !== r[6] || e[7] !== r[7] || e[8] !== r[8] || e[9] !== r[9] || e[11] !== r[11] || e[15] !== r[15];
};

module.exports = matricesDiffer;