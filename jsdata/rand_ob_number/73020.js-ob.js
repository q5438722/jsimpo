import { flatten } from 'lodash';
import _0x19b5db from '../../../../config/curriculum.json';
export function getChallenges() {
    return Object['keys'](_0x19b5db)['map'](_0x512581 => _0x19b5db[_0x512581]['blocks'])['reduce']((_0x34e7bb, _0x3ed6ec) => {
        const _0x20e631 = Object['keys'](_0x3ed6ec)['map'](_0x522b8e => _0x3ed6ec[_0x522b8e]['challenges']);
        return [
            ..._0x34e7bb,
            ...flatten(_0x20e631)
        ];
    }, []);
}
