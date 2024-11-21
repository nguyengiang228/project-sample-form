import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner1 from "../../assets/banners/banner1.png";
import Banner2 from "../../assets/banners/banner2.png";
import Banner3 from "../../assets/banners/banner3.png";
import Banner4 from "../../assets/banners/banner4.png";
import "./style.css";

export default function Banner() {
  return (
    <div className="relative text-white justify-between slide-container">
      {/* <img src={Banner1} alt="" className="w-full h-full" /> */}
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        arrows={false}
        duration={2000}
        // autoplay={false}
      >
        <div style={{}}>
          <img className="w-full" src={Banner1} alt="" />
        </div>
        <div style={{}}>
          <img className="w-full" src={Banner2} alt="" />
        </div>
        <div style={{}}>
          <img className="w-full" src={Banner3} alt="" />
        </div>
        <div style={{}}>
          <img className="w-full" src={Banner4} alt="" />
        </div>
      </Slide>
    </div>
  );
}
