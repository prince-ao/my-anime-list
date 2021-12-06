import fetch from "cross-fetch";

export const delete_item = (config) => {
  return () => {
    if (config.auth_token == undefined) {
      throw new ReferenceError("Missing MAL require: auth_token");
    }
    if (config.anime_id == undefined) {
      throw new ReferenceError("anime_id parameter is required.");
    }
    config.url = "https://api.myanimelist.net/v2/anime/";
    const fn = () =>
      fetch(`${config.url}${config.anime_id}/my_list_status`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${config.auth_token}`,
        },
      })
        .then(async (res) => {
          //console.log(res);
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
