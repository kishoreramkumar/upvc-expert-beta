import Link from "next/link";
import HomeLayout from "../../Layout/HomeLayout";
import Image from "next/image";
import Packages from "../../components/Packages/Packages";
import Expertise from "../../components/Expertise/Expertise";
import ConstructionServiceAd from "../../components/ConstructionServiceAd/ConstructionServiceAd";
import Footer from "../../components/Footer/Footer";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import LandingSection from "../../components/LandingSection/LandingSection";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Testimonials from "../../components/Testimonials/Testimonials";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import Head from "next/head";
import { useRouter } from "next/router";

import {
    landingPageConstant,
    constructionAdTitle,
    whyChooseUsList,
    landingPageOpacity,
    testimonialList,
    seoContent,
    productStylesDetails,
    durabilitySafetyConst,
    colorAndFinish
} from "../../constants/constants";
import SeoContent from "../../components/SeoContent/SeoContent";
import ProductStyles from "../../components/ProductStyles/ProductStyles";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import VideoSlider from "../../components/ClientFeedback/ClientFeedback";
import ClientFeedback from "../../components/ClientFeedback/ClientFeedback";
import ClientList from "../../components/ClientList/ClientList";
import DurabilitySafety from "../../components/DurabilitySafety/DurabilitySafety.index";
import ColorAndFinish from "../../components/ColorAndFinish/ColorAndFinish";
import Types from "../../components/Types/Types";

export default function Home() {
    const router = useRouter();
    const onSelectPackage = (el) => {
        let packageName = el?.name?.toLowerCase()?.split(" ")?.join("");
        router.push(`${el.url}/#${packageName}`);
    };

    const onClickViewMore = () => {
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
            <ProductStyles title={productStylesDetails.title} data={productStylesDetails.data.map((_o) => { return { ..._o, icon: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/1629980042.gif" } })} />
            <DurabilitySafety data={durabilitySafetyConst} />
            <ColorAndFinish data={colorAndFinish} />
            <Types data={[{
                name: "Sliding", img: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/thumb1626198959.png", description: "Sliding windows comprises of two or more than two horizontal sashes that are fitted with rollers at the base for smooth sideward track movement. Easy to operate, these windows offer panoramic views and a great amount of ventilation.", icon: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/1629980042.gif", availableDesign: {
                    title: "Available Design",
                    data: [{
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }, {
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }, {
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }]

                }, recommendedFor: {}, about: {}, featuresBenefits: {}
            }, {
                name: "Sliding",
                img: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/thumb1626198959.png",
                description: "Sliding windows comprises of two or more than two horizontal sashes that are fitted with rollers at the base for smooth sideward track movement. Easy to operate, these windows offer panoramic views and a great amount of ventilation.", icon: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/1629980042.gif",
                availableDesign: {
                    title: "Available Design",
                    data: [{
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }, {
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }, {
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }]

                }, recommendedFor: {}, about: {}, featuresBenefits: {}
            }, {
                name: "Sliding", img: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/thumb1626198959.png", description: "Sliding windows comprises of two or more than two horizontal sashes that are fitted with rollers at the base for smooth sideward track movement. Easy to operate, these windows offer panoramic views and a great amount of ventilation.", icon: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/1629980042.gif", availableDesign: {
                    title: "Available Design",
                    data: [{
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }, {
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }, {
                        image: "https://d21xn5q7qjmco5.cloudfront.net/images/doortype/0-20210817165745.jpg",
                        title: "exclusive"
                    }]

                }, recommendedFor: {}, about: {}, featuresBenefits: {}
            }]} />
            <ImageGallery data={[...productStylesDetails.data, ...productStylesDetails.data]} viewMoreClick={onClickViewMore} />
            <Expertise />
            <Packages onSelectPackage={onSelectPackage} />
            <RecentProjects />
            <WhyChooseUs whyChooseUsList={whyChooseUsList} />
            <ConstructionServiceAd
                data={landingPageConstant.companyInsight}
                title={constructionAdTitle}
                sideBanner={"/assets/images/qualityConstruction.svg"}
            />
            <ClientFeedback videos={[{ url: "https://www.youtube.com/embed/8S4s9JRprTM", thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", customerName: "K. Customer Name", place: "Bangalore" }, { url: "https://www.youtube.com/embed/8S4s9JRprTM", thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", customerName: "K. Customer Name", place: "Bangalore" }, { url: "https://www.youtube.com/embed/8S4s9JRprTM", thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", customerName: "K. Customer Name", place: "Bangalore" }, { url: "https://www.youtube.com/embed/8S4s9JRprTM", thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", customerName: "K. Customer Name", place: "Bangalore" }, { url: "https://www.youtube.com/embed/8S4s9JRprTM", thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", customerName: "K. Customer Name", place: "Bangalore" }]} />
            <ClientList data={[
                { thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", },
                { thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", },
                { thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", },
                { thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", },
                { thumbnail: "https://d21xn5q7qjmco5.cloudfront.net/images/testimonials/user/1662720436.webp", }]} />
            <Testimonials testimonialList={testimonialList} />
            <SeoContent data={seoContent} />
            <Footer />
        </HomeLayout>
    );
}
