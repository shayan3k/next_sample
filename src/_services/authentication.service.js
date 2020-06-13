import axios from "axios";
import secureStorage from "./Storage";

//Move to Process.env
const baseUrl = process.env.MIX_BASEURL;

const loginRoute = process.env.MIX_AUTH_LOGIN;
const logoutRoute = process.env.MIX_AUTH_LOGOUT;
const meRoute = process.env.MIX_AUTH_ME;

// const loginRoute = "/auth/login";
// const logoutRoute = "/auth/logout";
// const meRoute = "/auth/me";

export const JWTLogin = async data => {
    // console.log(data);
    return axios
        .post(baseUrl + loginRoute, data)
        .then(res => {
            secureStorage.setItem("jwt", res.data.access_token);
            secureStorage.setItem("name", res.data.name);
            secureStorage.setItem("phonenumber", res.data.phonenumber);
            secureStorage.setItem(
                "is_admin",
                res.data.is_admin ? "true" : "false"
            );
            // console.log("IS_ADMIN", res.data.is_admin ? "true" : "false");
            // console.log("jwt TOKEN SET", secureStorage.getItem("jwt"));
            return {
                status: res.status,
                message: "خوش آمدید"
            };
        })
        .catch(err => {
            console.log("The Error", err.response);
            return {
                status: err.response,
                message:
                    err.response.status == 401
                        ? "شماره همراه و یا رمز عبور اشتباه است"
                        : "متاسفانه امکان ورورد نمی باشد"
            };
        });
};

export const JWTLogout = () => {
    return new Promise((resolve, reject) => {
        return axios
            .post(baseUrl + logoutRoute, {}, JWTHeader())
            .then(res => {
                secureStorage.clear();
                console.log("storage cleared");
                return resolve({ status: res.status });
            })
            .catch(err => {
                return reject({ status: err.status });
            });
    });
};

export const JWTValidate = async () => {
    return new Promise((resolve, reject) => {
        return axios
            .post(baseUrl + meRoute, {}, JWTHeader())
            .then(res => {
                secureStorage.setItem("name", res.data.name);
                secureStorage.setItem("phonenumber", res.data.phonenumber);
                secureStorage.setItem(
                    "is_admin",
                    res.data.is_admin ? "true" : "false"
                );
                // console.log("Authenticated in AUTH", res);
                return resolve({
                    statusText: res.statusText,
                    name: res.data.name,
                    phonenumber: res.data.phonenumber
                });
            })
            .catch(err => {
                // console.log("NOT Authenticated in AUTH", err.response);
                return reject(err);
            });
    });
};

export const JWTCheck = async () => {
    // console.log("JWT CHECK");

    return new Promise((resolve, reject) => {
        return axios({
            method: "POST",
            url: baseUrl + meRoute,
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + secureStorage.getItem("jwt")
            }
        })
            .then(res => {
                secureStorage.setItem("name", res.data.name);
                secureStorage.setItem("phonenumber", res.data.phonenumber);
                secureStorage.setItem("user_id", res.data.id);
                secureStorage.setItem(
                    "is_admin",
                    res.data.is_admin ? "true" : "false"
                );
                // console.log("Authenticated in AUTH", res);
                return resolve({
                    statusText: res.statusText,
                    name: res.data.name,
                    phonenumber: res.data.phonenumber
                });
            })
            .catch(err => {
                // console.log("NOT Authenticated in AUTH", err.response);
                return reject(err);
            });
    });
};

export const JWTHeader = () => {
    //Check if the user is verified
    var authHeader = "Bearer " + secureStorage.getItem("jwt");

    return {
        headers: {
            "Content-Type": "application/json",
            Authorization: authHeader
        }
    };
};