import { MistralClient } from "@ai-utils/mistral";

const apiKey = process.env.MISTRAL_API_KEY || "";

const client = new MistralClient(apiKey);

const input: string[] = [];
for (let i = 0; i < 1; i++) {
  input.push("What is the best swiss cheese?");
}

client
  .embeddings({
    model: "mistral-embed",
    input: input,
  })
  .then((response) => {
    console.log(response.data[0].embedding);
  })
  .catch((error) => {
    console.error(error);
  });
