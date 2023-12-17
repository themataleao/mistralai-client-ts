import { MistralClient } from ".";

const client = new MistralClient();

client
  .chat({
    model: "mistral-tiny",
    messages: [{ role: "user", content: "What is the best French cheese?" }],
  })
  .then((response) => {
    console.log(response);
  });
