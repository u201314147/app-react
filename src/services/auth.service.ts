import axios from "axios";
import { environment } from "../enviroment/environment.prod";
import { customerLoginDto } from "../models/customerLoginDto";
import { customerRegisterDto } from "../models/customerRegisterDto";

const API_URL = environment.HOST_URL + "/identity/";

class AuthService {
  login(data:customerLoginDto) {
    return axios
      .post(API_URL + "login",data
      )
      .then((response) => {
        if (response) {
          sessionStorage.setItem("access_token", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  logout() {
    sessionStorage.removeItem("access_token");
  }

  register(data:customerRegisterDto) {
    return axios.post(API_URL + "register",data
    );
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("access_token"));
  }
}

export default new AuthService();
