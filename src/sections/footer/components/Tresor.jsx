/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Tresor() {
  return (
    <div className="flex-1 space-y-6">
      <h3 className="text-2xl font-semibold tracking-wider">Tresor</h3>
      <p className="text-[#ddd]">
        Thank you for visiting Tresor website. Connect with us over socials. Keep Rising. Connect
        with me over live chat!
      </p>

      <ul className="flex items-center max-sm:justify-center gap-8 text-[#fcc695]">
        <li className="hover:scale-110">
          <a href="#">
            <FaFacebook fontSize={22} />
          </a>
        </li>
        <li className="hover:scale-110">
          <a href="#">
            <MdEmail fontSize={22} />
          </a>
        </li>
        <li className="hover:scale-110">
          <a href="#">
            <FaLinkedin fontSize={22} />
          </a>
        </li>
        <li className="hover:scale-110">
          <a href="#">
            <FaWhatsapp fontSize={22} />
          </a>
        </li>
      </ul>
    </div>
  );
}
