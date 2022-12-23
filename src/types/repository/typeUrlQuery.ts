import { layerResponse } from '../typeLayer';

export interface query {
  message: [
    {
      id: number;
      url: string;
      short_url: string;
      user_id: number;
      visit_number: number;
      clicks_goal: number;
    }
  ];
}

export interface repositoryUrlQuery extends layerResponse {
  response: query;
}
