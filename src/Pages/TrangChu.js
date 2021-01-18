import React, { useEffect } from "react";
import style from "./CSS/TrangChu.module.css";
import { useSelector, useDispatch } from "react-redux";
import { layDanhSachPhimApiAction } from "../redux/actions/QuanLyPhimAction";
import Carousel from "../Component/Carousel";
import Caroulsel2 from "../Component/Caroulsel2";
import ListCumRap from "../Component/ListCumRap";
import Tintuc from "../Component/Tintuc";
import UngDung from "../Component/UngDung";
import Footer from "../Component/Footer";
export default function TrangChu(props) {
  const dsPhim = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  const dispatch = useDispatch();

  const renderPhim = () => {
    return dsPhim.slice(0, 8).map((phim, index) => {
      console.log("phim", phim);
      return (
        <div key={index} style={{ position: "relative" }}>
          <div className="card text-left">
            <img
              style={{ height: "22rem" }}
              className="card-img-top"
              src={phim.hinhAnh}
              alt={phim.hinhAnh}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = "http://picsum.photos/300/300";
              }}
            />
            <div>
              <h4 className="card-title " style={{ fontSize: "18px" }}>
                {phim.tenPhim}
              </h4>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div
      className={`${style.fontRapChieu}`}
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "whitesmoke",
      }}
    >
      {/* <Carousel /> */}
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
        <div>
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
