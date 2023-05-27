// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SMTPClient } from "emailjs";
const handler = (req, res) => {
  const { number } = req.body;
  // console.log(process.env)

  const nodemailer = require("nodemailer");
  const { google } = require("googleapis");
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    "1071233002725-6q1bph6vk5156buu036jh7bhrhnpccq2.apps.googleusercontent.com", // ClientID
    "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", // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token:
      "1//04SBSurIF-fxuCgYIARAAGAQSNwF-L9IrrOfjkbBBv75vw0PZ9T72XvYdTzl-pimbrwuL6-jzW6eV_RPMq4EIOeASWdOVi-3SMLk",
  });
  const accessToken = oauth2Client.getAccessToken();

  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL_ID,
      clientId:
        "1071233002725-6q1bph6vk5156buu036jh7bhrhnpccq2.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04SBSurIF-fxuCgYIARAAGAQSNwF-L9IrrOfjkbBBv75vw0PZ9T72XvYdTzl-pimbrwuL6-jzW6eV_RPMq4EIOeASWdOVi-3SMLk",
      accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOptions = {
    generateTextFromHTML: true,
    html: `${req.body.data}`,
    from: process.env.EMAIL_ID,
    to: process.env.OFFICIAL_EMAIL_ID,
    subject: `Contact ${number} who has asked for callback`,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    error
      ? res.status(202).end(
          JSON.stringify({
            message: error,
          })
        )
      : res.status(200).end(
          JSON.stringify({
            message: response,
          })
        );
    smtpTransport.close();
  });

  // const client = new SMTPClient({
  //   user: process.env.EMAIL_ID,
  //   password: process.env.EMAIL_PASS,
  //   host: "smtp.gmail.com",
  //   ssl: true,
  // });

  // try {
  //   console.log(
  //     "env constant",
  //     process.env.EMAIL_ID,
  //     process.env.OFFICIAL_EMAIL_ID,
  //     process.env.EMAIL_PASS
  //   );
  //   const message = await client.sendAsync({
  //     text: `${req.body.data}`,
  //     from: process.env.EMAIL_ID,
  //     to: process.env.OFFICIAL_EMAIL_ID,
  //     subject: `Contact ${number} who has asked for Construction Cost`,
  //   });
  //   res.status(200).end(
  //     JSON.stringify({
  //       message: message,
  //     })
  //   );
  // } catch (e) {
  //   res.status(400).end(JSON.stringify({ message: e }));
  //   return;
  // }
};

export default handler;
