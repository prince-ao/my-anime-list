import { manga_list } from "./manga/get-manga-list.js";
import { manga_details } from "./manga/get-manga-details.js";
import { manga_ranking } from "./manga/get-manga-ranking.js";

const API = {
  url: "https://api.myanimelist.net/v2/manga",
};

export const manga = (config = {}) => {
  if (config.client_id == undefined) {
    throw new ReferenceError("Missing MAL require: client_id");
  }
  config.url = API.url;
  return {
    manga_list: manga_list(config),
    manga_details: manga_details(config),
    manga_ranking: manga_ranking(config),
  };
};
