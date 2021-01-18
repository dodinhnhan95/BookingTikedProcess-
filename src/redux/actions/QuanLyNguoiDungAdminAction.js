import React from "react";
import Axios from "axios";
import { domain, ACCESSTOKEN } from "../consts/Config";
import swal from "sweetalert2";
export const layDanhSachNguoiDungAdminApi = () => {
  return (dispatch) => {
    var promise = Axios({
      url: domain + "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03",
      method: "GET",
    });
    promise.then((res) => {
      // gọi lại action dispatch reducer đã viết ở dưới
      dispatch(layDanhSachAdminApi(res.data));
    });
    // thất bại báo lỗi
    promise.catch((error) => {
      console.log(error);
    });
  };
};
export const layDanhSachAdminApi = (dataUser) => {
  return {
    type: "LAY_DS_NGUOI_DUNG_ADMIN_ACTION",
    dsNguoiDung: dataUser,
  };
};

///----------Xóa Người dùng API-------
export const xoaNguoiDung = (taiKhoan) => {
  return (dispatch) => {
    var promise = Axios({
      url: domain + `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
    // dispatch(layDanhSachNguoiDungAdminApi);
    promise.then(() => {
      swal.fire("Thông Báo", "Xóa Thành Công", "success");
    });
    promise.catch((error) => {
      swal.fire("Thông Báo", `${error.response.data}`, "warning");
      console.log(error.response.data);
    });
  };
};

///// ---------- LẤY THÔNG TIN NGƯỜI DÙNG MUỐN CHỈNH SỬA ------
export const layThongTinTaiKhoanUserEdit = (user) => {
  return (dispatch) => {
    const promise = Axios({
      url: domain + "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: user,
      headers: {
        Authorization: "Bearer" + localStorage.getItem(ACCESSTOKEN),
      },
    });
    console.log("maLoaiNguoiDung ", user.maLoaiNguoiDung);

    promise.then((res) => {
      dispatch({
        type: "LAY_TT_TAI_KHOAN_USER_EDIT",
        user: res.data,
      });
      // console.log("kết quả", res.data);
    });
    promise.catch((error) => {
      console.log(error.response.data);
    });
  };
};

///////////----------- CHỨC NĂNG CẬP NHAT THÔNG TIN CỦA NGƯỜI DÙNG
export const capNhatInfoAdminAction = (userNguoiDungSua) => {
  return (dispatch) => {
    const promise = Axios({
      url: domain + "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: userNguoiDungSua,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
    promise.then((res) => {
      swal.fire("Thông Báo", "Cập nhật thành công", "success");
    });
    promise.catch((err) => {
      swal.fire("Thông Báo", `${err.response.data}`, "error");
    });
  };
};

/////----------------- CHỨC NĂNG THÊM NGƯỜI DÙNG -----------------///
export const themNguoiDungAdminApi = (userAdd) => {
  return (dispatch) => {
    const promise = Axios({
      url: domain + "/api/QuanLyNguoiDung/ThemNguoiDung",
      method: "POST",
      data: userAdd,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
    promise.then((res) => {
      swal.fire("Thông Báo", "Thêm thành công", "success");
    });
    promise.catch((err) => {
      swal.fire("Thông Báo", `${err.response.data}`, "error");
    });
  };
};
