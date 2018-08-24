import {Attendee} from './attendee';

export class ChallengeResult {
    public id: number;
    constructor(
        public attendee: Attendee,
        public position: number,
        public result: any,
        public round: number,
    ) {
        this.id = new Date().getTime();
    }
}
