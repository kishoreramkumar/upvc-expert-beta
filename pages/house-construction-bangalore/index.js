import { useState, useEffect } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import LandingSection from "../../components/LandingSection/LandingSection";
import ConstructionPackages from "../../components/ConstructionPackages/ConstructionPackages";
import PackageDetails from "../../components/PackageDetails/PackageDetails";
import Calculator from "../../components/Calculator/Calculator";
import ConstructionServiceAd from "../../components/ConstructionServiceAd/ConstructionServiceAd";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Testimonials from "../../components/Testimonials/Testimonials";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../components/Footer/Footer";
import {
  landingPageConstant,
  constructionPackagesData,
  pageTitles,
  howItWorks,
  constructionAdTitle,
  whyChooseUsList,
  packageAccordianData,
  landingPageOpacity,
  faqQuestions,
  testimonialList,
  seoContent,
} from "../../constants/construction.constant";
import FAQ from "../../components/FAQ/FAQ.index";

import Head from "next/head";
import LPPackages from "../../components/LPPackages/LPPackages";
import SeoContent from "../../components/SeoContent/SeoContent";

export default function Construction() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const onSelectPackge = (el) => {
    window.location.hash = el?.packageName?.toLowerCase()?.split(" ")?.join("");
    setSelectedPackage(el.packageName.toLowerCase()?.split(" ")?.join(""));
  };

  useEffect(() => {
    const packageName = window.location.hash.replace("#", "");
    setSelectedPackage(packageName);
  }, []);

  return (
    <>
      <HomeLayout>
        <Head>
          <title>
            Best Construction Company in Bangalore | House Construction Packages
            Starts at Rs 1599/sqft
          </title>
          <meta
            name="description"
            content="Best Qaulity Construction Company"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="canonical"
            href="https://sqft.expert/house-construction-bangalore"
          />
        </Head>
        <LandingSection
          data={landingPageConstant}
          opactiy={landingPageOpacity}
        />
        <LPPackages
          constructionPackagesData={constructionPackagesData}
          title={pageTitles.ConstructionPackages}
          selectPackage={onSelectPackge}
        />
        <PackageDetails
          packageAccordianData={packageAccordianData}
          title={pageTitles.PackageDetails}
          selectedPackage={selectedPackage}
        />
        <HowItWorks title={pageTitles.HowItWorks} data={howItWorks} />
        <Calculator
          title={pageTitles.Calculator}
          packageAccordianData={packageAccordianData}
        />
        <RecentProjects title={pageTitles.RecentProjects} />
        <WhyChooseUs
          title={pageTitles.WhyChooseUs}
          whyChooseUsList={whyChooseUsList}
        />
        <ConstructionServiceAd
          data={landingPageConstant.companyInsight}
          title={constructionAdTitle}
          sideBanner={"/assets/images/HouseConstructionSideImage.svg"}
        />
        <Testimonials
          title={pageTitles.Testimonials}
          testimonialList={testimonialList}
        />
        {/* <Calculator /> */}
        <FAQ data={faqQuestions} title={pageTitles.Faq} />
        <SeoContent data={seoContent} />
        <Footer />
      </HomeLayout>
    </>
  );
}
