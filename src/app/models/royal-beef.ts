import {Game} from './game';
import {Attendee} from './attendee';
import {Challenge} from './challenge';

export class RoyalBeef {
    public id: number;
    constructor(
        public name: string,
        public games: Array<Game>,
        public attendees: Array<Attendee>,
        public challenges: Array<Challenge>
    ) {
        this.id = new Date().getTime();
    }
}
