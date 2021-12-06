<img align="center" src="./assets/MAL.jpg"/>

# myanimelist-api-list

This is a simple wrapper around the <a href="https://myanimelist.net/apiconfig/references/authorization">myanimelist API</a> hosted on npm. This library can be used in browsers or node.

Note: It's structured like exactly like the <a href="https://myanimelist.net/apiconfig/references/api/v2">myanimelist API reference</a>, so always refer to it if you have an error. If anything unintended happens please email me, or fix it.

Resources:

- [Excellent Blog Post](https://myanimelist.net/blog.php?eid=835707)

## Table of Contents

- [Installation](#installation)
- [Node.js Initialization](#nodejs)
- [Usage](#usage)
- [Anime](#anime)
- [User_animelist](#user_animelist)
- [Forum](#forum)
- [Manga](#manga)
- [User_mangalist](#user_mangalist)
- [User](#user)
- [Contact](#contact)

<a name="installation"></a>

## Installation

```bash
yarn add myanimelist-api-wrapper
```

<a name="nodejs"></a>

## Node.js Initialization

```javascript
import MAL from "myanimelist-api-wrapper";
```

<a name="usage"></a>

## Usage

```javascript
const anime = MAL.anime;
const user_animelist = MAL.user_animelist;
const forum = MAL.forum;
const manga = MAL.manga;
const user_mangalist = MAL.mangalist;
const user = MAL.user;

anime({
  client_id: "insert client_id here",
  q: "one",
  limit: 4,
})
  .animelist()()
  .then((data) => console.log(data));

user_animelist({
  auth_token: "insert auth_token here",
  anime_id: 17074,
  score: 10,
})
  .update_animelist()()
  .then((data) => console.log(data));

forum({
  client_id: "insert client_id here",
})
  .forum_boards()()
  .then((data) => console.log(data));

manga({
  client_id: "insert client_id here",
  q: "one",
})
  .manga_list()()
  .then((data) => console.log(data));

user_mangalist({
  auth_token: "insert auth_token here",
  manga_id: 208,
})
  .update_mangalist()()
  .then((data) => console.log(data));

user({
  user_id: "@me",
  auth_token: "insert auth_token here",
})
  .get_information()()
  .then((data) => console.log(data));
```

<a name="anime"></a>

## Anime

```javascript
anime({
  client_id!: string,
  q!: string,
  limit?: int,
  offset?: int,
  fields?: string,
})
  .animelist()() => Promise<any>

anime({
  client_id!: string,
  anime_id!: int,
  fields?: string,
})
  .anime_details()() => Promise<any>

anime({
  client_id!: string,
  ranking_type!: string,
  limit?: int,
  offset?: int,
  fields?: string
})
  .anime_ranking()() => Promise<any>

anime({
  client_id!: string,
  year!: int,
  season!: string,
  sort?: string,
  limit?: int,
  offset?: int,
  fields?: string
})
  .seasonal_anime()() => Promise<any>

anime({
  auth_token!: string,
  limit?: int,
  offset?: int,
  fields?: string
})
  .suggested_anime()()
```

<a name="user_animelist"></a>

## User_animelist

```javascript
user_animelist({
  auth_token!: string,
  anime_id!: int,
  status?: string,
  is_rewatching?: boolean,
  score?: int,
  num_watched_episodes?: int,
  priority?: int,
  num_times_rewatched?: int,
  rewatch_value?: int,
  tags?: string,
  comments?: string
})
  .update_animelist()() => Promise<any>

user_animelist({
  auth_token!: string,
  anime_id!: string,
})
  .delete_anime_item()() => Promise<any>

user_animelist({
  client_id!: string,
  user_name!: int,
  auth_token?(unless user_name=@me): string,
  sort?: string,
  limit?: int,
  offset?: int,
})
  .get_animelist()()
```

<a name="forum"></a>

## Forum

```javascript
forum({
  client_id!: string,
}).forum_boards()() => Promise<any>

forum({
  client_id!: string,
  topic_id!: int,
  limit?: int,
  offset?: int,
}).forum_topic_detail()() => Promise<any>

forum({
  client_id!: string,
  board_id?: int,
  subboarrd_id?: int,
  limit?: int,
  offset?: int,
  sort?: string,
  q?: string,
  topic_user_name?: string,
  user_name?: string,
}).forum_topics()() => Promise<any>
```

<a name="manga"></a>

## Manga

```javascript
manga({
  client_id!: string,
  q!: string,
  limit?: int,
  offset?: int,
  fields?: string,
}).manga_list()() => Promise<any>

manga({
  client_id!: string,
  manga_id!: int,
  fields?: string,
}).manga_details()() => Promise<any>

manga({
  client_id!: string,
  ranking_type!: string,
  limit?: int,
  offset?: int,
  fields?: string
}).manga_ranking()() => Promise<any>
```

<a name="user_mangalist"></a>

## User_mangalist

```javascript
user_mangalist({
  auth_token!: string,
  manga_id!: int,
  status?: string,
  is_rereading?: boolean,
  score?: int,
  num_volumes_read?: int,
  num_chapters_read?: int,
  priority?: int,
  num_times_reread?: int,
  reread_value?: int,
  tags?: string,
  comments?: string
}).update_mangalist()() => Promise<any>

user_mangalist({
  auth_token!: string,
  manga_id!: string,
}).delete_manga_item()() => Promise<any>

user_mangalist({
  client_id!: string,
  user_name!: int,
  auth_token?(unless user_name=@me): string,
  sort?: string,
  limit?: int,
  offset?: int,
})
  .get_mangalist()()
```

<a name="user"></a>

## User

```javascript
user({
  auth_token!: string,
  user_id!: "@me",
  fields?: string,
}).get_information()()
```

<a name="contact"></a>

## Contact

- Author: Prince-ao
- Contact: princeaddo@gmail.com
