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
    const { endpoint, method, data = { stream: false } } = props;
    const url = `${ENDPOINT}${endpoint}`;
    let retries = 3;
    try {
      const response = await axios({
        method: method,
        url: `${url}`,
        data: data,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
        responseType: data.stream ? "stream" : "json",
      });
      if (retries > 1 && RETRY_STATUS_CODES.includes(response.status)) {
        retries--;
        return this._req(props);
      }
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
