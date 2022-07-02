// ONE
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// console.log(randomCar)
// console.log(otherRandomCar)

// PREDICTED OUTPUT
// console.log(randomCar) // logs 'Tesla'
// console.log(otherRandomCar) // logs 'Mercedes'
// Actual output is same as prediction

// TWO
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

// PREDICTED OUTPUT
// console.log(name) will throw an error, maybe a TypeError that name is already defined?
// console.log(otherName) // logs 'Elon'
// Actual output is ReferenceError: name is not defined

// THREE
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);
// console.log(hashedPassword);

// PREDICTED OUTPUT
// console.log(password) // logs '12345'
// console.log(hashedPassword) // logs '12345'
// Actual output
// 12345
// undefined

// FOUR
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first == second);
// console.log(first == third);

// PREDICTED OUTPUT
// console.log(first == second); logs false
// console.log(first == third); logs true
// Actual output is same as prediction

// FIVE
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key);
// console.log(secondKey);
// console.log(secondKey[0]);
// console.log(willThisWork);

// PREDICTED OUTPUT
// console.log(key); // logs 'value'
// console.log(secondKey); // logs [1, 5, 1, 8, 3, 3]
// console.log(secondKey[0]); // logs 1
// console.log(willThisWork); // logs 5
// Actual output is same as prediction