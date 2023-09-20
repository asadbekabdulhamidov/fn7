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

// Boolean5. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo'lmaganda bittasi toq son"

// let a = 3;
// let b = 4;

// if (a % 2 == 1 || b % 2 == 1) {
//   console.log("ha toq son");
// }

//====================================
// Boolean6. Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son".

// let a = 2;
// let b = 9;

// if ((a % 2 == 1 && b % 2 == 0) || (a % 2 == 0 && b % 2 == 1)) {
//   console.log("true");
// } else console.log("ikkalasi ham juft");

//===============================================
// Boolean7. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat".

// let a = 0;
// let b = 9;
// let c = 2;

// if (a > 0 && b > 0 && c > 0) {
//   console.log(`ha bularning har biri musbat`);
// } else console.log(`bular orasida manfiy qiymat ham bor`);

//============================================
// Boolean8. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son".

// let a = -5;
// let b = 9;
// let c = 2;

// let musbatSon = 0;

// if (a < 0) {
//   musbatSon++;
// }
// if (b < 0) {
//   musbatSon++;
// }
// if (c < 0) {
//   musbatSon++;
// }

// console.log(musbatSon);

//========================================
// Boolean9. Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son".

// let a = -5;
// let b = 9;
// let c = 2;

// let musbatSon = 0;

// if (a < 0) {
//   musbatSon++;
// }
// if (b < 0) {
//   musbatSon++;
// }
// if (c < 0) {
//   musbatSon++;
// }

// console.log(musbatSon);
//===========================
// Boolean10. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son".

// let son = 12;

// if (son >= 10 && son % 2 == 0) {
//   console.log(`son ikki xonalik juft son`);
// }

//=====================================
// Boolean11. Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son uch xonali toq".

// let son = 123;

// if (son >= 100 && son % 2 == 1) {
//   console.log(`son uch xonalik toq son`);
// }

//===========================================
// Boolean13. Uch xonali son berilgan. Jumlani rostlikka tekshiring: “Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan".

// let son = 312;

// let birlik = son % 10;

// let onlik = Math.trunc(son / 10) % 10;
// let yuzlik = Math.trunc(son / 100);

// if (yuzlik + 1 == onlik && onlik + 1 == birlik) {
//   console.log(`ha osib borish tartibida`);
// } else console.log("yoq osib bosrish tartibida emas");

//====================================
// Boolean14. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonning raqamlari ketama- ket o'suvchi bo'lib joylashgan yoki kamayuvchi ketma-ketlikka ega".

// let son = 123;

// let birlik = son % 10;

// let onlik = Math.trunc(son / 10) % 10;
// let yuzlik = Math.trunc(son / 100);

// if (
//   (yuzlik + 1 == onlik && onlik + 1 == birlik) ||
//   (yuzlik - 1 == onlik && onlik - 1 == birlik)
// ) {
//   console.log(true);
// } else console.log(false);

//========================================
// Boolean15. Uch xonali son berilgan. Jumlani rostlikka tekshiring: "Ushbu sonni chapdan o'qiganda ham, o'ngdan o'qiganda ham bir xil".

// let son = 121;

// let birlik = son % 10;

// let onlik = Math.trunc(son / 10) % 10;
// let yuzlik = Math.trunc(son / 100);

// if (yuzlik == birlik) {
//   console.log(true);
// } else console.log(false);
