const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

//Contact form

const app = express();
app.get('/', (req, res)=> {
  console.log('Admin page');
});

app.post('/send', (req, res) => {
  const output = `
    <p> You have a new contact request </p>
    <h3> Contact Details </h3>
    <ul>
      <li>
        Name: ${req.body.name}
      </li>
      <li>
        Email: ${req.body.email}
      </li>
      <li>
        Company: ${req.body.company}
      </li>
      <li>
        Phone: ${req.body.phone}
      </li>
      <li>
        Checkbox: ${req.body.checked}
      </li>
    </ul>
  `;

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'm.biasola@gmail.com', // generated ethereal user
          pass: 'Googlenexus1991' // generated ethereal password
      }

  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Matias Biasola" <m.biasola@gmail.com>',
      to: 'm.biasola@gmail.com, matias.biasola.zani@gmail.com',
      subject: 'Trying to sent an email',
      text: 'Take a look at this',
      html: output
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);

      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  });

  console.log(req.body);
});

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.listen(3000, () => {
  console.log("Server Started..");
});
