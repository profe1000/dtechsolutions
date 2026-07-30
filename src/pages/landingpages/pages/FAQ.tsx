import ContactComp from "../../../components/sharedLandingcomponents/Contact_Comp";
import FaqComp from "../../../components/sharedLandingcomponents/Faq_Comp";
import FeatureGallery from "../../../components/sharedLandingcomponents/feature_image";
import PagerHeaderComp from "../../../components/sharedLandingcomponents/PagesHeaderComp";
import "../landingpages.css";

export const FaqPage = () => {
  return (
    <>
      <div className="grid" style={{ minHeight: "400px" }}>
        {/* <PagerHeaderComp
          image={`${process.env.PUBLIC_URL}/images/hero/bg-paint.png`}
          title="Contact Us"
          subtitle="Talk to Our Team About Your Next Painting Project"
        /> */}
        <FaqComp></FaqComp>
        {/* <ContactComp></ContactComp> */}
        <FeatureGallery></FeatureGallery>
      </div>
    </>
  );
};

export default FaqPage;
