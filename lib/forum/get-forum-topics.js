import fetch from "cross-fetch";

export const forum_topics = (config) => {
  return () => {
    let f = true;
    let ret = "";
    if (config.board_id != undefined) {
      if (f) {
        ret += `board_id=${config.board_id}`;
        f = false;
      } else {
        ret += `&board_id=${config.board_id}`;
      }
    }
    if (config.subboard_id != undefined) {
      if (f) {
        ret += `subboard_id=${config.subboard_id}`;
        f = false;
      } else {
        ret += `&subboard_id=${config.subboard_id}`;
      }
    }
    if (config.limit != undefined) {
      if (f) {
        ret += `limit=${config.limit}`;
        f = false;
      } else {
        ret += `&limit=${config.limit}`;
      }
    }
    if (config.offset != undefined) {
      if (f) {
        ret += `offset=${config.offset}`;
        f = false;
      } else {
        ret += `&offset=${config.offset}`;
      }
    }
    if (config.sort != undefined) {
      if (f) {
        ret += `sort=${config.sort}`;
        f = false;
      } else {
        ret += `&sort=${config.sort}`;
      }
    }
    if (config.q != undefined) {
      if (f) {
        ret += `q=${config.q}`;
        f = false;
      } else {
        ret += `&q=${config.q}`;
      }
    }
    if (config.topic_user_name != undefined) {
      if (f) {
        ret += `topic_user_name=${config.topic_user_name}`;
        f = false;
      } else {
        ret += `&topic_user_name=${config.topic_user_name}`;
      }
    }
    if (config.user_name != undefined) {
      if (f) {
        ret += `user_name=${config.user_name}`;
        f = false;
      } else {
        ret += `&user_name=${config.user_name}`;
      }
    }
    const fn = () =>
      fetch(`${config.url}topics?${ret}`, {
        method: "GET",
        headers: {
          "X-MAL-CLIENT-ID": config.client_id,
        },
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
