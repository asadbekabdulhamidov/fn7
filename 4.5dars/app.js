//For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

// let n = 12;
// let k = 3;

// for (let i = 0; i < n; i++) {
//   console.log(k);
// }
//==================================

// For2. Bir kg konfetning narxi berilgan (haqiqiy son). 0.1, 0.2, …, 0.9, 1 konfetni narxini chiqaruvchi programma tuzilsin.

// let kilogramNarx = 20000;

// for (let i = 0; i <= 10; i++) {
//   let miqdor = i / 10;
//   let narxi = miqdor * kilogramNarx;
//   console.log(miqdor + "kg konfet narxi: " + narxi + " som");
// }

//====================================
// For3. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = n^2 +(n+1)^2+(n+2)^2 + ... (2*n)^2

// let n = 5;
// let S = 0;

// for (let i = 0; i <= n; i++) {
//   S += (n + i) ** 2;
// }

// console.log(S);

//=========================================

// For4. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// 1^N+2^(N-1) + ...+ N^1
// Input: N = 5;
// 1 ^ 5 + 2 ^ 4 + 3 ^ 3 + 4 ^ 2 + 5 ^ 1
// Output: 65

// let N = 5;
// let sum = 0;
// for (let i = 1; i <= N; i++) {
//   sum += Math.pow(i, N - i + 1);
// }

// console.log(sum);

//==============================

// For5. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda har bir son o'zining qiymaticha chiqarilsin. Ya'ni 3 soni 3 marta chiqariladi.

// let a = 1;
// let b = 5;

// for (let i = a; i <= b; i++) {
//   for (let k = 0; k < i; k++) {
//     console.log(i);
//   }
// }

//===================================
// While1. N va K butun musbat sonlari berilgan. Faqat ayirish va qo'shish amallarini ishlatib N sonini K soniga bo'lgandagi qoldiq va butun qismini aniqlovchi programma tuzilsin.

// let n = 17;
// let k = 4;
// let butun = 0;
// while (k <= n) {
//   n -= k;
//   butun++;
// }

// let qoldiq = n;
// console.log(butun, qoldiq);

//====================================
// While2. 2 sonining qandaydir darajasini bildiruvchi n butun soni berilgan (n > 0). n = 2^k ni aniqlovchi programma tuzilsin.
// Input: 128
// Output: 7

// let n = 128;
// let k = 0;

// while (n % 2 === 0) {
//   n /= 2;
//   k++;
// }

// console.log(k);

//================================
// For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).

// let a = 2;
// let b = 9;

// for (let i = a; i <= b; i++) {
//   console.log(i);
// }

//====================================
// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.

// let a = 2;
// let b = 9;

// for (let i = b - 1; i > a; i--) {
//   console.log(i);
// }

//====================================
// For3. Bir kg konfetning narxi berilgan (haqiqiy son). 1, 2, 10 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = 15000;

// for (let i = 1; i <= 10; i++) {
//   console.log(i * narx);
// }

//===================================
// For4. Bir kg konfetning narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfetni narxini chiqaruvchi programma tuzilsin.

// let narx = 20000;

// for (let i = 1; i < 2; i += 0.2) {
//   console.log(Math.ceil(i * narx));
// }

// /===============================

// For5. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar yig'indisini chiqaruvchi programma tuzilsin.

// let a = 1,
//   b = 10;

// let count = 0;

// for (let i = a; i <= b; i++) {
//   count += i;
// }
// console.log(count);

//========================================
// For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.

// let a = 1,
//   b = 10;

// let count = 1;

// for (let i = a; i <= b; i++) {
//   count *= i;
// }
// console.log(count);

//========================================
// For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.
// let a = 1,
//   b = 10;

// let count = 1;

// for (let i = a; i <= b; i++) {
//   count += i ** 2;
// }
// console.log(count);

//==============================
// For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n

// let n = 5;
// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += 1 / i;
// }
// console.log(s);

//======================================
// For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n

// let n = 6;
// let s = 0;
// for (let i = 0; i <= n; i++) {
//   s *= 1 + i * 0.1;
// }

// console.log(s);

//==================================
// For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
// n^2=1+3+5+... + (2*n-1)
// Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.
// let n = 5;
// let sum = 0;

// for (let i = 1; i <= n; i++) {
//   sum += 2 * i - 1;
//   console.log(sum);
// } //1,4,9,16,25

//==============================
// For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
// a^n=a*a*a...a;

// const n = 5;
// let a = 2;
// let result = 1;
// for (let i = 0; i <= n; i++) {
//   result *= a;
// }
// console.log(result);

//====================================
//For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.

// const n = 5;
// const a = 2;

// for (let i = 1; i <= n; i++) {
//   console.log(a ** i);
// }

//=================================
// For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin.
// S = 1+a+a^2 + a^3 + ... a^

// const n = 5;
// const a = 2;
// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += a ** i;
//   console.log(a ** i);
// }
// console.log("s= ", s);

//============================================
// For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
// S = 1! + 2! + 3! + ... +n!
// const n = 5;
// let sum = 0;
// let factorial = 1;

// for (let i = 1; i <= n; i++) {
//   factorial *= i;
//   sum += factorial;
// }

// console.log(sum);
//==============================================
// For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^K + 2^K + ... + N^K

// const n = 5;
// const k = 5;

// for (let i = 1; i < n; i++) {
//   console.log(i ** k);
// }

//===============================
// For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin.
// S = 1^1 + 2^2 + … + N^N

// const n = 6;
// let s = 0;

// for (let i = 1; i <= n; i++) {
//   s += i ** i;
// }

// console.log(s);
//=========================================
// For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.

// const a = 3;
// const b = 6;

// for (let i = a; i <= b; i++) {
//   for (let j = 1; j <= i - a + 1; j++) {
//     console.log(i);
//   }
// }

//==================================================
//For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.

// let son = 20;
// let boluvchiSoni = 0;
// let yegindi = 0;

// for (let i = 1; i <= son; i++) {
//   if (son % i == 0) {
//     console.log(i);
//     boluvchiSoni++;
//     yegindi += i;
//   }
// }

//==========================================
// n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.

// const n = +prompt("sonni kiriting ?");

// let counter = 0;

// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     counter++;
//   }
// }

// if (counter == 2) console.log("ha tub son");
// else console.log("tub son emas");

//================================
// For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// let n = 5;
// for (let i = 0; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(j);
//   }
// }
