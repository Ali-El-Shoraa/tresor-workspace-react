import TitleHeader from "../../general/TitleHeader";
import { TRESORSPACE } from "../../store/tresorSpace";

export default function TresorSpaceSection() {
  return (
    <section className="bg-[#2e4542] py-24">
      <TitleHeader title={"Tresor Space"} st={"text-white before:bg-white after:bg-white"} />

      {/* *********************************************************************************************************** */}
      <div className="container grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {TRESORSPACE.map((obj, ind) => (
          <div
            key={ind}
            // flex items-center justify-center gap-8 px-1 py-1 max-lg:flex-col
            className="bg-white rounded-xl p-1 flex justify-between flex-col"
          >
            {/* w-[200px] h-full max-lg:w-full */}
            <div className="">
              <img
                src={`images/${obj.srcImg}`}
                alt={obj.srcImg}
                className="w-full h-full object-cover rounded-xl rounded-br-[50%]"
              />
            </div>
            {/* flex items-start h-full justify-between py-4 flex-col flex-1 */}
            <div className="flex items-start justify-between p-4 flex-col">
              <h3 className="font-bold text-2xl">{obj.header}</h3>
              {/* list-disc */}
              <ul className="py-4 leading-7">
                {obj.list.map((item, ind) => (
                  <li key={ind}>{item}</li>
                ))}
              </ul>

              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=201550859246&text=Coworking%20space%20Day%20Passes"
                className="btn-green ml-auto"
                rel="noreferrer"
              >
                Book
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
