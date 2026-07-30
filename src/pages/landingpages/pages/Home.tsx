import SoftLifeAppBasicComp from "../../../components/sharedLandingcomponents/AppBasicFeatComp";
import BrandsSection from "../../../components/sharedLandingcomponents/brandSection";
import { BusinessTypesSection } from "../../../components/sharedLandingcomponents/businessSection";
import CompanyOverviewSection from "../../../components/sharedLandingcomponents/companyOverview";
import CoreBusinessActivities from "../../../components/sharedLandingcomponents/CoreBusinessActivities";
import FeatureVideo from "../../../components/sharedLandingcomponents/Fearure_Video";
import FeatureGallery from "../../../components/sharedLandingcomponents/feature_image";
import FeatureService, {
  FeaturesSection,
} from "../../../components/sharedLandingcomponents/Feature_Service";
import FoundersMessageSection from "../../../components/sharedLandingcomponents/FounderMessage";
import HeroComp, {
  HeroSection,
} from "../../../components/sharedLandingcomponents/Hero_Comp";
import ImageCarousel from "../../../components/sharedLandingcomponents/heroCarousel";
import OurFacilitiesSection from "../../../components/sharedLandingcomponents/heroFacilictyCaurosel";
import KeyClientsSection from "../../../components/sharedLandingcomponents/KeyClient";
import { PricingSection } from "../../../components/sharedLandingcomponents/pricing";
import QualityPolicySection from "../../../components/sharedLandingcomponents/QualityPolicy";
import TestimonyComponent from "../../../components/sharedLandingcomponents/Testimony_Comp";
import VisionMissionSection from "../../../components/sharedLandingcomponents/visionmissioncomp";
import WhyChooseUsSection from "../../../components/sharedLandingcomponents/whyChooseus";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import "../landingpages.css";

export const HomePage = () => {
  return (
    <>
      <div  style={{ minHeight: "400px" }}>
        <HeroComp></HeroComp>
        <Fade bottom>
          <HeroSection></HeroSection>
        </Fade>
        {/* <TrustedBrandComp></TrustedBrandComp> */}
        <Slide left>
          <SoftLifeAppBasicComp></SoftLifeAppBasicComp>
        </Slide>
        <Fade bottom>
          <CoreBusinessActivities />
        </Fade>
        <Zoom>
          <FeatureVideo></FeatureVideo>
        </Zoom>
        <Fade bottom>
          <BusinessTypesSection></BusinessTypesSection>
        </Fade>
        <Slide right>
          <OurFacilitiesSection></OurFacilitiesSection>
        </Slide>
        {/* <FeaturesSection></FeaturesSection> */}
        <Fade bottom>
          <WhyChooseUsSection></WhyChooseUsSection>
        </Fade>
        {/* <PricingSection></PricingSection> */}
        {/* <FeatureService></FeatureService> */}
        <Slide left>
          <TestimonyComponent></TestimonyComponent>
        </Slide>
        <Fade bottom>
          <FeatureGallery></FeatureGallery>
        </Fade>
      </div>
    </>
  );
};

export default HomePage;
