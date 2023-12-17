const RETRY_STATUS_CODES: number[] = [429, 502, 503, 504];
const ENDPOINT: string = "https://api.mistral.ai";

export class apiService {
  private apiKey: string;
  private endpoint: string;
  constructor() {
    this.apiKey = process.env.apiKey || "";
    this.endpoint = ENDPOINT;
  }
  async _req(
    url: string,
    options: RequestInit = {},
    retries: number = 3
  ): Promise<any> {
    // Inject the Bearer token into the headers
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${this.apiKey}`,
    };

    try {
      const response: Response = await fetch(url, options);
      // Check if response is successful
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      if (retries > 0) {
        console.log(`Retrying... (${retries} retries left)`);
        return await this._req(url, options, retries - 1);
      } else {
        throw new Error(`Failed after several retries: ${error}`);
      }
    }
  }
}
