import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import BlogSection from "./component/BlogSection";
import BlogDetailPage from "./component/SingleBlog";
import ContactPage from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";
import AboutUsPage from "./pages/About";
import ScrollToTop from "./component/ScrollToTop";
import Career from "./component/Career";
import Faqs from "./pages/Faqs";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import TeamPage from "./pages/TeamPage";
// import BlogDetailPage from "./component/BlogSection";

function App() {
  return (
    <Router>
      <ScrollToTop/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<BlogSection />} />
      <Route path="/blogs/:slug" element={<BlogDetailPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services" element={<ProjectPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/career" element={<Career/>} />
      <Route path="/team" element={<TeamPage/>} />
      <Route path="/faq" element={<Faqs/>} />
      <Route path="/policy" element={<PrivacyPolicy/>} />
      <Route path="/terms" element={<TermsOfService/>} />
      <Route path="*" element={<ErrorPage/>} />
      

      
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
