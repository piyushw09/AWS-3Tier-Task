import axios from "axios";

const API = axios.create({
    baseURL: "http://aws-3tier-backend.ap-south-1.elasticbeanstalk.com/"
});

export default API;