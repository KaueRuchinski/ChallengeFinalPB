//CT00: Usuário consulta lista de filmes.
import { sleep } from 'k6';

import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks =  new BaseChecks();

  export default function () {
    const urlRes = baseRest.get(ENDPOINTS.TICKETS_ENDPOINT,);

    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResTime(urlRes, 3500);

    sleep(1);
}