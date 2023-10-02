// const arr = [4, 5, 7, 8, 6, 9];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     newArr.unshift(arr[i]);
//   }
// }

// console.log(newArr);

//=====================================
// Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
// Input: 5
// Output: [2, 4, 16, 32, 62]

// function getLevel2(n) {
//   let arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(2 ** i);
//   }

//   return arr;
// }

// console.log(getLevel2(5));

//============================================
// Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
// Input: n = 5, A = 2, B = 3
// Output: [2, 3, 5, 10, 20]

// let n = 5;
// let A = 2;
// let B = 3;
// let arr = [A, B];

// for (let i = 2; i < n; i++) {
//   let sum = 0;
//   console.log(sum);
//   for (let j = 0; j < i; j++) {
//     sum += arr[j];
//   }
//   arr.push(sum);
// }

// console.log(arr);

//==============================================
// Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.

// function reverseArr(arr) {
//   return arr.reverse();
// }

// let arr = [1, 2, 3, 4, 5];

// console.log(reverseArr(arr));

//===============================================
// Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 5 7 9 toqlar soni = 3

// let arr = [4, 5, 7, 8, 6, 9];

// function oddArr(arr) {
//   let newArr = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       newArr.push(arr[i]);
//     }
//   }
//   return `${newArr} toqlar soni=${newArr.length}`;
// }

// console.log(oddArr(arr));

//================================

// Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
// Massiv elementlar: 4 5 7 8 6 9
// Natija: 4 8 6 9 7 5

// const arr = [4, 5, 7, 8, 6, 9];
// let evenArr = [];
// let oddArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenArr.push(arr[i]);
//   } else {
//     oddArr.push(arr[i]);
//   }
// }
// const result = evenArr.concat(oddArr.reverse());

// console.log(result);

//=======================================
// Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
// Input: [10, false, “”, “Abdulaziz”, null]
// Output:
// Truthy: [10, “Abdulaziz”]
// Falsy: [false, “”, null]

// let arr = [10, false, "", "Abdulaziz", null];

// let truthy = [];
// let falsy = [];

// for (let i = 0; i <= arr.length; i++) {
//   if (arr[i]) {
//     truthy.push(arr[i]);
//   } else falsy.push(arr[i]);
// }

// //=======================================
// Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.

// function getOddMin(arr) {
//   let juft = [];
//   for (let i = 0; i < arr.length; i += 2) {
//     juft.push(arr[i]);
//   }
//   return Math.min(...juft);
// }

// const arr = [1, 6, 9, 5, 8, 10, 15];
// console.log(getOddMin(arr));

//==================================
// Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.

// function getEvenMax(arr) {
//   let toq = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     toq.push(arr[i]);
//   }

//   return Math.max(...toq);
// }
// const arr = [1, 6, 9, 5, 8, 10, 15];

// console.log(getEvenMax(arr));

//==========================================
