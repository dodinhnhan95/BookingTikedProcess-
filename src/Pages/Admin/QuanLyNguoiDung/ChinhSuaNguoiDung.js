import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import swal from "sweetalert2";
import { capNhatInfoAction } from "../../../redux/actions/QuanLyNguoiDungAction";
import { capNhatInfoAdminAction } from "../../../redux/actions/QuanLyNguoiDungAdminAction";
import { history } from "../../../Util/history";
export default function ChinhSuaNguoiDung() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.QuanLyNguoiDungAdminReducer);
  const [userChinhSua, setUserChinhSua] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDT: "",
    matKhau: "",
    maNhom: "",
    maLoaiNguoiDung: "",
  });
  const [Err, setErr] = useState({
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
  });
  const { maNguoiDungLayVe } = useSelector(
    (state) => state.QuanLyNguoiDungAdminReducer
  );
  console.log("maNguoiDungTruyenVao", maNguoiDungLayVe);
  useEffect(async () => {
    setUserChinhSua(
      await {
        ...userChinhSua,
        taiKhoan: user?.taiKhoan,
        matKhau: user?.matKhau,
        email: user?.email,
        soDT: user?.soDT,
        hoTen: user?.hoTen,
        maNhom: user?.maNhom,
        maLoaiNguoiDung: maNguoiDungLayVe,
      }
    );
  }, [user]);

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
          Cập nhật
        </button>
      );
    } else {
      return (
        <button type="submit" className="update " disabled>
          Cập nhật
        </button>
      );
    }
  };
  const handleSubmit = (e) => {
    console.log("đối tượng dispatch", userChinhSua);
    // console.log("lôi xảy ra ", Err);
    e.preventDefault();
    let valid = true;
    for (let tenTruong in userChinhSua) {
      if (userChinhSua[tenTruong].trim() === "") {
        valid = false;
      }
    }
    // duyệt tất cả các lỗi phải rỗng
    for (let tenTruong in Err) {
      if (Err[tenTruong].trim() !== "") {
        valid = false;
      }
    }
    if (!valid) {
      swal.fire("Thông báo", "Dữ liệu chưa hợp lệ", "error");
      return;
    }
    // gọi chức năng cập nhật lại user
    dispatch(capNhatInfoAdminAction(userChinhSua));
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    let newUserChinhSua = { ...userChinhSua, [name]: value };
    setUserChinhSua(newUserChinhSua);
    let newErr = { ...Err };
    newErr[name] = value.trim() === "" ? "Không được bỏ trống" : "";
    // Validation các trường đặc biệt
    if (name === "soDt") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value.trim())) {
        newErr[name] = "Dữ liệu nhập vào phải là số";
      }
    }
    if (name === "email") {
      const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
      if (!regexEmail.test(value.trim())) {
        newErr[name] = "Email không hợp lệ!";
      }
    }
    setErr(newErr);
  };
  const handleCancleEdit = (e) => {
    e.preventDefault();
    setUserChinhSua({
      hoTen: "",
      taiKhoan: "",
      matKhau: "",
      soDt: "",
      email: "",
      maLoaiNguoiDung: "",
    });
    document.getElementById("form-edit").reset();
    history.push("/admin/quanlynguoidung");
  };
  let disabled = true;
  return (
    <div>
      {" "}
      <div>
        <h1>CHỈNH SỬA NGƯỜI DÙNG</h1>
        <form
          className="container-form userForm"
          id="form-edit"
          onSubmit={handleSubmit}
        >
          <div className="thongTin">
            <div className="form-group">
              <p>Họ tên</p>
              <input
                name="hoTen"
                value={userChinhSua?.hoTen}
                onChange={handleChange}
              />
              <p className="text-error">{Err?.hoTen}</p>
            </div>
            <div disabled className="form-group">
              <p>Tài khoản</p>
              <input
                disabled={disabled}
                name="taiKhoan"
                value={userChinhSua?.taiKhoan}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>Mật khẩu</p>
              <input
                name="matKhau"
                value={userChinhSua?.matKhau}
                onChange={handleChange}
              />
              <p className="text-error">{Err?.matKhau}</p>
            </div>
            <div className="form-group">
              <p>Số điện thoại</p>
              <input
                name="soDT"
                value={userChinhSua?.soDT}
                onChange={handleChange}
                // type="number"
                pattern="^[0-9]+$"
              />
              <p className="text-error">{Err?.soDT}</p>
            </div>
            <div className="form-group">
              <p>Email</p>
              <input
                name="email"
                value={userChinhSua?.email}
                onChange={handleChange}
                type="email"
              />
              <p className="text-error">{Err?.email}</p>
            </div>
            <div className="form-group">
              <p>Loại người dùng</p>
              <select
                name="maLoaiNguoiDung"
                onChange={handleChange}
                value={maNguoiDungLayVe}
              >
                <option>Chọn loại người dùng</option>
                <option value="KhachHang">Khách hàng</option>
                <option value="QuanTri">Quản trị</option>
              </select>
              <p className="text-error">{Err?.maLoaiNguoiDung}</p>
            </div>
            <div className="chucNang">
              {renderButton()}
              <button className="cancel" onClick={handleCancleEdit}>
                Hủy bỏ
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
