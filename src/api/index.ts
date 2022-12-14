import {axios, AxiosRequestConfig} from 'taro-axios'
import Taro from "@tarojs/taro";

//http://127.0.0.1:28019/swagger-ui/index.html
axios.defaults.baseURL = 'http://backend-api-01.newbee.ltd/api/v1';
axios.defaults.timeout = 20 * 1000;
axios.defaults.withCredentials = true

//请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    config.params = {
      ...config.params
    }
    const token = Taro.getStorageSync('token')
    config.headers.token = token == undefined ? '' : token
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);


interface Http {
  get<T>(url: string, params?: unknown): Promise<T>;

  post<T>(url: string, data?: unknown): Promise<T>;

  put<T>(url: string, data?: unknown): Promise<T>;

  delete<T>(url: string, params?: unknown): Promise<T>;
}

const http: Http = {
  delete<T>(url: string, params?: unknown): Promise<T> {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, {params})
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  put<T>(url: string, data?: unknown): Promise<T> {
    return new Promise((resolve, reject) => {
      axios
        .put(url, data, {})
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  post<T>(url: string, data?: unknown): Promise<T> {
    return new Promise((resolve, reject) => {
      axios
        .post(url, data, {})
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  },
  get<T>(url: string, params?: unknown): Promise<T> {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {params})
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err.data);
        });
    });
  }
}

export default http
