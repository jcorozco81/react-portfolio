const router = require('express').Router();
var nodemailer = require('nodemailer');





router.post('/contact', async (req, res) => {
    try {
// console.log(req.body);

        let transporter = nodemailer.createTransport({
            host: "smtp.mail.wowway.com", //"smtp.mail.wowway.com",
            // host: "smtpauth.mail.wowway.com/",

            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.EMAIL_USER, // generated ethereal user
              pass: process.env.EMAIL_PASSWORD, // generated ethereal password
            },
          });
          
          var mailOptions = {
            from: '"Portfolio Message" <jcorozco@wowway.com>',
            to: 'jcorozco@gmail.com',
            cc: 'jcorozco@wowway.com',
            subject: 'Portfolio: Contact-me new message:',
            text: `From: ${req.body.fullname}<${req.body.email}> Message Body: ${req.body.body}.`,
            html: `
            <h2>New message from:</h2>
            <h4>Name: ${req.body.fullname}</h4>
            <h4>Email: ${req.body.email}</h4>
            <p>${req.body.body}</p>`, // html body
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
              console.log(info.envelope);
              console.log(info.messageId);

            }
          });




    
        res.status(200).json(req.body);

      } catch (err) {
        res.status(400).json(err);
      }
    });


    module.exports = router;