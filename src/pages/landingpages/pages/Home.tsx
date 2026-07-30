
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroComp, {
  HeroSection,
} from "../../../components/sharedLandingcomponents/Hero_Comp";
import TestimonyComponent from "../../../components/sharedLandingcomponents/Testimony_Comp";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";
import MyServices from "../../../components/sharedLandingcomponents/Feature_Services";
import AboutSection from "../../../components/sharedLandingcomponents/About_Section";
import TrustedBrandComp from "../../../components/sharedLandingcomponents/brand_info";
import "../landingpages.css";

export const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const section = document.querySelector(hash);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

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

        <Slide left>
          <TrustedBrandComp></TrustedBrandComp>
        </Slide>
        <Slide left>
          <TestimonyComponent></TestimonyComponent>
        </Slide>
      </div>
    </>
  );
};

export default HomePage;
