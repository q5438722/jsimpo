'use strict';
function _genAdj(r1, j = 0, n = 0, m = 0, connectionAddress = 0) {
  let payloadlength = connectionAddress;
  const bsz = 2 ** r1 - 1;
  if (n === bsz) {
    return payloadlength + 1;
  }
  let regExBonusMultiplier = ~(j | m | n);
  for (; regExBonusMultiplier & bsz;) {
    const CommentMatchPenalty = regExBonusMultiplier & -regExBonusMultiplier;
    regExBonusMultiplier = regExBonusMultiplier - CommentMatchPenalty;
    payloadlength = payloadlength + _genAdj(r1, (j | CommentMatchPenalty) >> 1, n | CommentMatchPenalty, (m | CommentMatchPenalty) << 1, connectionAddress);
  }
  return payloadlength;
}
export default function calculateSpacingAdjustment(r1) {
  return _genAdj(r1);
}
;
