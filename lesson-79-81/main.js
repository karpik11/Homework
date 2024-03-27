// 79 - 81

///////IF ELSE///////

// const age = 22;

// if (age >= 18) {
//   console.log('Вы совершеннолетний');
// } else {
//   console.log('Вам еще нет 18');
// }


////////ТЕРНАРНЫЙ/////////

// const age = 22;
// age >= 18 ? console.log('Вы совершеннолетний') : console.log('Вам еще нет 18')

////////SWITCH / CASE/////////

// let age = 22;

// switch (age >= 18) {
//   case age >= 18: console.log('Вы совершеннолетний');
//     break;
//   case age <= 18: console.log('Вам еще нет 18');
//     break;
// }


//////// ЦИКЛЫ ////////

// for (let i = 2; i <= 12; i = i+2) {
//   console.log(i);
// }


// for (let i = 10; i >= 1; i = i - 1) {
//   console.log(i);
// }


/////// WHILE ///////////


// let i = 0
// while (i < 12) {
//   i = i + 2
//   console.log(i);
// }


// let i = 11
// while (i > 1) {
//   i--
//   console.log(i);
// }


/////// МАССИВЫ ///////////

//выводит только чётные //

// const numbers = [2, 5, 9, 22, 48, 37, 8, 18, 11, 100];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 == 0) {
//     console.log(numbers[i]);
//   }
// }

// радуга //

const rainbow = ['красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый']

for (i = rainbow.length - 1; i >= 0; i--) {
  console.log(rainbow[i]);
}
