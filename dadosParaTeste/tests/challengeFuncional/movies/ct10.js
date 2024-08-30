//CT10: Lançar Filme com Campos Vazios
import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();


const moviePayload = {};

export default function () {
    const resPost = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, moviePayload);

    baseChecks.checkStatusCode(resPost, 200);
    baseChecks.checkResTime(resPost, 3500);
}
