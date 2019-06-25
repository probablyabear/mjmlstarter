const fs = require("fs");
const sgMail = require("@sendgrid/mail");

var testEmail = fs.readFileSync("./index-compiled.html", "utf-8");

//console.log(testEmail);

sgMail.setApiKey(
  "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"
);
const msg = {
  to: "rust.stephen@gmail.com",
  from: "test@example.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: testEmail
};
sgMail.send(msg);
