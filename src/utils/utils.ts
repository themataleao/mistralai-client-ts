import { ChatCompletionRequestType } from "../types";

export const mapChatCompletionRequest = (
  request: ChatCompletionRequestType
) => {
  return {
    model: request.model,
    messages: request.messages,
    temperature: request.temperature,
    max_tokens: request.maxTokens,
    top_p: request.topP,
    random_seed: request.randomSeed,
    stream: request.stream,
    safe_prompt: request.safeMode,
  };
};
