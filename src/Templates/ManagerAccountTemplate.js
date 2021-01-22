import React, { useState } from "react";
import { Route, NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  LogoutOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Caroulsel2 from "../Component/Caroulsel2";
import { useSelector } from "react-redux";
import { ACCESSTOKEN, USER_LOGIN } from "../redux/consts/Config";
import { history } from "../Util/history";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
export const ManagerAccountTemplate = (props) => {
  let userLogin = useSelector(
    (state) => state.QuanLyNguoiDungReducer.userLogin
  );
  const [state, setState] = useState({
    collapsed: false,
  });

  const onCollapse = (collapsed) => {
    setState({ collapsed });
  };

  const { Component, ...restParams } = props;
  return (
    <Route
      {...restParams}
      render={(propsRoute) => {
        const handleLogout = () => {
          console.log("log out");
          history.push("/trangchu");
        };
        return (
          <>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider
                collapsible
                collapsed={state.collapsed}
                onCollapse={onCollapse}
              >
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <div className="p-5 pb-5 text-center">
                    <img
                      style={{ borderRadius: "50%" }}
                      src="https://picsum.photos/50/50"
                    />
                    {!state.collapsed ? (
                      <div
                        className="mt-5 font-weight-bold"
                        style={{ fontSize: "1rem", color: "green" }}
                      >
                        {userLogin.taiKhoan}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <SubMenu
                    key="sub1"
                    icon={<UserOutlined />}
                    title="Phim đã đặt"
                  >
                    <Menu.Item key="3">
                      <NavLink to="/quanly/quanlydatve">
                        Danh sách các phim đã đặt{" "}
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4">
                      Điểm tích lũy, chương trình khuyến mãi dành riêng
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    icon={<TeamOutlined />}
                    title="Thông tin tài khoản"
                  >
                    <Menu.Item key="6">
                      <NavLink to="/quanly/quanlythongtin">
                        {" "}
                        Quản Lý Tài Khoản
                      </NavLink>
                    </Menu.Item>
                    <Menu.Item key="7">
                      <NavLink to="#"> Đổi mật khẩu</NavLink>
                    </Menu.Item>
                  </SubMenu>
                  <Menu.Item
                    key="9"
                    icon={<LogoutOutlined />}
                    onClick={handleLogout}
                  >
                    Quay Về Trang Chủ
                  </Menu.Item>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{ padding: 0 }}
                />
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Info</Breadcrumb.Item>
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>CYBER-FILM</Footer>
              </Layout>
            </Layout>
            <Footer />
          </>
        );
      }}
    />
  );
};
