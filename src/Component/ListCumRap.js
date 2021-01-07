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
    return phimDangChieuTaiCumRap.danhSachPhim?.map((phim, index) => {
      return (
        <div className="test-left lichChieu " key={index}>
          <img className="hinhPhimChieu" src={phim.hinhAnh} />
          <div style={{ display: "block" }}>
            <span className="tenPhimChieu"> {phim.tenPhim}</span>
            <br />
            <button className="btn btn-group btn-success btnDatVe">
              Đặt vé
            </button>
          </div>
        </div>
      );
    });
  };
  const renderCumRap = () => {
    return thongTinLichChieuTheoCum.map((heThongRap, i) => {
      return (
        <div key={i}>
          {heThongRap.lstCumRap?.map((cum, index) => {
            return (
              <div key={index} role="tablist" className="tenDiaChiCum ">
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                  onClick={() => truyenLichChieu(cum)}
                >
                  {cum.tenCumRap}
                  <br />
                  <span className="diaChiCum text-dark ">{cum.diaChi}</span>
                </p>
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
        <a
          key={index}
          className="nav-link loGo"
          id={"v-pills-home-tab" + active}
          data-toggle="pill"
          href={`#${rap.maHeThongRap}`}
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
          onClick={() => handleTruyen(rap.maHeThongRap)}
        >
          <img
            src={rap.logo}
            alt={rap.logo}
            style={{ width: 50, height: 50 }}
          />
        </a>
      );
    });
  };

  const handleTruyen = (ma) => {
    setMaTruyen(ma);
  };
  // useDispatch
  const dispatch = useDispatch();
  //gọi useEffect
  useEffect(() => {
    dispatch(layChiTietDanhSachCumRap());
    console.log(maTruyenVao);
    dispatch(layThongTinLichChieu(maTruyenVao));
  }, [maTruyenVao]);
  return (
    <div className="bangHienLich text-center">
      <span className="tieuDeTTLC">THÔNG TIN LỊCH CHIẾU</span>

      <div className=" bangCumRap text-left">
        <table className="table mb-0">
          <tbody>
            <tr>
              <td className="iconHTCum">{renderHeThongRap()}</td>
              <td className="iconTenCum"> {renderCumRap()}</td>
              <td className="iconPhimDangChieu">{renderLichChieu()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
