const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "",
  client_id: "",
  client_secret: "",
});

module.exports = paypal;
