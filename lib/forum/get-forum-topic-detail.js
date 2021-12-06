import fetch from "cross-fetch";

export const forum_topic_detail = (config) => {
  return () => {
    if (config.topic_id == undefined) {
      throw new Error("topic_id paremeter is required.");
    }
    if (config.limit == undefined) {
      config.limit = 100;
    } else {
      if (config.limit > 100) {
        throw new Error("limit has to be less then 100");
      }
    }
    if (config.offset == undefined) {
      config.offset = 0;
    }
    const fn = () =>
      fetch(`${config.url}topic/${config.topic_id}`, {
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
