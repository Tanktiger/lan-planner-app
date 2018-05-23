import {Attendee} from './attendee';
import {Game} from './game';
import {RoyalBeef} from './royal-beef';

export class Lan {
    public id: number;
    public name: string;
    public reference: string;
    public start: string;
    public end: string;
    public city: string;
    public zip: string;
    public street: string;
    public attendees: Array<Attendee>;
    public games: Array<Game>;
    public royalBeefs: Array<RoyalBeef>;

    constructor(
        name?: string,
        reference?: string,
        start?: string,
        end?: string,
        city?: string,
        zip?: string,
        street?: string,
        attendees?: Array<Attendee>,
        games?: Array<Game>,
        royalBeefs?: Array<RoyalBeef>,
    ) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.city = city;
        this.street = street;
        this.zip = zip;
        this.games = games || [];
        this.royalBeefs = royalBeefs || [];
        this.attendees = attendees || [];
        this.id = new Date().getTime();
        this.reference =  reference ? reference : '' + (this.id + this.id);
    }
}
