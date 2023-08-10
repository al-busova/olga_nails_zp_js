// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// // import { registration } from "./authOperations";
// import type { RootState } from '../store';

// type Auth = {
//   user: {
//     email: string | null;
//   };
//   token: string | null;
//   isLoggedIn?: boolean;
//   isFetchingCurrentUser?: boolean;
//   isLoading?: boolean;
//   error?: null | string;
// };

// type ActionPayload = {
//   user: {
//     email: string;
//   };
//   token: string;
// };

// const authInitialState: Auth = {
//   user: { email: null },
//   token: null,
//   isLoggedIn: false,
//   isFetchingCurrentUser: false,
//   isLoading: false,
//   error: null,
// };


// const authSlice = createSlice({
//   name: "auth",
//   initialState: authInitialState,
//   reducers: {
//     registration(state, action: PayloadAction<ActionPayload>) {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isLoggedIn = true;
//       state.isLoading = false;
//       state.error = null;
//     },
    // [logIn.pending]: handlePending,
    // [logIn.fulfilled](state, action) {
    //   state.user = action.payload.user;
    //   state.token = action.payload.token;
    //   state.isLoggedIn = true;
    //   state.isLoading = false;
    //   state.error = null;
    // },
    // [logIn.rejected]: handleRejected,
    // [logOut.pending]: handlePending,
    // [logOut.fulfilled](state, action) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    //   state.isLoading = false;
    //   state.error = null;
    // },
    // [logOut.rejected]: handleRejected,
    // [fetchCurrentUser.pending](state) {
    //   state.isLoading = true;
    //   state.isFetchingCurrentUser = true;
    // },
    // [fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isLoading = false;
    //   state.isFetchingCurrentUser = false;
    //   state.error = null;
    // },
    // [fetchCurrentUser.rejected](state, action) {
    //   state.isFetchingCurrentUser = false;
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
  // },
  // extraReducers: {
  //     [registration.fulfilled](state, action: PayloadAction<ActionPayload>) {
  //     state.user = action.payload.user;
  //     state.token = action.payload.token;
  //     state.isLoggedIn = true;
  //     state.isLoading = false;
  //     state.error = null;
  //   },
  // }
// });
// export const authReducer = authSlice.reducer;
// export const { registration } = authSlice.actions
// export const selectAuth = (state: RootState) => state.auth
