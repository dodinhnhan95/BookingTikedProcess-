const stateDefault = {
  dsPhim: [],
  slides: [
    { picture: "img/carousel/AQUA.jpg" },
    { picture: "img/carousel/FL.jpg" },
    { picture: "img/carousel/GOT.jpg" },
    { picture: "img/carousel/MIB.jpg" },
    { picture: "img/carousel/TW3.jpg" },
    { picture: "img/carousel/VAMPIRE.jpg" },
  ],
  listRap: [],
  danhSachCumRapHeThong: [],
  listPhimCumRap: [],
  thongTinLichChieuTheoCum: [],
};
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM_ACTION": {
      state.dsPhim = action.dsPhim;
      return { ...state };
    }
    case "LAY_LIST_TT_RAP": {
      state.listRap = action.listRap;
      return { ...state };
    }
    case "LAY_LIST_CUM_RAP_HT": {
      state.danhSachCumRapHeThong = action.danhSachCumRapHeThong;
      return { ...state };
    }
    case "LAY_LIST_DANH_SACH_PHIM": {
      state.listPhimCumRap = action.listPhimCumRap;
    }
    case "LAY_TT_LICH_CHIEU": {
      state.thongTinLichChieuTheoCum = action.thongTinLichChieuTheoCum;
    }

    default:
      return { ...state };
  }
};
