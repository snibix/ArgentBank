import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/slices/authSlice";
import { useFetch } from "./useFetch";

const LOGIN_ENDPOINT = "/user/login";
const PROFILE_ENDPOINT = "/user/profile";

export const useLogin = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const dispatch = useDispatch();
  const { fetchData } = useFetch();

  const login = async (credentials) => {
    try {
      setStatus("loading");

      // Première requête : login
      const loginResponse = await fetchData(
        LOGIN_ENDPOINT,
        "POST",
        credentials
      );

      console.log("Login response:", loginResponse);
      const token = loginResponse.body.token;

      // Deuxième requête : profil utilisateur
      const profileResponse = await fetchData(
        PROFILE_ENDPOINT,
        "POST",
        null,
        token
      );

      console.log("Profile response:", profileResponse);

      const userProfile = {
        firstName: profileResponse.body.firstName, // Ajoutez .body si nécessaire
        lastName: profileResponse.body.lastName, // selon la structure de votre réponse
        // autres champs du profil si nécessaire
      };

      setUserData(userProfile);

      // Mise à jour du state et du store Redux
      setUserData(profileResponse);
      dispatch(
        loginAction({
          token,
          user: userProfile,
        })
      );

      setStatus("success");
      return profileResponse;
    } catch (error) {
      setStatus("error");
      setError(error.message);
      throw error;
    }
  };

  return {
    isLoading: status === "loading",
    isError: status === "error",
    error,
    userData,
    loginAction,
    login,
  };
};
