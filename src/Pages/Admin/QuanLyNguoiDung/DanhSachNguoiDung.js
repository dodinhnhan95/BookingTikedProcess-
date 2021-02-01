import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  layDanhSachNguoiDungAdminApi,
  xoaNguoiDung,
  layThongTinTaiKhoanUserEdit,
} from "../../../redux/actions/QuanLyNguoiDungAdminAction";
import { layThongTinTaiKhoanDangNhap } from "../../../redux/actions/QuanLyNguoiDungAction";
import { history } from "../../../Util/history";

export default function DanhSachNguoiDung() {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Họ Tên",
      dataIndex: "hoTen",
      key: "name",

      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tài Khoản",
      dataIndex: "taiKhoan",
      key: "age",
    },

    {
      title: "Email",
      dataIndex: "email",
      key: "address 1",

      textWrap: "word-break",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "address 2",
    },
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "address 4",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      key: "address 3",
    },
    {
      title: "",
      dataIndex: "handle",
      key: "address 5",
      render: (record, action) => (
        <>
          <button
            className="btnEdit"
            onClick={() =>
              handleEditUser(action.taiKhoan, action.maLoaiNguoiDung)
            }
          >
            Sửa
          </button>
          <button
            className="btnDelete"
            onClick={() => handleDelete(action.taiKhoan)}
          >
            Xóa
          </button>
        </>
      ),
    },
  ];

  const { dsNguoiDung } = useSelector(
    (state) => state.QuanLyNguoiDungAdminReducer
  );
  const [listUser, setListUser] = useState(dsNguoiDung);
  useEffect(async () => {
    dispatch(await layDanhSachNguoiDungAdminApi());
  }, [listUser]);

  const dsNguoiDungData = dsNguoiDung.map((nguoiDung, i) => {
    return {
      key: i,
      hoTen: nguoiDung.hoTen,
      taiKhoan: nguoiDung.taiKhoan,
      email: nguoiDung.email,
      soDt: nguoiDung.soDt,
      matKhau: nguoiDung.matKhau,
      maLoaiNguoiDung: nguoiDung.maLoaiNguoiDung,
    };
  });
  console.log(dsNguoiDung);
  const handleEditUser = async (tk, maLoaiND) => {
    let user = {};
    user.taiKhoan = tk;
    user.maLoaiNguoiDung = maLoaiND;
    console.log("user", user.maLoaiNguoiDung);
    dispatch(await layThongTinTaiKhoanUserEdit(user));
    dispatch(
      await {
        type: "MA_NGUOI_DUNG",
        maNguoiDungLayVe: user.maLoaiNguoiDung,
      }
    );
    history.push("/admin/chinhsuanguoidung");
  };
  const handleDelete = async (taiKhoan) => {
    dispatch(await xoaNguoiDung(taiKhoan));
    dispatch(await layDanhSachNguoiDungAdminApi());
    setListUser(dsNguoiDung);
  };
  return (
    <div className="danhSachNguoiDung">
      <h1>DANH SÁCH NGƯỜI DÙNG</h1>
      <Table columns={columns} dataSource={dsNguoiDungData} />
    </div>
  );
}
