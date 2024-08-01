import { IoIosArrowDroprightCircle } from "react-icons/io";
import { NAVBAR } from "../../../store/navbar";
import { Link } from "react-router-dom";

export default function QuickLinks() {
  return (
    <div className="flex-1 space-y-6">
      <h3 className="text-2xl font-semibold">Quick Link</h3>
      <ul className="flex flex-col gap-2 h-full text-[#ddd]">
        {NAVBAR.map((obj, ind) => (
          <li key={ind} className="flex items-center gap-1 flex-1 hover:text-[#fcc695]">
            <IoIosArrowDroprightCircle />
            <Link to={obj.link} end className="flex-1">
              {obj.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
