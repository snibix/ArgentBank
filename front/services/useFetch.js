// useFetch.js
import { useState } from "react";

const API_URL = "http://localhost:3001/api/v1";

export const useFetch = () => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (
    endpoint,
    method = "GET",
    body = null,
    token = null
  ) => {
    setStatus("loading");
    setError(null);

    try {
      console.log("Sending request with token:", token);
      const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      };

      const config = {
        method,
        headers,
        ...(body && { body: JSON.stringify(body) }),
      };

      const response = await fetch(`${API_URL}${endpoint}`, config);

      console.log("Response:::", response);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
      setStatus("success");
      return result;
    } catch (error) {
      setError(error.message);
      setStatus("error");
      throw error;
    }
  };

  return {
    isLoading: status === "loading",
    isError: status === "error",
    error,
    data,
    fetchData,
  };
};
