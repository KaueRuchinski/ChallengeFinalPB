
/*
const {faker} = require('/.lib/node_modules/@faker-js/faker');
const fs = require('fs');
const {error} = require('console');

const quantidade = 550;

const tickets = [];

for(let i =0; i < quantidade; i++){
    const ticket = {
        "movieId": faker.lorem.words(),
    "userId": faker.lorem.sentences(),
    "seatNumber": faker.date.past(),
    "price": 
    "showtimes": [

        faker.date.between({from: '2023-01-01', to: '2023-12-31'}),
    ]
    };
    tickets.push(ticket);
}

const data = {
    tickets: tickets
};

fs.writeFileSync('movies.json', JSON.stringify(filmes, null, 2), error => {
    if(error) {
        console.error(error);
    }
});
*/