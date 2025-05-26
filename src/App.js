import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import BlogSection from "./component/BlogSection";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogSection />} />
      
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
