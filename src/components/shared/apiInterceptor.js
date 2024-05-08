import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          toast.error("Incorrect credentials");
          break;
        case 403:
          toast.warning("No Permission");
          break;
        case 500:
          toast.error("Internal Server Error");
          break;
        case 404:
          toast.error("Not Found Error");
          break;
        default:
          toast.error("An error occurred. Please try again later.");
      }
    } else if (error.request) {
      // The request was made but no response was received
      toast.error("No response received from the server.");
    } else {
      // Something happened in setting up the request that triggered an error
      toast.error(
        "Request failed to be sent. Please check your internet connection."
      );
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
