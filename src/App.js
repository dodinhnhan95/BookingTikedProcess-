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

function App() {
  return (
    <>
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
        <UserTemplate exact path="/dangnhap" Component={DangNhap} />
        <UserTemplate exact path="/dangky" Component={DangKy} />
      </Switch>
    </>
  );
}

export default App;
