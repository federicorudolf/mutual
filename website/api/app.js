const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
//Contact form
const app = express();

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});
app.get('/', (req, res)=> {
  console.log('Admin page');
});

app.post('/mailing', (req, res) => {
  const output = `
    <p> You have a new contact request </p>
    <h3> Contact Details </h3>
    <ul>
      <li>
        Email: ${req.body.email}
      </li>
      <li>
        Name: ${req.body.name}
      </li>
      <li>
        Company: ${req.body.company}
      </li>
      <li>
        Phone: ${req.body.phone}
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
      },
      tls: {rejectUnauthorized: false}
  });
  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Unidad Primero de Noviembre" <m.biasola@gmail.com>',
      to: 'matias.biasola.zani@gmail.com',
      subject: 'Trying to sent an email',
      text: 'Take a look at this',
      html: output
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.send({ message: 'error'});
      } else {
        res.send({ message: 'success'});
      }
  });
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server Started..");
});
