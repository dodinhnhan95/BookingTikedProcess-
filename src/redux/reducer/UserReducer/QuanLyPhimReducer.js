const stateDefault = {
  dsPhim: [],
  slides: [
    { picture: "img/carousel/Doraemon.jpg" },
    { picture: "img/carousel/AQUA.jpg" },
    { picture: "img/carousel/FL.jpg" },
    { picture: "img/carousel/GOT.jpg" },
    { picture: "img/carousel/MIB.jpg" },
    { picture: "img/carousel/TW3.jpg" },
    // { picture: "img/carousel/VAMPIRE.jpg" },
  ],
  listRap: [],
  danhSachCumRapHeThong: [],
  listPhimCumRap: [],
  thongTinLichChieuTheoCum: [],
  chiTietPhim: {},
  thongTinPhongVe: {},
  danhSachGheDangDat: [],
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
    case "LAY_CHI_TIET_PHIM": {
      state.chiTietPhim = action.chiTietPhim;
      return { ...state };
    }
    case "THONG_TIN_PHONG_VE": {
      state.thongTinPhongVe = action.thongTinPhongVe;
      return { ...state };
    }
    case "DAT_GHE": {
      let mangGheDangDat = [...state.danhSachGheDangDat];

      let index = mangGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.maGhe === action.gheDangDat.maGhe
      );

      if (index !== -1) {
        mangGheDangDat.splice(index, 1);
      } else {
        mangGheDangDat.push(action.gheDangDat);
      }
      return { ...state, danhSachGheDangDat: mangGheDangDat };
    }
    case "DAT_VE_THANH_CONG": {
      return { ...state, danhSachGheDangDat: [] };
    }

    default:
      return { ...state };
  }
};
