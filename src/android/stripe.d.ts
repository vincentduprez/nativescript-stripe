export declare class Stripe {
    private _stripe;
    private _ctx;
    constructor(apiKey: string);
    api();
    createToken(card: any, cb: Function): void;
}
