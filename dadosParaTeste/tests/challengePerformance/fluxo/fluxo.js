import { ENDPOINTS, BaseChecks, BaseRest, testConfig } from '../../../support/base/baseTest.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

// Configuração das opções para o teste de smoke
export const options = testConfig.options.smokeTresholdsMovies;


const base_uri = testConfig.environment.hml.url;
// Criação de instâncias para realizar requisições HTTP e verificações de resposta
const baseRest = new BaseRest(base_uri);
const baseChecks = new BaseChecks();

// Função responsável por gerar os dados do filme a ser criado. 
function generateMovieData() {
    return {
        title: "Exemplo de Filme",
        description: "Descrição do Filme",
        releaseDate: "2024-09-01T00:00:00Z",
        genre: "Ação",
        director: "Diretor Exemplo"
    };
}


export function handleSummary(data) {
    return {
        "resultadoFluxoMovies.html": htmlReport(data),
    };
}

// Geração dos dados do filme e inicialização da variável que armazenará o ID do filme criado
const movieData = generateMovieData();
let movieId = null;

export default () => {
    // Realiza a requisição POST para criar um filme 
    const resPost = baseRest.post(ENDPOINTS.MOVIES_ENDPOINT, movieData);
    
    baseChecks.checkStatusCode(resPost, 201);

    // Realiza uma requisição GET para obter a lista de filmes
    const resGet = baseRest.get(ENDPOINTS.MOVIES_ENDPOINT);
    
    baseChecks.checkStatusCode(resGet, 200);

    // Processa a resposta do GET para buscar o filme criado anteriormente
    const movies = resGet.json();
    if (Array.isArray(movies)) {
        // Encontra o filme na lista de filmes retornados que tem o mesmo título e descrição que o filme criado
        const movie = movies.find(m => m.title === movieData.title && m.description === movieData.description);
        if (movie) {
            // Se o filme for encontrado, armazena o ID do filme para uso posterior
            movieId = movie._id;
            console.log(`ID do filme capturado: ${movieId}`);
        } else {
            // Exibe um erro no console se o filme não for encontrado
            console.error('Filme com os dados especificados não foi encontrado.');
        }
    } else {
        // Exibe um erro no console se a resposta da API tiver um formato inesperado
        console.error('Formato inesperado na resposta da API.');
    }

    if (movieId) {
        // Gera os dados do ticket utilizando o ID do filme capturado
        const ticketData = {
            movieId: movieId,
            userId: "FSJnsJHWMgcSÇ",
            seatNumber: 16,
            price: 30,
            showtime: "2024-08-28T17:55:10.241Z"
        };

        // Exibe no console os dados que serão enviados na requisição para criar o ticket
        console.log(`Enviando os seguintes dados para a criação do ticket: ${JSON.stringify(ticketData)}`);
        // Realiza a requisição POST para criar o ticket
        const resTicketPost = baseRest.post(ENDPOINTS.TICKETS_ENDPOINT, ticketData);
        // Verifica se a resposta do POST tem o status code 201 (Created)
        baseChecks.checkStatusCode(resTicketPost, 201);
    } else {
        // Exibe um erro no console se o ID do filme não foi capturado, impedindo a criação do ticket
        console.error('Não foi possível criar o ticket porque o ID do filme não foi capturado.');
    }
}
