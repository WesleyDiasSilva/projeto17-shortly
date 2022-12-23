import { layerResponse } from '../typeLayer';

interface querys {
  userInfo: object[];
  shortenedUrls: object[];
}

interface doubleQuery {
  message: querys ;
}

export interface repositoryDoubleQuery extends layerResponse {
  response: doubleQuery;
}
