// 82 - 83

/////// ФУНКЦИИ //////////

//// 1 - hello ////

// function nameHello(firstName) {
//   return 'Hello ' + firstName
// }

// const result = nameHello('Polina')
// console.log(result);

// console.log(nameHello('Alex'));


//// 2 - число больше 10 ////

// const numbers = [2, 15, 7, 26, 4, 53]

// function checkForBigNumber(array, item) {
//   for (let i = 0; i < array.length; i++) {
//     if (item > 10) {
//       return `${item} больше 10`
//     }
//   }
//   return `${item} меньше 10`
// }

// console.log(checkForBigNumber(numbers, 2));

//// 3 - калькулятор ////

// function calc(firstNumber, secondNumber, mathOperation) {
//   if (mathOperation == 'minus') {
//     return firstNumber - secondNumber
//   } else if (mathOperation == 'plus') {
//     return firstNumber + secondNumber
//   } else if (mathOperation == 'division') {
//     return firstNumber / secondNumber
//   } else if (mathOperation == 'multiplication') {
//     return firstNumber * secondNumber
//   } else {
//     return `не математика`
//   }
// }


// console.log(calc(2, 3, 'minus'));
// console.log(calc(22, 13, 'plus'));
// console.log(calc(18, 6, 'division'));
// console.log(calc(40, 3, 'multiplication'));


/////// ОБЪЕКТЫ //////////

// const user = {
//   name: 'Polina',
//   age: 22,
//   city: 'Minsk',
//   sayHello(name) {
//     console.log(`Hello ${name}`);
//   }
// }
// console.log(user)
// user.sayHello('Polly')



const users = [
  {
    name: 'Polina',
    age: 22,
    isAdmin: false
  },
  {
    name: 'Alex',
    age: 23,
    isAdmin: false
  },
  {
    name: 'John',
    age: 30,
    isAdmin: true
  }
]

let countUsers = 0

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin == false) {
    countUsers++
  }
}
console.log(countUsers);

