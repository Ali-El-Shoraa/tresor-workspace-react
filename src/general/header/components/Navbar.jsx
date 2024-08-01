import { NavLink } from "react-router-dom";
import { NAVBAR } from "../../../store/navbar";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  // ***********************************************************************************************************

  const [isTrue, setIsTrue] = useState(true);
  const [inerWidth, setInerWidth] = useState(true);

  // ***********************************************************************************************************

  useEffect(() => {
    // when open page function is checked
    if (window.innerWidth <= 768) {
      setInerWidth(true);
      setIsTrue(true);
    } else {
      setInerWidth(false);
    }

    // ***********************************************************************************************************

    // when resize page function is checked
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 768) {
        setInerWidth(true);
        setIsTrue(true);
      } else {
        setInerWidth(false);
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ***********************************************************************************************************

  return (
    <nav>
      {inerWidth && (
        <button onClick={() => setIsTrue((e) => !e)}>
          {/* when click button will be change */}
          {isTrue ? <FaBars fontSize={30} /> : <FaXmark fontSize={30} />}
        </button>
      )}

      {/* *********************************************************************************************************** */}

      <ul
        className={`flex items-center justify-center h-full font-medium ${
          isTrue
            ? "max-[768px]:-right-full max-[768px]:opacity-0 "
            : "max-[768px]:right-0 max-[768px]:opacity-100"
        } sp-sidebar-menu`}
      >
        {NAVBAR.map((obj, ind) => (
          <li key={ind} className="px-3 border-r border-r-slate-500 last:border-r-0">
            <NavLink className="sp-links-header" onClick={() => setIsTrue(true)} to={obj.link} end>
              {obj.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
