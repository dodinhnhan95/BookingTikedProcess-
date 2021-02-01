import React from "react";

export default function Tintuc() {
  return (
    // <div className="container text-center Tintuc">
    //   <h2 className="tieuDeTT">Tin Tức 24h</h2>
    //   <div className="row">
    //     <div className="col-6 tinTucItem">
    //       <img
    //         className="imgItem"
    //         src="./img/TinTuc/TinTuc.jpg"
    //         alt="./img/TinTuc/TinTuc.jpg"
    //       />
    //       <br />
    //       <a href="#" style={{ fontWeight: "400" }}>
    //         "Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành"
    //       </a>

    //       <p className="noiDungTin">
    //         Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
    //         độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại 360
    //         Giải Phóng!
    //       </p>
    //     </div>
    //     <div className="col-6 tinTucItem text-left ">
    //       <img
    //         className="imgItem"
    //         src="./img/TinTuc/TinTuc2.png"
    //         alt="./img/TinTuc/TinTuc2.png"
    //       />
    //       <br />
    //       <a href="#" style={{ fontWeight: "400" }}>
    //         Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công chiếu
    //       </a>

    //       <p className="noiDungTin">
    //         Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ
    //         phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao “bạc
    //         tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một khung hình để
    //         ăn mừng thành tích ấn tượng
    //       </p>
    //     </div>
    //     <div className="container ">
    //       <div className="row">
    //         <div className="col-8">
    //           <div className="row">
    //             <div className="col-6 text-left">
    //               <img
    //                 className="imgItem"
    //                 src="./img/TinTuc/TinTuc3.jpg"
    //                 alt="./img/TinTuc/TinTuc3.jpg"
    //               />
    //               <br />
    //               <a href="#" style={{ fontWeight: "400" }}>
    //                 Ngô Thanh Vân chính thức khởi động cuộc thi thiết kế thời
    //                 trang cho Siêu Anh Hùng Của Việt Nam – VINAMAN
    //               </a>

    //               <p className="noiDungTin">
    //                 Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
    //                 chính thức phát động cuộc thi thiết kế trang phục cho siêu
    //                 anh hùng VINAMAN với tổng
    //               </p>
    //             </div>
    //             <div className="col-6 text-left">
    //               <img
    //                 className="imgItem"
    //                 src="./img/TinTuc/TinTuc4.png"
    //                 alt="./img/TinTuc/TinTuc4.png"
    //               />
    //               <br />
    //               <a href="#" style={{ fontWeight: "400" }}>
    //                 [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
    //                 Antebellum: Bẫy Thực Tại Kinh Hoàng
    //               </a>

    //               <p className="noiDungTin">
    //                 Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
    //                 những mảng tối của xã hội trên nền một câu chuyện kinh dị,
    //                 có sự tham gia của nhà sản xuất
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-4 text-left">
    //           <div className="row tinNho">
    //             <div className="col-4">
    //               <img
    //                 className="imgItem2"
    //                 src="./img/TinTuc/TinTucNho1.png"
    //                 alt="./img/TinTuc/TinTucNho1.png"
    //               />
    //             </div>
    //             <a href="#" className="col-8 noiDungTin2">
    //               Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt Christopher
    //               Nolan
    //             </a>
    //           </div>
    //           <div className="row tinNho">
    //             <div className="col-4">
    //               <img
    //                 className="imgItem2"
    //                 src="./img/TinTuc/TinTucNho3.png"
    //                 alt="./img/TinTuc/TinTucNho3.png"
    //               />
    //             </div>
    //             <a href="#" className="col-8 noiDungTin2">
    //               Gerard Butler cùng bồ cũ Deadpool tham gia Greenland
    //             </a>
    //           </div>
    //           <div className="row tinNho">
    //             <div className="col-4">
    //               <img
    //                 className="imgItem2 "
    //                 src="./img/TinTuc/TinTucNho2.png"
    //                 alt="./img/TinTuc/TinTucNho2.png"
    //               />
    //             </div>
    //             <a href="#" className="col-8 noiDungTin2">
    //               Truy Cùng Giết Tận - Cuộc tái ngộ của hai 'ông hoàng phòng vé'
    //               xứ Hàn
    //             </a>
    //           </div>
    //           <div className="row tinNho">
    //             <div className="col-4">
    //               <img
    //                 className="imgItem2"
    //                 src="./img/TinTuc/TinTucNho4.png"
    //                 alt="./img/TinTuc/TinTucNho4.png"
    //               />
    //             </div>
    //             <a href="#" className="col-8 noiDungTin2">
    //               6 đạo diễn tỉ đô làm nên thành công của những bom tấn đình đám
    //               nhất Hollywood
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div>
    //         <button className="btn btn-group btn-primary">Xem Thêm</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="back-new"></div>
      <div className="news-block">
        <h1>Điện Ảnh 24h</h1>
        <div className="wrap-news">
          <div className="news-one news">
            <div className="news-img">
              <img src="./img/TinTuc/TinTuc.jpg" alt="new1" />
            </div>
            <div className="news-content-one news-content">
              <h4>“Bóc tem” tổ hợp giải trí mới toanh của giới Sài Thành</h4>
              <p>
                Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi sống ảo
                độc-lạ-chill nhất từ trước đến giờ sẽ chính thức khai trương tại
                360 Giải Phóng!{" "}
              </p>
              <a>Chi tiết</a>
            </div>
          </div>
          <div className="news-two news">
            <div className="news-img">
              <img src="/img/TinTuc/TinTuc2.png" alt="new2" />
            </div>
            <div className="news-content-two news-content">
              <h4>
                Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                chiếu
              </h4>
              <p>
                Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu lạc bộ
                phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn ngôi sao
                “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ trong một
                khung hình để ăn mừng thành tích ấn tượng
              </p>
              <a>Chi tiết</a>
            </div>
          </div>
          <button className="btn-xem">Xem Thêm</button>
        </div>
      </div>
    </>
  );
}
