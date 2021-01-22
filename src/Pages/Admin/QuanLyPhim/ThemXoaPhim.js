import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { themNguoiDungAdminApi } from "../../../redux/actions/QuanLyNguoiDungAdminAction";
import Swal from "sweetalert2";
import { themPhimUploadHinh } from "../../../redux/actions/QuanLyPhimAdminAction";

export default function ThemXoaPhim() {
  const dispatch = useDispatch();
  const [phimAdd, setPhimAdd] = useState({
    hinhAnh: {},
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maNhom: "GP01",
  });
  // tạo ra một state err mới để chứa các lỗi
  const [Err, setErr] = useState({
    maPhim: "",
    tenPhim: "",
    trailer: "",
    moTa: "",
    maPhim: "",
    ngayKhoiChieu: "",
  });
  const handleSubmit = async (e) => {
    console.log("đã chạy", phimAdd);
    e.preventDefault();
    let frm = new FormData();
    for (let key in phimAdd) {
      frm.append(key, phimAdd[key]);
    }
    dispatch(await themPhimUploadHinh(frm));
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    let newPhimAdd = { ...phimAdd, [name]: value };

    // Validation các trường dữ liệu không được để trông
    let newErr = { ...Err };
    newErr[name] = value.trim() === "" ? "Không được bỏ trống" : "";

    // Validation các trường đặc biệt
    if (name === "maPhim") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErr[name] = "Dữ liệu nhập vào phải là số";
      }
    }
    if (name === "ngayKhoiChieu") {
      const regexNumber = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
      if (!regexNumber.test(value.trim())) {
        newErr[name] = "Ngày tháng nhập chưa đúng định dạng";
      }
    }
    if (name === "hinhAnh") {
      setPhimAdd({ ...phimAdd, [name]: e.target.files[0] });
    } else {
      setPhimAdd(newPhimAdd);
      setErr(newErr);
    }
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
        <button type="submit" className="themPhimbtn">
          Thêm Phim
        </button>
      );
    } else {
      return (
        <button type="submit" className="themPhimbtn disabled" disabled>
          Thêm Phim
        </button>
      );
    }
  };
  return (
    <div>
      <h1>THÊM PHIM</h1>
      <form className="container-form">
        <div className="thongTin">
          <div className="form-group">
            <p>Tên phim</p>
            <input name="tenPhim" id="tenPhim" onChange={handleChange} />
            <p className="text-error">{Err?.tenPhim}</p>
          </div>

          <div className="form-group">
            <p>Mã Phim</p>
            <input name="maPhim" id="maPhim" onChange={handleChange} />
            <p className="text-error">{Err?.maPhim}</p>
          </div>

          <div className="form-group">
            <p>Trailer</p>
            <input name="trailer" id="trainler" onChange={handleChange} />
            <p className="text-error">{Err?.trailer}</p>
          </div>

          <div className="form-group">
            <p>Mô tả</p>
            <textarea name="moTa" id="moTa" onChange={handleChange} />
            <p className="text-error">{Err?.moTa}</p>
          </div>
          <div className="form-group">
            <p>Ngày khởi chiếu</p>
            <input
              name="ngayKhoiChieu"
              id="ngayKhoiChieu"
              onChange={handleChange}
            />
            <p className="text-error">{Err?.ngayKhoiChieu}</p>
          </div>
        </div>

        <div className="upHinh">
          <div className="form-group">
            <p>Hình ảnh</p>
            <input type="file" name="hinhAnh" onChange={handleChange} />
            <p className="text-error">{Err?.hinhAnh}</p>
          </div>
        </div>
      </form>
      <form className="container-form" onSubmit={handleSubmit}>
        {renderButton()}
      </form>
    </div>
  );
}
