//CT09**: Usuário administrador tenta criar um ticket sem showtime..

import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const ticketPayload = {
   "movieId": "Shadow",
  "userId": "Shadow",
  "seatNumber": 1,
  "price": 1,
  "showtime": ""
};

export default function () {
    const resPost = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT,ticketPayload );

    baseChecks.checkStatusCode(resPost, 201);
    baseChecks.checkResTime(resPost, 3500);
}