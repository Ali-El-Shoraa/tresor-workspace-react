import { FaHeadset } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Iframe from "react-iframe";

export default function Contact() {
  return (
    <div className="flex-1 space-y-6">
      <h3 className="text-2xl font-semibold">Contact Us</h3>

      <ul className="space-y-3">
        <li>
          <div className="flex items-center max-sm:justify-center gap-3 text-[#ddd]">
            <FaHeadset fontSize={20} color="#fcc695" className=" " />

            {/* <div className="">
                      <h3>Call:</h3> */}
            <h3>+201503283600</h3>
            {/* </div> */}
          </div>
        </li>
        <li>
          <div className="flex items-center max-sm:justify-center gap-3 text-[#ddd]">
            <MdEmail fontSize={20} color="#fcc695" className=" " />

            {/* <div className="">
                      <h3>Email:</h3> */}
            <h3>TresorV35@Gmail.com</h3>
            {/* </div> */}
          </div>
        </li>
        <li>
          <div className="flex items-center max-sm:justify-center gap-3 text-[#ddd]">
            <FaLocationDot fontSize={20} color="#fcc695" className=" " />

            {/* <div className="">
                      <h3>Location:</h3> */}
            <h3>Villa 35, 103 st, El-maddi, Cairo, Egypt.</h3>
            {/* </div> */}
          </div>
        </li>
      </ul>

      <Iframe
        url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.5837132233773!2d31.25277888488678!3d29.9626504819121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU3JzQ1LjUiTiAzMcKwMTUnMDIuMSJF!5e0!3m2!1sar!2seg!4v1718725053439!5m2!1sar!2seg"
        // width=""
        className="max-w-full flex-1 max-md:h-auto"
        loading="lazy"
      />
    </div>
  );
}
