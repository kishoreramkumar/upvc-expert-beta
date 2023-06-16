import { convertMobileNo } from "../utils";

export const landingPageOpacity = 0.6;

export const landingPageConstant = {
  title: `House Construction Company in Bangalore <span class="primary"></span>`,
  description: `Quality Buildings Come from Experts, and We solve all problems by our Best Design Ideas. We are an best <h1 class="inherit">construction company in bangalore</h1>`,
  coverImage: "/assets/images/SitRelaxConstructyourDreamHomeWebSiteSlidingCoverPage.jpg",
  mobileCoverImage: "/assets/images/SitRelaxConstructyourDreamHomeWebSiteSlidingMobileCoverPage.jpg",
  companyInsight: [
    {
      name: "Delivered Units",
      icon: "/assets/images/flipCard/home.svg",
      count: "289",
      suffix: "+",
    },
    {
      name: "Plan Approvals",
      icon: "/assets/images/flipCard/planning.svg",
      count: "549",
      suffix: "+",
    },
    {
      name: "Structural Designs",
      icon: "/assets/images/flipCard/archiDesign.svg",
      count: "789",
      suffix: "+",
    },
  ],
};

export const expertiseCardConstant = [
  {
    img: "/assets/images/flipCard/home.svg",
    title: "House<br/>Construction",
    desc: "Residential house construction and commercial construction with high standards",
    path: "/house-construction-bangalore",
  },
  {
    img: "/assets/images/flipCard/interiorDesigning.svg",
    title: "Interior",
    desc: "Designed by experts",
    path: "/home-interior-design-bangalore",
  },
  {
    img: "/assets/images/flipCard/planning.svg",
    title: "Plan<br/>Approvals",
    desc: "Get BBMP plan approvals in a click",
    path: "/house-plan-approvals-bangalore",
  },
  {
    img: "/assets/images/flipCard/archiDesign.svg",
    title: "ARCHITECTURE & STRUCTURAL DESIGN",
    desc: "We provide floor plan, 3D elevation, structural design from Sqft. expert",
    path: "/architectural-design-bangalore",
  },
];

