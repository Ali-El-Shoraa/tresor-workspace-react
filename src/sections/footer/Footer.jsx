import Tresor from "./components/Tresor";
import QuickLinks from "./components/QuickLinks";
import Contact from "./components/Contact";
import Design from "../../pages/tresorCafe/components/Design";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2e4542]">
        <div className="container">
          <div className="flex items-start justify-between text-white gap-10 py-10 max-md:flex-col max-md:items-center max-md:text-center">
            {/* <div className="py-10"> */}
            <Tresor />

            <QuickLinks />

            <Contact />
            {/* </div> */}
          </div>
          <hr />

          <Design />
        </div>
      </footer>
    </>
  );
}
