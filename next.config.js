const path = require("path");

module.exports = {
  images: {
    unoptimized: true,
    domains: ["drive.google.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    emailId: process.env.OFFICIAL_EMAIL_ID,
    mobileNo: process.env.MOBILE_NO,
  },
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true
    }
  }
};
