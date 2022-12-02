import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const token = AsyncStorage.getItem("token");
axios.defaults.headers.authorization = "Bearer " + token;
axios.defaults.baseURL = process.env.BASE_URL;

const sendRequest = async ({ method = "GET", data = null, url = null }) => {
  if (!url) throw Error("URL Required");
  if (method === "GET") {
    const response = await axios.get(url);
    return response;
  }
  const response = await axios.request({
    headers: {
      "Content-Type": "application/json",
    },
    url: url,
    method: method,
    data: data,
  });
  return response;
};

export default sendRequest;
