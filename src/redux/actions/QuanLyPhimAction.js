import React from "react";
import Axios from "axios";
import { ACCESSTOKEN } from "../consts/Config";
import Swal from "sweetalert2";
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
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP03`,
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

export const layChiTietPhimApiAction = (maPhim) => {
  return async (dispatch) => {
    try {
      //gọi api lấy dữ liệu chi tiét phim về
      let result = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
        method: "GET",
      });

      //sau khi lấy dữ liệu chi tiết phim dispatch lên reducer giá trị vừa lấy cập nhật cho chi tiết phim
      console.log("result", result);
      console.log("result.data", result.data);
      dispatch({
        type: "LAY_CHI_TIET_PHIM",
        chiTietPhim: result.data,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };
};

export const layThongTinPhongVeApiAction = async (maLichChieu) => {
  return async (dispatch) => {
    try {
      const { data, status } = await Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
        method: "GET",
      });

      //thành công lấy dư liệu về cập nhật thongTinPhongVe
      if (status === 200) {
        dispatch({
          type: "THONG_TIN_PHONG_VE",
          thongTinPhongVe: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

// action dat ve
export const datVeApiAction = (thongTinVe) => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: thongTinVe,
        headers: {
          Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
        },
      });
      dispatch(await layThongTinPhongVeApiAction(thongTinVe.maLichChieu));
      dispatch({
        type: "DAT_VE_THANH_CONG",
      });
      Swal.fire("Thông báo", "Đặt vé thành công!", "success");
      console.log(data);
    } catch (err) {
      console.log(err);
      Swal.fire("Thông báo", "Đặt vé thất bại!", "error");
    }
  };
};
