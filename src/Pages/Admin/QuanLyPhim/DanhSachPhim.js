import React from "react";
import { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { history } from "../../../Util/history";
import {
  layDanhSachPhimAdminApi,
  xoaPhim,
  layThongTinPhimEdit,
} from "../../../redux/actions/QuanLyPhimAdminAction";

export default function DanhSachPhim() {
  const dispatch = useDispatch();
  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      key: "maPhim",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      key: "tenPhim",
    },

    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "address 1",
      ellipsis: true,
    },
    {
      title: "Mô tả ",
      dataIndex: "moTa",
      key: "address 2",
      ellipsis: true,
    },
    {
      title: "Ngày khởi chiếu",
      dataIndex: "ngayKhoiChieu",
      key: "address 3",
      ellipsis: true,
    },
    {
      title: "",
      dataIndex: "handle",
      key: "address 5",
      render: (record, action) => (
        <>
          <button
            className="btnEdit"
            onClick={() => handleEditPhim(action.maPhim)}
          >
            Sửa
          </button>
          <button
            className="btnDelete"
            onClick={() => handleDeletePhim(action.maPhim)}
          >
            Xóa
          </button>
        </>
      ),
    },
  ];

  const { dsPhimAdmin } = useSelector((state) => state.QuanLyPhimAdminReducer);
  const [listPhimAdmin, setListPhimAdmin] = useState(dsPhimAdmin);
  useEffect(async () => {
    dispatch(await layDanhSachPhimAdminApi());
  }, [listPhimAdmin]);
  console.log(dsPhimAdmin);
  const dsPhimRender = dsPhimAdmin.map((PhimRender, i) => {
    return {
      key: i,
      maPhim: PhimRender.maPhim,
      tenPhim: PhimRender.tenPhim,
      hinhAnh: <img src={PhimRender.hinhAnh} alr="" width={70} height={80} />,
      moTa: PhimRender.moTa,
      ngayKhoiChieu: PhimRender.ngayKhoiChieu,
    };
  });
  const handleEditPhim = async (maPhimEdit) => {
    // user.maLoaiNguoiDung = maLoaiND;
    dispatch(await layThongTinPhimEdit(maPhimEdit));
    history.push("/admin/chinhsuaphim");
  };
  const handleDeletePhim = async (maPhimXoa) => {
    dispatch(await xoaPhim(maPhimXoa));
    dispatch(await layDanhSachPhimAdminApi());
    setListPhimAdmin(dsPhimAdmin);
  };
  return (
    <div className="danhSachNguoiDung">
      <h1>DANH SÁCH PHIM</h1>
      <Table columns={columns} dataSource={dsPhimRender} />
    </div>
  );
}
