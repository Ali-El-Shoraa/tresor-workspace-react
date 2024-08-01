export default function TitlePage({ title }) {
  return (
    // h-80
    <div className="sp-title-header-page relative w-full">
      <div className="sp-layout">
        <img
          src="images/page-title-bg.jpg"
          alt="page-title-bg"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="container h-full flex items-center max-lg:justify-center">
        <h3 className="text-6xl font-bold text-white">{title}</h3>
      </div>
    </div>
  );
}
