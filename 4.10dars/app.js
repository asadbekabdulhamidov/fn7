// let arr = ["Najot", "talim"];

// let arrString = arr.join("").split("");
// let result = {};

// for (let i = 0; i < arrString.length; i++) {
//   result[i] = arrString[i];
// }

// console.log(result);
// console.log(result[value]);

// Quyidagi objectlardan tuzilgan massiv ichidagi yoshi eng katta va yoshi eng kichik bo’lgan insonning ismlarini qaytaruvchi getNameMaxMinAge(obj) nomli funksiya yozing. (for)

// 	Output: ["Temur", "Sardor"]

// const people = [
//   { name: "Abdulaziz", age: 33, isMarried: true },
//   { name: "Erkin", age: 22, isMarried: false },
//   { name: "Temur", age: 34, isMarried: true },
//   { name: "Sardor", age: 20, isMarried: false },
// ];

// function getNameMaxMinAge(people) {
//   let maxAge = people[0].age;
//   let minAge = people[0].age;
//   let maxAgeName = people[0].name;
//   let minAgeName = people[0].name;
//   for (let i = 0; i < people.length; i++) {
//     if (maxAge < people[i].age) {
//       maxAge = people[i].age;
//       maxAgeName = people[i].name;
//     }

//     if (minAge > people[i].age) {
//       minAge = people[i].age;
//       minAgeName = people[i].name;
//     }
//   }

//   return [maxAgeName, minAgeName];
// }

// let result = getNameMaxMinAge(people);

// console.log(result);

//========================================
// Ikkita object berilgan ularning ba'zi kalitlari bir xil. Bir xil kalitlaridan iborat bo'lmagan yangi object hosil qiling.
// Output: obj = {b: 10, c: 5, e: 6, f: 15}

// let obj1 = { a: 3, b: 10, c: 5, d: 7 };
// let obj2 = { a: 10, d: 4, e: 6, f: 15 };

// function newobj(obj1, obj2) {
//   let obj = {};

//   for (let key in obj1) {
//     if (obj2.hasOwnProperty(key)) {
//       continue;
//     }
//     obj[key] = obj1[key];
//   }

//   for (let key in obj2) {
//     if (obj1.hasOwnProperty(key)) {
//       continue;
//     }
//     obj[key] = obj2[key];
//   }
//   return obj;
// }

// let result = newobj(obj1, obj2);

// console.log(result);

//========================================

//  Quyidagi objectni outputdagi ko'rinishda chiqaring. (toString, join)
// Output:
// firstName: Abdulaziz
// lastName: Toshpulatov
// age: 23
// languages: js,python,c++,nodejs
// friends: Jamshid+Abbos+Jalol+Mar'uf

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// for (let i in me) {
//   console.log(`${i}: ${me[i]}`);
// }

//===========================
// Kalitlari 1 dan n gacha bo’lganlar sonlarga, qiymatlari esa o’sha sonlarning kvatratiga teng object hosil qiling. (for)

// Input: 5
// Output: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// function obj(n) {
//   let obj = {};
//   for (let i = 1; i <= n; i++) {
//     obj[i] = i ** 2;
//   }
//   return obj;
// }

// console.log(obj(5));

//===============================

// let obj = { 1: 1, 2: 4, 3: 9, 4: 16, 5: 25 };

// function count(obj) {
//   let yegindiKeys = 0;
//   let yegindiValues = 0;

//   for (let i in obj) {
//     yegindiKeys = yegindiKeys + Number(i);
//     yegindiValues += obj[i];
//   }
//   return [yegindiKeys, yegindiValues];
// }

// let result = count(obj);

// console.log(result);

// let yegindiKeys = 0;
// let yegindiValues = 0;

// let Keys = Object.keys(obj);
// let Values = Object.values(obj);

// for (let i = 0; i < Keys.length; i++) {
//   yegindiKeys += Number(Keys[i]);
//   yegindiValues += Values[i];
// }

// console.log(yegindiKeys, yegindiValues);

//==============================================
// Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)

// Input: ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"]
// Output: {"Abdulaziz": 9, "Safarmurod": 10, "O’rol": 5, "Jahongir": 8}

// let arr = ["Abdulaziz", "Safarmurod", "O'rol", "Jahongir"];

// function obj(arr) {
//   let obj1 = {};

//   for (let i = 0; i < arr.length; i++) {
//     obj1[arr[i]] = arr[i].length;
//   }

//   return obj1;
// }

// console.log(obj(arr));

//====================================================
// Shunday object berilganki, uning kalitlari mahsulotlardan va qiymatlari esa ularning narxlaridan tuzilgan. Barcha mahsulot qancha turishini toping. (Object.values())

// Input: {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000}
// Output: 50000

// let obj = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };

// function sum(obj) {
//   let arr = Object.values(obj);
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i];
//   }

//   return count;
// }

// console.log(sum(obj));

//======================================
// Object kalitlarining barchasi string toifasidagi ma’lumotlardan tuzilgan bo’lsa true, aks holda false qiymat qaytaruvchi defineObject nomli funksiya hosil qiling. (Object.keys())

// const defineObject = (object) => {
//   let checker = true;
//   for (const key in object) {
//     if (typeof object[key] !== "string") checker = false;
//   }
//   return checker;
// };

// let obj = { abc: 1, 123: 2, d: 5 };

// console.log(defineObject(obj));
// Output: false

//==================================
// Agar object qiymatlari ichida falsy qiymatlar bo’lsa, ularni o’chirib yangi object hosil qiling. (Object.keys())

// Input: { a: false, b: 12, c: true, d: 0 }
// Output: { b: 12, c: true }

// let obj = { a: false, b: 12, c: true, d: 0 };

// for (let i in obj) {
//   if (obj[i] == false) {
//     delete obj[i];
//   }
// }

// console.log(obj);
//======================================

// Uzun sondan shunday obyekt hosil qilingki, bunda object kalitlari sinflardan, qiymatlari esa o’sha sonning mos ravishdagi o’sha sinfdagi qiymatlaridan tuzilgan bo’lsin. (for, slice)

// Input: 8945472985629;
// Output: { birlar: 629, minglar: 985, millionlar: 472, milliardlar: 945, trilionlar: 8 }

// let son = "8945472985629";

// let natija = {};
// let sinflar = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];

// for (let i = 0; i < sinflar.length; i++) {
//   let start = -3 * (i + 1);
//   let end = i === 0 ? undefined : -3 * i;
//   let qiymat = parseInt(son.slice(start, end));
//   natija[sinflar[i]] = qiymat;
// }
// console.log(natija);
