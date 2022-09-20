import axios from "axios";
import { message } from "antd";
import NProgress from "nprogress";
import qs from "querystringify";
import "nprogress/nprogress.css";
const instance = axios.create({
  timeout: 4000,
});

instance.interceptors.request.use(function (config) {
  NProgress.start();
  let { method, data } = config;
  if (method.toLowerCase() === "post") {
    if (data instanceof Object) {
      config.data = qs.stringify(config.data);
    }
  }
  return config;
});
instance.interceptors.response.use(
  function (response) {
    NProgress.done();
    return response.data;
  },
  function (error) {
    NProgress.done();
    message.error(error.message, 1);
    return new Promise(() => {});
  }
);
export default instance;
