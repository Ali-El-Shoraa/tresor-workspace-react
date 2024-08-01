import { Routes, Route } from "react-router-dom";
import "./App.css";
import Sections from "./pages/Sections";
// import OurStore from "./sections/ourStore/OurStore";
import Header from "./general/header/Header";
import OurStore from "./pages/ourStorePage/OurStorePage";
import TresorCafe from "./pages/tresorCafe/TresorCafe";
import TresorSpace from "./pages/TresorSpace";
import ContactPage from "./pages/contact/ContactPage";
import Footer from "./sections/footer/Footer";
import TresorGallery from "./pages/tresorGallery/TresorGallery";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/our-story" element={<OurStore />} />
        <Route path="/tresor-cafe" element={<TresorCafe />} />
        <Route path="/tresor-space" element={<TresorSpace />} />
        <Route path="/tresor-gallery" element={<TresorGallery />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
