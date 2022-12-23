import { layerResponse } from '../typeLayer';

export interface query {
  message: [
    {
      id?: number;
      name?: string;
      email?: string;
      password?: string;
    }
  ];
}

export interface repositoryUserFound extends layerResponse {
  response: query;
}
