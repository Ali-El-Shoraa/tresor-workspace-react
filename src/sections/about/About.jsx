// import TitleHeader from "../../general/TitleHeader";

export default function About() {
  return (
    <section className="py-24">
      {/* <TitleHeader title={"Our Culture"} /> */}

      <div className="container flex items-center justify-center gap-8 max-md:flex-col">
        <div className="sp-img-bg relative max-w-[512px] max-h-[512px]">
          <img src="images/worksp1.jpg" alt="worksp" className="w-full h-full object-cover" />
        </div>

        <div className="space-y-9">
          <p className="text-xl text-[#4F4F4F] leading-8">
            At Tresor, we believe that coworking represents the future of work. We strive to provide
            a platform that allows this thriving industry to connect and thrive. As members of
            Coworking, our team is passionate about helping people join communities that will take
            their lives and businesses to the next level.
          </p>

          <a
            target="_blank"
            href="https://api.whatsapp.com/send?phone=201113304695&text=How%20can%20i%20join%20to%20the%20teams"
            className="btn-green"
            rel="noreferrer"
          >
            Join the Team
          </a>
        </div>
      </div>
    </section>
  );
}
