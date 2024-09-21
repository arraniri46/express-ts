export class ResponseError extends Error {
    constructor(
        public statuCode: number,
        public message: string
    ) {
        super(message)
    }
}
