import { layerResponse } from '../typeLayer';

interface message {
  message: null;
}

export interface serviceNull extends layerResponse {
  response: message;
}
