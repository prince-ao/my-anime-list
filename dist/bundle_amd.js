define(['cross-fetch'], (function (fetch) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

  const anime_details = (config) => {
    return () => {
      if (config.anime_id == undefined) {
        throw new ReferenceError("anime_id perameter is needed.");
      }
      const fn = () =>
        fetch__default["default"](`${config.url}/${config.anime_id}?fields=${config.fields}`, {
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

  const anime_list = (config) => {
    return () => {
      if (config.q == undefined) {
        throw new ReferenceError("q parameter is required.");
      }
      const fn = () =>
        fetch__default["default"](
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

  const anime_ranking = (config) => {
    return () => {
      if (config.ranking_type == undefined) {
        throw new ReferenceError("ranking_type perameter is needed.");
      }
      const fn = () =>
        fetch__default["default"](
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

  const seasonal_anime = (config) => {
    return () => {
      if (config.year == undefined) {
        throw new ReferenceError("year perameter is needed.");
      }
      if (config.season == undefined) {
        throw new ReferenceError("season perameter is needed.");
      }
      const fn = () =>
        fetch__default["default"](
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

  const suggested_anime = (config) => () => {
    if (config.auth_token == undefined) {
      throw new ReferenceError("auth_token parameter is required.");
    }
    const fn = () =>
      fetch__default["default"](
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

  const API$4 = {
    url: "https://api.myanimelist.net/v2/anime",
  };

  const anime = (config = {}) => {
    config.url = API$4.url;
    if (config.client_id == undefined) {
      throw new ReferenceError("Missing MAL require: client_id");
    }
    if (config.limit == undefined) {
      config.limit = 100;
    }
    if (config.offset == undefined) {
      config.offset = 0;
    }
    if (config.fields == undefined) {
      config.fields =
        "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics";
    }
    if (config.sort == undefined) {
      config.sort = "anime_score";
    }
    return {
      anime_list: anime_list(config),
      anime_details: anime_details(config),
      anime_ranking: anime_ranking(config),
      seasonal_anime: seasonal_anime(config),
      suggested_anime: suggested_anime(config),
    };
  };

  const update_animelist = (config) => {
    let req = "";
    let f = true;
    if (config.status != undefined) {
      if (f) {
        req += `status=${config.status}`;
        f = false;
      } else {
        req += `&status=${config.status}`;
      }
    }
    if (config.is_rewatching != undefined) {
      if (f) {
        req += `is_rewatching=${config.is_rewatching}`;
        f = false;
      } else {
        req += `&is_rewatching=${config.is_rewatching}`;
      }
    }
    if (config.score != undefined) {
      if (f) {
        req += `score=${config.score}`;
        f = false;
      } else {
        req += `&score=${config.score}`;
      }
    }
    if (config.num_watched_episodes != undefined) {
      if (f) {
        req += `num_watched_episodes=${config.num_watched_episodes}`;
        f = false;
      } else {
        req += `&num_watched_episodes=${config.num_watched_episodes}`;
      }
    }
    if (config.priority != undefined) {
      if (f) {
        req += `priority=${config.priority}`;
        f = false;
      } else {
        req += `&priority=${config.priority}`;
      }
    }
    if (config.num_times_rewatched != undefined) {
      if (f) {
        req += `num_times_rewatched=${config.num_times_rewatched}`;
        f = false;
      } else {
        req += `&num_times_rewatched=${config.num_times_rewatched}`;
      }
    }
    if (config.rewatch_value != undefined) {
      if (f) {
        req += `rewatch_value=${config.rewatch_value}`;
        f = false;
      } else {
        req += `&rewatch_value=${config.rewatch_value}`;
      }
    }
    if (config.tags != undefined) {
      if (f) {
        req += `tags=${config.tags}`;
        f = false;
      } else {
        req += `&tags=${config.tags}`;
      }
    }
    if (config.comments != undefined) {
      if (f) {
        req += `comments=${config.comments}`;
        f = false;
      } else {
        req += `&comments=${config.comments}`;
      }
    }
    if (req.length === 0) {
      req += `score=${Math.floor(Math.random() * 10)}`;
    }
    return () => {
      if (config.auth_token == undefined) {
        throw new ReferenceError("Missing MAL require: auth_token");
      }
      if (config.anime_id == undefined) {
        throw new ReferenceError("anime_id parameter is required.");
      }
      config.url = "https://api.myanimelist.net/v2/anime/";
      //console.log(config);
      const fn = () =>
        fetch__default["default"](`${config.url}${config.anime_id}/my_list_status`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${config.auth_token}`,
          },
          body: `${req}`,
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

  const delete_anime_item = (config) => {
    return () => {
      if (config.auth_token == undefined) {
        throw new ReferenceError("Missing MAL require: auth_token");
      }
      if (config.anime_id == undefined) {
        throw new ReferenceError("anime_id parameter is required.");
      }
      config.url = "https://api.myanimelist.net/v2/anime/";
      const fn = () =>
        fetch__default["default"](`${config.url}${config.anime_id}/my_list_status`, {
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

  const get_animelist = (config) => {
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
        fetch__default["default"](`${config.url}${config.user_name}/animelist?${param}`, {
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

  const A = {
    url: "https://api.myanimelist.net/v2/anime/",
  };

  const user_animelist = (config = {}) => {
    config.url = A.url;
    return {
      update_animelist: update_animelist(config),
      delete_anime_item: delete_anime_item(config),
      get_animelist: get_animelist(config),
    };
  };

  const forum_boards = (config) => {
    return () => {
      const fn = () =>
        fetch__default["default"](`${config.url}boards`, {
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

  const forum_topic_detail = (config) => {
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
        fetch__default["default"](
          `${config.url}topic/${config.topic_id}?limit=${config.limit}&offset=${config.offset}`,
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

  const forum_topics = (config) => {
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
        fetch__default["default"](`${config.url}topics?${ret}`, {
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

  const API$3 = {
    url: "https://api.myanimelist.net/v2/forum/",
  };

  const forum = (config = {}) => {
    if (config.client_id == undefined) {
      throw new ReferenceError("Missing MAL require: client_id");
    }
    config.url = API$3.url;
    return {
      forum_boards: forum_boards(config),
      forum_topic_detail: forum_topic_detail(config),
      forum_topics: forum_topics(config),
    };
  };

  const manga_list = (config) => {
    return () => {
      if (config.q == undefined) {
        throw new ReferenceError("q parameter is required.");
      }
      const fn = () =>
        fetch__default["default"](
          `${config.url}?q=${config.q}&limit=${
          config.limit == undefined ? 100 : config.limit
        }&offset=${config.offset == undefined ? 0 : config.offset}&fields=${
          config.fields == undefined
            ? "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics"
            : config.fields
        }`,
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

  const manga_details = (config) => {
    return () => {
      if (config.manga_id == undefined) {
        throw new ReferenceError("manga_id parameter is required.");
      }
      const fn = () =>
        fetch__default["default"](
          `${config.url}/${config.manga_id}?fields=${
          config.fields == undefined
            ? "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics"
            : config.fields
        }`,
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

  const manga_ranking = (config) => {
    return () => {
      if (config.ranking_type == undefined) {
        throw new ReferenceError("ranking_type parameter is required.");
      }
      const fn = () =>
        fetch__default["default"](
          `${config.url}/ranking?ranking_type=${config.ranking_type}&limit=${
          config.limit == undefined ? 100 : config.limit
        }&offset=${config.offset == undefined ? 0 : config.offset}&fields=${
          config.fields == undefined
            ? "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics"
            : config.fields
        }`,
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

  const API$2 = {
    url: "https://api.myanimelist.net/v2/manga",
  };

  const manga = (config = {}) => {
    if (config.client_id == undefined) {
      throw new ReferenceError("Missing MAL require: client_id");
    }
    config.url = API$2.url;
    return {
      manga_list: manga_list(config),
      manga_details: manga_details(config),
      manga_ranking: manga_ranking(config),
    };
  };

  const get_mangalist = (config) => {
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
        fetch__default["default"](`${config.url}${config.user_name}/mangalist?${param}`, {
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

  const update_mangalist = (config) => {
    return () => {
      if (config.auth_token == undefined) {
        throw new ReferenceError("Missing MAL require: auth_token");
      }
      if (config.manga_id == undefined) {
        throw new ReferenceError("Missing MAL require: manga_id");
      }
      let req = "";
      let f = true;
      if (config.status != undefined) {
        if (f) {
          req += `status=${config.status}`;
          f = false;
        } else {
          req += `&status=${config.status}`;
        }
      }
      if (config.is_rereading != undefined) {
        if (f) {
          req += `is_rereading=${config.is_rereading}`;
          f = false;
        } else {
          req += `&is_rereading=${config.is_rereading}`;
        }
      }
      if (config.score != undefined) {
        if (f) {
          req += `score=${config.score}`;
          f = false;
        } else {
          req += `&score=${config.score}`;
        }
      }
      if (config.num_volumes_read != undefined) {
        if (f) {
          req += `num_volumes_read=${config.num_volumes_read}`;
          f = false;
        } else {
          req += `&num_volumes_read=${config.num_volumes_read}`;
        }
      }
      if (config.num_chapters_read != undefined) {
        if (f) {
          req += `num_chapters_read=${config.num_chapters_read}`;
          f = false;
        } else {
          req += `&num_chapters_read=${config.num_chapters_read}`;
        }
      }
      if (config.priority != undefined) {
        if (f) {
          req += `priority=${config.priority}`;
          f = false;
        } else {
          req += `&priority=${config.priority}`;
        }
      }
      if (config.num_times_reread != undefined) {
        if (f) {
          req += `num_times_reread=${config.num_times_reread}`;
          f = false;
        } else {
          req += `&num_times_reread=${config.num_times_reread}`;
        }
      }
      if (config.reread_value != undefined) {
        if (f) {
          req += `reread_value=${config.reread_value}`;
          f = false;
        } else {
          req += `&reread_value=${config.reread_value}`;
        }
      }
      if (config.tags != undefined) {
        if (f) {
          req += `tags=${config.tags}`;
          f = false;
        } else {
          req += `&tags=${config.tags}`;
        }
      }
      if (config.comments != undefined) {
        if (f) {
          req += `comments=${config.comments}`;
          f = false;
        } else {
          req += `&comments=${config.comments}`;
        }
      }
      if (req.length === 0) {
        req += `score=${Math.floor(Math.random() * 10)}`;
      }
      config.url = "https://api.myanimelist.net/v2/manga/";
      const fn = () =>
        fetch__default["default"](`${config.url}${config.manga_id}/my_list_status`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Bearer ${config.auth_token}`,
          },
          body: `${req}`,
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

  const delete_manga_item = (config) => {
    return () => {
      if (config.auth_token == undefined) {
        throw new ReferenceError("Missing MAL require: auth_token");
      }
      if (config.manga_id == undefined) {
        throw new ReferenceError("manga_id parameter is required.");
      }
      config.url = "https://api.myanimelist.net/v2/manga/";
      const fn = () =>
        fetch__default["default"](`${config.url}${config.manga_id}/my_list_status`, {
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

  const API$1 = {
    url: "https://api.myanimelist.net/v2/manga/",
  };

  const user_mangalist = (config = {}) => {
    config.url = API$1.url;
    return {
      get_mangalist: get_mangalist(config),
      update_mangalist: update_mangalist(config),
      delete_manga_item: delete_manga_item(config),
    };
  };

  const get_information = (config) => {
    return () => {
      if (config.user_id == undefined) {
        throw new ReferenceError("user_id parameter is required.");
      }
      const fn = () =>
        fetch__default["default"](
          `${config.url}${config.user_id}?fields=${
          config.fields == undefined
            ? "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics"
            : config.fields
        }`,
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
  };

  const API = {
    url: "https://api.myanimelist.net/v2/users/",
  };

  const user = (config = {}) => {
    config.url = API.url;
    if (config.auth_token == undefined) {
      throw new ReferenceError("auth_token is required.");
    }
    return {
      get_information: get_information(config),
    };
  };

  var index = () => {
    return {
      anime: anime,
      user_animelist: user_animelist,
      forum: forum,
      manga: manga,
      user_mangalist: user_mangalist,
      user: user,
    };
  };

  return index;

}));
