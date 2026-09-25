import "../../App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import Nopage from "../Nopage/Nopage";
import LandingPagesLayout from "./Layout/Layout";
import ScrollToTop from "../../utils/scrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCondtions from "./pages/TermsAndCondtions";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import { BrandsPage } from "./pages/Brands";
import ServiceDetails from "./pages/Services-Details";
import PolicyPage from "./pages/Policy";
import OurServicesPage from "./pages/OurServices";
import ServiceCategoryPage from "./pages/ServiceCategory";

const LandingPagesRoute = () => {
  const scrollToTop = ScrollToTop();
  return (
    <Routes>
      {/* <Route path="/" element={<LandingPagesLayout  />} /> */}
      <Route path="/" element={<LandingPagesLayout />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="brands" element={<BrandsPage />} />
        <Route path="policy" element={<PolicyPage />} />
        <Route path="our-services" element={<OurServicesPage />} />
        <Route path="our-services/:categoryId" element={<ServiceCategoryPage />} />
        <Route path="services/:id" element={<ServiceDetails />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="terms_and_condition" element={<TermsAndCondtions />} />
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  );
};

export default LandingPagesRoute;
