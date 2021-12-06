import assert, { doesNotMatch } from "assert";
import MAL from "../index.js";
import dotenv from "dotenv";
dotenv.config();

const anime = MAL.anime;
const user_animelist = MAL.user_animelist;

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
        }).delete_item()();
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
});
