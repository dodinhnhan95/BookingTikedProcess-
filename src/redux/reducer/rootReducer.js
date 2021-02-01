import { combineReducers } from "redux";
import { QuanLyPhimReducer } from "./UserReducer/QuanLyPhimReducer";
import { QuanLyNguoiDungReducer } from "./UserReducer/QuanLyNguoiDungReducer";
import { QuanLyNguoiDungAdminReducer } from "./AdminReducer/QuanLyNguoiDungAdminReducer";
import { QuanLyPhimAdminReducer } from "./AdminReducer/QuanLyPhimAdminReducer";
export const rootReducer = combineReducers({
  // khai báo các reducer
  QuanLyPhimReducer,
  QuanLyNguoiDungReducer,
  QuanLyNguoiDungAdminReducer,
  QuanLyPhimAdminReducer,
});
