/* eslint-disable jsx-a11y/anchor-is-valid */
import Iframe from "react-iframe";
import TitlePage from "../../general/TitlePage";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadset } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <TitlePage title={"Contact Us"} />

      <section className="py-16">
        <div className="container">
          <div className="shadow-[0_4px_12px_3px_rgba(0,0,0,0.1)] flex gap-12 p-12 mx-auto max-w-5xl h-96 max-md:h-auto max-md:flex-col">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3456.5837132233773!2d31.25277888488678!3d29.9626504819121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDU3JzQ1LjUiTiAzMcKwMTUnMDIuMSJF!5e0!3m2!1sar!2seg!4v1718725053439!5m2!1sar!2seg"
              width="670px"
              className="max-w-full flex-1 max-md:h-auto"
              loading="lazy"
            />

            <div className="flex-1 w-96 max-w-full space-y-6">
              <ul className="space-y-3">
                <li>
                  <div className="flex items-center gap-3 text-[#817a78]">
                    <FaHeadset
                      fontSize={35}
                      className="border border-solid p-2 border-[#817a78] rounded-full "
                    />

                    <div className="">
                      <h3>Call:</h3>
                      <h3>+201503283600</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-[#817a78]">
                    <MdEmail
                      fontSize={35}
                      className="border border-solid p-2 border-[#817a78] rounded-full "
                    />

                    <div className="">
                      <h3>Email:</h3>
                      <h3>TresorV35@Gmail.com</h3>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-[#817a78]">
                    <FaLocationDot
                      fontSize={35}
                      className="border border-solid p-2 border-[#817a78] rounded-full "
                    />

                    <div className="">
                      <h3>Location:</h3>
                      <h3>Villa 35, 103 st, El-maddi, Cairo, Egypt.</h3>
                    </div>
                  </div>
                </li>
              </ul>

              <div className="space-y-3">
                <h3 className="font-semibold text-2xl text-gray-500">Follow Us</h3>

                <ul className="flex items-center gap-4 text-[#817a78]">
                  <li>
                    <a href="#">
                      <FaFacebook fontSize={22} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <MdEmail fontSize={22} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaLinkedin fontSize={22} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FaWhatsapp fontSize={22} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
