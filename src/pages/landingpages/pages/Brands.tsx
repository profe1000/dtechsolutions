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
import Zoom from "react-reveal/Zoom";
import "../landingpages.css";

export const BrandsPage = () => {
  return (
    <>
      <div  style={{ minHeight: "400px" }}>
        {/* <PagerHeaderComp
          image={`${process.env.PUBLIC_URL}/images/hero/bg-paint.png`}
          title="Brands"
          subtitle="Discover Our Range of High-Quality Paint Products"
        /> */}

        {/* <AppBasicAbout></AppBasicAbout>
        <FeatureServiceExtra></FeatureServiceExtra> */}
        <Fade bottom>
          <BrandsSection></BrandsSection>
        </Fade>
        <Zoom>
          <FeatureGallery></FeatureGallery>
        </Zoom>
      </div>
    </>
  );
};

export default BrandsPage;
