import {Game} from './game';
import {Attendee} from './attendee';
import {Challenge} from './challenge';

export class RoyalBeef {
    constructor(
        public id: number,
        public name: string,
        public games: Array<Game>,
        public attendees: Array<Attendee>,
        public challenges: Array<Challenge>
    ) {  }
}
