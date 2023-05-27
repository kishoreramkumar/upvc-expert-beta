import Link from "next/link";
import HomeLayout from "../Layout/HomeLayout";
import Image from "next/image";
import Packages from "../components/Packages/Packages";
import Expertise from "../components/Expertise/Expertise";
import ConstructionServiceAd from "../components/ConstructionServiceAd/ConstructionServiceAd";
import Footer from "../components/Footer/Footer";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import LandingSection from "../components/LandingSection/LandingSection";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Testimonials from "../components/Testimonials/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Head from "next/head";
import { useRouter } from "next/router";

import {
  landingPageConstant,
  constructionAdTitle,
  whyChooseUsList,
  landingPageOpacity,
  testimonialList,
  seoContent
} from "../constants/constants";
import SeoContent from "../components/SeoContent/SeoContent";

export default function Home() {
  const router = useRouter();
  const onSelectPackage = (el) => {
    let packageName = el?.name?.toLowerCase()?.split(" ")?.join("");
    router.push(`${el.url}/#${packageName}`);
  };
  return (
    <HomeLayout>
      <Head>
        <title>
          Sqft Expert - House Construction Interiors | Structural Designing |
          Architecture | Floor Plan Approval
        </title>
        <meta name="description" content="Best Qaulity Construction Company" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://sqft.expert/" />
      </Head>

      <LandingSection data={landingPageConstant} opactiy={landingPageOpacity} />
      <Expertise />
      <Packages onSelectPackage={onSelectPackage} />
      <RecentProjects />
      <WhyChooseUs whyChooseUsList={whyChooseUsList} />
      <ConstructionServiceAd
        data={landingPageConstant.companyInsight}
        title={constructionAdTitle}
        sideBanner={"/assets/images/qualityConstruction.svg"}
      />
      <Testimonials testimonialList={testimonialList} />
      <SeoContent data={seoContent}/>
      <Footer />
    </HomeLayout>
  );
}
