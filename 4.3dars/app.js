//if ga doir masalalar

// let num = 4;

// if (num > 0) {
//   num++;
//   console.log(num);
// } else {
//   num--;
//   console.log(num);
// }

// 2-masala
// let num = -2;
// if (num > 0) {
//   num++;
//   console.log(num);
// } else {
//   num -= 2;
//   console.log(num);
// }

//==================
//3-masala
// let num = 0;

// if (num == 0) {
//   num = 10;
//   console.log(num);
// } else if (num > 0) {
//   num++;
//   console.log(num);
// } else {
//   num -= 2;
//   console.log(num);
// }

//===========================

// let num1 = -1;
// let num2 = 3;
// let num3 = 2;
// let manfiySon = 0;
// let musbatSon = 0;

// if (num1 < 0) {
//   manfiySon++;
// } else {
//   musbatSon++;
// }
// if (num2 < 0) {
//   manfiySon++;
// } else {
//   musbatSon++;
// }
// if (num3 < 0) {
//   manfiySon++;
// } else {
//   musbatSon++;
// }

// console.log(musbatSon);

//=================================
//6-masala

// let a = 4;
// let b = 9;

// if (a > b) {
//   console.log(`katta son a: ${a}`);
// } else console.log(`katta son b: ${b}`);

//==============================

// let a = 4;
// let b = 9;

// if (a == b) {
//   a = 0;
//   b = 0;
//   console.log(`a:${a}, b:${b}`);
// } else {
//   let c = a + b;
//   a = c;
//   b = c;

//   console.log(`a:${a}, b:${b}`);
// }

//=========================================
// let a = 4;
// let b = 9;

// if (a == b) {
//   a = 0;
//   b = 0;
//   console.log(`a:${a}, b:${b}`);
// } else {
//   if (a > b) {
//     b = a;
//     console.log(`a:${a}, b:${b}`);
//   } else {
//     a = b;
//     console.log(`a:${a}, b:${b}`);
//   }
// }

//=================================

// let a = 4;
// let b = 9;
// let c = 3;

// if (c < a && c < b) {
//   console.log(`c:${c} soni kichik `);
// } else if (b < c && b < a) {
//   console.log(`b:${b} soni kichik`);
// } else console.log(`a: ${a} soni kichik`);

// let a = 4;
// let b = 9;
// let c = 3;

// if ((a < b && a > c) || (a > b && a < c)) {
//   console.log(`a: ${a}soni o'rtacha`);
// } else if ((b < a && b > c) || (b > a && b < c)) {
//   console.log(`b: ${b}soni o'rtacha`);
// } else console.log(`c: ${c}soni o'rtacha`);

//=========================
// let a = 4;
// let b = 9;
// let c = 3;

// let sum = 0;
// let num1 = 0;
// let num2 = 0;

// if (a + b > sum) {
//   sum = a + b;
//   num1 = a;
//   num2 = b;
// }

// if (a + c > sum) {
//   sum = a + c;
//   num1 = a;
//   num2 = c;
// }

// if (b + c > sum) {
//   sum = b + c;
//   num1 = b;
//   num2 = c;
// }

// console.log(`eng katta yegindi:${sum}, ${num1}, ${num2}`);

//=================================
// Begin1. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
// L= 2 * π * R, S = π * R^2
// let R = 15;
// let L = 2 * 3.14 * R;
// let S = 3.14 * R ** 2;
// console.log(S);
//================================

// Begin2. Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi G aniqlansin. G = a * b

// let a = 4;
// let b = 9;

// let G = Math.sqrt(a * b);

// // Begin3. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.

// let x = 4;
// let y = (3 * x) ^ (6 - 6 * x) ^ (2 - 7);
// console.log(y);

//=============================
// Begin4. X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.

// let x = 3;

// let a = 12000;

// let y = 4;
// let kgNarx = a / x;

// let yNarx = kgNarx * y;

//=====================================
// Begin5. Berilgan A va B sonlarining qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.
// let a = 4;
// let b = 9;

// console.log(`a= ${b}, b=${a}`);

//================================
// Integer1. Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini, so`ng birlar xonasidagi raqamini hamda ularning yig’indisini chiqaruvchi programma tuzilsin.

// let num = 12;

// let onlik = Math.trunc(num / 10);
// let birlik = num % 10;

// let yegindi = onlik + birlik;

// console.log(`onlik:${onlik},  birlik:${birlik} yegindi:${yegindi}`);

//====================================
// Integer2. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// let num = 12;
// let onlik = Math.trunc(num / 10);
// let birlik = num % 10;

// let yegindi = "";

// yegindi = yegindi + birlik + onlik;
// console.log(yegindi);

//===================================

// Integer3. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin

