/*eslint-disable*/
import { create as apiCreate } from "apisauce";

const create = (baseURL = "") => {
  const api = apiCreate({
    baseURL,
    headers: {
      "Cache-Control": "no-cache",
      "Content-Type": "application/json; charset=utf-8",
    },
    timeout: 50000,
  });

  // Attach a response transform to handle 401 errors globally
  api.addResponseTransform((response) => {
    if (response.status === 401) {
      // Implement logout or redirection logic here if necessary
    }
  });

  // Automatically set Authorization header if token is available
  const token = window.localStorage.getItem("api_token");
  if (token) api.setHeader("Authorization", `Bearer ${token}`);

  const setBearerToken = (token) => {
    window.localStorage.setItem("api_token", token);
    api.setHeader("Authorization", `Bearer ${token}`);
  };

  const removeBearerToken = () => {
    window.localStorage.removeItem("api_token");
    api.deleteHeader("Authorization");
  };

  const makeRequest = (url, method = "GET", body = {}) => {
    switch (method) {
      case "GET":
        return api.get(url);
      case "POST":
        return api.post(url, body);
      case "FORM":
        return api.post(url, body, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      case "PUT":
        return api.put(url, body);
      case "DELETE":
        return api.delete(url, {}, { data: body });
      default:
        return api.get(url);
    }
  };

  const showError = (error) => {
    const messages = {
      CLIENT_ERROR: "Client-side error",
      SERVER_ERROR: "Server Error",
      TIMEOUT_ERROR: "The server took too long to respond",
      CONNECTION_ERROR: "Server unavailable, bad DNS",
      NETWORK_ERROR: "Network not available",
    };
    return messages[error] || "Unknown error occurred";
  };

  return {
    makeRequest,
    showError,
    setBearerToken,
    removeBearerToken,
    setHeader: api.setHeader,
    getBaseURL: api.getBaseURL,
    internalClient: api,
  };
};

export default { create };
