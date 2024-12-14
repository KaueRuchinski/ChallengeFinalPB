//CT08**: Usuário administrador tenta criar um ticket sem price.

import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const ticketPayload = {
   "movieId": "Shadow",
  "userId": "Shadow",
  "seatNumber": 1,
  "price": {},
  "showtime": "2024-08-29T01:20:06.742Z"
};

export default function () {
    const resPost = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT,ticketPayload );

    baseChecks.checkStatusCode(resPost, 201);
    baseChecks.checkResTime(resPost, 3500);
}