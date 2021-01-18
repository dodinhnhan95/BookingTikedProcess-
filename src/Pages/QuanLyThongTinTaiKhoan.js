import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  capNhatInfoAction,
  layThongTinTaiKhoanDangNhap,
} from "../redux/actions/QuanLyNguoiDungAction";
import Swal from "sweetalert2";

export default function QuanLyThongTinTaiKhoan(props) {
  const dispatch = useDispatch();

  // lấy userlogin về để lấy được thuộc tính tài khoản trong userlogin
  const userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userLogin
  );
  console.log("tài khoản", userLogin);
  //tạo sate là gia trị tài khoản trong userlogin lấy về để truyền vào hàm gọi api trả về thông tin tài khoản
  const [userInfo, setUserInfo] = useState({
    taiKhoan: userLogin.taiKhoan,
  });
  console.log("value tai khoan dispatch de lay tt", userInfo);
  // hàm gọi API để lấy thông tin tài khoản
  useEffect(async () => {
    dispatch(await layThongTinTaiKhoanDangNhap(userInfo));
  }, []);
  // lấy thông tin tài khoản từ reducer sau khi gọi API và API trả về
  const userThongTin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userInfo
  );
  console.log("userThongTin", userThongTin?.taiKhoan);

  //----------------------- Phương Thức chỉnh sửa tt ---------------------------//
  // tạo một state chưa một object dùng để truyền vào API chỉnh sửa thông tin
  const [userEdit, setUserEdit] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDT: "",
    matKhau: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });
  useEffect(() => {
    setUserEdit({
      ...userEdit,
      taiKhoan: userThongTin?.taiKhoan,
      matKhau: userThongTin?.matKhau,
      email: userThongTin?.email,
      soDT: userThongTin?.soDT,
      hoTen: userThongTin?.hoTen,
    });
  }, [userThongTin]);
  const [Err, setErr] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
  });

  /// hàm gửi thông tin sửa lên API
  const handleSubmit = (e) => {
    console.log("đối tượng dispatch", userEdit);
    console.log("lôi xảy ra ", Err);
    e.preventDefault();
    let valid = true;
    for (let tenTruong in userEdit) {
      if (userEdit[tenTruong].trim() === "") {
        valid = false;
      }
    }
    // duyệt tất cả các lỗi phải rỗng
    for (let tenTruong in Err) {
      if (Err[tenTruong].trim() !== "") {
        valid = false;
      }
    }
    if (!valid) {
      Swal.fire("Thông báo", "Dữ liệu chưa hợp lệ", "error");
      return;
    }
    dispatch(capNhatInfoAction(userEdit));
  };

  let disabled = true;
  const chinhSuaThongTin = () => {};

  const handleChange = (e) => {
    let { value, name } = e.target;
    let newUserEdit = { ...userEdit, [name]: value };
    setUserEdit(newUserEdit);
    let newErr = { ...Err };
    newErr[name] = value.trim() === "" ? "Không được bỏ trống" : "";
    // Validation các trường đặc biệt
    if (name === "soDt") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErr[name] = "Dữ liệu nhập vào phải là số";
      }
    }
    if (name === "email") {
      const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
      if (!regexEmail.test(value.trim())) {
        newErr[name] = "Email không hợp lệ!";
      }
    }
    setErr(newErr);
  };

  return (
    <div>
      <div className="infoUser" onSubmit={handleSubmit}>
        <form action="#" className="itemInfo row">
          <span className="col-2">Họ Tên:</span>
          <input
            type="text"
            name="hoTen"
            className="col-6 form-control"
            value={userEdit?.hoTen}
            onChange={handleChange}
            // disabled={disabled}
          />
          <p className="text-danger">{Err.hoTen}</p>
        </form>
        <form action="" className="itemInfo row">
          <span className="col-2">Số điện thoại:</span>
          <input
            type="text"
            name="soDT"
            className="col-6 form-control"
            value={userEdit?.soDT}
            onChange={handleChange}
            // disabled={disabled}
          />
          <p className="text-danger">{Err.soDT}</p>
        </form>
        <form action="" className="itemInfo row">
          <span className="col-2">Email:</span>
          <input
            className="col-6 form-control"
            value={userEdit.email}
            onChange={handleChange}
            // disabled={disabled}
            type="text"
            name="email"
          />
          <p className="text-danger">{Err.email}</p>
        </form>
        <form action="" className="itemInfo row">
          <span className="col-2">Tên tài khoản:</span>
          <input
            className="col-6 form-control"
            value={userEdit.taiKhoan}
            onChange={handleChange}
            // disabled={disabled}
            type="text"
            name="taiKhoan"
          />
          <p className="text-danger">{Err.taiKhoan}</p>
        </form>
        <div className="chucNangChinhSua">
          <button
            className="btn btn-group btn-primary  "
            onClick={chinhSuaThongTin()}
          >
            Chỉnh sửa
          </button>
          <button className="btn btn-group btn-success " type="submit">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  );
}