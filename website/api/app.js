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
    <table width='100%' style='background: white; text-align:center'>
      <tr>
        <td>
          <table width='100%'>
            <tr>
              <td>
                  <h1 style='background-color: #3386ff;color: #fff;min-width: 100%;font-weight: 400;padding: 10px;font-size: 20px;'>Asociacion Mutual Primero de Noviembre</h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table table cellspacing='0' cellpadding='10' border='0' width='100%' align='center'>
            <tr style='border:0;border-collapse:collapse;width:100%;margin: 0 auto;background-color: #000;color: #fff; min-width: 100%;'>
              <th>Email</th>
              <th>Nombre</th>
              <th>Empresa</th>
              <th>Telefono</th>
              <th>Mensaje</th>
              <th>Soy Empresa o Individuo</th>
            </tr>
            <tr>
              <td>${req.body.email}</td>
              <td>${req.body.name}</td>
              <td>${req.body.company}</td>
              <td>${req.body.phone}</td>
              <td>${req.body.message}</td>
              <td>${req.body.checked}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
