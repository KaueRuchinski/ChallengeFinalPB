import faker from 'https://cdnjs.cloudflare.com/ajax/libs/Faker/3.1.0/faker.min.js';


export const moviesGenerate = () => ({
    "title": "string",
    "description": "string",
    "launchdate": "2024-08-27T20:07:17.133Z",
    "showtimes": [
      "string"
    ]
});
export const generateTicketData = () => {
  return {
      movieId: Faker.finance.bitcoinAddress(),
      userId: Faker.finance.bitcoinAddress(),
      seatNumber: 0,
      price: 30,
      showtime: "2024-08-28T17:55:10.241Z"
  };
};S