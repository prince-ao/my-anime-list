import { get_mangalist } from "./user-mangalist/get-user-mangalist.js";
import { update_mangalist } from "./user-mangalist/update-my-mangalist.js";
import { delete_manga_item } from "./user-mangalist/delete-my-mangalist-item.js";

const API = {
  url: "https://api.myanimelist.net/v2/manga/",
};

export const user_mangalist = (config = {}) => {
  config.url = API.url;
  return {
    get_mangalist: get_mangalist(config),
    update_mangalist: update_mangalist(config),
    delete_manga_item: delete_manga_item(config),
  };
};
