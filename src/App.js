import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import TermCondition from "./pages/TermCondition";
import GdprPolicy from "./pages/GdprPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import About from "./pages/About";
import Registration from "./pages/Registration";
import RegistrationTwo from "./pages/RegistrationTwo";
import Stapper from "./pages/Stapper";
import Login from "./pages/Login";
import ForgetPassword from "./pages/ForgetPassword";
import Mail from "./pages/Mail";
import ResetPassword from "./pages/ResetPassword";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import ScrollToTop from "./components/ScrollTop";

function App() {

  return (
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/termcondition" element={<TermCondition />} />
            <Route path="/gdprPolicy" element={<GdprPolicy />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/registrationtwo" element={<RegistrationTwo />} />
            <Route path="/stapper" element={<Stapper />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgetpassword" element={<ForgetPassword />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
