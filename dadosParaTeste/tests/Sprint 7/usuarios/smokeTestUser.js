import { sleep } from 'k6';
import http from 'k6/http';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';

export const options = {
    stages: [
        { duration: '12s', target: 150 },
        { duration: '4s', target: 0 }
    ],
    thresholds: {
        http_req_duration: ['p(95)<2000'],
        http_req_failed: ['rate<0.05'] 
    }
};

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

export function handleSummary(data) {
    return {
        "smokeU.html": htmlReport(data),
    };
}

export default function () {
    const urlRes = baseRest.get(ENDPOINTS.USER_ENDPOINT);

    baseChecks.checkStatusCode(urlRes, 200);s
    baseChecks.checkResTime(urlRes, 3500);

    sleep(1);
}
