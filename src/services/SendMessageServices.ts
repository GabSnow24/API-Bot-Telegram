import { InstanceService } from "./InstanceService";

class SendMessageServices {
  instance: any;
  url: string;
  constructor() {
    this.url = process.env.MICROSERVICE_URL;
    this.instance = new InstanceService();
  }
  async sendMessage(data: any) {
    const instance = this.instance.getInstance(this.url);
    const body = data;
    const { response } = await instance
      .post(`/some-endpoint`, body)
      .catch((err: any) => {
        const responseError = {
          created: false,
          message: "Não foi possível comunicar com o microservice",
        };
        return responseError;
      });
    return response;

  }
}

export { SendMessageServices };
