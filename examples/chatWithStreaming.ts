import { MistralClient } from "@ai-utils/mistral";

const apiKey = process.env.MISTRAL_API_KEY || "";

const client = new MistralClient(apiKey);

client
  .chatStream({
    model: "mistral-tiny",
    messages: [{ role: "user", content: "What is the best swiss cheese?" }],
  })
  .then((response) => {
    console.log(response.choices[0]);
  })
  .catch((error) => {
    console.error(error);
  });
