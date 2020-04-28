import axios from "axios";
// export const serverip = "http://127.0.0.1:8000/";
export const serverip = "http://rippedcoders.com:8000/";

export const ServerAddr = axios.create({
  baseURL: serverip,
  timeout: 30000,
  headers: {},
  withCredentials: true,
  transformRequest: [
    function(data, headers) {
      const access_token = window.localStorage.getItem("access_token");
      const refresh_token = window.localStorage.getItem("refresh_token");
      // console.log("refresh_token", refresh_token);
      if (access_token && refresh_token) {
        // headers['Content-TypeContent'] = "application/json;";
        headers["access-token"] = access_token;
        headers["refresh-token"] = refresh_token;
      }
      return JSON.stringify(data);
    }
  ]
});

export const defaultServerAddr = axios.create({
  baseURL: serverip,
  timeout: 30000,
  headers: {},
  withCredentials: true
});

// const access_token = window.localStorage.getItem('access_token');
// const refresh_token = window.localStorage.getItem('refresh_token');
// console.log("refresh_token", refresh_token);
// if(access_token && refresh_token){
//     headers['access-token'] = access_token;
//     headers['refresh-token'] = refresh_token;
// }
// Do whatever you want to transform the data
// headers['Content-TypeContent'] = "application/json;";
