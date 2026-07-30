import ContactComp from "../../../components/sharedLandingcomponents/Contact_Comp";
import FaqComp from "../../../components/sharedLandingcomponents/Faq_Comp";
import FeatureGallery from "../../../components/sharedLandingcomponents/feature_image";
import PagerHeaderComp from "../../../components/sharedLandingcomponents/PagesHeaderComp";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import "../landingpages.css";

export const ContactPage = () => {
  return (
    <>
      <div className="grid" style={{ minHeight: "400px" }}>
        {/* <PagerHeaderComp
          image={`${process.env.PUBLIC_URL}/images/hero/bg-paint.png`}
          title="Contact Us"
          subtitle="Talk to Our Team About Your Next Painting Project"
        /> */}
        {/* <FaqComp></FaqComp> */}
        <Slide left>
          <ContactComp></ContactComp>
        </Slide>
        <Fade bottom>
          <FeatureGallery></FeatureGallery>
        </Fade>
      </div>
    </>
  );
};

export default ContactPage;
