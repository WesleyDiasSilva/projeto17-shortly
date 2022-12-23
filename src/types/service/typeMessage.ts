import { layerResponse } from '../typeLayer';

interface message {
  message: string;
}

export interface serviceMessage extends layerResponse {
  response: message;
}
