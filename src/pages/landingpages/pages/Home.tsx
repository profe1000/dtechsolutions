
import useHashScroll from "../../../hooks/useHashScroll";
import HeroComp, {
  HeroSection,
} from "../../../components/sharedLandingcomponents/Hero_Comp";
import TestimonyComponent from "../../../components/sharedLandingcomponents/Testimony_Comp";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import MyServices from "../../../components/sharedLandingcomponents/Feature_Services";
import AboutSection from "../../../components/sharedLandingcomponents/About_Section";
import {
  WhyChooseUs,
  HowWeWork,
} from "../../../components/sharedLandingcomponents/WhyAndProcess";
import "../landingpages.css";

export const HomePage = () => {
  useHashScroll();

  return (
    <>
      <div style={{ minHeight: "400px" }}>
        <HeroComp></HeroComp>

        <Fade bottom>
          <AboutSection></AboutSection>
          </Fade>

        <Fade bottom>
          <HeroSection></HeroSection>
        </Fade>

        <MyServices></MyServices>

        <WhyChooseUs />

        <HowWeWork />

        <Slide left>
          <TestimonyComponent></TestimonyComponent>
        </Slide>
      </div>
    </>
  );
};

export default HomePage;
