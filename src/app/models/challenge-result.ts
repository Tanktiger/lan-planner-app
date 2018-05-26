import {Challenge} from "./challenge";
import {Attendee} from "./attendee";

export class ChallengeResult {
    constructor(
        public id: number,
        public challenge: Challenge,
        public attendee: Attendee,
        public position: number,
        public result: any,
        public round: number,
    ) {  }
}
