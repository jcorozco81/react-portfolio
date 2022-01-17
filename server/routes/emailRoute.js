const router = require('express').Router();
var nodemailer = require('nodemailer');





router.post('/contact', async (req, res) => {
    try {


          let transporter = nodemailer.createTransport({
            host: "smtp.mailgun.org", 
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: process.env.MAILGUN_SMTP_LOGIN, // generated ethereal user
              pass: process.env.MAILGUN_SMTP_PASSWORD, // generated ethereal password
            },
          });
          

          var mailGunOptions = {
            from: '"Portfolio Message" <postmaster@sandbox18733c83e98e444ab4d5be9986a7cc79.mailgun.org>',
            to: 'jcorozco@gmail.com',
            cc: '',
            subject: 'Portfolio: Contact-me new message:',
            text: `From: ${req.body.fullname}<${req.body.email}> Message Body: ${req.body.body}.`,
            html: `
            <h2>New message from:</h2>
            <h4>Name: ${req.body.fullname}</h4>
            <h4>Email: ${req.body.email}</h4>
            <p>${req.body.body}</p>`, // html body
          };
          
          transporter.sendMail(mailGunOptions, function(error, info){
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