import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class InstanceService {
    getInstance = (host: string ): AxiosInstance => {
        const baseURL = process.env.MICROSERVICE_URL
        const instance = axios.create({
          baseURL,
          //timeout: corePIX.VR.timeout,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache',
          },
        });
      
        return instance;
      };
}

export { InstanceService };