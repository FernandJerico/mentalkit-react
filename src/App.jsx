import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Homepage from "./pages/Homepage";
import ConsultationPage from "./pages/ConsultationPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import TermsConditionsPage from "./pages/TermsConditionsPage";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/consultation" Component={ConsultationPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/terms" Component={TermsConditionsPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
