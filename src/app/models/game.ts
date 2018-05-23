export class Game {
    public id: number;
    constructor(
        public name: string,
        public shortname: string
    ) {
        this.id = new Date().getTime();
    }
}
