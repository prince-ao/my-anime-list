import fetch from "cross-fetch";

export const forum_boards = (config) => {
  return () => {
    const fn = () =>
      fetch(`${config.url}boards`, {
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
