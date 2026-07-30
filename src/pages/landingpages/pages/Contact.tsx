
import Slide from "react-reveal/Slide";
import "../landingpages.css";
import ContactComp from "../../../components/sharedLandingcomponents/Contact_Comp";

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
      </div>
    </>
  );
};

export default ContactPage;
