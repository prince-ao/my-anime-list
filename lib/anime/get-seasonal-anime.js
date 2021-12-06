import fetch from "cross-fetch";

export const seasonal_anime = (config) => {
  return () => {
    if (config.year == undefined) {
      throw new ReferenceError("year perameter is needed.");
    }
    if (config.season == undefined) {
      throw new ReferenceError("season perameter is needed.");
    }
    const fn = () =>
      fetch(
        `${config.url}/season/${config.year}/${config.season}?sort=${config.sort}&limit=${config.limit}&offset=${config.offset}&fields=${config.fields}`,
        {
          method: "GET",
          headers: {
            "X-MAL-CLIENT-ID": config.client_id,
          },
        }
      )
        .then((res) => {
          if (res.status !== 200) {
            throw new Error(`MAL error occurred. ${res.status}: ${res.text()}`);
          }
          return res.json();
        })
        .then((data) => data);

    return fn;
  };
};
