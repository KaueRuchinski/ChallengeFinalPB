const {faker} = require('/.lib/node_modules/@faker-js/faker');
const fs = require('fs');
const {error} = require('console');

const quantidade = 550;

const filmes = [];

for(let i =0; i < quantidade; i++){
    const filme = {
        "title": faker.lorem.words(),
    "description": faker.lorem.sentences(),
    "launchdate": faker.date.past(),
    "showtimes": [

        faker.date.between({from: '2023-01-01', to: '2023-12-31'}),
    ]
    };
    filmes.push(filme);
}

const data = {
    filmes: filmes
};

fs.writeFileSync('movies.json', JSON.stringify(filmes, null, 2), error => {
    if(error) {
        console.error(error);
    }
});