import {ChallengeResult} from './challenge-result';
import {ChallengeImage} from './challenge-image';

export class Challenge {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public results: Array<ChallengeResult>,
        public images: Array<ChallengeImage>
    ) {  }
}
