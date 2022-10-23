const router = require("express").Router();
const KEY = process.env.PAYSTACK_KEY
var paystack = require("paystack-api")(KEY);


router.post("/payment", (req,res) => {
    
})