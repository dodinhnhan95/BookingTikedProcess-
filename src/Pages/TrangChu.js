import React, { useEffect } from "react";
import style from "./CSS/TrangChu.module.css";
import Carousel from "../Component/Carousel";
import Caroulsel2 from "../Component/Caroulsel2";
import ListCumRap from "../Component/ListCumRap";
import Tintuc from "../Component/Tintuc";
import UngDung from "../Component/UngDung";
import Footer from "../Component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
export default function TrangChu(props) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
    // AOS.refresh();
  }, []);
  return (
    <div
      className={`${style.fontRapChieu}`}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "whitesmoke",
      }}
    >
      <div data-aos="fade-up">
        <Caroulsel2 />
      </div>

      <div
        style={{
          padding: "20px 10px",
        }}
        className="phimChieu"
      >
        <div
          className="display-flex text-center mb-2 text-white "
          style={{
            fontSize: "2rem",
          }}
        >
          <span className="phimDangChieu" style={{ margin: "0px 20px" }}>
            PHIM ĐANG CHIẾU
          </span>
          <span className="phimDangChieu" style={{ margin: "0px 20px" }}>
            PHIM SẮP CHIẾU
          </span>
        </div>
        <div className="carousel1">
          <Carousel />
        </div>
        <div style={{ width: "90%", margin: "0 auto" }} data-aos="fade-left">
          <ListCumRap />
        </div>
        <div className="componentTinTuc pb-5" data-aos="fade-right">
          <Tintuc />
        </div>
        <div
          className="cpnUD"
          // data-aos="fade-down-left"
        >
          <UngDung />
        </div>
      </div>
    </div>
  );
}
