import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPagesRoute from "./pages/landingpages/landingPagesRoute";
import PropsBooking from "./components/AppRelatedComp/PropsBooking";
import ConfirmAppointment from "./components/AppRelatedComp/confirmAppointment";
import ConfirmOrder from "./components/AppRelatedComp/confirmOrder";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPagesRoute />} />
        <Route path="landing/*" element={<LandingPagesRoute />} />
        <Route path="book_appointment" element={<PropsBooking />} />
        <Route path="confirm_appointment" element={<ConfirmAppointment />} />
        <Route path="confirm_order" element={<ConfirmOrder />} />
        <Route path="*" element={<LandingPagesRoute />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
