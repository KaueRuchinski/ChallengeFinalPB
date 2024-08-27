import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


export const moviesGenerate = () => ({
    "title": "string",
    "description": "string",
    "launchdate": "2024-08-27T20:07:17.133Z",
    "showtimes": [
      "string"
    ]
});
export const userRandomGenerate = () => ({
    "nome": faker.name.findName(),
    "email": faker.internet.email(),
    "password": faker.internet.password(10, true), 
    "administrador": faker.random.boolean().toString() 
});
export const ticketsGenerate = () => ({
    "nome": faker.commerce.productName(),
    "preco": parseFloat(faker.commerce.price(10, 1000, 2, '')), 
    "descricao": faker.lorem.sentence(),  
    "quantidade": faker.random.number({ min: 1, max: 100 })
});

export const ticketGenerate = () => ({
"movieId": "string",
  "userId": "string",
  "seatNumber": 0,
  "price": 0,
  "showtime": "2024-08-27T20:11:00.501Z"
});