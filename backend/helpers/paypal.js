
const paypal = require("paypal-rest-sdk");



paypal.configure({
  mode: "sandbox",
  client_id: "AdyG-BtFO0Ad-pMHSX0UBCZdq_SsMlt9gSU5SpqTpsiUuqsfNfCIsqT6KEbue5HEnLkDJfxLcBh05urz",
  client_secret: "EC0zKihaG2DuwQkNGPY4Pz1_POi-FL_ZnLNCHYZoUiKwihbGRcYQU3Vr2o5cbl-MhHJYy2XsgfCf7WHQ",
});

module.exports = paypal;



// const paypal = require('@paypal/checkout-server-sdk');

// const clientId = "AdyG-BtFO0Ad-pMHSX0UBCZdq_SsMlt9gSU5SpqTpsiUuqsfNfCIsqT6KEbue5HEnLkDJfxLcBh05urz";
// const clientSecret = "EC0zKihaG2DuwQkNGPY4Pz1_POi-FL_ZnLNCHYZoUiKwihbGRcYQU3Vr2o5cbl-MhHJYy2XsgfCf7WHQ";

// // Set up the PayPal environment (Sandbox or Live)
// const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret); // Use LiveEnvironment for production
// const client = new paypal.core.PayPalHttpClient(environment);


// module.exports = { paypal, client };

