//CT05 : Lançar Filme Sem Título

import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const moviePayload = {
    "title": "",
    "description": "O SHADOW",
    "launchdate": "2024-08-27T20:07:17.133Z",
    "showtimes": [
      "18:00", "22:00"
    ]
};

export default function () {
    const resPost = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT,moviePayload );

    baseChecks.checkStatusCode(resPost, 200);
    baseChecks.checkResTime(resPost, 3500);
}