// Problem1 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
// Tesla (Correct)
console.log(otherRandomCar)
// Mercedes (Correct)

// Problem2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// console.log(name);
// error (Correct)
console.log(otherName);
// Elon (Correct)


//Problem3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
// 12345 (correct)
console.log(hashedPassword);
// 12345 (wrong)

// Problem4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
// false (correct)
console.log(first == third);
// true (correct)


const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
};

const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// lastTest Object (wrong)
console.log(secondKey);
// lastTest Object (wrong)
console.log(secondKey[0]);
// 1 (correct)
console.log(willThisWork);
// 5 (correct)