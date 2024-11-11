import { createAsyncThunk } from "@reduxjs/toolkit";
import { useFetch } from "../../services/useFetch"; // Importez votre hook useFetch

const PROFILE_ENDPOINT = "/user/profile"; // Gardez le même format que dans useLogin

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const { fetchData } = useFetch();
      const token = getState().auth.token;

      const response = await fetchData(
        PROFILE_ENDPOINT,
        "PUT",
        userData,
        token
      );

      if (!response.ok) {
        throw new Error(response.message || "Erreur de mise à jour");
      }

      return response.body; // Utilisez .body comme dans useLogin
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
