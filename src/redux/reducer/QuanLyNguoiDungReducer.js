const { USER_LOGIN } = require("../consts/Config");
let usLogin = {};

if (localStorage.getItem(USER_LOGIN)) {
  usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: usLogin,
  userRegis: [],
  userEdit: [],
  userInFo: {},
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DANG_NHAP": {
      state.userLogin = action.userLogin;
      return { ...state };
    }
    case "DANG_KY": {
      state.userRegis = action.userRegis;
      return { ...state };
    }
    case "CAP_NHAT": {
      state.userEdit = action.userEdit;
      return { ...state };
    }
    case "LAY_TT_TAI_KHOAN": {
      state.userInfo = action.userInfo;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
