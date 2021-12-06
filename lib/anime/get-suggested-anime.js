import fetch from "cross-fetch";

export const suggested_anime = (config) => () => {
  if (config.auth_token == undefined) {
    throw new ReferenceError("auth_token parameter is required.");
  }
  const fn = () =>
    fetch(
      `${config.url}/suggestions?limit=${config.limit}&offset=${config.offset}&fields=${config.fields}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${config.auth_token}`,
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
