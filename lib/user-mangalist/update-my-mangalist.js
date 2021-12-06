import fetch from "cross-fetch";

export const update_mangalist = (config) => {
  return () => {
    if (config.auth_token == undefined) {
      throw new ReferenceError("Missing MAL require: auth_token");
    }
    if (config.manga_id == undefined) {
      throw new ReferenceError("Missing MAL require: manga_id");
    }
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
    if (config.is_rereading != undefined) {
      if (f) {
        req += `is_rereading=${config.is_rereading}`;
        f = false;
      } else {
        req += `&is_rereading=${config.is_rereading}`;
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
    if (config.num_volumes_read != undefined) {
      if (f) {
        req += `num_volumes_read=${config.num_volumes_read}`;
        f = false;
      } else {
        req += `&num_volumes_read=${config.num_volumes_read}`;
      }
    }
    if (config.num_chapters_read != undefined) {
      if (f) {
        req += `num_chapters_read=${config.num_chapters_read}`;
        f = false;
      } else {
        req += `&num_chapters_read=${config.num_chapters_read}`;
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
    if (config.num_times_reread != undefined) {
      if (f) {
        req += `num_times_reread=${config.num_times_reread}`;
        f = false;
      } else {
        req += `&num_times_reread=${config.num_times_reread}`;
      }
    }
    if (config.reread_value != undefined) {
      if (f) {
        req += `reread_value=${config.reread_value}`;
        f = false;
      } else {
        req += `&reread_value=${config.reread_value}`;
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
    config.url = "https://api.myanimelist.net/v2/manga/";
    const fn = () =>
      fetch(`${config.url}${config.manga_id}/my_list_status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${config.auth_token}`,
        },
        body: `${req}`,
      })
        .then(async (res) => {
          if (res.status !== 200) {
            throw new Error(
              `MAL error occurred. ${res.status}: ${await res.text()}`
            );
          }
          return res.json();
        })
        .then((data) => data);

    return fn;
  };
};
