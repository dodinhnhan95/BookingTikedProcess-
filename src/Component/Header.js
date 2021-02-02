import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ACCESSTOKEN, USER_LOGIN } from "../redux/consts/Config";
export default function Header(props) {
  const dispatch = useDispatch();
  // const handleClick = () => {
  //   setClick(!click);
  // };
  const closeMobileMenu = () => {
    localStorage.removeItem(USER_LOGIN);
    localStorage.removeItem(ACCESSTOKEN);
    dispatch({
      type: "XOA_TT_USER",
    });
    setUsLogin("");
  };
  let userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userLogin
  );
  // let userLogin = "";
  const [usLogin, setUsLogin] = useState(userLogin);

  useEffect(async () => {
    await setUsLogin(usLogin);
  }, [userLogin]);

  console.log("userLogin", userLogin);
  console.log(usLogin);

  // window.addEventListener("scroll", () => {
  //   let nav = document.querySelector("nav");
  //   // if (nav) {
  //   //   nav.classList.toggle("headerFix", window.scrollY > 0);
  //   // }
  //   if (window.innerWidth > 960) {
  //     nav.classList.toggle("headerFix");
  //   }
  // });
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
    <nav id="navbar">
      <div className="item_navBar">
        <NavLink className="mr-100 tenHang " to="/">
          <h1 className="tenHangPhim">CYBER FILM</h1>
        </NavLink>
      </div>
      <nav className="navbar navbar-expand reponsiveRow item_navBar">
        <div
          className="collapse navbar-collapse cacLienKet"
          id="collapsibleNavId"
          // onClick={handleClick}
        >
          <ul className="navbar-nav " id="thanhTacVu">
            <li className="nav-item ">
              <a className="nav-link" href="#cumrap">
                <h3 className="deMuc"> CỤM RẠP</h3>
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#tintuc">
                <h3 className="deMuc"> TIN TỨC </h3>
              </a>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/">
                <h3 className="deMuc">LIÊN HỆ </h3>
              </NavLink>
            </li>

            <li className="nav-item">
              {usLogin.taiKhoan ? (
                <NavLink
                  className="font-weight-bold nav-link hinhDangNhap"
                  to="/quanly/quanlythongtin"
                >
                  XIN CHÀO, {usLogin.taiKhoan} !
                  <span className="mr-2 text-center">
                    <img
                      className="hinhUserLogin"
                      src="/img/tonghop/Userpic.png"
                    />
                  </span>{" "}
                  <NavLink
                    to="/"
                    className="nav-links"
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
    </nav>
  );
}
