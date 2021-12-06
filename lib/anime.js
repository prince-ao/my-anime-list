import { anime_details } from "./anime/get-anime-details.js";
import { anime_list } from "./anime/get-anime-list.js";
import { anime_ranking } from "./anime/get-anime-ranking.js";
import { seasonal_anime } from "./anime/get-seasonal-anime.js";
import { suggested_anime } from "./anime/get-suggested-anime.js";

const API = {
  url: "https://api.myanimelist.net/v2/anime",
};

export const anime = (config = {}) => {
  config.url = API.url;
  if (config.client_id == undefined) {
    throw new ReferenceError("Missing MAL require: client_id");
  }
  if (config.limit == undefined) {
    config.limit = 100;
  }
  if (config.offset == undefined) {
    config.offset = 0;
  }
  if (config.fields == undefined) {
    config.fields =
      "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics";
  }
  if (config.sort == undefined) {
    config.sort = "anime_score";
  }
  return {
    anime_list: anime_list(config),
    anime_details: anime_details(config),
    anime_ranking: anime_ranking(config),
    seasonal_anime: seasonal_anime(config),
    suggested_anime: suggested_anime(config),
  };
};
