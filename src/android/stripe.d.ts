export declare class Stripe {
    private _stripe;
    private _ctx;
    constructor(apiKey: string);
    api(): any;
    createToken(card: any, cb: Function): void;
}