// let num = 123;

// let yuzlik = Math.trunc(num / 100);
// console.log(yuzlik);

//==========================================

// Integer4. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib, berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 1239
// Output: 2

// let num = 1239;

// let yuzlikXonasi = Math.floor(son / 100) % 10;

//====================================
// Integer5. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat, minut va sekund o'tganini aniqlovchi programma tuzilsin.

// let N = 56460;

// let soat = Math.floor(N / 3600);
// let minut = Math.floor(N % 3600) / 60;
// let sekund = N % 60;

// console.log(`soat: ${soat}, minut:${minut}, sekund;${sekund}`);

//=======================
// Begin1. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.

// let a = 3;
// let b = 6;
// let S = a * b;
// let P = 2 * (a + b);

//================================
// Begin2. Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin.

// let d = 12;
// let pi = 3.14;
// let L = pi * d;

// let r = d / 2;
// let S = (pi * r) ^ 2;

//========================
// Begin3. Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S aniqlansin.
// let a = 15;
// let V = a ^ 3;
// let S = (6 * a) ^ 2;

//==================================
// Begin4. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.

// let a = 12,
//   b = 6,
//   c = 12;
// let V = a * b * c;
// let S = 2 * (a * b + b * c + a * c);
// console.log(V, S);

//============================
// Begin5. Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
// let a = 12,
//   b = 15;
// let M = (a + b) / 2;

//==================================
// Begin6. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
// let a = 12;
// let b = 8;

// let c = Math.sqrt(a ** 2 + b ** 2);
// let P = a + b + c;

//=======================================
// Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// S1 = π * r1
// S2 = π * r2
// S = π * (r1^2 − r2^2).

// let r1 = 12;
// let r2 = 8;
// let pi = 3.14;

// let S = pi * (r1 ** 2 - r2 ** 2);
// let S1 = pi * r1;
// let S2 = pi * r2;
//=====================================

// Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// L = 2 * π * R
// S = π * R^2
// π = 3.14

// let L = 60;
// let r = L / 3.14 / 2;

// let S = 3.14 * r ** 2;

//=====================================
// Begin9. Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.

// let x1 = +prompt("x1 ni kitring"),
//   y1 = +prompt("y1 ni kiting");
// let x2 = +prompt("x2 ni kitring"),
//   y2 = +prompt("y2 ni kiting");

// let distance = Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);

// console.log(distance);
//==================================
//Begin10. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.

// let a = 12;
// let b = 34;
// let c = 55;

// console.log(`a=${b}, b=${c}, c=${a}`);

//=================================
// Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.

// let x = 12;
// let y = (4 * (x - 3)) ^ (6 - 7 * (x - 3)) ^ (3 + 2);

//===============================

//Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
// A^3‚ A^6‚ A^9, A^15

// let a = +prompt(
//   "a sonining qiymatini kiriting men 3,6,9,15- darajalarini hisoblayman"
// );

// let daraja3 = a * 83;
// let daraja6 = a * 83;
// let daraja9 = a * 83;
// let daraja15 = a * 83;

// console.log(`a^3=${daraja3}, a^6=${daraja6}, a^9=${daraja9}, a^15=${daraja15}`);
//===================================

// Begin13. Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin.
// Tc = (Tf - 32) * 5/9

// let Tf = +prompt("farangeyt gradusini kirgizing?");

// let Tc = ((Tf - 32) * 5) / 9;

// console.log(Tc);

//==============================================

// Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.
// let x = 3;
// let a = 90000;

// let y = 5;
// let b = 80000;

// let shokolodNarx = a / x;
// let kanfetNarx = b / y;

// let qimmat = shokolodNarx - kanfetNarx;
// console.log(`1kg shokolad 1kg kanfetdan:${qimmat} `);

//======================================
// Begin15. Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?
// let x = 3;
// let a = 5000;

// let y = 5;
// let b = 10000;

// let result = x * a + y * b;

// console.log(result);

//=====================================================================
//Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.

// let son = 234;

// let birliklar = son % 10;
// let onliklar = Math.floor((son % 100) / 10);

// console.log(`birliklar: ${birliklar}, onliklar;${onliklar}`);

//===========================================================================

// Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.

// let son = 234;

// let birliklar = son % 10;
// let onliklar = Math.floor((son % 100) / 10);
// let yuzlik = Math.floor(son / 100);

// let yigindi = birliklar + onliklar + yuzlik;

// console.log(yigindi);

//============================================================================

// Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.

// let son = 234;

// let birliklar = son % 10;
// let onliklar = Math.floor((son % 100) / 10);
// let yuzlik = Math.floor(son / 100);

// let teskariSon = "";

// teskariSon += birliklar;
// teskariSon += onliklar;
// teskariSon += yuzlik;

