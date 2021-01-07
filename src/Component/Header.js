import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header(props) {
  let userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userLogin
  );
  const handleScroll = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
      } else {
        document.getElementById("navbar").style.top = "-100px";
      }
      prevScrollpos = currentScrollPos;
    };
  };
  const menuList = () => {
    let listMN = document.getElementById("thanhTacVu");
    listMN.classList.toggle("active");
  };
  return (
    <div id="navbar" onScroll={handleScroll()}>
      <nav className="navbar navbar-expand reponsiveRow ">
        <div className="mr-100 tenHang ">
          <h1 className="tenHangPhim">CYBER FILM</h1>
        </div>

        <div
          className="collapse navbar-collapse cacLienKet"
          id="collapsibleNavId"
        >
          <ul className="navbar-nav " id="thanhTacVu">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/trangchu">
                <h3 className="deMuc"> TRANG CHỦ</h3>
                <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/tintuc">
                <h3 className="deMuc"> TIN TỨC </h3>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/lienhe">
                <h3 className="deMuc">LIÊN HỆ </h3>
              </NavLink>
            </li>
            <li className="nav-item">
              {userLogin.taiKhoan ? (
                <NavLink
                  to="/"
                  className="font-weight-bold nav-link hinhDangNhap"
                  to="/dangnhap"
                >
                  {userLogin.taiKhoan}
                  <a href="#" className="mr-2 text-center">
                    <img
                      className="hinhUserLogin"
                      src="/img/tonghop/Userpic.png"
                    />{" "}
                  </a>
                </NavLink>
              ) : (
                <NavLink className="nav-link " to="/dangnhap">
                  <h3 className="deMuc"> ĐĂNG NHẬP / ĐĂNG KÝ</h3>
                </NavLink>
              )}
            </li>
          </ul>
        </div>

        <div className="icon hienMenuList" onClick={menuList}>
          <i className="fas fa-bars"></i>
        </div>
      </nav>
    </div>
  );
}
