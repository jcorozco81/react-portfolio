var nodemailer = require("nodemailer");
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

const { Message } = require(`../models`);

const resolvers = {
  Query: {
    messages: async () => {
      return await Message.find({});
    },
  },

  // reference
  // Mutation: {
  //   addMessage: async (parent, { fullname, email, body }) => {
  //     const message = await Message.create({ fullname, email, body });
  //     console.log(message);
  //     return message;
  //   },
  // },

  Mutation: {
    addMessage: async (parent, { fullname, email, body }) => {
      console.log(fullname, email, body);
      let emailID;
      var mailGunOptions = {
        from: '"Portfolio Message"<postmaster@sandbox18733c83e98e444ab4d5be9986a7cc79.mailgun.org>',
        to: "jcorozco@gmail.com",
        cc: "",
        subject: "Portfolio - Contact-me new message:",
        text: `From: ${fullname}<${email}> Message Body: ${body}.`,
        html: `
      <h2>New message from:</h2>
      <h4>Name: ${fullname}</h4>
      <h4>Email: ${email}</h4>
      <p>${body}</p>`, // html body
      };

      await transporter.sendMail(mailGunOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
          console.log(info.envelope);
          console.log(info.messageId);
        }
      });

      const message = await Message.create({ fullname, email, body });
      console.log(message);
      return message;
    },
  },
};
module.exports = resolvers;
