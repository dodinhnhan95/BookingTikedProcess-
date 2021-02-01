import logo from "./logo.svg";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import TrangChu from "./Pages/TrangChu";
import DangNhap from "./Pages/DangNhap";
import { HomeTemplate } from "./Templates/HomeTemplate";
import { UserTemplate } from "./Templates/UserTemplate";
import { ManagerAccountTemplate } from "./Templates/ManagerAccountTemplate";
import DangKy from "./Pages/DangKy";
import ThongTinCaNhan from "./Pages/ThongTinCaNhan";
import QuanLyPhimBooking from "./Pages/QuanLyPhimBooking";
import QuanLyThongTinTaiKhoan from "./Pages/QuanLyThongTinTaiKhoan";
import { AdminTemplate } from "./Templates/AdminTemplate";
import DanhSachNguoiDung from "./Pages/Admin/QuanLyNguoiDung/DanhSachNguoiDung";
import ChinhSuaNguoiDung from "./Pages/Admin/QuanLyNguoiDung/ChinhSuaNguoiDung";
import ThemXoaNguoiDung from "./Pages/Admin/QuanLyNguoiDung/ThemXoaNguoiDung";
import DanhSachPhim from "./Pages/Admin/QuanLyPhim/DanhSachPhim";
import ChinhSuaPhim from "./Pages/Admin/QuanLyPhim/ChinhSuaPhim";
import ThemXoaPhim from "./Pages/Admin/QuanLyPhim/ThemXoaPhim";

function App() {
  return (
    <Switch>
      <HomeTemplate exact path="/trangchu" Component={TrangChu} />
      <ManagerAccountTemplate
        exact
        path="/quanly/quanlydatve"
        Component={QuanLyPhimBooking}
      />
      <ManagerAccountTemplate
        exact
        path="/quanly/quanlythongtin"
        Component={QuanLyThongTinTaiKhoan}
      />
      <AdminTemplate
        exact
        path="/admin/quanlynguoidung"
        Component={DanhSachNguoiDung}
      />
      <AdminTemplate
        exact
        path="/admin/chinhsuanguoidung"
        Component={ChinhSuaNguoiDung}
      />
      <AdminTemplate
        exact
        path="/admin/themxoanguoidung"
        Component={ThemXoaNguoiDung}
      />
      <AdminTemplate exact path="/admin/quanlyphim" Component={DanhSachPhim} />
      <AdminTemplate
        exact
        path="/admin/chinhsuaphim"
        Component={ChinhSuaPhim}
      />
      <AdminTemplate exact path="/admin/themxoaphim" Component={ThemXoaPhim} />
      <UserTemplate exact path="/dangnhap" Component={DangNhap} />
      <UserTemplate exact path="/dangky" Component={DangKy} />
    </Switch>
  );
}

export default App;
