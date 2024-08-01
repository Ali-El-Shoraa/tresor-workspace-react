import TitlePage from "../../general/TitlePage";
import About from "./components/About";

export default function OurStore() {
  return (
    // <section>
    //   <TitlePage title={"Our Story"} />

    //   <div className="container py-16">
    //     <About />

    //     {/* <VideoStory /> */}
    //   </div>
    // </section>
    <>
      <TitlePage title={"Our Story"} />
      <section className="py-24">
        {/* <TitleHeader title={"Our Culture"} /> */}

        <div className="container flex items-center justify-center gap-8 max-[768px]:flex-col">
          <div className="sp-img-bg relative max-w-[512px] max-h-[512px]">
            <img
              src="images/worksp1.jpg"
              alt="worksp"
              className="w-full h-full object-cover max-[768px]:rounded-xl max-[768px]:shadow-xl"
            />
          </div>

          <div className="space-y-9 max-[768px]:text-center">
            <h3 className="font-bold text-2xl">Tresor</h3>

            <p className="text-xl text-[#4F4F4F] leading-8">
              At Tresor, we believe that coworking represents the future of work. We strive to
              provide a platform that allows this thriving industry to connect and thrive. As
              members of Coworking, our team is passionate about helping people join communities
              that will take their lives and businesses to the next level.
            </p>

            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=201113304695&text=How%20can%20i%20join%20to%20the%20teams"
              className="btn-green max-[768px]:mx-auto"
              rel="noreferrer"
            >
              Join the Team
            </a>
          </div>
        </div>

        <div className="container my-20 flex items-start gap-8 max-[768px]:flex-col max-[768px]:text-center max-[768px]:items-center">
          <div className="space-y-9 flex-1">
            <h3 className="font-bold text-2xl">Our Goals</h3>

            <ul className="text-xl text-[#4F4F4F] leading-8">
              <li>- Grow financial understanding</li>
              <li>- Create a positive work environment</li>
              <li>- Enhance project management abilities</li>
              <li>- Strengthen adaptability and flexibility</li>
            </ul>
          </div>

          <div className="space-y-9 flex-1">
            <h3 className="font-bold text-2xl ">Our Mission</h3>

            <p className="text-xl text-[#4F4F4F] leading-8 text-justify max-[768px]:text-center">
              Our mission is simple. We want to change the way people work together - for the
              better. We are creating the largest and most productive coworking community by taking
              care of all your workplace needs and facilitating deeper connection. Every inch of
              space we design, and every community event curated has this in mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
