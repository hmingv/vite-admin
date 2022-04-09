import axios from "axios";

export const testApi = () => {
  return axios.get("/api/test");
};
