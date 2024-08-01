import { RiTeamFill } from "react-icons/ri";
import { IoIosWifi } from "react-icons/io";
import { GiCoffeeCup } from "react-icons/gi";
import { GiFlexibleLamp } from "react-icons/gi";
import { MdEventAvailable } from "react-icons/md";
// import { PiSecurityCameraFill } from "react-icons/pi";
import { GiPaintBrush } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { FaGift } from "react-icons/fa6";

export default function Amenities() {
  return (
    <section className="py-24">
      <div className="mb-20 space-y-6 text-center">
        <h3 className="text-5xl">OUR AMENITIES</h3>
        <p className="max-w-2xl mx-auto">
          We know exactly what it takes to get a business off the ground. That’s why we built a
          state-of-the-art workspace, where you can focus on your next big project.
        </p>
      </div>

      <div className="container grid gap-10 text-center grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <div className="leading-8">
          <RiTeamFill className="mx-auto text-4xl mb-2" />
          <h3>Community Care Team</h3>
          <span>Always available</span>
        </div>

        <div className="leading-8">
          <IoIosWifi className="mx-auto text-4xl mb-2" />
          <h3>High-Speed Internet</h3>
          <span>Enabling your success</span>
        </div>

        <div className="leading-8">
          <GiCoffeeCup className="mx-auto text-4xl mb-2" />
          <h3>Food & Beverage</h3>
          <span>Keeping you up to the Tasks</span>
        </div>

        <div className="leading-8">
          <GiFlexibleLamp className="mx-auto text-4xl mb-2" />
          <h3>Flexible Setup</h3>
          <span>Designing your preferred setup</span>
        </div>

        <div className="leading-8">
          <MdEventAvailable className="mx-auto text-4xl mb-2" />
          <h3>Events & Meetups</h3>
          <span>Developing your skills</span>
        </div>

        <div className="leading-8">
          <FaCamera className="mx-auto text-4xl mb-2" />
          <h3>Security System</h3>
          <span>Securing your belongings with camera</span>
        </div>

        <div className="leading-8">
          <FaGift className="mx-auto text-4xl mb-2" />
          <h3>Gift</h3>
          <span>Souvenirs to motivate your team</span>
        </div>

        <div className="leading-8">
          <FaCamera className="mx-auto text-4xl mb-2" />
          <h3>Photography</h3>
          <span>To depict your overwhelming success</span>
        </div>

        <div className="leading-8">
          <GiPaintBrush className="mx-auto text-4xl mb-2" />
          <h3>Paint Art</h3>
          <span>To remember us</span>
        </div>
      </div>
    </section>
  );
}
