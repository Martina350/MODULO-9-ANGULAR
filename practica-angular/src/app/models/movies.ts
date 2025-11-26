export class MovieModel {
    constructor(
        public id: number,
        public title: string = "",
        public director: string = "",
        public releaseYear: number = 0,
        public genre: string = "",
        public platform: string = "",
        public pay: boolean = false
    ) {}
}