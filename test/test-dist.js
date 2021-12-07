const MAL = require("../dist/bundle.cjs");

const anime = MAL().anime;
const user_animelist = MAL().user_animelist;
const forum = MAL().forum;
const manga = MAL().manga;
const user_mangalist = MAL().user_mangalist;
const user = MAL().user;

describe("library", () => {
  describe("anime library", () => {
    describe("getting anime list", () => {
      it("should not be undefined", async () => {
        const res = await anime({
          client_id: `${process.env.CLIENT_ID}`,
          q: "one",
          limit: 4,
        }).anime_list()();
        assert(res != undefined);
      });
    });
    describe("getting anime detail", () => {
      it("should not be undefined", async () => {
        const res = await anime({
          client_id: `${process.env.CLIENT_ID}`,
          anime_id: 30230,
          limit: 4,
        }).anime_details()();
        assert(res != undefined);
      });
    });
    describe("getting anime ranking", () => {
      it("should not be undefined", async () => {
        const res = await anime({
          client_id: `${process.env.CLIENT_ID}`,
          ranking_type: "all",
          limit: 4,
        }).anime_ranking()();
        assert(res != undefined);
      });
    });
    describe("getting seasonal anime", () => {
      it("should not be undefined", async () => {
        const res = await anime({
          client_id: `${process.env.CLIENT_ID}`,
          year: 2020,
          season: "summer",
          limit: 4,
        }).seasonal_anime()();
        assert(res != undefined);
      });
    });
    describe("getting suggested anime", () => {
      it("should not be undefined", async () => {
        const res = await anime({
          client_id: `${process.env.CLIENT_ID}`,
          auth_token: `${process.env.AUTH_TOKEN}`,
          limit: 4,
        }).suggested_anime()();
        assert(res != undefined);
      });
    });
  });
  describe("user_animelist library", () => {
    describe("update animelist", () => {
      it("should not be undefined", async () => {
        const res = await user_animelist({
          auth_token: `${process.env.AUTH_TOKEN}`,
          anime_id: 17074,
          score: 10,
        }).update_animelist()();
        assert(res != undefined);
      });
    });
    describe("delete item", () => {
      it("should not be undefined", async () => {
        const res = await user_animelist({
          auth_token: `${process.env.AUTH_TOKEN}`,
          anime_id: 17074,
        }).delete_anime_item()();
        assert(res != undefined);
      });
    });
    describe("get users animelist", () => {
      it("should not be undefined", async () => {
        const res = await user_animelist({
          client_id: `${process.env.CLIENT_ID}`,
          user_name: "AnimeLazer",
        }).get_animelist()();
        assert(res != undefined);
      });
    });
  });
  describe("forum library", () => {
    describe("get forum boards", () => {
      it("should not be undefined", async () => {
        const res = await forum({
          client_id: `${process.env.CLIENT_ID}`,
        }).forum_boards()();
        assert(res != undefined);
      });
    });
    describe("get forum topic detail", () => {
      it("should not be undefined", async () => {
        const res = await forum({
          client_id: `${process.env.CLIENT_ID}`,
          topic_id: 10,
        }).forum_boards()();
        assert(res != undefined);
      });
    });
    describe("get forum topics", () => {
      it("should not be undefined", async () => {
        const res = await forum({
          client_id: `${process.env.CLIENT_ID}`,
        }).forum_boards()();
        assert(res != undefined);
      });
    });
  });
  describe("manga library", () => {
    describe("get manga list", () => {
      it("should not be undefined", async () => {
        const res = await manga({
          client_id: `${process.env.CLIENT_ID}`,
          q: "one",
        }).manga_list()();
        assert(res != undefined);
      });
    });
    describe("get manga details", () => {
      it("should not be undefined", async () => {
        const res = await manga({
          client_id: `${process.env.CLIENT_ID}`,
          manga_id: 208,
        }).manga_details()();
        assert(res != undefined);
      });
    });
    describe("get manga ranking", () => {
      it("should not be undefined", async () => {
        const res = await manga({
          client_id: `${process.env.CLIENT_ID}`,
          ranking_type: "all",
        }).manga_ranking()();
        assert(res != undefined);
      });
    });
  });
  describe("update user's manga list library", () => {
    describe("update manga list", () => {
      it("should not be undefined", async () => {
        const res = await user_mangalist({
          auth_token: `${process.env.AUTH_TOKEN}`,
          manga_id: 208,
        }).update_mangalist()();
        assert(res != undefined);
      });
    });
    describe("delete manga list item", () => {
      it("should not be undefined", async () => {
        const res = await user_mangalist({
          auth_token: `${process.env.AUTH_TOKEN}`,
          manga_id: 208,
        }).delete_manga_item()();
        assert(res != undefined);
      });
    });
    describe("get manga list", () => {
      it("should not be undefined", async () => {
        const res = await user_mangalist({
          client_id: `${process.env.CLIENT_ID}`,
          user_name: "AnimeLazer",
        }).get_mangalist()();
        assert(res != undefined);
      });
    });
  });
  describe("get user information library", () => {
    describe("get user information", () => {
      it("should not be undefined", async () => {
        const res = await user({
          user_id: "@me",
          auth_token: `${process.env.AUTH_TOKEN}`,
        }).get_information()();
        assert(res != undefined);
      });
    });
  });
});
