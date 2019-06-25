const fs = require("fs");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

var testEmail = fs.readFileSync("./index-compiled.html", "utf-8");

sgMail.setApiKey(process.env.SENDGRID_APIKEY);
const msg = {
  to: "rust.stephen@gmail.com",
  from: "test@example.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: testEmail
};
sgMail.send(msg);
