import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { themNguoiDungAdminApi } from "../../../redux/actions/QuanLyNguoiDungAdminAction";
import Swal from "sweetalert2";

export default function ThemXoaNguoiDung() {
  const dispatch = useDispatch();
  const [userAdd, setUserAdd] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP03",
    maLoaiNguoiDung: "",
  });
  // tạo ra một state err mới để chứa các lỗi
  const [Err, setErr] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    for (let tenTruong in userAdd) {
      if (userAdd[tenTruong].trim() === "") {
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
    dispatch(themNguoiDungAdminApi(userAdd));
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    let newUserAdd = { ...userAdd, [name]: value };
    setUserAdd(newUserAdd);
    // Kiểm tra lỗi khi người dùng nhập

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
  const renderButton = () => {
    let valid = true;
    for (let item in Err) {
      if (Err[item] !== "") {
        valid = false;
      }
    }
    if (valid) {
      return (
        <button type="submit" className="update">
          Thêm người dùng
        </button>
      );
    } else {
      return (
        <button type="submit" className="update disabled" disabled>
          Thêm người dùng
        </button>
      );
    }
  };
  return (
    <div>
      <h1>THÊM NGƯỜI DÙNG</h1>
      <form className="container-form userForm" onSubmit={handleSubmit}>
        <div className="thongTin">
          <div className="form-group">
            <p>Họ tên</p>
            <input name="hoTen" id="trainler" onChange={handleChange} />
            <p className="text-error">{Err?.hoTen}</p>
          </div>

          <div className="form-group">
            <p>Tài khoản</p>
            <input name="taiKhoan" id="tenPhim" onChange={handleChange} />
            <p className="text-error">{Err?.taiKhoan}</p>
          </div>
          <div className="form-group">
            <p>Mật khẩu</p>
            <input name="matKhau" id="moTa" onChange={handleChange} />
            <p className="text-error">{Err?.matKhau}</p>
          </div>

          <div className="form-group">
            <p>Số điện thoại</p>
            <input
              name="soDt"
              id="moTa"
              onChange={handleChange}
              type="number"
            />
            <p className="text-error">{Err?.soDt}</p>
          </div>

          <div className="form-group">
            <p>Email</p>
            <input
              name="email"
              id="moTa"
              onChange={handleChange}
              type="email"
            />
            <p className="text-error">{Err?.email}</p>
          </div>

          <div className="form-group">
            <p>Loại người dùng</p>
            <select name="maLoaiNguoiDung" onChange={handleChange}>
              <option>Chọn loại người dùng</option>
              <option value="KhachHang">Khách hàng</option>
              <option value="QuanTri">Quản trị</option>
            </select>
            <p className="text-error">{Err?.maLoaiNguoiDung}</p>
          </div>
          {renderButton()}
        </div>
      </form>
    </div>
  );
}
