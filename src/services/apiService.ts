import axios from "axios";
import { ChatRequest, EmbeddingsRequest } from "@/types";

const RETRY_STATUS_CODES: number[] = [429, 502, 503, 504];

const ENDPOINT: string = "https://api.mistral.ai";

type RequestProps = {
  endpoint: string;
  method: string;
  data?: ChatRequest | EmbeddingsRequest;
};

export class apiService {
  private apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey || "";
  }
  async _req(props: RequestProps): Promise<any> {
    const { endpoint, method, data = { stream: "json" } } = props;
    const url = `${ENDPOINT}${endpoint}`;
    try {
      const response = await axios({
        method: method,
        url: `${url}`,
        data: data,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
        responseType: data.stream ? "stream" : "json",
      }).catch((error) => {
        return error.response;
      });

      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
