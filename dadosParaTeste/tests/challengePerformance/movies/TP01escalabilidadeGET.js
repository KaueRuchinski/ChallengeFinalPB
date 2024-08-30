import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = testConfig.options.scalabilityTresholdsMovies;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
        "resultadoMovies.html": htmlReport(data),
    };
}


export default () => {
    const res = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT)
    baseChecks.checkStatusCode(res, 200)
}