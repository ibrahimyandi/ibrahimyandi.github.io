const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ibrahimyandi@gmail.com',
      pass: 'elame19957371'
    }
  });

  const mailOptions = {
    from: 'ibrahimyandi@gmail.com',
    to: 'yandi.ibrahim@ogr.ahievran.edu.tr',
    subject: 'Site Ziyareti',
    text: 'Birisi siteyi ziyaret etti!'
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'E-posta gönderildi' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'E-posta gönderilemedi' })
    };
  }
};
