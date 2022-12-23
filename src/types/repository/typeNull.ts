import { layerResponse } from '../typeLayer';

interface query {
  message: null;
}

export interface repositoryNull extends layerResponse {
  response: query;
}
