import { sleep } from 'k6';
import { http } from 'k6/http';
import { SharedArray } from 'k6/data';
import { BaseChecks, BaseRest, ENDPOINTS, testConfig } from '../../support/base/baseTest.js';
import { check } from 'k6';

export const options = testConfig.options.loadThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

// Obtém o caminho absoluto do arquivo para depuração
const filePath = `${__dirname}/../data/static/user.json`;
console.log(`Caminho absoluto do arquivo: ${filePath}`);

let fileContent = '';
try {
  fileContent = open(filePath);
  console.log(`Conteúdo do arquivo: ${fileContent}`);
} catch (e) {
  console.error(`Erro ao abrir o arquivo: ${e.message}`);
}

const data = new SharedArray('Users', function () {
  try {
    const jsonData = JSON.parse(fileContent);
    return jsonData.users; 
  } catch (e) {
    console.error(`Erro ao parsear JSON: ${e.message}`);
    return [];
  }
});

const payload = {
  "nome": "Fulano da Silva",
  "email": "fulano@qa.com",
  "password": "teste",
  "administrador": "true"
};

export function setup() {
  const res = baseRest.post(ENDPOINTS.USER_ENDPOINT, payload);
  baseChecks.checkStatusCode(res, 201);
  return { responseData: res.json() };
}

export default function () {
  let userIndex = __ITER % data.length;
  let user = data[userIndex];
  console.log(user);

  const urlRes = baseRest.post(ENDPOINTS.LOGIN_ENDPOINT, user);
  baseChecks.checkStatusCode(urlRes, 200);
  
  sleep(1);
}

export function teardown(responseData) {
  const userId = responseData.responseData._id;
  const res = baseRest.del(`${ENDPOINTS.LOGIN_ENDPOINT}/${userId}`);
  baseChecks.checkStatusCode(res, 200);
  console.log(`teardown deletando usuario com ID ${userId}`);
  console.log(responseData);
}
