import React, { useEffect } from "react";
import style from "./CSS/TrangChu.module.css";
import Carousel from "../Component/Carousel";
import Caroulsel2 from "../Component/Caroulsel2";
import ListCumRap from "../Component/ListCumRap";
import Tintuc from "../Component/Tintuc";
import UngDung from "../Component/UngDung";
import Footer from "../Component/Footer";
export default function TrangChu(props) {
  return (
    <div
      className={`${style.fontRapChieu}`}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "whitesmoke",
      }}
    >
      <Caroulsel2 />
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
        <div style={{ width: "90%", margin: "0 auto" }}>
          <ListCumRap />
        </div>
        <div className="componentTinTuc pb-5">
          <Tintuc />
        </div>
        <div className="cpnUD">
          <UngDung />
        </div>
      </div>
    </div>
  );
}
