export class MovieModel {
    constructor(
        public id: number,
        public title: string,
        public director: string,
        public releaseYear: number,
        public genre: string,
        public platform: string,
        public pay: boolean
    ) {}
}