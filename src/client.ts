import { z } from "zod";
import fetch from "node-fetch";
import { ChatCompletionRequestType } from ".";
import { apiService } from "./services";

const RETRY_STATUS_CODES: number[] = [429, 502, 503, 504];
const ENDPOINT: string = "https://api.mistral.ai";

export class MistralClient {
  private endpoint: string;
  private apiService: apiService;
  private textDecoder: TextDecoder;

  constructor() {
    this.endpoint = ENDPOINT;
    this.apiService = new apiService();
  }

  async chat({
    model,
    messages,
    temperature,
    maxTokens,
    topP,
    randomSeed,
    stream,
    safeMode,
  }: ChatCompletionRequestType): Promise<string> {
    const body: ChatCompletionRequestType = {
      model,
      messages,
      temperature,
      maxTokens,
      topP,
      randomSeed,
      stream,
      safeMode,
    };

    const response = await this.apiService._req(
      `${this.endpoint}/chat-completion`,
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    return data.text;
  }
}
