import fetch from "cross-fetch";

export const anime_details = (config) => {
  return () => {
    if (config.anime_id == undefined) {
      throw new ReferenceError("anime_id perameter is needed.");
    }
    const fn = () =>
      fetch(`${config.url}/${config.anime_id}?fields=${config.fields}`, {
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
