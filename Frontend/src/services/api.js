import axios from "axios";

const API = axios.create({
    baseURL: "http://aws-3-tier-backend-new-env-env.eba-ijwip34e.ap-south-1.elasticbeanstalk.com/"
});

export default API;