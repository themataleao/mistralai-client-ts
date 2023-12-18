import axios, { AxiosRequestConfig } from "axios";

const RETRY_STATUS_CODES: number[] = [429, 502, 503, 504];

const ENDPOINT: string = "https://api.mistral.ai";

type RequestProps = {
  endpoint: string;
  method: string;
  data?: any;
};

export class apiService {
  private apiKey: string;
  constructor(apiKey: string, endpoint?: string) {
    this.apiKey = apiKey || "";
  }
  async _req(props: RequestProps): Promise<any> {
    const { endpoint, method, data = {} } = props;
    const url = `${ENDPOINT}${endpoint}`;
    try {
      const response = await axios({
        method: method,
        url: `${url}`,
        data: data,
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
        },
        responseType: "json",
      }).catch((error) => {
        return error.response;
      });

      return await response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
