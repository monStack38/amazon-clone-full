const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ9NELzCfcLzMXPi3ZpMvWQWpOLWGUIXqHLvUBit5XRcH0vSuwuAk0lLtRKSXYDB5L6t9uzHELFqdltC3Iz2U8p00pBKob7Au"
);

//API config
const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (request, response) => response.status(200).send("Hello Word"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request Recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  //Ok -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen Command

exports.api = functions.https.onRequest(app);

//http://localhost:5001/clone-4bdb5/us-central1/api
