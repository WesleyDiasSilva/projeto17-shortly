import { layerResponse } from '../typeLayer';

export interface messageInterface {
  id: number;
  url: string;
  short_url: string;
  user_id: number;
  visit_number: number;
  clicks_goal: number;
  created_at: Date;
}

export interface repositoryUrlQuery extends layerResponse {
  response: messageInterface;
}
