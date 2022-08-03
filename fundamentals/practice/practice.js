// const person = {
//     firstName : "Cameron",
//     lastName : "Bowen",
//     email : "cameronbowen555@gmail.com",
//     password : "camcam1234",
//     username : "camcam",
//     addresses: [
//         {
//             address: '1600 Pennsylvania Avenue',
//             city: 'Washington, D.C.',
//             zipcode: '20500',
//         },
//         {
//             address: '221B Baker St.',
//             city: 'London',
//             zipcode: 'WC2N 5DU',
//         }
//     ],
//     createdAt : 1543945177623
// };
// const animals = ["horse", "dog", "fish", "cat", "bird"];

// // ES5
// // var email = person.email;
// // var firstAnimal = animals[0];

// // ES6
// const {email} = person;
// const [firstAnimal, secondAnimal] = animals;

// console.log(email);
// console.log(secondAnimal);



// const { password } = person;

// console.log(password);


// const { password: hashedPassword } = person;


// console.log(hashedPassword);


// const {addresses: [whiteHouse, sherlock] } = person;

// console.log(whiteHouse);
// console.log(sherlock);

// var email = person.email;
// var password = person.password;
// var firstAnimal = animals[0];
// var secondAnimal = animals[1];
// var thirdAnimal = animals[2];

// const { email, password } = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//     {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500',
//     },
//     {
//         address: '221B Baker St.',
//         city: 'London',
//         zipcode: 'WC2N 5DU',
//     }
//     ],
//     createdAt: 1543945177623
// };

// const { addresses: [whiteHouse, sherlock] } = person;

// const { addresses: [ , { city: london }] } = person;
// console.log(london);


// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const [firstAnimal, ...otherAnimals] = animals;

// console.log(otherAnimals);

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     addresses: [
//     {
//         address: '1600 Pennsylvania Avenue',
//         city: 'Washington, D.C.',
//         zipcode: '20500',
//     },
//     {
//         address: '221B Baker St.',
//         city: 'London',
//         zipcode: 'WC2N 5DU',
//     }
//     ],
//     createdAt: 1543945177623
// };
// const { firstName, lastName, ...attributes } = person;
// const personCopy = { ...person };

// class Deck {
//     constructor() {
//         const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         suits.forEach(suit => {
//             faces.forEach(face => {
//                 deck.push(this.createCard(suit, face));
//             });
//         });
//         this.deck = deck;
//     }
//     createCard(suit, face) {
//         return face + " of " + suit;
//     }
// }

// let canAfford = (itemPrice, accountBalance) => {
//     return itemPrice > accountBalance
//         ? `Cannot Afford! Your are $${itemPrice - accountBalance} short`
//         : `Can Afford`;
// };

// let myBankAccountBalance = 1000;
// const drone = 1001;

// let droneOnSale = drone - drone * 0.03;

// console.log(canAfford(drone, myBankAccountBalance));
// console.log(canAfford(droneOnSale, myBankAccountBalance));

// function smallest( arr ) {
//     let min = arr[0];
//     for( let element of arr ) {
//         if( element < min ) {
//             min = element;
//         }
//     }
//     return min;
// }
// console.log(smallest( [2, 5, 6, 12, 14, 28, 37, 41, 44, 45]));

