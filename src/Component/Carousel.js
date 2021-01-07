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
import { useSelector } from "react-redux";
import "./Carousel.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function Carousel(props) {
  const slides = useSelector((state) => state.QuanLyPhimReducer.slides);
  const phimList = useSelector((state) => state.QuanLyPhimReducer.dsPhim);
  const index = 0;

  const handlePlay = (phim, index) => {
    let popup = document.getElementById(index);
    popup.classList.toggle("show");
  };
  return (
    <div className="slider-box">
      <Swiper>
        <Swiper
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
          {phimList.map((phim, index) => {
            return (
              <>
                <SwiperSlide>
                  <div className="cardItems" key={index}>
                    <img
                      className="hinhPhim card-img-top"
                      src={phim.hinhAnh}
                      alt={phim.hinhAnh}
                      onError={(e) => {
                        e.target.onError = null;
                        e.target.src = "http://picsum.photos/300/300";
                      }}
                    />

                    <div className="cardPhim">
                      <div>
                        <h4 className="card-title itemName">{phim.tenPhim}</h4>
                      </div>
                    </div>
                    <div className="popup" key={index}>
                      <img
                        key={index}
                        className="playBtn"
                        src="/img/btnPlay.png"
                        onClick={() => handlePlay(phim, index)}
                      />
                      <span className="btnDatVe">
                        <p>ĐẶT VÉ</p>
                      </span>
                    </div>
                  </div>
                </SwiperSlide>

                <div className="trailer-wrapper" id={index}>
                  <iframe
                    className="popuptext"
                    src={phim.trailer}
                    width="900"
                    height="450"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                  <i
                    id={index}
                    class="fa fa-times btnClose"
                    onClick={() => handlePlay(phim, index)}
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
