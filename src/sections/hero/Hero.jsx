/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Hero() {
  return (
    <section className="sp-hero relative text-white">
      <div className="sp-layout ">
        <img src="images/hero.jpg" alt="hero" className="h-full w-full object-cover" />
      </div>

      <div className="container h-full flex items-center ">
        <div className="max-w-2xl space-y-8 max-sm:mx-auto max-sm:text-center">
          <h1 className="text-5xl font-bold">
            The all-in-one toolkit <br />
            for working remotely.
          </h1>

          <p className="text-lg leading-9">
            Everythink will be organized in one place, your team will be working together you'll be
            on top of things, and sense of calm will set in
          </p>
        </div>
      </div>
    </section>
  );
}