export const productDetails = [
  {
    name: "Construction",
    products: [
      {
        name: "Basic Package",
        price: "1659/sq.ft",
        discountedPrice: "1599/sq.ft",
        image: "packages/Basic_Package_Sqft.expert.svg",
        url: "/house-construction-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
      {
        name: "Luxury Package",
        price: "1859/sq.ft",
        discountedPrice: "1769/sq.ft",
        image: "packages/Luxury_Package_Sqft.expert.svg",
        url: "/house-construction-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
      {
        name: "Elite Package",
        price: "2059/sq.ft",
        discountedPrice: "1959/sq.ft",
        image: "packages/Premium_Package_Sqft.expert.svg",
        url: "/house-construction-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
      {
        name: "Supreme Package",
        price: "2359/sq.ft",
        discountedPrice: "2259/sq.ft",
        image: "packages/Supreme_Package_Sqft.expert.svg",
        url: "/house-construction-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
    ],
  },
  {
    name: "Interior Design",
    products: [
      {
        name: "1BHK House Interior",
        price: "2,29,999",
        discountedPrice: "1,49,999",
        image: "1BHKInteriorsSqftExpert.jpeg",
        url: "/home-interior-design-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
      {
        name: "2BHK House Interior",
        price: "3,29,999",
        discountedPrice: "2,39,999",
        image: "2BHKInteriorsSqftExpert.jpeg",
        url: "/home-interior-design-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
      {
        name: "3BHK House Interior",
        price: "4,29,999",
        discountedPrice: "3,49,999",
        image: "3BHKInteriorsSqftExpert.jpeg",
        url: "/home-interior-design-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
      {
        name: "Customise Interiors",
        price: "",
        discountedPrice: "Ask",
        type: "button",
        image: "CustomizeInteriorsSqftExpert.jpeg",
        url: "/home-interior-design-bangalore",
        packages: [
          {
            name: "Floor Plans + Structural",
          },
          {
            name: "Standard Flooring",
          },
          {
            name: "Vitrified Tiles Flooring",
          },
        ],
      },
    ],
  },
  {
    name: "Plan Approval",
    products: [
      {
        name: "Panchayati Approvals",
        price: 8000,
        discountedPrice: 5000,
        image: "PlanApproval.jpg",
        url: "/house-plan-approvals-bangalore",
        packages: [
          {
            name: "Specifications",
            data: ["House Plan Blue Prints", "6 Copies of Blue Prints"],
          },
        ],
      },
      {
        name: "BBMP Approvals",
        price: 12000,
        discountedPrice: 8000,
        image: "PlanApproval.jpg",
        url: "/house-plan-approvals-bangalore",
        packages: [
          {
            name: "Specifications",
            data: ["House Plan Blue Prints", "6 Copies of Blue Prints"],
          },
        ],
      },
    ],
  },
  {
    name: "Architecture",
    products: [
      {
        name: "Basic Archi Package",
        price: "25/sq.ft",
        discountedPrice: "15/sq.ft",
        image: "Architect.jpg",
        url: "/architectural-design-bangalore",
        productData: [
          {
            type: "Specifications",
            data: ["Floor Plan", "3d Elevation"],
          },
        ],
      },
      {
        name: "Luxury Archi Package",
        price: "32/sq.ft",
        discountedPrice: "25/sq.ft",
        image: "Architect.jpg",
        url: "/architectural-design-bangalore",
        productData: [
          {
            type: "Specifications",
            data: [
              "Floor Plan",
              "3d Elevation",
              "Structural Drawings",
              "Site Working Drawings",
            ],
          },
        ],
      },
      {
        name: "Elite Archi Package",
        price: "35/sq.ft",
        discountedPrice: "45/sq.ft",
        image: "Architect.jpg",
        url: "/architectural-design-bangalore",
        productData: [
          {
            type: "Specifications",
            data: [
              "Floor Plan",
              "3d Elevation",
              "Structural Drawings",
              "Site Working Drawings",
              "Electrical Drawings",
              "Plumbing Drawings",
            ],
          },
        ],
      },
      {
        name: "Supreme Archi Package",
        price: "48/sq.ft",
        discountedPrice: "60/sq.ft",
        image: "Architect.jpg",
        url: "/architectural-design-bangalore",
        productData: [
          {
            type: "Specifications",
            data: [
              "Floor Plan",
              "3d Elevation",
              "Structural Drawings",
              "Site Working Drawings",
              "Electrical Drawings",
              "Plumbing Drawings",
              "BOQ(Billing of Quantities",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Structural",
    products: [
      {
        name: "500 sqft to 2000 sqft",
        price: "15/sq.ft",
        discountedPrice: "7/sq.ft",
        image: "Structural.jpg",
        url: "/structural-consultants-bangalore",
        packages: [
          {
            type: "Specifications",
            data: [
              "Excavation Layout",
              "Column working Layout",
              "Footing Layout",
              "Plinth Beam Layout",
              "Footing Reinforcement Schedule",
              "Column Reinforcement Schedule",
              "UG Sump Details",
              "Two Visits",
            ],
          },
        ],
      },
      {
        name: "2001 to 20000",
        price: "10/sq.ft",
        discountedPrice: "5/sq.ft",
        image: "Structural.jpg",
        url: "/structural-consultants-bangalore",
        packages: [
          {
            type: "Specifications",
            data: [
              "Excavation Layout",
              "Column working Layout",
              "Footing Layout",
              "Plinth Beam Layout",
              "Footing Reinforcement Schedule",
              "Column Reinforcement Schedule",
              "UG Sump Details",
              "Four Visits",
            ],
          },
        ],
      },
      {
        name: "Above 20000",
        price: "7/sq.ft",
        discountedPrice: "3.5/sq.ft",
        image: "Structural.jpg",
        url: "/structural-consultants-bangalore",
        packages: [
          {
            type: "Specifications",
            data: [
              "Excavation Layout",
              "Column working Layout",
              "Footing Layout",
              "Plinth Beam Layout",
              "Footing Reinforcement Schedule",
              "Column Reinforcement Schedule",
              "UG Sump Details",
              "Five Visits",
            ],
          },
        ],
      },
      {
        name: "Peer Structural Review",
        price: "6/sq.ft",
        discountedPrice: "3/sq.ft",
        image: "Structural.jpg",
        url: "/structural-consultants-bangalore",
        packages: [
          {
            type: "Specifications",
            data: [
              "Excavation Layout",
              "Column working Layout",
              "Footing Layout",
              "Plinth Beam Layout",
              "Footing Reinforcement Schedule",
              "Column Reinforcement Schedule",
              "UG Sump Details",
              "Six Visits",
            ],
          },
        ],
      },
    ],
  },
];

export const tabs = [
  "Construction",
  "Interior Design",
  "Plan Approvals",
  "Architecture",
  "Structural",
];

// Disallow: /interiors/
// Disallow: /plan-approval/
// Disallow: /architecture/
// Disallow: /structural/
// Disallow: /about-us/
// Disallow: /contact-us/
export const navBarMenu = (mobileNo) => [
  {
    label: "windows",
    path: "/windows",
  },
  {
    label: "Doors",
    path: "/doors",
  },
  // {
  //   label: "Services",
  //   path: "",
  //   navArr: [
  //     {
  //       label: "Interiors",
  //       path: "/home-interior-design-bangalore",
  //     },
  //     {
  //       label: "Architecture",
  //       path: "/architectural-design-bangalore",
  //     },
  //     {
  //       label: "Plan Approval",
  //       path: "/house-plan-approvals-bangalore",
  //     },
  //     {
  //       label: "Structural Design",
  //       path: "/structural-consultants-bangalore",
  //     },
  //   ],
  // },
  {
    label: "About us",
    path: "about-us",
  },
  {
    label: "Blog",
    path: "/blogs",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
  {
    label: convertMobileNo(mobileNo),
    path: `tel:${convertMobileNo(mobileNo)}`,
  },
];

export const footerDetails = (mobileNo) => {
  return {
    quickLinks: [
      { label: "Home", path: "/" },
      { label: "Construction", path: "/house-construction-bangalore" },
      { label: "Interiors", path: "/home-interior-design-bangalore" },
      { label: "Architecture", path: "/architectural-design-bangalore" },
      { label: "Plan Approval", path: "/house-plan-approvals-bangalore" },
      { label: "Structural Design", path: "/structural-consultants-bangalore" },
    ],
    ImpLinks: [
      { label: "Blogs", path: "/blogs" },
      { label: "About us", path: "/about-us" },
      { label: "Contact Us", path: "/contact-us" },
      { label: "Terms And Conditions", path: "/" },
    ],
    contactUs: [
      {
        label: convertMobileNo(mobileNo),
        path: `tel:${convertMobileNo(mobileNo)}`,
      },
      { label: process.env.emailId, path: `mailto:${process.env.emailId}` },
    ],
  };
};

export const testimonialList = [
  {
    name: "Bharath Ravilla",
    label:
      "I was convinced with their discounts but when I met the Sqft Expert Team, only the company is not ready to give huge discounts and they explained that 'We cannot compromise on the quality, by giving huge discounts'",
  },
  {
    name: "kailash jain",
    label:
      "When I talk about House construction, we received very clean & transparent quotation. The team has explained to me each and every point mentioned in the quotation.",
  },
  {
    name: "Kishore Ramkumar",
    label:
      "Honest, timely, trustworthy,very knowledgeable and friendly. I would definitely recommend this company to family and friends.",
  },
  {
    name: "Packeer Mydeen",
    label:
      "Best construction company, they helped me to make my thought convert into design and beautifully executed it",
  },
];

export const whyChooseUsList = [
  {
    imgLink: "whyChooseUs/WCU1.svg",
    title: "Money Safety",
    subTitle:
      "We have micro stages that help customers to pay in smaller amounts.",
  },
  {
    imgLink: "housePlan/DedicatedTeam.svg",
    title: "Dedicated Team",
    subTitle:
      "Dedicate A separate Team of Experts will be allocated to handle the site till end",
  },
  {
    imgLink: "whyChooseUs/WCU2.svg",
    title: "Quality Guaranteed",
    subTitle: "Our Engineers will perform 310 Quality Checks",
  },
  {
    imgLink: "whyChooseUs/WCU4.svg",
    title: "No Delays",
    subTitle: "We work on the Schedules and will be delivered",
  },
];

export const recentProjectImages = [
  {
    image: "recentProject/AnushaHouseElevationSqftExpert.jpg",
    title: "Anusha House Elevation",
  },
  {
    image: "recentProject/DeepikaHouseElevationSqftExpert.jpg",
    title: "Deepika House Elevation",
  },
  {
    image: "recentProject/SrinivasHomeElevationSqftExpert.jpg",
    title: "Srinivas Home Elevation",
  },
  {
    image: "recentProject/SushanthHouseElevationSqftExpert.jpg",
    title: "Sushanth House Elevation",
  },
];

export const constructionAdTitle = `We Provide Quality <br/><h2 class="inherit">House Construction</h2>`;

export const BannerWithLabelConstant = {
  aboutUs: {
    title: "About Us",
    subTitle: `It all started with an idea, that changed the way we look at construction today. We started with the aim of making the construction simple, transparent and reliable`,
    coverImage: "/assets/images/ContactAboutUsImg.png",
    mobileCoverImage: "/assets/images/ContactAboutUsImg.png",
  },
  contactUs: {
    title: "Get in Touch With Our Technical Experts",
    subTitle: `We take our commitments to our users seriously. Reach us For any complaint or query.`,
    coverImage: "/assets/images/ContactAboutUsImg.png",
    mobileCoverImage: "/assets/images/ContactAboutUsImg.png",
  },
};

export const MissionVisionConstant = {
  mission: {
    headingLabel: "Mission",
    mainTitle:
      "We toil to achieve the vision by hard work and friendly service. Buildhood Infratech houses a bunch of talents that bring value and change to the organization. Our experts are go-getters and never stop for anything until they achieve the goal. We go the extra mile and make things happen.",
    list: [
      {
        title: "Friendly working environment",
        subContent:
          "Our company is a great platform to learn and grow in a career. We create a friendly and inspired workplace for them to invent and implement unique ideas into the construction and design areas.",
      },
      {
        title: "Updated with latest technology and ideas",
        subContent:
          "We are equipped with the latest technology that makes work easy and faster. Our team is updated with the designs and construction ideas that are trending worldwide. Researching and adopting the latest things has become our daily activity.",
      },
      {
        title: "Time Management",
        subContent:
          "As promised to our customers, we ensure the project is completed on time as per the design with the quality intact. On-time project completion builds and enhances the trust between us and customers.",
      },
      {
        title: "Regular check",
        subContent:
          "Our dedicated team regularly checks the construction work at every stage to make sure everything is going as per the finalized design. The regular check assure that we are moving in the right direction of project completion.",
      },
    ],
  },
  vision: {
    headingLabel: "Vision",
    mainTitle:
      "“Focused on delivering quality, modish, affordable price, and professional service” <br/>Our vision is to build the house for pleasant living. Any good things we construct end up building us. We are urged to render quality and the finest finishing touch for the long-lasting durability of the house.",
    list: [
      {
        title: "Quality",
        subContent:
          "What goes into the construction of the house is vital for the company. When it comes to material and design we never make any other choice other than going with the quality. Our Quality work remains forever and ever as it is our habit.",
      },
      {
        title: "Unique and modern",
        subContent:
          "To deploy robust strategies in everything we do that make us look unique and modern in the competitive world. We strive to make every house construction value-added and unique in style. We solve complex problems easily and make them look simple.",
      },
      {
        title: "Affordable price",
        subContent:
          "To raise the standard of living in our country, we are aimed to construct a luxurious house at an affordable price even for middle-class people.",
      },
      {
        title: "Professional customer service",
        subContent:
          "We keep ourselves reachable 24/7 for any queries to solve. For every customer, we offer a construction service that comes with 5 years of warranty. We are satisfied when our customers are happy and peaceful.",
      },
    ],
  },
};

export const packageAccordianData = [
  {
    packageName: "Basic Package",
    amt: 1559,
    productData: [
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
    ],
  },
  {
    packageName: "Elite Package",
    amt: 1559,
    productData: [
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
    ],
  },
  {
    packageName: "Luxury Package",
    amt: 1559,
    productData: [
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
    ],
  },
  {
    packageName: "Supreme Package",
    amt: 1559,
    productData: [
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Windows",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Door",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Bathroom",
        data: [
          "Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrs Overhead Tank",
          "Sintex Double Layered 1000 ltrsOverhead Tank",
          "Sintex Double Layered 1000 ltrs",
        ],
      },
      {
        type: "Structure",
        data: [
          "Overhead Tank(Sintex Double Layered 1000 ltrs)",
          "Underground Sump(4000 litres)",
          "Staircase Railing(MS Railing)",
          "Underground sump shall be provided with block masonry. PCC bed conc rete of minimum 125mm thickness shall be provided at the bottom. The inside of the wall shall be provided with chicken mesh plastering. MS cov er plate of dimension 600 mm x 600 mm shall be provided. Water Proofi ng chemical be applied to mortar for plastering.",
          "Parapet wall shall be provided with height of 3 feet and 150mm thick. B uttress shall be provided at every 3 m (10 feet) of length.",
          "Weather proof course shall be provided at terrace with one coat of wate rproofing agent of Dr. Fixit brand or equivalent.",
          "Staircase Railing of Mild Steel shall be provided worth Rs. 130 per sqft fo r material, painting, welding, fixing and finishing. (MS Railing)",
          "Govt. Taxes Extra",
          "Front elevation of the building shall include basic plastering and external painting with no cladding/ grooves/ cuts/ projections or any other pure aesthetic elements.",
          "Platform for overhead tank is not included in the package and shall be c harged based on the area and materials selected.",
        ],
      },
    ],
  },
];

export const faqQuestions = {
  title: "Frequently Asked Questions",
  questions: [
    {
      title: "What is the average cost of constructing a home in Bangalore?",
      description: `The cost of constructing a house in bangalore is completely dependent on two things<br/>
      Area you wanted to construct<br/>
      Let us assume that you wanted to build a house in 30X40 i.e. 1200 sqft.<br/>
      Number of Floor you wanted to construct.<br/>
      Now you wanted to construct a G+1 house in bangalore<br/>
      Cost of construction in Bangalore<br/><br/>
      
      Ground Floor<br/>
      GF Parking - 220 sqft (We can utilise this area for car parking and two bikes)<br/>
      GF Built-Up Area - 740 sqft (We can utilise this area for Big 1 BHK house or Small 2 BHK and can rent out in bangalore)<br/><br/>
      
      First Floor<br/>
      FF Built-up Area - 960 sqft (We can construct 2 BHK house along with balcony)<br/><br/>
      
      Approximate cost if we consider the basic package is 25L to 30L in bangalore 
      `,
    },
    {
      title: "What is the construction cost per sqft in Bangalore?",
      description: `The construction cost per sqft in Bangalore starts from Rs 1559/sqft till Rs 2150/sqft.`,
    },
    {
      title: "How much does it cost to build a 30X40 house in Bangalore?",
      description: `As it would cost to construct a 30X40 i.e. 1200 sqft in bangalore is Rs 25 Lakhs to Rs 30 Lakhs.`,
    },
    {
      title: "How much does it cost to build a 3 floor house in Bangalore?",
      description: `Generally we consider the 3 floors in terms of G+2 buildings in bangalore. To build the G+2 floors with the site area of 30X40 i.e. 1200 sqft<br/><br/>

      The approximate cost to construct a G+2 floors in Bangalore is Rs 45 Lakhs to 50 Lakhs.`,
    },
    {
      title: "How much does it cost to build a 20x30 house in Bangalore?",
      description: `The cost to build a 20X30 house in bangalore i.e. 600 sqft plot area for only ground floor is around Rs 10 Lakhs. If you wanted to build G+1 floors then it would cost to build Rs 20 Lakhs.`,
    },
    {
      title: "Is 4th floor construction allowed in Bangalore?",
      description: `Yes, It is allowed to construct the fourth floor in Bangalore, but it completely depends on your area.`,
    },
    {
      title:
        "How much does it cost to build a 30x40 duplex house in bangalore?",
      description: `To construct a 30X40 duplex house in Bangalore would depend on your requirement of the parking.<br/>
      I.e <br/>
        1. If you opt for 2 car parking and one bike then the cost to construct a house would be approximately Rs 25 Lakhs to 30 Lakhs<br/>
        2. If you opt for 1 car parking and one bike then the cost to construct a house would be approximately Rs 30 Lakhs to 35 Lakhs<br/>
      `,
    },
  ],
};

export const pageTitles = {
  ConstructionPackages: "House & Building Construction Packages - Bangalore",
  PackageDetails: "Compare The House Construction Package – Bangalore",
  HowItWorks: "How We works",
  Calculator: "Know Your Construction Cost – Bangalore",
  RecentProjects: "Sqft.Expert House Construction Projects - Bangalore",
  WhyChooseUs: "Why Choose Sqft.Expert House Construction",
  Testimonials: "Sqft.Expert House Construction Reviews – Bangalore",
  Faq: `Sqft.Expert House Construction FAQ’s - Bangalore`,
};

export const seoContent = [
  {
    title: "Best Construction Company in Bangalore",
    content: "We are the house construction company in bangalore provides quality homes with On-time delivery. Sqft.expert is the best building construction company in bangalore",
    expandContent: "",
  },
];
export const constructionPackagesData = [
  {
    packageName: "Basic Package",
    amt: 1599,
    prefix: "Rs.",
    suffix: "/sq.ft",
    img: "lp-construction/DeluxPackage.svg",
  },
  {
    packageName: "Luxury Package",
    amt: 1769,
    prefix: "Rs.",
    suffix: "/sq.ft",
    img: "lp-construction/LuxuryPackage.svg",
  },
  {
    packageName: "Elite Package",
    amt: 1959,
    prefix: "Rs.",
    suffix: "/sq.ft",
    img: "lp-construction/PremiumPackage.svg",
  },
  {
    packageName: "Supreme Package",
    amt: 2259,
    prefix: "Rs.",
    suffix: "/sq.ft",
    img: "lp-construction/SupremePackage.svg",
  },
];

