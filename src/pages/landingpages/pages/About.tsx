import AppBasicAbout from "../../../components/sharedLandingcomponents/AppBasicAboutComp";
import BrandsSection from "../../../components/sharedLandingcomponents/brandSection";
import CompanyOverviewSection from "../../../components/sharedLandingcomponents/companyOverview";
import FeatureGallery from "../../../components/sharedLandingcomponents/feature_image";
import FeatureServiceExtra from "../../../components/sharedLandingcomponents/Feature_Service_Extra";
import FoundersMessageSection from "../../../components/sharedLandingcomponents/FounderMessage";
import KeyClientsSection from "../../../components/sharedLandingcomponents/KeyClient";
import OurTeam from "../../../components/sharedLandingcomponents/OurTeam";
import PagerHeaderComp from "../../../components/sharedLandingcomponents/PagesHeaderComp";
import QualityPolicySection from "../../../components/sharedLandingcomponents/QualityPolicy";
import VisionMissionSection from "../../../components/sharedLandingcomponents/visionmissioncomp";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import "../landingpages.css";

export const AboutPage = () => {
  return (
    <>
      <div  style={{ minHeight: "400px" }}>
        {/* <PagerHeaderComp
          image={`${process.env.PUBLIC_URL}/images/hero/bg-paint.png`}
          title="About Us"
          subtitle="Colour, Quality, and Lasting Protection for Every Space"
        /> */}

        {/* <AppBasicAbout></AppBasicAbout>
        <FeatureServiceExtra></FeatureServiceExtra> */}
        <Fade bottom>
          <CompanyOverviewSection></CompanyOverviewSection>
        </Fade>
        <Slide left>
          <FoundersMessageSection></FoundersMessageSection>
        </Slide>
        <Zoom>
          <KeyClientsSection></KeyClientsSection>
        </Zoom>
        <Fade bottom>
          <VisionMissionSection></VisionMissionSection>
        </Fade>
        <Slide right>
          <QualityPolicySection></QualityPolicySection>
        </Slide>
        <Fade bottom>
          <OurTeam />
        </Fade>
        <Zoom>
          <FeatureGallery></FeatureGallery>
        </Zoom>
      </div>
    </>
  );
};

export default AboutPage;
