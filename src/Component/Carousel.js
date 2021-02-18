import React, { useEffect, useState } from "react";
// import Slider from "react-animated-slider";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import "swiper/components/effect-coverflow/effect-coverflow.scss";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Controller,
} from "swiper";
import "react-animated-slider/build/horizontal.css";
import { useSelector, useDispatch } from "react-redux";
import "./Carousel.css";
import { NavLink } from "react-router-dom";
import { layDanhSachPhimApiAction } from "../redux/actions/QuanLyPhimAction";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function Carousel(props) {
  const phimList = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  const [ds, setds] = useState(phimList);
  useEffect(async () => {
    dispatch(await layDanhSachPhimApiAction());
  }, [ds]);

  const dispatch = useDispatch();
  const handlePlay = (index) => {
    let popup = document.getElementById(index);
    popup.classList.toggle("show");
  };
  return (
    <div className="slider-box">
      <Swiper key={0} className="Swiper1">
        <Swiper
          key={1}
          className="Swiper2"
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={4}
          loop={true}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            576: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {phimList?.slice(0, 10).map((phim, index) => {
            return (
              <>
                <SwiperSlide key={index} className="SwiperWrap">
                  <div className="cardItems">
                    <img
                      className="hinhPhim card-img-top"
                      src={phim?.hinhAnh}
                      alt={phim?.hinhAnh}
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src = "http://picsum.photos/300/300";
                      }}
                    />
                    <div className="cardPhim">
                      <div>
                        <h4 className="card-title itemName">{phim?.tenPhim}</h4>
                      </div>
                    </div>
                    <div className="popup">
                      <img
                        className="playBtn"
                        alt="play"
                        src="/img/btnPlay.png"
                        onClick={() => handlePlay(index)}
                      />
                      <span className="btnDatVe">
                        <NavLink
                          className=" btn font-weight-bold w-100 bg-dark text-light datVeBTN"
                          to={"/chitietphim/" + phim.maPhim}
                        >
                          ĐẶT VÉ
                        </NavLink>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
                <div className="trailer-wrapper" key={phim?.tenPhim} id={index}>
                  <iframe
                    className="popuptext"
                    src={phim?.trailer}
                    width="900"
                    height="450"
                    frameBorder="0"
                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <i
                    id={index}
                    className="fa fa-times btnClose"
                    onClick={() => handlePlay(index)}
                  />
                </div>
              </>
            );
          })}
        </Swiper>
        <div className="swiper-button-prev btnPrev"></div>
        <div className="swiper-button-next btnNext"></div>
      </Swiper>
    </div>
  );
}
