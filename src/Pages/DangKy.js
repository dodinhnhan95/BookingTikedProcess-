import React, { useState } from "react";
import { dangkyAction } from "../redux/actions/QuanLyNguoiDungAction";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import Swal from "sweetalert2";

export default function DangKy(props) {
  const dispatch = useDispatch();
  const [userRegis, setUserRegis] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
  });
  // tạo ra một state err mới để chứa các lỗi
  const [Err, setErr] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDt: "",
  });

  const handleChange = (e) => {
    let { value, name } = e.target;
    let newUserRegis = { ...userRegis, [name]: value };
    setUserRegis(newUserRegis);
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
  const handleSubmit = (e) => {
    console.log("đối tượng dispatch", userRegis);
    console.log("lôi xảy ra ", Err);
    e.preventDefault();
    let valid = true;
    for (let tenTruong in userRegis) {
      if (userRegis[tenTruong].trim() === "") {
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
    dispatch(dangkyAction(userRegis));
  };
  return (
    <div className="dangKyCPN">
      <form className="container formDangKy" onSubmit={handleSubmit}>
        <h3 className="tieuDeDK">Đăng Ký</h3>
        <div className="form-group">
          <p>Tài Khoản</p>
          <input
            types="taiKhoan text"
            className="form-control"
            name="taiKhoan"
            onChange={handleChange}
          />
          <p className="text-danger">{Err.taiKhoan}</p>
        </div>
        <div className="form-group">
          <p>Mật Khẩu</p>
          <input
            types="matKhau"
            className="form-control"
            name="matKhau"
            onChange={handleChange}
          />
          <p className="text-danger">{Err.matKhau}</p>
        </div>
        <div className="form-group">
          <p>Họ tên</p>
          <input
            types="hoTen"
            className="form-control"
            name="hoTen"
            onChange={handleChange}
          />
          <p className="text-danger">{Err.hoTen}</p>
        </div>
        <div className="form-group">
          <p>Email</p>
          <input
            types="email"
            className="form-control"
            name="email"
            onChange={handleChange}
          />
          <p className="text-danger">{Err.email}</p>
        </div>
        <div className="form-group">
          <p>Số điện thoại</p>
          <input
            types="soDt"
            className="form-control"
            name="soDt"
            onChange={handleChange}
          />
          <p className="text-danger">{Err.soDt}</p>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Đăng Ký
          </button>
        </div>
      </form>
    </div>
  );
}
