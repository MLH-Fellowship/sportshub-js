process.env.NODE_ENV = "test";

const request = require("supertest");

const app = require("../app");
const db = require("../db");

beforeAll(() => {
  db.run("CREATE TABLE IF NOT EXISTS activity(id TEXT, name TEXT)");
});

describe("POST /", () => {
  test("It should return 200", async () => {
    const response = await request(app).post("/activity").send({ id: "2345", name: "Soccer" });
    expect(response.statusCode).toBe(200);
  });
});

describe("GET /", () => {
  test("It should return 200", async () => {
    const response = await request(app).get("/activity/");
    expect(response.statusCode).toBe(200);
  });
});

afterAll(async () => {
  await db.run("DROP TABLE activity");
  db.close();
});
