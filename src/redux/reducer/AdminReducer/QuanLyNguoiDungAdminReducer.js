const stateDefault = {
  dsNguoiDung: [],
  user: [],
  maNguoiDungLayVe: [],
};

export const QuanLyNguoiDungAdminReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DS_NGUOI_DUNG_ADMIN_ACTION": {
      state.dsNguoiDung = action.dsNguoiDung;
      return { ...state };
    }
    case "LAY_TT_TAI_KHOAN_USER_EDIT": {
      state.user = action.user;
      return { ...state };
    }
    case "MA_NGUOI_DUNG": {
      state.maNguoiDungLayVe = action.maNguoiDungLayVe;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
