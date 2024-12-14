// CT18: Administrador Atualiza Detalhes de um Filme
import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';

export const options = testConfig.options.smokeThreshold;

const base_uri = testConfig.environment.hml.url;
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

const moviePayload = {
    "title": "Filme para Atualizar",
    "description": "Descrição inicial",
    "launchdate": "2024-08-28T12:00:00.000Z",
    "showtimes": [
        "20:00"
    ]
};

export function setup() {
    // Cria o filme para ser atualizado
    const res = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, moviePayload);
    baseChecks.checkStatusCode(res, 201);

    // Verifica se a resposta é um JSON válido
    let movieData;
    try {
        movieData = res.json();
    } catch (error) {
        throw new Error("Resposta inválida ou não é um JSON: " + res.body);
    }

    if (!movieData || !movieData._id) {
        throw new Error("Falha na criação do filme ou ID não retornado");
    }

    return { movieId: movieData._id };
}

export default function (data) {
    const movieId = data.movieId;

    // Atualiza os detalhes do filme
    const updatePayload = {
        "title": "",
        "description": "Descrição atualizada",
        "launchdate": "2024-08-29T15:00:00.000Z",
        "showtimes": [
            "22:00"
        ]
    };

    const urlRes = baseRest.put(`${ENDPOINTS.MOVIES_ENDPOINT}/${movieId}`, updatePayload);
    
    // Verifica se a resposta é um JSON válido
    let responseBody;
    try {
        responseBody = urlRes.json();
    } catch (error) {
        console.log("Resposta inválida ou não é um JSON: " + urlRes.body);
        return; // Interrompe a execução se a resposta não for válida
    }

    if (urlRes.status === 200) {
        console.log("Filme atualizado com sucesso:", responseBody);
    } else {
        console.log("Falha na atualização:", urlRes.status, responseBody);
    }

    baseChecks.checkStatusCode(urlRes, 200);
    baseChecks.checkResTime(urlRes, 3500);
}
