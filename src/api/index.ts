import axios from "axios";
const instance = axios.create({
  baseURL: "http://127.0.0.1:3000/api",
});

instance.interceptors.request.use(
  function (config) {
    // 如果有token，将token赋给请求头的Authorization字段
    config.headers["Content-Type"] = "application/json;charset=UTF-8";

    if (localStorage.getItem("token")) {
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  async function (error) {


    return Promise.reject(error);
  }
);

export default instance;
