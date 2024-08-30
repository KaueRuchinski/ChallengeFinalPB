import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { moviesGenerate } from '../../../support/base/baseTest.js';

export const options = testConfig.options.peakTresholdsMovies;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
      "resultadoPostMovies.html": htmlReport(data),
    };
};

const payload = moviesGenerate()

export default () => {
    const resPost = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, payload );
    
    baseChecks.checkStatusCode(resPost, 201)
}

export function teardown() {
  baseRest.deleteAllMovies(base_uri)
}