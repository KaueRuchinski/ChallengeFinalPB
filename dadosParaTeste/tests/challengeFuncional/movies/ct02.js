//CT02: Administrador Lança um Filme com Dados Preenchidos
import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();
/*
const data = new SharedArray('movies', function() {
	const jsonData = JSON.parse(open('../../../data/dynamic/movies.json'));   

	if (!jsonData || jsonData.length === 0) {
	 throw new Error("O arquivo JSON não contém filmes.");

}
 return jsonData;

});

function randomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

export default () => {
    let filme = randomItem(data);
    const urlRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, filme);
    console.log('TF02 - Criando um Filme com Dados Preenchidos')
    console.log('status:' , urlRes.status);
    console.log( 'body da reponse \n' , urlRes.body)
    baseChecks.checkStatusCode(urlRes, 201);
    console.log.body
};


export default function () {
    const moviesPayload = moviesGenerate();
    const moviesRes = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, moviesPayload, { Authorization: '' });

    console.log(`Response body: ${moviesRes.body}`);
    console.log(`Response status: ${moviesRes.status}`);

    baseChecks.checkStatusCode(moviesRes, 201);

    const moviesId = moviesRes.json()._id;

    if (!moviesId) {
        throw new Error("Filme não foi criado");
    }
    
    console.log(`Filme criado com sucesso. ID: ${moviesId}`);
    baseChecks.checkResTime(moviesRes, 3500);
    sleep(1);
}*/
const moviePayload = {
    "title": "É O SHADOW",
    "description": "O SHADOW",
    "launchdate": "2024-08-27T20:07:17.133Z",
    "showtimes": [
      "18:00", "22:00"
    ]
};

export default function () {
    const resPost = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT,moviePayload );
}