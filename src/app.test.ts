import request from "supertest";
import { app } from "../src/app";

describe("GET /", () => {
  it("response with a json message", (done) => {
    request(app)
      .get("/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, { message: "Hello World!" }, done);
  });
});
