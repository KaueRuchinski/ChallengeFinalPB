export const generateTicketData = () => {
    return {
        movieId: Faker.finance.bitcoinAddress(),
        userId: Faker.finance.bitcoinAddress(),
        seatNumber: 0,
        price: 30,
        showtime: "2024-08-28T17:55:10.241Z"
    };
};