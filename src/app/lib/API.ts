import axios from "axios";
let baseUrl = "http://localhost:3000/";

export function GetData(apiRoute: any, payload: any, callback: any = () => {}) {
  const auth = "";
  axios
    .get(baseUrl + apiRoute, {
      params: payload,
      headers: {
        "Content-Type": "application/json",
        token: auth,
      },
    })
    .then((response) => {
      callback(response);
    })
    .catch((error) => {
      callback(error?.response);
    });
}
export function PostData(apiRoute: any, payload: any, callback: any = () => {}) {
  const auth = "";

  try {
    axios
      .post(baseUrl + apiRoute, payload, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          token: auth,
        },
      })
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error?.response);
      });
  } catch (error) {
    callback(error);
  }
}

export function PostFormData(apiRoute: String, payload: Object, callback: Function = () => {}) {
  const auth = "";
  let formData = new FormData();

  Object.entries(payload).map(([key, value]) => {
    formData.append(key, value);
  });

  try {
    axios
      .post(baseUrl + apiRoute, formData, {
        headers: {
          token: auth,
          "content-type": "multipart/form-data",
        },
      })
      .then((response) => {
        callback(response);
      })
      .catch((error) => {
        callback(error?.response);
      });
  } catch (error) {
    callback(error);
  }
}
