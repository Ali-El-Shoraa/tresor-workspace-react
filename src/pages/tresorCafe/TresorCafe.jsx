import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TitlePage from "../../general/TitlePage";
import { GlobalWorkerOptions } from "pdfjs-dist";
import SliderCafe from "./components/SliderCafe";
// import SliderCafe1 from "./components/SliderCafe1";
export default function TresorCafe() {
  GlobalWorkerOptions.workerSrc = "/js/pdf.worker.min.js";

  return (
    <section>
      <TitlePage title={"Tresor Cafe"} />
      <div className="max-w-4xl text-center mx-auto py-12 leading-8">
        <h3 className="font-bold text-4xl mb-5">We don’t make your coffee, We make your day! </h3>
        <p>
          Coffee makes us tough, serious and philosophical, At our tresor cafe, you will enjoy your
          coffee and get your work done quickly, as we have a work space
        </p>

        <div className="flex items-center justify-center gap-4 mt-3">
          <div className="flex items-center justify-center flex-col gap-4">
            <a href="pdf/menu.pdf" download className="btn-green">
              Show Menu
            </a>

            <a href="pdf/menu.pdf" download className="btn-green">
              Download Menu
            </a>
          </div>

          <img src="images/qr-code.png" alt="qr-code" className="w-44" />
        </div>
      </div>

      {/* slider and text */}
      {/* <SliderCafe /> */}
      <SliderCafe />
    </section>
  );
}
