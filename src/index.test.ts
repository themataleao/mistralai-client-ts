import { describe, it, expect } from "vitest";
import { MistralClient } from "./client";

const apiKey = process.env.MISTRAL_API_KEY || "";

const client = new MistralClient(apiKey);

describe("index", () => {
  const response = client
    .chat({
      model: "mistral-tiny",
      messages: [{ role: "user", content: "What is the best French cheese?" }],
    })
    .then((response) => {
      console.log(response);
    });
  it("response should not be empty", () => {
    expect(response).not.toBe("");
  });
});
