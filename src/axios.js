import axios from "axios";

const instance = axios.create({
  baseURL: "http://https://tinder-backend-aj.herokuapp.com",
});

export default instance;
