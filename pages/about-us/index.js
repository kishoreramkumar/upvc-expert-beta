import Link from "next/link";
import MissionVision from "../../components/MissionVision/MissionVision";
import AboutUsContactUs from "../../Layout/AboutUsContactUs";

export default function AboutUs() {
  return (
    <AboutUsContactUs type="aboutUs">
      <MissionVision type="vision" />
      <MissionVision type="mission" />
    </AboutUsContactUs>
  );
}
