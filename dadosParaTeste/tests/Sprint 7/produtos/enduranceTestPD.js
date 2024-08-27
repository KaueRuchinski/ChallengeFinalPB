import { sleep } from 'k6';
import http from 'k6/http';
import { SharedArray } from 'k6/data';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import {BaseChecks, BaseRest, ENDPOINTS, testConfig,} from '../../support/base/baseTest.js';

export const options = {
    stages: [
        {duration: '6s', target: 40},
        {duration: '6s', target: 40},
        {duration: '3s', target: 0}
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.05'] 
    }
};

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks =  new BaseChecks();


export function handleSummary(data) {
    return {
        "summary.html": htmlReport(data),
    };
}

export default function(){
    const urlRes = baseRest.get( ENDPOINTS.PRODUCTS_ENDPOINT);

    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResTime(urlRes, 3500);

    sleep(1)
}
