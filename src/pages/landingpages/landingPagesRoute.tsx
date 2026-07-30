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
import ComingSoonPage from "./pages/comingSoon";
import { BrandsPage } from "./pages/Brands";
import FaqPage from "./pages/FAQ";
import BlogList from "./pages/blogList";
import BlogDetails from "./pages/blogDetails";
import ProductList from "./pages/shop";
import ProductDetails from "./pages/shop-details";
import RequestQuote from "./pages/RequestQuote";
import PaintCalculator from "./pages/paintCalculator";
import ColourChart from "./pages/colorChart";
import PhotoVisualizer from "./pages/photoVisualisation";

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
        <Route path="blog" element={<BlogList />} />
        <Route path="blog/:slug" element={<BlogDetails />} />
        <Route path="shop" element={<ProductList />} />
        <Route path="shop/:slug" element={<ProductDetails />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="request-quote" element={<RequestQuote />} />
        <Route path="paint-calculator" element={<PaintCalculator />} />
        <Route path="colour-chart" element={<ColourChart />} />
        <Route path="photo-visualisation" element={<PhotoVisualizer />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="terms_and_condition" element={<TermsAndCondtions />} />
        <Route path="privacy_policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Nopage />} />
      </Route>
    </Routes>
  );
};

export default LandingPagesRoute;
