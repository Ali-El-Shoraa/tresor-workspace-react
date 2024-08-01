import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "http://creativospaces.com/storage/app/public/images/July2023/UtzxgPZ2xTveULHzKK0d.jpeg",
  "http://creativospaces.com/storage/app/public/images/May2023/VSsMvjl7F6ehjEegVuSS.jpeg",
  "http://creativospaces.com/storage/app/public/images/July2023/hNQWXjIW5KNPfkK89T9Z.jpeg",
  "http://creativospaces.com/storage/app/public/images/May2023/3JXATQ8vKVB2tkYgeeYJ.jpeg",
  "http://creativospaces.com/storage/app/public/images/May2023/j2T9Kg21zaEjNmQrpJOl.jpeg",
  "http://creativospaces.com/storage/app/public/images/July2023/eqR4MsLwzmr0E3pgHTak.jpeg",
];
export default function SliderCafe() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 2,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  return (
    <section className="bg-[#fcc695]">
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="gallery-thumb">
              <img src={image} alt={`gallery-${index}`} />
              <a className="main-btn image-popup" href={image}>
                <i className="flaticon-plus"></i>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
