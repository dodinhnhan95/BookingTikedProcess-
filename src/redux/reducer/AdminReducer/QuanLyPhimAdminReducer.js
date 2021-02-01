const stateDefault = {
  dsPhimAdmin: [],
  phimEdit: [],
};

export const QuanLyPhimAdminReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LAY_DANH_SACH_PHIM_ADMIN_API": {
      state.dsPhimAdmin = action.dsPhim;
      return { ...state };
    }
    case "LAY_TT_PHIM_EDIT": {
      state.phimEdit = action.phimEdit;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
