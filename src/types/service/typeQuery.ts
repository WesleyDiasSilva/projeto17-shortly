import { layerResponse } from '../typeLayer';

interface message {
  message: object[];
}

export interface serviceQuery extends layerResponse {
  response: message;
}
