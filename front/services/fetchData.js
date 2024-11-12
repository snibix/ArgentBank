const API_URL = "http://localhost:3001/api/v1";

export const fetchData = async (
  endpoint,
  method = "GET",
  body = null,
  token = null
) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: token && `Bearer ${token}`,
  };

  const config = {
    method,
    headers,
    body: body && JSON.stringify(body),
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);
  if (response.status !== 200) {
    throw response;
  }

  return await response.json();
};
