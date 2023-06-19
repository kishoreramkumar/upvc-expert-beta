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
                        content: `<p>
      Every year, a large number of individuals spend an exorbitant amount of money on upgrading and constructing new homes. Finding a <u>house construction company in Bangalore&nbsp;</u>is easy, but finding the <u>best house construction company</u> can prove to be slightly difficult as not every builder will fit your needs.&nbsp;
  </p>
  <p>
      Finding the right kind of construction company will make the entire process of building a home from scratch smooth and hassle free. To make sure you have selected the <u>best house construction company in bangalore</u> check these parameters.&nbsp;
  </p>
  <p>Ideally a construction business is responsible for obtaining building permits, recruiting and overseeing subcontractors, and hiring designers and architects. They are also in charge of arranging the home inspections and exams.
</p>
<p>
    Before you turn over your house to the firm, you must keep these things in mind:
</p>

`,
                        expandContent: `Hi hellpo`,
                    }} />
                    <AvailableDesign data={data[active].availableDesign.data} title={data[active].availableDesign.title} />
                    <RecommendedFor />
                    <FeatureBenefit />
                    <ExpandAccordian data={{ title: " About This", content: "about us content", expandContent: "expanded content" }} />
                </div>
            </div>
        </div>
    );
};

export default Types;
