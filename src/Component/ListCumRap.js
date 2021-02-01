import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  layChiTietPhimApiAction,
  layChiTietDanhSachCumRap,
  layListCumRap,
  layThongTinLichChieu,
} from "../redux/actions/QuanLyPhimAction";

export default function ListCumRap(props) {
  let [maTruyenVao, setMaTruyen] = useState("BHDstar");
  let [phimDangChieuTaiCumRap, setPhimDangChieuTapCumRap] = useState([]);

  // lấy dữ liệu cụm rạp từ API trả về ở redux
  const danhSachRap = useSelector((state) => state.QuanLyPhimReducer.listRap);
  const thongTinLichChieuTheoCum = useSelector(
    (state) => state.QuanLyPhimReducer.thongTinLichChieuTheoCum
  );
  const truyenLichChieu = (cum) => {
    setPhimDangChieuTapCumRap(cum);
  };
  const renderLichChieu = () => {
    return phimDangChieuTaiCumRap.danhSachPhim
      ?.slice(0, 8)
      .map((phim, index) => {
        // console.log("phim", phim.lstLichChieuTheoPhim);
        return (
          // <div className="test-left lichChieu " key={index}>
          //   <img className="hinhPhimChieu" src={phim.hinhAnh} />
          //   <div style={{ display: "block" }}>
          //     <span className="tenPhimChieu"> {phim.tenPhim}</span>
          //     <br />
          //     <button className="btn btn-group btn-success btnDatVe">
          //       Đặt vé
          //     </button>
          //   </div>
          // </div>
          <div className="box-movie" key={index}>
            <div className="movie-info">
              <img
                src={phim.hinhAnh}
                alt={phim.hinhAnh}
                onError={(e) => {
                  e.target.onError = null;
                  e.target.src = "https://picsum.photos/300/300";
                }}
              />
              <div className="wrap-info">
                <div>
                  <span>C18</span>
                  <NavLink to={"/chitietphim/" + phim.maPhim}>
                    {phim.tenPhim}
                  </NavLink>
                </div>
                <p className="ngBinding">100 phút - IMDb 7.3</p>
              </div>
            </div>
            <div className="movie-time">
              <p>2D Digital</p>
              <a className="season">
                <span>
                  <NavLink to={"/chitietphim/" + phim.maPhim}>15:30</NavLink>
                </span>
                ~17:30
              </a>
            </div>
          </div>
        );
      });
  };
  const renderCumRap = () => {
    return thongTinLichChieuTheoCum.map((heThongRap, i) => {
      return (
        <div key={i} className="cinema-item">
          {heThongRap.lstCumRap?.map((cum, index) => {
            return (
              // <div key={index} role="tablist" className="tenDiaChiCum ">
              //   <p
              //     style={{
              //       fontWeight: "bold",
              //       fontSize: "1rem",
              //     }}
              //     onClick={() => truyenLichChieu(cum)}
              //   >
              //     {cum.tenCumRap}
              //     <br />
              //     <span className="diaChiCum text-dark ">{cum.diaChi}</span>
              //   </p>
              // </div>

              <div className="cinema-dt" key={index}>
                <a onClick={() => truyenLichChieu(cum)}>
                  <span>{cum.tenCumRap}</span>
                  <p>{cum.diaChi}</p>
                </a>
              </div>
            );
          })}
        </div>
      );
    });
  };
  const renderHeThongRap = () => {
    return danhSachRap?.map((rap, index) => {
      let active = index === 0 ? "active" : "";
      return (
        <li
          key={index}
          className="cinema-col"
          id={"v-pills-home-tab" + active}
          data-toggle="pill"
          href={`#${rap.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          onClick={() => {
            handleTruyen(rap.maHeThongRap);
          }}
        >
          <span className="cinema-ho">
            <img src={rap.logo} alt="logo" className="logo" />
          </span>
        </li>
      );
    });
  };

  const handleTruyen = (ma) => {
    setMaTruyen(ma);
  };
  // useDispatch
  const dispatch = useDispatch();
  //gọi useEffect
  useEffect(async () => {
    dispatch(await layChiTietDanhSachCumRap());
    dispatch(layThongTinLichChieu(maTruyenVao));
  }, [maTruyenVao]);
  return (
    <>
      <div className="back-new">
        <h3>THÔNG TIN LỊCH CHIẾU</h3>
      </div>
      <div className="cinema-block" id="cumRap">
        <div className="home-cinema">
          <ul className="list-cinemas">{renderHeThongRap()}</ul>
          <div className="cinema">{renderCumRap()}</div>
          <div className="wrap-movie">{renderLichChieu()}</div>
        </div>
      </div>
    </>
  );
}