// console.log(teskariSon);

//=========================================================================
//Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// Input: 123;
// Output: 213;

// let son = 123;

// let birliklar = son % 10;
// let onliklar = Math.floor((son % 100) / 10);
// let yuzliklar = Math.floor(son / 100);

// let yangiSon = onliklar * 100 + yuzliklar * 10 + birliklar;

// console.log(yangiSon);

//===========================================================

//Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// Input: 123
// Output: 132

// let son = 123;

// let birliklar = son % 10;
// let onliklar = Math.floor((son % 100) / 10);
// let yuzliklar = Math.floor(son / 100);

// let yangiSon = "";
// yangiSon = yangiSon + yuzliklar + birliklar + onliklar;

// console.log(parseInt(yangiSon));

//===================================================

//Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.

// let sekund = 24500;

// let soat = sekund / 3600;

// console.log(Math.floor(soat));

//====================================================================

//Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
// let sekund = 24500;

// let minut = Math.floor(sekund / 60);

// let qolganSekund = 24500 - minut * 60;

// console.log("minut:", minut, "qolganSekund: ", qolganSekund);

//========================================================================

//Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.

// let sekund = 24500;

// let soat = Math.floor(sekund / 3600);

// let qolganSekund = 24500 - soat * 3600;

// console.log("soat:", soat, "qolganSekund: ", qolganSekund);

//===================================================
//
// Boolean1. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni musbat".

// let a = +prompt("musbat son kiriting");

// if (a > 0) console.log(true);
// else console.log(false);

//====================================
//Boolean2. A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni toq son".

// let a = +prompt("musbat son kiriting");
// if (a % 2 == 1) console.log(true);
// else console.log(false);

//============================================

//Boolean3. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A>2 va B <=3".

// let a = +prompt("a soniga qiymat kiriting");
// let b = +prompt("b soniga qiymat kiriting");

// if (a > 2 && b <= 3) console.log(true);
// else console.log(false);

//==================================================

// Boolean4. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A <= B <= C"

// let a = +prompt("a soniga qiymat kiriting");
// let b = +prompt("b soniga qiymat kiriting");
// let c = +prompt("c soniga qiymat kiriting");

// if (a <= b <= c) console.log(true);
// else console.log(false);

//=============================================

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarining har ikkalasi ham yoki toq son yoki juft son".

// let A = +prompt("a soniga qiymat kiriting");
// let B = +prompt("b soniga qiymat kiriting");

// if ((A % 2 == 0 && B % 2 == 0) || (A % 2 != 0 && B % 2 != 0)) {
//   console.log("Har ikkalasi ham toq son yoki juft son");
// } else {
//   console.log("Har ikkalasi ham bir tomonlama toq, bir tomonlama juft son");
// }

//=========================================================

// Boolean6. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning hech bo'lmaganda bittasi musbat".

// let a = +prompt("a soniga qiymat kiriting");
// let b = +prompt("b soniga qiymat kiriting");
// let c = +prompt("c soniga qiymat kiriting");

// if (a > 0 || b > 0 || c > 0) console.log(true);
// else console.log(false);

//====================================================================

// Boolean7. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning barcha raqamlari xar xil".

// let son = 123;

// let birlik = son % 10;

// let onlik = Math.floor((son / 10) % 10);
// let yuzlik = Math.floor(son / 100);

// if (birlik != onlik && birlik != yuzlik && yuzlik != onlik)
//   console.log("bir hil sonlar qatnashmagan");
// else console.log("bir xil sonlar qatnashgan");

//=======================================================================

//Boolean8. Jumlani rostlikka tekshiring: "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng".
// let a = 4;
// let b = 4;
// let c = 14;

// if (
//   (a == b && a == c) ||
//   b == c ||
//   (a == c && a == b) ||
//   b == c ||
//   (c == b && a == c) ||
//   a == b
// ) {
//   console.log(
//     "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng"
//   );
// } else {
//   console.log(
//     "Berilgan uchta butun sonlarning hech bo'lmaganda 2 tasi bir biriga teng emas"
//   );
// }

//=======================================================================

//Boolean3. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi".

// let a = +prompt("a soniga qiymat kiriting");
// let b = +prompt("b soniga qiymat kiriting");
// let c = +prompt("c soniga qiymat kiriting");

// if (a < b && b < c) console.log("b soni a va c sonlari orasidagi son");
// else console.log("b soni a va c sonl;ari orasida emas");

//====================================

// //Boolean4. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar".
// let a = +prompt("a soniga qiymat kiriting");
// let b = +prompt("b soniga qiymat kiriting");

// if (a % 2 == 1 && b % 2 == 1) console.log("ikklasi ham toq son");
// else console.log("orasida juft son bor");
