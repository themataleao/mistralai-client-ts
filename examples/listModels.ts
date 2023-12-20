import { MistralClient, MistralListModelsResponse } from "@ai-utils/mistral";

const apiKey = process.env.MISTRAL_API_KEY || "";

const client = new MistralClient(apiKey);

client
  .listModels()
  .then((response: MistralListModelsResponse) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
