import { layerResponse } from '../typeLayer';

interface message {
  message: object[];
  sendEmail: boolean;
}

export interface serviceQueryAndSendEmail extends layerResponse {
  response: message;
}
