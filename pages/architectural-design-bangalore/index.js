import { useState, useEffect } from "react";
import HomeLayout from "../../Layout/HomeLayout";
import LandingSection from "../../components/LandingSection/LandingSection";
import ConstructionPackages from "../../components/ConstructionPackages/ConstructionPackages";
import PackageDetails from "../../components/PackageDetails/PackageDetails";
import ConstructionServiceAd from "../../components/ConstructionServiceAd/ConstructionServiceAd";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Testimonials from "../../components/Testimonials/Testimonials";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
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
} from "../../constants/architecture.constant";
import FAQ from "../../components/FAQ/FAQ.index";
import LPPackages from "../../components/LPPackages/LPPackages";
import SeoContent from "../../components/SeoContent/SeoContent";

export default function Archirecture() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const onSelectPackge = (el) => {
    setSelectedPackage(el.packageName.toLowerCase()?.split(" ")?.join(""));
    window.location.hash = el?.packageName?.toLowerCase()?.split(" ")?.join("");
  };

  useEffect(() => {
    const packageName = window.location.hash.replace("#", "");
    setSelectedPackage(packageName);
  }, []);

  return (
    <HomeLayout>
      <Head>
        <title>
          Best Architects in Bangalore | Architectural Design Services - Sqft
          Expert
        </title>
        <meta name="description" content="Best Qaulity Construction Company" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="canonical"
          href="https://sqft.expert/architectural-design-bangalore"
        />
      </Head>
      <LandingSection data={landingPageConstant} opactiy={landingPageOpacity} />
      <LPPackages
        constructionPackagesData={constructionPackagesData}
        title={pageTitles.ConstructionPackages}
        selectPackage={onSelectPackge}
      />
      <PackageDetails
        packageAccordianData={packageAccordianData}
        title={pageTitles.PackageDetails}
        selectedPackage={selectedPackage}
        expandAll={true}
      />
      <HowItWorks title={pageTitles.HowItWorks} data={howItWorks} />
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
      <FAQ data={faqQuestions} title={pageTitles.Faq} />
      <SeoContent data={seoContent} />
      <Footer />
    </HomeLayout>
  );
}
