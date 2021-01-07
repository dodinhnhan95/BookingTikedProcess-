import React from "react";
import Axios from "axios";

//----------------------- lấy danh sách phim đang chiếu --------------------------------------------------------
export const layDanhSachPhimApiAction = () => {
  return (dispatch) => {
    var promise = Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
      method: "GET",
    });
    promise.then((res) => {
      // gọi lại action dispatch reducer đã viết ở dưới
      dispatch(layDanhSachPhimApi(res.data));
    });
    // thất bại báo lỗi
    promise.catch((error) => {
      console.log(error);
    });
  };
};
export const layDanhSachPhimApi = (dataPhim) => {
  return {
    type: "LAY_DANH_SACH_PHIM_ACTION",
    dsPhim: dataPhim,
  };
};

//----------------------- lấy danh sách các hệ thống rạp liên kết -----------------------------------------------
export const layChiTietDanhSachCumRap = () => {
  return (dispatch) => {
    var promise = Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
    promise.then((res) => {
      dispatch(layDanhSachRapApi(res.data));
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
};
export const layDanhSachRapApi = (dataRap) => {
  return {
    type: "LAY_LIST_TT_RAP",
    listRap: dataRap,
  };
};

//----------------------- LẤY DANH SÁCH VÀ THÔNG TIN CÁC CỤM RẠP TRONG HỆ THỐNG MỖI RẠP ---------------------------
export const layListCumRap = (maHeThongRap) => {
  return (dispatch) => {
    var promise = Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });
    promise.then((result) => {
      dispatch(layThongTinListRap(result.data));
    });
    promise.catch((error) => {
      console.log(error);
    });
  };
};
export const layThongTinListRap = (TTCacRap) => {
  return {
    type: "LAY_LIST_CUM_RAP_HT",
    danhSachCumRapHeThong: TTCacRap,
  };
};

// --------------------- LẤY THÔNG TIN LỊCH CHIẾU THEO CỤM RẠP ----------------------------------------------
export const layThongTinLichChieu = (maHeThongRap) => {
  return (dispatch) => {
    var promise = Axios({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`,
      method: "GET",
    });
    promise.then((res) => {
      dispatch(layThongTinLichChieuCuaRap(res.data));
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
};
export const layThongTinLichChieuCuaRap = (TTLich) => {
  return {
    type: "LAY_TT_LICH_CHIEU",
    thongTinLichChieuTheoCum: TTLich,
  };
};
