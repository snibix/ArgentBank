import { createSlice } from "@reduxjs/toolkit";
import { updateUser } from "../thunks/updateUser";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    error: null,
  },
  reducers: {
    loginAction: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser.fulfilled, (state, action) => {
      console.log(
        "Mise à jour du profil utilisateur réussie :",
        action.payload
      );
      state.user = action.payload.body;
    });
  },
});

export const { loginAction } = authSlice.actions;
export const { logout } = authSlice.actions;
export const { setUser } = authSlice.actions;
export default authSlice.reducer;
