// updateUser.js (Redux Action)
import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../services/fetchData";
const PROFILE_ENDPOINT = "/user/profile";

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue, getState }) => {
    console.log("Sending update request with data:", userData);
    try {
      const token = getState().auth.token;
      const response = await fetchData(
        PROFILE_ENDPOINT,
        "PUT",
        userData,
        token
      );
      return response;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
