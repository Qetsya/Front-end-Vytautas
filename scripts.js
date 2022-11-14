console.log(Number("  123  ")); //123
console.log(Number(""));  //0
console.log(Number("a"));  //NaN

console.log(Boolean("")); //false
console.log(Boolean("0")); //false

console.log(Boolean("a")); //true
console.log(Boolean("1"));  //true
console.log(Boolean("-1"));  //true

console.log(Number(true));  //1
console.log(Number(false));  //0


//operatoriai: /, *, +, -, ** (kelt laipsniu), % (modulis), 

console.log(4 ** 2); //16
console.log(4 ** (1 / 2)); //2 - istraukia sakni

console.log(7 / 2); //3.5
console.log(7 % 2); //1 - nedalus skaicius, matematine liekana, padalinus is 2.
console.log(2 % 7); // 2


let pirmasZodis = 'Vardenis';
let antrasZodis = 'Pavardenis';

let pilnaFraze = `${pirmasZodis} ${antrasZodis}`; //String template
let kitaFraze = pirmasZodis + ' ' + antrasZodis; //Vardenis Pavardenis
console.log(pilnaFraze === kitaFraze);// true
console.log(kitaFraze);

console.log(typeof ('1' + 2)); // 12 , pavercia 2 i string, nes skaiciaus stringe console nemato
console.log(1 + '2' + 2); // 122
console.log('6' - 2); // 4 , nes su stringais minusu nenaudojam, console vercia stringa i numeri

//TASK kiek liko iki paskaitos pradzios

const pradzia = 18;
const valandos = Number(prompt("Kiek dabar valandu?")); //pvz 4
const minutes = Number(prompt("Kiek dabar minuciu?")); //pvz 0

let minuciuTikrinimas = minutes > 0; // false, siuo atveju atima 1 valanda
let valandosKeitimas = Number(minuciuTikrinimas); // 0
let skirtumasValandu = valandos + valandosKeitimas;
let likutisValandu = pradzia - skirtumasValandu;

let likutisMinuciu = (60 - minutes) * valandosKeitimas;

/*jeigu valandos keitimas yra vienetas, mes rodome minuciu likuti,
jei valandos keitimas yra 0, mes rodome  0 minuciu likuti*/

/*turime gauti skirtuma tarp minuciu,
jeigu mes atimam minutes, valanda turi sumazeti -1  */

alert(`Iki paskaitos liko ${likutisValandu} val. ir ${likutisMinuciu} min.`);

//SAME TASK bet kitaip parasyta ir papildyta

const currentHours = Number(prompt("Kiek dabar valandu?"));
const currentMinutes = Number(prompt("Kiek dabar minuciu?"));

const shouldReduceHour = currentMinutes > 0;

const additionalHour = Number(shouldReduceHour);

const isNotTooLate = Number(currentHours < 18);

const hourDifference = (18 - currentHours - additionalHour) * isNotTooLate;
const minuteDifference = ((60 - currentMinutes) * additionalHour) * isNotTooLate;

alert(`Liko ${hourDifference} val. ir ${minuteDifference} min.`);



console.log("A", "" + 1 + 0); //10
console.log("B", "" - 1 + 0); //-1
console.log("C", true + false); //1
console.log("D", 6 / "3"); //2
console.log("E", "2" * "3"); //6
console.log("F", 4 + 5 + "px"); //9px
console.log("G", "$" + 4 + 5); //$45
console.log("H", "4" - 2); //2
console.log("I", "4px" - 2); //NaN
console.log("J", "  -9  " + 5); //  -9  5
console.log("K", "  -9  " - 5); //-14
console.log("L", null +1); //1
console.log("M", undefined + 1); // NaN