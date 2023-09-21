const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

app.use(express.json());
const cors = require('cors');

app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'ac.ardaceylan@gmail.com',
    pass: 'pburcwsfdipqgzpe',
  },
});

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const mailOptions = {
      from: 'ac.ardaceylan@gmail.com',
      to: 'cv.ardaceylan@gmail.com',
      subject: 'New Contact Form Message',
      text: `From: ${name}\nE-mail: ${email}\nMessage: ${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
