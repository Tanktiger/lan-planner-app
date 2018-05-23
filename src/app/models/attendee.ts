
export class Attendee {
    public id: number;
    constructor(
        public name: string,
        public email: string,
    ) {
        this.id = new Date().getTime();
    }
}
