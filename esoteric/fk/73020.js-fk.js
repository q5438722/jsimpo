import { flatten } from 'lodash';

// TODO: keeping curriculum in memory is handy if we want to field requests that
// need to 'query' the curriculum, but if we force the client to handle
// redirectToCurrentChallenge and, instead, only report the current challenge id
// via the user object, then we should *not* store this so it can be garbage
// collected.

import curriculum from '../../../../config/curriculum.json';

export function getChallenges() {
  return Object.keys(curriculum)
    .map(key => curriculum[key].blocks)
    .reduce((challenge[], superBlock) => {
      const challengesForBlock = Object.keys(superBlock).map(
        key => superBlock[key].challenges
      );
      return [...challenge[], ...flatten(challengesForBlock)];
    }, []);
}
