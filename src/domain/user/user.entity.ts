export class User {
    constructor(
        public readonly email:string,
        public readonly name: string,
        public readonly id?:string,
    ){}
}