import { layerResponse } from '../typeLayer';

export interface query {
  message: object[];
}

export interface repositoryQuery extends layerResponse {
  response: query;
}
