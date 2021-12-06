import fetch from "cross-fetch";

export const get_mangalist = (config) => {
  config.url = "https://api.myanimelist.net/v2/users/";
  let param = `sort=${
    config.sort == undefined ? "list_score" : config.sort
  }&limit=${config.limit == undefined ? 100 : config.limit}&offset=${
    config.offset == undefined ? 0 : config.offset
  }`;
  return () => {
    if (config.user_name == undefined) {
      throw new ReferenceError("user_name parameter is required.");
    }
    if (config.user_name == "@me") {
      if (config.auth_token == undefined) {
        throw new Error("auth_token parameter is required for @me.");
      }
    } else {
      if (config.client_id == undefined && config.auth_token == undefined) {
        throw new Error("client_id parameter is reuqired.");
      }
    }
    if (config.status != undefined) {
      param += `&status=${config.status}`;
    }

    const fn = () =>
      fetch(`${config.url}${config.user_name}/mangalist?${param}`, {
        method: "GET",
        headers: {
          Autherization: `Bearer ${config.auth_token}`,
          "X-MAL-CLIENT-ID": config.client_id,
        },
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
