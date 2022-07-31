const router = require("express").Router();
var nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();

let transporter = nodemailer.createTransport({
  host: "smtp.mailgun.org",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.MAILGUN_SMTP_LOGIN, // generated ethereal user
    pass: process.env.MAILGUN_SMTP_PASSWORD, // generated ethereal password
  },
});

router.post("/contact", async (req, res) => {

  console.log(req);
  console.log(req.body);
  const requestURL = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET_KEY}&response=${req.body.token}`;

  var mailGunOptions = {
    from: '"Portfolio Message"<postmaster@sandbox18733c83e98e444ab4d5be9986a7cc79.mailgun.org>',
    to: "jcorozco@gmail.com",
    cc: "",
    subject: "Portfolio - Contact-me new message:",
    text: `From: ${req.body.fullname}<${req.body.email}> Message Body: ${req.body.body}.`,
    html: `
        <h2>New message from:</h2>
        <h4>Name: ${req.body.fullname}</h4>
        <h4>Email: ${req.body.email}</h4>
        <p>${req.body.body}</p>`, // html body
  };

  const searchData = {
    url: requestURL,
    method: "POST",
    // body: JSON.stringify(req.body.token, process.env.SECRET_KEY_B),
    // headers: { "Content-Type": "application/json" },
  };
  try {
    console.log(searchData);
    const response = await axios(searchData);
    console.log(response);

    if (response.status === 200) {
      console.log("recaptcha success? " + response.statusText);

      await transporter.sendMail(mailGunOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          console.log(info.envelope);
          console.log(info.messageId);
          res.send(info);
        }
      });
    } else {
      alert("recaptcha failed:" + response.statusText);
    }
  } catch (err) {}
});

module.exports = router;
