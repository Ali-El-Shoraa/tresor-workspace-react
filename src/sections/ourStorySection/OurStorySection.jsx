// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import TitleHeader from "../../general/TitleHeader";
export default function OurStorySection() {
  return (
    <section className="py-24">
      <TitleHeader title={"OUR Story"} />

      <div className="container">
        <div className="flex items-center justify-center gap-8 max-lg:flex-col">
          <div className="">
            <video
              controls
              muted
              src="videos/ws.mp4"
              typeof="mp4"
              className="mx-auto rounded-3xl"
            />
          </div>

          <div className="space-y-9 max-w-2xl max-xl:max-w-lg">
            {/* <h3 className="text-4xl font-bold">Our Story</h3> */}

            <p className="text-base text-[#817a78] text-justify leading-9 font-semibold">
              Our mission is simple. We want to change the way people work together - for the
              better. We are creating the largest and most productive coworking community by taking
              care of all your workplace needs and facilitating deeper connection. Every inch of
              space we design, and every community event curated has this in mind.
              <br />
              <br />
              We're proud to call ourselves a productivity community - we believe that by improving
              the productivity of entrepreneurs, freelancers and businesses we can have a
              significant impact on the economy. On top of that, we believe in the power of
              leveraging networks, embracing- diversity and most importantly, the impact of genuine
              and lasting human connection. Productivity never looked this good!
            </p>

            {/* <div className="flex gap-4">
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=201113304695&text=How%20can%20i%20join%20to%20the%20teams"
                className="btn-green text-xl max-lg:mx-auto px-6 py-3"
                rel="noreferrer"
              >
                Join Us
              </a> */}

            <Link to={`/our-story`} className="btn-green text-xl max-lg:mx-auto px-6 py-3">
              More Details
            </Link>
            {/* </div> */}
          </div>
        </div>
      </div>

      {/* 
      <div className="conyainer">
        <video
          controls
          muted
          src="videos/ws.mp4"
          typeof="mp4"
          className="mx-auto w-[800px] rounded-3xl"
        />

        <Link to={`/our-story`} className="btn-green mx-auto mt-14">
          More Info
        </Link>
      </div> */}
    </section>
  );
}
