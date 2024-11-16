import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/slices/authSlice";
import { fetchData } from "./fetchData";

const LOGIN_ENDPOINT = "/user/login";
const PROFILE_ENDPOINT = "/user/profile";

export const useLogin = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const login = async (credentials) => {
    setStatus("loading");

    return fetchData(LOGIN_ENDPOINT, "POST", credentials)
      .then((response) => {
        const token = response.body.token;
        return fetchData(PROFILE_ENDPOINT, "POST", null, token).then(
          ({ body: user }) => {
            setStatus("success");
            setError(null);
            dispatch(loginAction({ token, user }));
          }
        );
      })
      .catch((e) => {
        setStatus("error");
        if (e.status === 400) {
          setError("Invalid username or password");
        } else {
          setError(e.statusText || e.message);
        }
        throw e;
      });
  };

  return {
    isLoading: status === "loading",
    isError: status === "error",
    error,
    login,
  };
};
