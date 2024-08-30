//CT15: Consultar Filme por ID Inexistente
import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default function () {
  
    const movieId = "W"; 

    const urlRes = baseRest.get(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieId}`);
    console.log(urlRes.body);
    
    
    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResTime(urlRes, 3500);

    
}
