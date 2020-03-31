import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export default function callAPI(endpoint, method = "GET", data) {
  try {
    return axios({
      method: method,
      url: "/api/" + endpoint,
      data: data
    });
  } catch (error) {}
}
