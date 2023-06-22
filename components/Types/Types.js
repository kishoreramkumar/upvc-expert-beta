import { useState } from "react";
import styles from "./Types.module.scss";
import { productDetails, tabs } from "../../constants/constants";
import SectionTitle from "../SectionTitle/SectionTitle";
import ExpandAccordian from "../ExpandAccordian/ExpandAccordian";
import AvailableDesign from "../AvailableDesign/AvailableDesign";
import RecommendedFor from "../RecommendedFor/RecommendedFor";
import FeatureBenefit from "../FeatureBenefit/FeatureBenefit";

const Types = ({ onSelectPackage, data }) => {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.typesContainer}>
            {/* <SectionTitle title="Sqft.Expert Packages" type="h2" /> */}
            <div className={styles.packageWrapper}>
                <div className={styles.packagesTab}>
                    {data.map((el, index) => (
                        <div
                            key={index}
                            className={[
                                styles.tab,
                                active === index ? styles.activeTab : "",
                                index === 0 ? styles.activeTabBorder : "",
                            ].join(" ")}
                            onClick={(e) => {
                                e?.currentTarget?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "nearest",
                                    inline: "start",
                                });
                                setActive(index);
                            }}
                        >
                            <div className={styles.tabTitleWrapper}><img src={el.icon} className={styles.tabIcon}></img><h3 className="inherit">{el.name}</h3></div>
                        </div>
                    ))}
                </div>
                <div className={styles.tabsMain}>
                    <ExpandAccordian data={{
                        title: "",
                        content: data[active]?.desc ?? "",
                        expandContent: data[active]?.expandContent,
                    }} />
                    <AvailableDesign data={data[active].availableDesign.data} title={data[active].availableDesign.title} />
                    <RecommendedFor />
                    <FeatureBenefit desc={data[active].featuresBenefits.desc} />
                    <ExpandAccordian data={{ title: " About This", content: "about us content", expandContent: "expanded content" }} />
                </div>
            </div>
        </div>
    );
};

export default Types;
