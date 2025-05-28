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

      
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
