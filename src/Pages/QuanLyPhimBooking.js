import React, { useState, useEffect } from "react";
import { Table, Tag, Space } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  capNhatInfoAction,
  layThongTinTaiKhoanDangNhap,
} from "../redux/actions/QuanLyNguoiDungAction";
export default function QuanLyPhimBooking(props) {
  const dispatch = useDispatch();

  // lấy userlogin về để lấy được thuộc tính tài khoản trong userlogin
  const userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userLogin
  );
  console.log("tài khoản", userLogin);
  //tạo sate là gia trị tài khoản trong userlogin lấy về để truyền vào hàm gọi api trả về thông tin tài khoản
  // const [userInfo, setUserInfo] = useState({
  //   taiKhoan: userLogin.taiKhoan,
  // });
  // console.log("value tai khoan dispatch de lay tt", userInfo);
  // hàm gọi API để lấy thông tin tài khoản
  useEffect(async () => {
    dispatch(
      await layThongTinTaiKhoanDangNhap({
        taiKhoan: userLogin.taiKhoan,
      })
    );
  }, []);
  // lấy thông tin tài khoản từ reducer sau khi gọi API và API trả về
  const userThongTin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userInfo
  );

  console.log("userThongTin", userThongTin);

  const columns = [
    {
      title: "Tên phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
      render: (tenPhim) => <a style={{ color: "green" }}>{tenPhim}</a>,
    },

    {
      title: "Số ghế",
      key: "tags",
      dataIndex: "danhSachGhe",
      render: (danhSachGhe) => (
        <>
          {danhSachGhe.map((ghe, index) => {
            return (
              <>
                <span key={index}>{ghe.tenGhe} </span>
              </>
            );
          })}
        </>
      ),
    },
    {
      title: "Ngày đặt",
      dataIndex: "ngayDat",
      key: "ngayDat",
    },
    {
      title: "Rạp",
      key: "tags",
      dataIndex: "danhSachGhe",
      render: (danhSachGhe) => (
        <>
          {danhSachGhe.slice(0, 1).map((ghe, index) => {
            return (
              <>
                <span key={index}>
                  {ghe.tenRap} - {ghe.tenHeThongRap}{" "}
                </span>
              </>
            );
          })}
        </>
      ),
    },
  ];

  const data = userThongTin?.thongTinDatVe;

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
