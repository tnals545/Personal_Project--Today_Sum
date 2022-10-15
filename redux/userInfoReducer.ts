import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProdListState, ProdState } from "./prodReducer";

export interface UserInfoState<T> {
  email: string | undefined;
  password: string | undefined;
  isLogin: boolean;
  nickname: string;
  uploadlist: T;
}

const initialState: UserInfoState<ProdListState> = {
  email: "",
  password: "",
  isLogin: false,
  nickname: "티릴리",
  uploadlist: [],
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    userEmail(state, action: PayloadAction<string | undefined>) {
      state.email = action.payload;
    },
    userPassword(state, action: PayloadAction<string | undefined>) {
      state.password = action.payload;
    },
    userIsLogin(state, action: PayloadAction<boolean>) {
      state.isLogin = action.payload;
    },
    userNickName(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    userUploadList(state, action: PayloadAction<ProdState>) {
      state.uploadlist?.push(action.payload);
    },
    userAlreadyId(state, action: PayloadAction<UserInfoState<ProdListState>>) {
      state = action.payload;
    },
    reset(state) {
      Object.assign(state, initialState);
    },
  },
});

export const {
  userEmail,
  userPassword,
  userIsLogin,
  userNickName,
  userUploadList,
  userAlreadyId,
  reset,
} = userInfoSlice.actions;

export const userInfoReducer = userInfoSlice.reducer;
