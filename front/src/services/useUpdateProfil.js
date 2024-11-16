import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/thunks/updateUser";

const useUpdateProfil = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const updateProfil = (user) => {
    setStatus("loading");
    return dispatch(updateUser(user))
      .unwrap()
      .then((response) => {
        setStatus("success");
        setError(null);
        return response;
      })
      .catch((e) => {
        setStatus("error");
        setError(e.statusText || e.message);
        throw e;
      });
  };

  return {
    isLoading: status === "loading",
    isError: status === "error",
    error,
    updateProfil,
  };
};

export default useUpdateProfil;
