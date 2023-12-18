import { ChatCompletionRequestType } from ".";
import { apiService } from "./services";
import { mapChatCompletionRequest } from "./utils";

const ENDPOINT: string = "https://api.mistral.ai";

export class MistralClient {
  private apiKey: string;
  private endpoint: string;
  private apiService: apiService;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.endpoint = ENDPOINT;
    this.apiService = new apiService(this.apiKey);
  }

  async listModels(): Promise<any> {
    const response = await this.apiService._req({
      endpoint: `/v1/models`,
      method: "get",
    });

    return response;
  }

  async chat(props: ChatCompletionRequestType): Promise<string> {
    const body = mapChatCompletionRequest(props);
    const response = await this.apiService._req({
      endpoint: `/v1/chat/completions`,
      method: "post",
      data: body,
    });

    const data = await response.json();
    return data.text;
  }
}
