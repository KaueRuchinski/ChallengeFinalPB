import { sleep } from 'k6';
import http from 'k6/http';
import { SharedArray } from 'k6/data';

import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks =  new BaseChecks();

const payload =
  {
    "title": "string",
  "description": "string",
  "launchdate": "2024-08-28T02:11:12.780Z",
  "showtimes": [
    "string"
  ]
  }

  export default function () {
    const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT);

    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResTime(urlRes, 3500);

    sleep(1);
}
