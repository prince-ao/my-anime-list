import fetch from "cross-fetch";

export const anime_list = (config) => {
  return () => {
    if (config.q == undefined) {
      throw new ReferenceError("q parameter is required.");
    }
    const fn = () =>
      fetch(
        `${config.url}?q=${config.q}&limit=${config.limit}&offset=${config.offset}&fields=${config.fields}`,
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
