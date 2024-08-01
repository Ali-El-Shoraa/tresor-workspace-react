export default function TitleHeader({ title, st = "before:bg-black after:bg-black" }) {
  return (
    // text-5xl w-fit mx-auto font-bold mb-20 relative before:absolute before:w-2/3 before:h-1 before:-bottom-6 before:left-1/2 before:-translate-x-1/2 before:bg-black before:rounded-xl
    <h3
      className={`${st} text-5xl uppercase w-fit mx-auto font-bold mb-20 relative before:absolute before:w-8 before:h-1 before:top-1/2 before:-right-9 before:-translate-y-1/2 before:rounded-xl after:absolute after:w-8 after:h-1 after:top-1/2 after:-left-9 after:-translate-y-1/2 after:rounded-xl`}
    >
      {title}
    </h3>
  );
}
