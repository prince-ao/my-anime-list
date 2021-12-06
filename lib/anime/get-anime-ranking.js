import fetch from "cross-fetch";

export const anime_ranking = (config) => {
  return () => {
    if (config.ranking_type == undefined) {
      throw new ReferenceError("ranking_type perameter is needed.");
    }
    const fn = () =>
      fetch(
        `${config.url}/ranking?ranking_type=${config.ranking_type}&limit=${config.limit}&offset${config.offset}&fields=${config.fields}`,
        {
          method: "GET",
          headers: {
            "X-MAL-CLIENT-ID": config.client_id,
          },
        }
      )
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
