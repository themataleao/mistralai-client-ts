import {
  ChatCompletionRequest,
  ChatResponse,
  EmbeddingsResponse,
  EmbeddingsRequest,
} from "@/types";
import { apiService } from "@/services";
import { mapChatCompletionRequest } from "@/utils";

export class MistralClient {
  private apiKey: string;
  private apiService: apiService;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiService = new apiService(this.apiKey);
  }

  async listModels(): Promise<any> {
    const response = await this.apiService._req({
      endpoint: `/v1/models`,
      method: "get",
    });
    return response;
  }

  async chat(props: ChatCompletionRequest): Promise<ChatResponse> {
    const body = mapChatCompletionRequest(props);
    const response = await this.apiService._req({
      endpoint: `/v1/chat/completions`,
      method: "post",
      data: body,
    });
    return response;
  }

  async chatStream(props: ChatCompletionRequest): Promise<ChatResponse> {
    const body = mapChatCompletionRequest(props);
    body.stream = true;
    const response = await this.apiService._req({
      endpoint: `/v1/chat/completions`,
      method: "post",
      data: body,
    });
    return response;
  }

  async embeddings(props: EmbeddingsRequest): Promise<EmbeddingsResponse> {
    const response = await this.apiService._req({
      endpoint: `/v1/embeddings`,
      method: "post",
      data: props,
    });
    return response;
  }
}
