import fetch from "cross-fetch";

export const update_animelist = (config) => {
  let req = "";
  let f = true;
  if (config.status != undefined) {
    if (f) {
      req += `status=${config.status}`;
      f = false;
    } else {
      req += `&status=${config.status}`;
    }
  }
  if (config.is_rewatching != undefined) {
    if (f) {
      req += `is_rewatching=${config.is_rewatching}`;
      f = false;
    } else {
      req += `&is_rewatching=${config.is_rewatching}`;
    }
  }
  if (config.score != undefined) {
    if (f) {
      req += `score=${config.score}`;
      f = false;
    } else {
      req += `&score=${config.score}`;
    }
  }
  if (config.num_watched_episodes != undefined) {
    if (f) {
      req += `num_watched_episodes=${config.num_watched_episodes}`;
      f = false;
    } else {
      req += `&num_watched_episodes=${config.num_watched_episodes}`;
    }
  }
  if (config.priority != undefined) {
    if (f) {
      req += `priority=${config.priority}`;
      f = false;
    } else {
      req += `&priority=${config.priority}`;
    }
  }
  if (config.num_times_rewatched != undefined) {
    if (f) {
      req += `num_times_rewatched=${config.num_times_rewatched}`;
      f = false;
    } else {
      req += `&num_times_rewatched=${config.num_times_rewatched}`;
    }
  }
  if (config.rewatch_value != undefined) {
    if (f) {
      req += `rewatch_value=${config.rewatch_value}`;
      f = false;
    } else {
      req += `&rewatch_value=${config.rewatch_value}`;
    }
  }
  if (config.tags != undefined) {
    if (f) {
      req += `tags=${config.tags}`;
      f = false;
    } else {
      req += `&tags=${config.tags}`;
    }
  }
  if (config.comments != undefined) {
    if (f) {
      req += `comments=${config.comments}`;
      f = false;
    } else {
      req += `&comments=${config.comments}`;
    }
  }
  if (req.length === 0) {
    req += `score=${Math.floor(Math.random() * 10)}`;
  }
  return () => {
    if (config.auth_token == undefined) {
      throw new ReferenceError("Missing MAL require: auth_token");
    }
    if (config.anime_id == undefined) {
      throw new ReferenceError("anime_id parameter is required.");
    }
    config.url = "https://api.myanimelist.net/v2/anime/";
    //console.log(config);
    const fn = () =>
      fetch(`${config.url}${config.anime_id}/my_list_status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${config.auth_token}`,
        },
        body: `${req}`,
      })
        .then(async (res) => {
          if (res.status != 200) {
            throw new Error(
              `MAL error occured. ${res.status}: ${await res.text()}`
            );
          }
          return res.json();
        })
        .then((data) => data);

    return fn;
  };
};
