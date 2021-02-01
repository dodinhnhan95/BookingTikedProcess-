import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { capNhatPhimAdminApi } from "../../../redux/actions/QuanLyPhimAdminAction";
import { history } from "../../../Util/history";

export default function ChinhSuaPhim() {
  const dispatch = useDispatch();
  const phimInforEdit = useSelector(
    (state) => state.QuanLyPhimAdminReducer.phimEdit
  );
  const [itemPhimEdit, setItemPhimEdit] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP07",
  });
  const [Err, setErr] = useState({
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
  });
  useEffect(() => {
    setItemPhimEdit({
      ...itemPhimEdit,
      hinhAnh: phimInforEdit?.hinhAnh,
      maNhom: phimInforEdit?.maNhom,
      maPhim: phimInforEdit?.maPhim,
      tenPhim: phimInforEdit?.tenPhim,
      trailer: phimInforEdit?.trailer,
      moTa: phimInforEdit?.moTa,
    });
  }, [phimInforEdit]);
  const handleSubmit = async (e) => {
    console.log(itemPhimEdit);
    e.preventDefault();
    let frm = new FormData();
    for (let key in itemPhimEdit) {
      frm.append(key, itemPhimEdit[key]);
    }
    dispatch(await capNhatPhimAdminApi(frm));
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    let newItemPhimEdit = { ...itemPhimEdit, [name]: value };

    let newErr = { ...Err };
    newErr[name] = value.trim() === "" ? "Không được để trống" : "";

    setItemPhimEdit(newItemPhimEdit);
    setErr(newErr);
  };
  const renderButton = () => {
    let valid = true;
    for (let item in Err) {
      if (Err[item] !== "") {
        valid = false;
      }
    }
    if (valid) {
      return (
        <button type="submit" className="update">
          Cập nhật phim
        </button>
      );
    } else {
      return (
        <button type="submit" className="update  disabled" disabled>
          Cập nhật phim
        </button>
      );
    }
  };
  const handleCancleEditPhim = (e) => {
    e.preventDefault();
    setItemPhimEdit({
      hinhAnh: {},
      maPhim: "",
      tenPhim: "",
      trailer: "",
      moTa: "",
      maNhom: "",
    });
    document.getElementById("formPhim-edit").reset();
    history.push("/admin/quanlyphim");
  };
  return (
    <div>
      <h1>CHỈNH SỬA PHIM</h1>
      <form
        className="container-form"
        id="formPhim-edit"
        onSubmit={handleSubmit}
      >
        <div className="thongTin">
          <div className="form-group">
            <p>Mã nhóm</p>
            <input
              name="maNhom"
              id="maNhom"
              value={itemPhimEdit?.maNhom}
              disabled
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <p>Mã phim</p>
            <input
              name="maPhim"
              id="maPhim"
              value={itemPhimEdit?.maPhim}
              disabled
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <p>Tên phim</p>
            <input
              name="tenPhim"
              id="tenPhim"
              value={itemPhimEdit?.tenPhim}
              onChange={handleChange}
            />
            <p className="text-error">{Err?.tenPhim}</p>
          </div>

          <div className="form-group">
            <p>Trailer</p>
            <input
              name="trailer"
              id="trainler"
              value={itemPhimEdit?.trailer}
              onChange={handleChange}
            />
            <p className="text-error">{Err?.trailer}</p>
          </div>

          <div className="form-group">
            <p>Mô tả</p>
            <textarea
              name="moTa"
              id="moTa"
              value={itemPhimEdit.moTa}
              onChange={handleChange}
            />
            <p className="text-error">{Err?.moTa}</p>
          </div>
          <>
            {renderButton()}
            <button className="cancel" onClick={handleCancleEditPhim}>
              Hủy bỏ
            </button>
          </>
        </div>

        <div className="upHinh">
          <div className="form-group">
            <p>Hình ảnh</p>
            <input type="file" name="hinhAnh" onChange={handleChange} />
          </div>
          <img
            src={phimInforEdit?.hinhAnh}
            alt=""
            width={250}
            height={300}
            style={{ marginBottom: "5%" }}
          />
        </div>
      </form>
    </div>
  );
}
