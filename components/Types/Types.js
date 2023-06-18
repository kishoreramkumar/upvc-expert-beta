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
<ul>
    <li>
        Locate a preferable area for your home.
    </li>
    <li>
        Be very clear about what you want and don’t want.&nbsp;
    </li>
    <li>
        The quality of the building materials is determined by your selection.
    </li>
    <li>
        Specify and manage your budget ahead of time.&nbsp;
    </li>
    <li>
        Choose the construction company that fits what you need.&nbsp;
    </li>
</ul>
<h3>
    The Best Construction Company Selection Strategy
</h3>
<p>
    Opting for <u>individual house construction builders in bangalore</u> is a great option for people as they provide all the necessary services in one place.&nbsp;
</p>
<p>
    Here are the factors to consider before deciding on which construction company to go with:&nbsp;
</p>
<h4>
    Services
</h4>
<p>
    Examine the range of services offered by the building firm. There are certain businesses that provide the best service while staying inside your budget. So, choose the finest firm based on the number of services offered and the quality of work.
</p>
<h4>
    Technology&nbsp;
</h4>
<p>
    The better the technology available with the construction company, the easier the entire process of building a home with them will be. Whether it is fitting your house with IOT devices or making it more functional, a tech upgrade is something you should focus if you want convenience.
</p>
<h4>
    Accreditation
</h4>
<p>
    For a home to be built, the firm must meet all legal standards in order to avoid any problems later on or halting of work. Hence, ensure to choose a construction company.
</p>
<h4>
    References
</h4>
<p>
    You must visit the finished sites and speak with the residents and neighbors. Inquire if the job was completed on schedule, what additional issues they encountered during construction, quality of construction, use of material, cost involved and if there are any issues they encountered and so on.
</p>
<h4>
    Paperwork
</h4>
<p>
    Request the following information from the construction company in clear and precise form.
</p>
<ul>
    <li>
        Office Documentation must be clear and precise.
    </li>
    <li>
        Work samples must be provided to you along with contact information so that you may visit them for inspection.
    </li>
    <li>
        Bills must be presented to you with the necessary seals and stamps.
    </li>
    <li>
        Bids of any kind must be discussed with you on a regular basis.
    </li>
    <li>
        The contract must be unambiguous and well-explained.
    </li>
</ul>
<h4>
    Communication Management&nbsp;
</h4>
<p>
    Communication management between you and the company must be efficient and clear in order to avoid any snafus.&nbsp;
</p>
<h4>
    Accessibility And Availability
</h4>
<p>
    The construction business or contractor should be immediately accessible. They must have access to pagers, radios, home phones, and cell phones.
</p>
<h4>
    Reviews
</h4>
<p>
    Always check to see whether they are actively constructing or renovating a home. These days it is easy enough to check the reviews of any firm online like instagram, google and facebook.&nbsp;
</p>
<h4>
    Experience
</h4>
<p>
    In order to learn about the construction company's expertise, ask whether they have completed a comparable job to yours. An expert organization completes the task more precisely and on schedule.&nbsp;
</p>
<h4>
    Capability
</h4>
<p>
    It is a positive indicator if the building business is not overbooked. They must be able to manage and finish the task within the time frame specified.
</p>
<h4>
    Meetings
</h4>
<p>
    It is critical to maintain frequent communication and to schedule meetings. This will inform you of the present state of your construction job as well as upcoming tasks.
</p>
<h4>
    Budget
</h4>
<p>
    Make it clear to the construction firm what you anticipate. Also, be open about the whole cost of the construction job. Although it is impossible to predict the cost of certain goods, you may create an estimated budget together.&nbsp;
</p>
<h4>
    Outline
</h4>
<p>
    Explain precisely what you want in writing. This allows you to prevent any manipulation or disagreement at the conclusion of the project. Furthermore, this will provide the construction business with a clear reference and will not leave any loopholes.&nbsp;
</p>
<h4>
    Contract
</h4>
<p>
    The most significant aspect of the project is the contract. It is your ultimate choice on constructing your home since you cannot quit the firm or hire a different company halfway through. The contract must include all aspects of the construction project, such as
</p>
<ul>
    <li>
        Specifications
    </li>
    <li>
        Quantities
    </li>
    <li>
        The cost of the thickness of the materials utilized
    </li>
    <li>
        Completion Date
    </li>
    <li>
        Contract Signature
    </li>
</ul>
<p>
    Before you narrow down your choices, always compare and analyze the companies that you have shortlisted. Go with the one that matches your style and need best in order to build your dream home.
</p>
<p>
    The quality of your home is determined by the amount of time you devote to selecting the finest building firm. As a result, take your time in picking the finest. You just need to complete your homework, and the rest will be done for you. They will even assist you in purchasing the property since they are specialists in the sector. Your ideal home might be realized if you choose the appropriate building firm.
</p>`,
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
