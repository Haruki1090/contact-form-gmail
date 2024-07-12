// import nodemailer from 'nodemailer';
// import { google } from 'googleapis';

// const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//   'YOUR_CLIENT_ID', // クライアントID
//   'YOUR_CLIENT_SECRET', // クライアントシークレット
//   'https://developers.google.com/oauthplayground' // リダイレクトURI
// );

// oauth2Client.setCredentials({
//   refresh_token: 'YOUR_REFRESH_TOKEN',
// });

// async function sendEmail() {
//   const accessToken = await oauth2Client.getAccessToken();

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       type: 'OAuth2',
//       user: 'YOUR_EMAIL@gmail.com',
//       clientId: 'YOUR_CLIENT_ID',
//       clientSecret: 'YOUR_CLIENT_SECRET',
//       refreshToken: 'YOUR_REFRESH_TOKEN',
//       accessToken: accessToken.token,
//     },
//   });

//   const mailOptions = {
//     from: 'YOUR_EMAIL@gmail.com',
//     to: 'RECIPIENT_EMAIL@gmail.com',
//     subject: 'Hello from Node.js',
//     text: 'Hello world!',
//     html: '<b>Hello world!</b>',
//   };

//   const result = await transporter.sendMail(mailOptions);
//   return result;
// }

// sendEmail()
//   .then(result => console.log('Email sent...', result))
//   .catch(error => console.log(error.message));
