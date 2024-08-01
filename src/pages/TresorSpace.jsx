import TitlePage from "../general/TitlePage";
import { TRESORSPACE } from "../store/tresorSpace";

export default function TresorSpace() {
  return (
    <section>
      <TitlePage title={"Tresor Space"} />

      <section className="text-white">
        <div className="container py-16 space-y-14">
          {TRESORSPACE.map((obj, ind) => (
            <div
              key={ind}
              className={`flex items-center justify-start gap-8 max-w-5xl mx-auto rounded-xl bg-[#2e4542] [&:nth-child(odd)]:justify-between [&:nth-child(odd)]:flex-row-reverse max-lg:[&:nth-child(odd)]:flex-col max-lg:flex-col max-lg:items-start`}
            >
              <img
                src={`images/${obj.srcImg}`}
                alt={obj.srcImg}
                className="w-[600px] rounded-xl max-lg:w-full"
              />

              <div className="px-3 py-4 w-full">
                <h3 className="font-bold text-4xl max-lg:text-4xl">{obj.header}</h3>
                {/* list-disc  */}
                <ul className="py-4 leading-7">
                  {obj.list.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
                {/* btn-green */}
                <span className="bg-white text-black rounded-lg font-semibold block w-fit py-2 px-4 max-lg:text-xl max-lg:ml-auto">
                  Book
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
