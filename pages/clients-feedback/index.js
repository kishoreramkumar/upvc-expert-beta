import { useState } from "react";
import LandingSection from "../../components/LandingSection/LandingSection";
import PackageDetails from "../../components/PackageDetails/PackageDetails";
import ConstructionServiceAd from "../../components/ConstructionServiceAd/ConstructionServiceAd";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Testimonials from "../../components/Testimonials/Testimonials";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
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
} from "../../constants/buildingcontractors.constant.js";
import FAQ from "../../components/FAQ/FAQ.index";

import Head from "next/head";
import BookConsultationBtn from "../../components/BookConsultationBtn/BookConsultationBtn";
import LPPackages from "../../components/LPPackages/LPPackages";
import { useEffect } from "react";
import LPBottomNavBar from "../../components/LPBottomNavBar/LPBottomNavBar";
import Image from "next/image";
import Header from "../../components/Header";
import LPLayout from "../../Layout/LPLayout";
import SeoContent from "../../components/SeoContent/SeoContent";

export default function LPConstruction() {
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
        <LPLayout>
            <>
                <Head>
                    <title>
                        Building Contractors in Bangalore | House Construction Packages
                        Starts at Rs 1599/sqft
                    </title>
                    <meta
                        name="description"
                        content="Best Qaulity Construction Company"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="canonical" href="https://sqft.expert/building-contractors" />
                </Head>
                <ClientFeedbackList />
            </>
        </LPLayout>
    );
}
