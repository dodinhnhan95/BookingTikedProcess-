import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../redux/actions/QuanLyNguoiDungAction";
import { NavLink } from "react-router-dom";

export default function DangNhap(props) {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  //   console.log(userLogin);
  const handleChange = (e) => {
    console.log("e :", e.target);

    let { value, name } = e.target; // bốc tách phần tử
    console.log("e :", e.target, value, name);
    let newUserLogin = { ...userLogin, [name]: value };
    setUserLogin(newUserLogin);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // chặn sự kiện reload brower
    dispatch(dangNhapAction(userLogin));
  };
  return (
    <div className="DangNhapCPN">
      <form className="container formDangNhap " onSubmit={handleSubmit}>
        <div className="display-4 text-center TieuDeDN">ĐĂNG NHẬP </div>
        <div className="form-group">
          <p>Tài Khoản</p>
          <input
            className="form-control"
            name="taiKhoan"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <p>Mật Khẩu</p>
          <input
            className="form-control"
            name="matKhau"
            type="password"
            onChange={handleChange}
          />
        </div>
        <div className="text-left">
          <a href="#">Quên mật khẩu?</a>
        </div>

        <div className="form-group text-left">
          <br />
          <button type="submit" className="btn btn-group btn-success">
            Đăng Nhập
          </button>{" "}
          /
          <NavLink className="nutDangKy" to="/dangky">
            <button className="btn btn-group btn-success">Đăng Ký</button>
          </NavLink>
        </div>
        <div className="form-group text-left"></div>
        <div className="text-left">
          <p>Đăng nhập bằng </p>
          <>
            <div href="#" className="mr-2">
              <img className="itemDangNhap" src="/img/tonghop/fb_logo.png" />{" "}
              <img className="itemDangNhap" src="/img/tonghop/zalo-logo.png" />{" "}
            </div>
          </>
        </div>
        <NavLink to="/">
          <button className="btn btn-danger">Hủy</button>
        </NavLink>
      </form>
    </div>
  );
}
