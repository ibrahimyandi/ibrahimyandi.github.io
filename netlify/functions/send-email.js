const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Çevresel değişken olarak e-posta adresi
      pass: process.env.EMAIL_PASS  // Uygulama şifresi
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
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
    console.error('E-posta gönderilirken hata oluştu:', error); // Hata mesajını loglayın
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'E-posta gönderilemedi' })
    };
  }
};
