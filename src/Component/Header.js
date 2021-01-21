import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ACCESSTOKEN, USER_LOGIN } from "../redux/consts/Config";

export default function Header(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    // console.log("log out");
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(ACCESSTOKEN);
    setClick(false);
  };
  let userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userLogin
  );
  // window.addEventListener("scroll", () => {
  //   let navBar = document.getElementById("navbar");
  //   var prevScrollpos = window.pageYOffset;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.pageYOffset;
  //     if (prevScrollpos > currentScrollPos) {
  //       navBar.style.top = "0px";
  //     } else {
  //       navBar.style.top = "-100px";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // });
  const menuList = () => {
    let listMN = document.getElementById("thanhTacVu");
    listMN.classList.toggle("active");
  };
  return (
    <div
      id="navbar"
      //  onScroll={handleScroll()}
    >
      <div className="item_navBar">
        <NavLink className="mr-100 tenHang " to="/trangchu">
          <h1 className="tenHangPhim">CYBER FILM</h1>
        </NavLink>
      </div>
      <nav className="navbar navbar-expand reponsiveRow item_navBar">
        <div
          className="collapse navbar-collapse cacLienKet"
          id="collapsibleNavId"
          onClick={handleClick}
        >
          <ul className="navbar-nav " id="thanhTacVu">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/trangchu">
                <h3 className="deMuc"> CỤM RẠP</h3>
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
                  className="font-weight-bold nav-link hinhDangNhap"
                  to="/quanly/quanlythongtin"
                >
                  XIN CHÀO, {userLogin.taiKhoan} !
                  <span className="mr-2 text-center">
                    <img
                      className="hinhUserLogin"
                      src="/img/tonghop/Userpic.png"
                    />
                  </span>{" "}
                  <NavLink
                    to="/trangchu"
                    className="nav-links"
                    remove={userLogin}
                    onClick={closeMobileMenu}
                  >
                    THOÁT
                  </NavLink>
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
