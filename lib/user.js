import { get_information } from "./user/get-my-user-information.js";

const API = {
  url: "https://api.myanimelist.net/v2/users/",
};

export const user = (config = {}) => {
  config.url = API.url;
  if (config.auth_token == undefined) {
    throw new ReferenceError("auth_token is required.");
  }
  return {
    get_information: get_information(config),
  };
};
