import React from "react";

export default function UngDung(props) {
  return (
    <div className="ungDung">
      <div className="container">
        <div className="row ungDungItem">
          <div className="col-6 text-white itemThongTinUngDung ">
            <h3>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h3>
            <br />
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button className="btn btn-group btn-success">
              App miễn phí- tải về ngay
            </button>
            <p>
              CYBERSOFT có hai phiên bản <span className="gachChan">iOS</span> &
              <span className="gachChan">Android</span>
            </p>
          </div>
          <div className="col-6 itemMobile">
            <img className="mobile" src="/img/tonghop/mobile.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
