import Axios from "axios";
import { domain, ACCESSTOKEN } from "../consts/Config";
import Swal from "sweetalert2";

//----------------------- lấy danh sách phim đang chiếu --------------------------------------------------------
export const layDanhSachPhimAdminApi = () => {
  return (dispatch) => {
    var promise = Axios({
      url: domain + "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP07",
      method: "GET",
    });
    promise.then((res) => {
      // gọi lại action dispatch reducer đã viết ở dưới
      dispatch(layDanhSachPhimAdmin(res.data));
    });
    // thất bại báo lỗi
    promise.catch((error) => {
      console.log(error);
    });
  };
};
export const layDanhSachPhimAdmin = (dataPhim) => {
  return {
    type: "LAY_DANH_SACH_PHIM_ADMIN_API",
    dsPhim: dataPhim,
  };
};
/// --------------- XOA PHIM DANH SACH PHIM --------------///
export const xoaPhim = (maPhimXoa) => {
  return (dispatch) => {
    var promise = Axios({
      url: domain + `/api/QuanLyPhim/XoaPhim?MaPhim=${maPhimXoa}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });

    promise.then(() => {
      Swal.fire("Thông Báo", "Xóa Thành Công", "success");
    });
    promise.catch((error) => {
      Swal.fire("Thông Báo", `${error.response.data}`, "warning");
      console.log(error.response.data);
    });
  };
};
////// ----------- LẤY THÔNG TIN PHIM EDIT ---------------///
export const layThongTinPhimEdit = (maPhimEdit) => {
  console.log("maphimEdit", maPhimEdit);
  return (dispatch) => {
    const promise = Axios({
      url: domain + `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhimEdit}`,
      method: "GET",
    });
    promise.then((res) => {
      dispatch({
        type: "LAY_TT_PHIM_EDIT",
        phimEdit: res.data,
      });
    });
    promise.catch((error) => {
      console.log(error.response.data);
    });
  };
};
//// ----------------- Cập Nhật Thông Tin Cho Phim----------- /////
export const capNhatPhimAdminApi = (phimInforEdit) => {
  console.log(typeof phimInforEdit.get("hinhAnh"));
  return (dispatch) => {
    const promise = Axios({
      url: domain + "/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: phimInforEdit,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
    promise.then((res) => {
      Swal.fire("Thông Báo", "Cập nhật thành công", "success");
    });
    promise.catch((err) => {
      Swal.fire("Thông Báo", `cập nhật không thành công`, "error");
    });
  };
};
///////// ------------ CHỨC NĂNG THÊM PHIM VÀ UPLOAD HÌNH ẢNH ----------///

export const themPhimUploadHinh = (phimUpload) => {
  console.log(typeof phimUpload.get("hinhAnh"));
  return (dispatch) => {
    const promise = Axios({
      url: domain + "/api/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data: phimUpload,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(ACCESSTOKEN),
      },
    });
    promise.then((res) => {
      Swal.fire("Thông Báo", "Thêm phim thành công", "success");
    });
    promise.catch((err) => {
      Swal.fire("Thông Báo", `Thêm phim  không thành công`, "error");
    });
  };
};
