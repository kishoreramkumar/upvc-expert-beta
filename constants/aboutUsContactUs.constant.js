import { convertMobileNo } from "../utils";

export const contactUsInfoDetails = [
    {
      imgLink: "/assets/images/phoneIcon.svg",
      title: "Call us",
      subTitle: [
        {
          label: convertMobileNo(process.env.mobileNo),
          path: `tel:${convertMobileNo(process.env.mobileNo)}`,
        },
      ],
    },
    {
      imgLink: "/assets/images/phoneIcon.svg",
      title: "Email",
      subTitle: [
        { label: process.env.emailId, path: `mailto:${process.env.emailId}` }
      ],
    },
    {
      imgLink: "/assets/images/phoneIcon.svg",
      title: "Office Address",
      subTitle: [{ label: "#217, First Floor, 10th A Main, HRBR Layout, 1st Block, Kalyan Nagar, Bangalore, Karnataka 560043" }],
    },
  ];