import Link from "next/link";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import ContactUsInfoDetails from "../../components/ContactUsInfoDetails/ContactUsInfoDetails";
import MissionVision from "../../components/MissionVision/MissionVision";
import AboutUsContactUs from "../../Layout/AboutUsContactUs";
import { contactUsInfoDetails } from "../../constants/aboutUsContactUs.constant";

export default function ContactUs() {
  return (
    <AboutUsContactUs type="contactUs">
      <ContactUsForm />
      <ContactUsInfoDetails contactUsInfoDetails={contactUsInfoDetails} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9490941691515!2d77.61748221433534!3d12.975107790853588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae172b9fe49765%3A0xda13fd24b1bd84b9!2sSqft.Expert%20-%20A%20House%20Construction%20Company%20(MG%20Road%20Branch)!5e0!3m2!1sen!2sin!4v1646752255078!5m2!1sen!2sin"
        height="300"
        style={{ width: "90%", margin: "1rem" }}
        allowFullScreen={false}
        loading="lazy"
      ></iframe>
    </AboutUsContactUs>
  );
}
