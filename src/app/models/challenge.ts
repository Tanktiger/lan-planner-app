import {ChallengeResult} from './challenge-result';
import {ChallengeImage} from './challenge-image';

export class Challenge {
    public id: number;
    constructor(
        public title: string,
        public description: string,
        public results: Array<ChallengeResult>,
        public images: Array<ChallengeImage>
    ) {
        this.id = new Date().getTime();
    }
}
