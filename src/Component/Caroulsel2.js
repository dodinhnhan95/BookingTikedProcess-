import React, { useState } from "react";
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
  EffectCoverflow,
} from "swiper";
import { useSelector } from "react-redux";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);
export default function Caroulsel2(props) {
  const slides = useSelector((state) => state.QuanLyPhimReducer.slides);
  return (
    <Swiper className="carousel2">
      <div className="swiper-container swiperContainer">
        <div className="swiper-wrapper">
          <Swiper
            style={{ paddingBottom: "2rem" }}
            className="carouselChild"
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            loop={true}
            coverflowEffect={{
              rotate: 55,
              stretch: 0,
              depth: 80,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              el: "swiper-pagination",
            }}
            pagination={{ clickable: true }}
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="childItem">
                  <div className="text-center itemsBanner ">
                    <img
                      className="hinhBanner"
                      src={slide.picture}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      <div className="swiper-pagination"></div>
    </Swiper>
  );
}
