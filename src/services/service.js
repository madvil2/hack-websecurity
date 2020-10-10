import axios from "axios";
import handleErrors from "../utils/handleErrors";

const getAxios = () => {
  axios.defaults.headers.common["User-Token"] =
    localStorage.getItem("token") || "";

  return axios;
};

const service = {
  get: (url, options) =>
    getAxios()
      .get(url, options)
      .catch((error) => {
        handleErrors(error);
      }),
  post: (url, options, optionalObj) =>
    getAxios()
      .post(url, options, optionalObj)
      .catch((error) => {
        handleErrors(error);
      }),
  put: (url, data) =>
    getAxios()
      .put(url, data)
      .catch((error) => {
        handleErrors(error);
      }),
  delete: (url, options) =>
    getAxios()
      .delete(url, options)
      .catch((error) => {
        handleErrors(error);
      }),
};

export default service;
