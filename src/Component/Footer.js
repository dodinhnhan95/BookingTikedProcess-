import React from "react";

export default function Footer() {
  return (
    <div className="footerComponent">
      <div className="container doRong">
        <div className="row">
          <div className="col-4 col-sm-4 itemFooter">
            <p className="text-white">CYBER FILM</p>
            <div className="row">
              <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                <ul>
                  <li className="itemP">
                    <a href="#">FAQ </a>
                  </li>
                  <li className="itemP">
                    <a href="#">Brand Guidelines </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                <ul>
                  <li className="itemP">
                    <a href="#">Thỏa thuận sử dụng </a>
                  </li>
                  <li className="itemP">
                    <a href="#">Chính sách bảo mật </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm-4 itemFooter">
            <p className="text-white">Đối Tác</p>
            <div className="row text-center">
              <div className="col-sm-3 col-xs-3 noPaddingLeft fontSizeP hideOnMobile">
                <ul>
                  <li>
                    <img className="itemPic" src="/img/tonghop/bhd.png" />
                  </li>
                  <li>
                    <img className="itemPic" src="/img/tonghop/cgv.png" />
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 col-xs-3 noPaddingLeft fontSizeP hideOnMobile">
                <ul>
                  <li>
                    <img className="itemPic" src="/img/tonghop/cnx.jpg" />
                  </li>
                  <li>
                    <img className="itemPic" src="/img/tonghop/dcine.png" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-sm-3 col-xs-3 noPaddingLeft fontSizeP hideOnMobile">
                <ul>
                  <li>
                    <img className="itemPic" src="/img/tonghop/IVB.png" />
                  </li>
                  <li>
                    <img className="itemPic" src="/img/tonghop/payoo.jpg" />
                  </li>
                </ul>
              </div>
              <div className="col-sm-3 col-xs-3 noPaddingLeft fontSizeP hideOnMobile">
                <ul>
                  <li>
                    <img className="itemPic" src="/img/tonghop/VCB.png" />
                  </li>
                  <li>
                    <img
                      className="itemPic"
                      src="/img/tonghop/VIETTINBANK.png"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-4 col-sm-4 itemFooter">
            <div className="row">
              <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                <p className="text-white">MOBILE APP</p>
                <ul>
                  <li>
                    <a href="#" className="mr-2">
                      <img className="itemPic" src="/img/tonghop/android.png" />{" "}
                    </a>
                    <a href="#">
                      <img className="itemPic" src="/img/tonghop/apple.png" />{" "}
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-xs-6 noPaddingLeft fontSizeP hideOnMobile">
                <p className="text-white">SOCIAL</p>
                <ul>
                  <li>
                    <a href="#" className="mr-2">
                      <img className="itemPic" src="/img/tonghop/fb_logo.png" />{" "}
                    </a>
                    <a href="#">
                      <img
                        className="itemPic"
                        src="/img/tonghop/zalo-logo.png"
                      />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerInfor">
        <div className="row">
          <div className="col-2 col-sm-2 col-xs-2 noPaddingLeft fontSizeP hideOnMobile text-center">
            <a href="#">
              <img className="itemFinal" src="/img/logoCyber.png" />
            </a>
          </div>
          <div className="col-8 col-sm-8 col-xs-6 noPaddingLeft fontSizeP hideOnMobile text-left text-white pt-2 inforCompany">
            <span className="col-8 col-sm-8 col-xs-6 noPaddingLeft fontSizeP hideOnMobile ">
              CYBER FILM – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN CYBERSOFT
            </span>
            <p className="col-8 col-sm-8 col-xs-6 noPaddingLeft fontSizeP hideOnMobile ">
              Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
              Chí Minh, Việt Nam. Giấy chứng nhận đăng ký kinh doanh số:
              0101*****, đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020
              do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp. Số Điện Thoại
              (Hotline): 1900 545 436
              <p>Email: info@cybersoft.edu.vn</p>
            </p>
          </div>
          <div className="col-2 col-sm-2 col-xs-2 noPaddingLeft fontSizeP hideOnMobile text-center">
            <a href="#">
              <img className="itemFinal" src="/img/daThongBao.png" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
