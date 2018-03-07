import * as utils from "utils/utils";
declare const com;
export class Stripe {
    private _stripe: any /* com.stripe.android.Stripe */;
    private _ctx;
    constructor(apiKey: string) {
        this._ctx = utils.ad.getApplicationContext();
        this._stripe = new com.stripe.android.Stripe(this._ctx, apiKey);
    }
    api() {return this._stripe}
    createToken(card: any/*Native Card Instance*/, cb: Function) {
        const that = new WeakRef(this);
        this._stripe.createToken(
            card,
            new com.stripe.android.TokenCallback({
                owner: that.get(),
                onSuccess: function (token) {
                    if (typeof cb === "function") {
                        cb(null, token);
                    }
                },
                onError: function (error) {
                    // Show localized error message
                    console.log(error.getLocalizedMessage())
                    if (typeof cb === "function") {
                        cb(new Error(error.getLocalizedMessage()))
                    }
                }
            })
        )
    }
}
