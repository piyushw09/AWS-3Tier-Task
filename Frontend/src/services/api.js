import axios from "axios";

const API = axios.create({
    baseURL: "http://aws-3-tier-backend-new-env-env.eba-ijwip34e.ap-south-1.elasticbeanstalk.com/"
});

// Add JWT Token to Every Request
API.interceptors.request.use(

    (config) => {

        const token = localStorage.getItem("token");

        if (token) {

            config.headers.Authorization = `Bearer ${token}`;

        }

        return config;

    },

    (error) => {

        return Promise.reject(error);

    }

);

// Handle Invalid or Expired Tokens
API.interceptors.response.use(

    (response) => response,

    (error) => {

        if (error.response?.status === 401) {

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.href = "/#/";

        }

        return Promise.reject(error);

    }

);

export default API;