// import About from "../sections/about/About";
// import Amenities from "../sections/amenities/Amenities";
// import Header from "../sections/header/Header";
import Hero from "../sections/hero/Hero";
// import Serveses from "../sections/serveses/Serveses";
// import OurStore from "../sections/ourStoreSection/OurStoreSection";
import OurStorySection from "../sections/ourStorySection/OurStorySection";
import Contact from "../sections/contact/Contact";
// import Footer from "../sections/footer/Footer";
import TresorSpaceSection from "../sections/tresorSpaceSection/TresorSpaceSection";

export default function Sections() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <OurStorySection />
      {/* <About /> */}
      <TresorSpaceSection />
      {/* <Amenities /> */}

      <Contact />

      {/* <Footer /> */}
    </>
  );
}
