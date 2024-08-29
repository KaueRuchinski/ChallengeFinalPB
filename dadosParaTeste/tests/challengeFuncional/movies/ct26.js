// CT26: Administrador Exclui Filme com ID Correto
import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export default function () {
  
    const movieId = "09mBThiIgy6JIAd8"; 

    const urlRes = baseRest.del(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieId}`);
    console.log(urlRes.body);
    
    
    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResTime(urlRes, 3500);

    
}
