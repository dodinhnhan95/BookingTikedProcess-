import axios from "axios";
import swal from "sweetalert2";
import { history } from "../../Util/history";
import { ACCESSTOKEN, USER_LOGIN, domain } from "../consts/Config";

export const dangNhapAction = (userLogin) => {
  return (dispatch) => {
    const promise = axios({
      url: domain + "/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: userLogin,
    });
    promise.then((result) => {
      // đang nhập thành công lưu  thông tin người dùng vào localstore
      localStorage.setItem(USER_LOGIN, JSON.stringify(result.data));
      // lưu token vào local store
      localStorage.setItem(ACCESSTOKEN, result.data.accessToken);
      dispatch({
        type: "DANG_NHAP",
        userLogin: result.data,
      });
      swal.fire("Thông Báo", "đăng nhập thành công", "success");
      history.push("/trangchu");
    });
    promise.catch((err) => {
      swal.fire("Thông Báo", err.response.data, "warning");
      console.log(err.response.data);
    });
  };
};

//////////////// Đăng Ký Action
export const dangkyAction = (userRegis) => {
  return (dispatch) => {
    const promise = axios({
      url: domain + "/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: userRegis,
    });
    promise.then((res) => {
      dispatch({
        type: "DANG_KY",
        userRegis: res.data,
      });
      swal.fire("Thông Báo", "đăng ký thành công", "success");
      history.push("/dangnhap");
    });
    promise.catch((error) => {
      swal.fire("Thông Báo", error.response.data, "warning");
      console.log(error.response.data);
    });
  };
};
////////////////////////// THAY ĐỔI THÔNG TIN TÀI KHOẢN
export const capNhatInfoAction = (userEdit) => {
  return (dispatch) => {
    const promise = axios({
      url: domain + "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
      method: "PUT",
      data: userEdit,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
    promise.then((res) => {
      dispatch({
        type: "CAP_NHAT",
        userEdit: res.data,
      });
      dispatch(dangNhapAction(userEdit));
      swal.fire("Thông Báo", "Cập nhật thành công", "success");
      // history.push("/dangnhap");
    });
    promise.catch((err) => {
      swal.fire("Thông Báo", err, "warning");
      console.log(err);
    });
  };
};

///////////////////////// LÂY THÔNG TIN TÀI KHOẢN KHÁCH HÀNG TỪ API
export const layThongTinTaiKhoanDangNhap = (userInfo) => {
  return (dispatch) => {
    const promise = axios({
      url: domain + "/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: userInfo,
      headers: {
        Authorization: "Bearer" + localStorage.getItem(ACCESSTOKEN),
      },
    });
    promise.then((res) => {
      dispatch({
        type: "LAY_TT_TAI_KHOAN",
        userInfo: res.data,
      });
      console.log("kết quả", res.data);
    });
    promise.catch((error) => {
      console.log(error.response.data);
    });
  };
};
