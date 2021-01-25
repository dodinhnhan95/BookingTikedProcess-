import React, { useEffect, useState, Fragment } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  layThongTinPhongVeApiAction,
  datVeApiAction,
} from "../redux/actions/QuanLyPhimAction";
import { USER_LOGIN } from "../redux/consts/Config";
export default function PhongVe(props) {
  const thongTinPhongVe = useSelector(
    (state) => state.QuanLyPhimReducer.thongTinPhongVe
  );

  const danhSachGheDangDat = useSelector(
    (state) => state.QuanLyPhimReducer.danhSachGheDangDat
  );
  console.log("danhSachGheDangDat", danhSachGheDangDat);
  console.log("thongTinPhongVe", thongTinPhongVe);
  const dispatch = useDispatch();
  console.log("props", props);

  useEffect(async () => {
    //Lấy tham số ma lịch chiếu từ url
    let maLichChieu = props.match.params.maLichChieu;
    //gọi action kết nối api lấy dữ liệu lịch chiếu về
    dispatch(await layThongTinPhongVeApiAction(maLichChieu));
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8 text-center">
          {/* thông tin phòng vé */}
          <div className="manHinh mt-5 mb-2">
            <img src="https://tix.vn/app/assets/img/icons/screen.png" />
          </div>
          <div className="danhSachGhe">
            {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
              // render ghe vip
              let classGheVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
              // render ghe da dat
              let classGheDaDat = ghe.daDat ? "gheDaDat" : "";
              let noiDung = ghe.daDat ? "X" : ghe.stt;
              let disabled = ghe.daDat ? "disabled" : "";
              // render ghe dang dat
              let indexGheDangDat = danhSachGheDangDat.findIndex(
                (gheDangDat) => ghe.maGhe === gheDangDat.maGhe
              );
              let classGheDangDat = indexGheDangDat !== -1 ? "gheDangDat" : "";
              return (
                <Fragment key={index}>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "DAT_GHE",
                        gheDangDat: {
                          maGhe: ghe.maGhe,
                          giaVe: ghe.giaVe,
                          stt: ghe.stt,
                        },
                      });
                    }}
                    disabled={disabled}
                    style={{ fontWeight: "bold" }}
                    className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}
                  >
                    {noiDung}
                  </button>
                  {(index + 1) % 16 === 0 ? <br /> : ""}
                </Fragment>
              );
            })}
          </div>
        </div>
        <div className="col-4">
          {/* thông tin phim */}
          <div className="display-4 text-center">
            {danhSachGheDangDat
              .reduce((tongTien, gheDangDat, index) => {
                return (tongTien += gheDangDat.giaVe);
              }, 0)
              .toLocaleString()}
          </div>
          <hr />
          <div className="text-center">
            <img
              src={thongTinPhongVe.thongTinPhim?.hinhAnh}
              alt={thongTinPhongVe.thongTinPhim?.hinhAnh}
              style={{ width: 200, height: 200 }}
            />
          </div>
          <h1>{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
          <p>
            {thongTinPhongVe.thongTinPhim?.tenCumRap} -
            {thongTinPhongVe.thongTinPhim?.tenRap}
          </p>
          <p>
            {thongTinPhongVe.thongTinPhim?.ngayChieu} -
            {thongTinPhongVe.thongTinPhim?.gioChieu}
          </p>
          <hr />
          <div>
            Ghế:
            {danhSachGheDangDat.map((gheDangDat, index) => {
              return (
                <span className="mr-1" key={index}>
                  {" "}
                  {gheDangDat.stt}{" "}
                </span>
              );
            })}
          </div>
           <hr />
          <button
            className="btn btn-success w-100 p-5"
            style={{ fontSize: 30 }}
            onClick={() => {
              if (localStorage.getItem(USER_LOGIN)) {
                let usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
                let objectDatVe = {
                  maLichChieu: props.match.params.maLichChieu,
                  danhSachVe: danhSachGheDangDat,
                  taiKhoanNguoiDung: usLogin.taiKhoan,
                };
                console.log("objectDatVe", objectDatVe);
                dispatch(datVeApiAction(objectDatVe));
              } else {
                props.history.push("/dangnhap");
              }
            }}
          >
            ĐẶT VÉ
          </button>
        </div>
      </div>
    </div>
  );
}
