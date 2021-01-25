import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layChiTietPhimApiAction } from "../redux/actions/QuanLyPhimAction";
import moment from "moment";
import { NavLink } from "react-router-dom";

export default function ChiTietPhim(props) {
  const chiTietPhim = useSelector(
    (state) => state.QuanLyPhimReducer.chiTietPhim
  );
  // console.log("props", props);
  const dispatch = useDispatch();
  // console.log("props.match.params.maPhim", props.match.params.maPhim);
  useEffect(async () => {
    //lấy tham số từ url
    let maPhim = props.match.params.maPhim;
    //gọi action api từ redux
    dispatch(await layChiTietPhimApiAction(maPhim));
  }, []);
  // console.log("chi tiet phim", chiTietPhim);
  return (
    <div>
      <div>
        <div className="styleBlur">
          <img className="posterLandscapeFilm" src={chiTietPhim?.hinhAnh} />

          <div className="row container-fluid mt-5 chiTietPhim">
            <div className="col-6">
              <img
                style={{ width: "100%", height: "100%" }}
                src={chiTietPhim?.hinhAnh}
              />
            </div>
            <div className="col-6 noiDungChiTietPhim">
              {/* <table className="table">
                <thead>
                  <tr>
                    <th>Tên phim</th>
                    <th></th>
                  </tr>
                  <tr>
                    <th>Mô tả</th>
                    <th>{chiTietPhim?.moTa}</th>
                  </tr>
                </thead>
              </table> */}
              <div className="noiDungChiTietPhim1 text-light">
                <h3 style={{ fontSize: "30px", fontWeight: "bold" }}>
                  {chiTietPhim?.tenPhim}
                </h3>
                <p>{chiTietPhim?.moTa}</p>
                <button className="btn btn-danger">
                  <a className="text-white" href="#thongTinLichChieu">
                    Mua vé
                  </a>
                </button>
              </div>
            </div>

            <div className="row mt-5 thongTinLichChieu">
              <div className="col-12 ">
                <h1
                  id="thongTinLichChieu"
                  className="text-center text-white pt-2"
                >
                  THÔNG TIN LỊCH CHIẾU
                </h1>
                <div className="row">
                  <div
                    className="nav flex-column nav-pills col-4"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    {chiTietPhim?.heThongRapChieu?.map((heThongRap, index) => {
                      // console.log("heThongRap", heThongRap);
                      let active = index === 0 ? "active" : "";
                      return (
                        <a
                          key={index}
                          className={"nav-link"}
                          id={"v-pills-home-tab" + active}
                          data-toggle="pill"
                          href={`#${heThongRap.maHeThongRap}`}
                          role="tab"
                          aria-controls="v-pills-home"
                          aria-selected="true"
                        >
                          <img
                            src={heThongRap.logo}
                            alt={heThongRap.logo}
                            style={{ width: 50, height: 50, padding: 5 }}
                          />
                          {heThongRap.tenHeThongRap}
                        </a>
                      );
                    })}
                  </div>

                  <div className="tab-content col-8" id="v-pills-tabContent">
                    {chiTietPhim?.heThongRapChieu?.map((heThongRap, index) => {
                      let active = index === 0 ? "active" : "";
                      console.log("heThongRap", heThongRap);
                      return (
                        <div
                          key={index}
                          className={"tab-pane fade show " + active}
                          id={heThongRap.maHeThongRap}
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          {heThongRap.cumRapChieu?.map((cumRap, index) => {
                            return (
                              <div key={index}>
                                <p
                                  style={{
                                    fontWeight: "bold",
                                    fontSize: "25px",
                                    marginBottom: "0",
                                  }}
                                >
                                  {cumRap.tenCumRap}
                                </p>
                                <div className="row">
                                  {cumRap.lichChieuPhim
                                    ?.slice(0, 12)
                                    .map((lichChieu, index) => {
                                      return (
                                        <NavLink
                                          to={
                                            "/chitietphongve/" +
                                            lichChieu.maLichChieu
                                          }
                                          key={index}
                                          className="col-2"
                                        >
                                          {moment(
                                            lichChieu.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                                <hr />
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
