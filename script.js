console.log("Test");

/* 
console.log("Test 2");
*/

//---------------------------------------------------------------------------------------------------------------------------------
console.log("\n"); // new line = linie noua

// Variabile: var, let, const
// camelCase: ex: dimensiuneLaturaTest
console.log("Variabile: let, const");
const latime = 5;
console.log(latime);
// latime = 4; Eroare, nu putem suprascrie valorile dintr-o constanta

let inaltime = 10;
console.log(inaltime);
inaltime = 15; // Putem sa schimbat valoarea, deoarece am folosit cuvantul cheie let pentru a defini tipul de variabila (container)
console.log(inaltime);

//---------------------------------------------------------------------------------------------------------------------------------
console.log("\n"); // new line = linie noua

// Operatori matematici / asignare (=)
console.log("Operatori matematici / asignare (=)");
const suma = latime + inaltime;
console.log("+", suma);
const diferenta = latime - inaltime;
console.log("-", diferenta);
const inmultire = latime * inaltime;
console.log("*", inmultire);
const impartire = latime / inaltime;
console.log("/", impartire);

// Aria cercului: PI * R (raza) ^ 2
const PI = 3.14;
const razaCercului = 5;
const ariaCercului = PI * razaCercului * razaCercului;
console.log("Aria cercului: ", ariaCercului);

//---------------------------------------------------------------------------------------------------------------------------------
console.log("\n"); // new line = linie noua

// Tipuri primitive de date: number (numere), string (text), boolean (true / false)
console.log(
  "Tipuri primitive de date: number (numere), string (text), boolean (true / false)"
);

const numar = 5;
console.log(numar, typeof numar);
const text = "Text";
console.log(text, typeof text);
const conditie = true; // true - adevarat, false - fals
console.log(conditie, typeof conditie);

// String-uri - text
const testString = "String"; // 'String' - acelasi lucru din punctul de vedere al definitiei
const nume = "Neamt";
const prenume = "Mihai";
console.log(nume + " " + prenume + numar + numar); // "Neamt" + " " + "Mihai" + "5" + "5"
console.log(nume + " " + prenume + (numar + numar)); // Se executa prima data (numar + numar) = 10, dupa care concatenarea string-urilor: "Neamt" + " " + "Mihai" + "10"
const testStringTemplate = `Numele meu este: ${nume} ${prenume}`; // string-uri templetizate, putem utiliza variabile dinamice in el fara sa concatenam cu +
console.log(testStringTemplate);

//---------------------------------------------------------------------------------------------------------------------------------
console.log("\n"); // new line = linie noua

// Erori
console.log("Erori");

const constanta = 5; // Ca sa rezolvam eroarea schimbam const in let sau nu reasignam alta valoarea acestei variabile de tip const
// Ca sa vedem eroarea decomentam linia urmatoare
// constanta = 3;

//---------------------------------------------------------------------------------------------------------------------------------
console.log("\n"); // new line = linie noua

// Functii / Metode
console.log("Functii / Metode");

// ES5 - functii
function afiseazaSumaInConsola(x, y) {
  console.log(x + y);
}
// Programatorul spune cand se executa functia prin apel
afiseazaSumaInConsola(10, 5);

// Returnam valoarea cand avem nevoie de rezultat dupa apelul functiei. Asta inseamna ca stocam rezultatul functiei intr-o variabila
function returneazaSuma(x, y) {
  return x + y;
}

const sumaReturnata = returneazaSuma(10, 5);
console.log("Return: ", sumaReturnata);

// ES6 - functii - arrow function => ! IMPORTANT - va rog va obisnuiti sa scrieti cu arrow functions

const returneazaSumaArrow = (x, y) => {
  return x + y;
};

const sumaReturnataArrow = returneazaSumaArrow(10, 5);
console.log("Return arrow: ", sumaReturnataArrow);

//---------------------------------------------------------------------------------------------------------------------------------
console.log("\n"); // new line = linie noua

// Conditiile | if / else if / else
// Se utilizeaza tipul boolean care corespunde cu true (adevarat) sau false (fals)
console.log("Conditiile / if / else if / else");
// = - asignare / atribuire
// == - verifica egalitatea fara tip, doar dupa valoare (se converteste tipul unei variabile in tipul celeilalte in memorie si apoi se face comparatia)
// === - verifica egalitatea dupa tip si valoare !!! Se foloseste in principal pentru comparatii
// !== - DIFERIT
// > - mai mare
// >= - mai mare sau egal
// < - mai mic
// <= - mai mic sau egal

// Se verifica si tipul sa fie la fel, si valoarea
if (15 === "15") {
  console.log("Egale");
}

// Se verifica doar valoarea, nu si tipul. Se converteste automat in memorie una dintre valori la tipul celeilalte si apoi se verifica valoarea.
if (15 == "15") {
  console.log("==", "Egale");
}

// daca e adevarat - executa blocul meu de cod, daca nu (e fals) atunci executa blocul meu de cod

const x = 15;
const y = 18;
if (x > y) {
  console.log("E mai mare");
} else if (x === y) {
  console.log("Egale");
} else if (x < y) {
  console.log(
    "Ultima masura in cazul in care toate conditiile precedente sunt false"
  );
}

const fruct = "pepene";

if (fruct === "mar") {
  // true / false - boolean
  console.log("Mar");
} else if (fruct === "para") {
  console.log("Para");
} else {
  console.log("E fruct, nu ma intereseaza de care.");
}

const varsta = 30;
const conditieVarsta = varsta === 30;
console.log("Tip variabila 'varsta':", typeof conditieVarsta); // true = false
if (conditieVarsta) {
  console.log(`Varsta peste ${varsta}`);
}

// Operatori conditionali logici
// && - SI
// || - SAU
// ! - NEGATIE

const fruct1 = "pepene";
const fruct2 = "mar";
const fruct3 = "struguri";

if (fruct1 === "pepene" && fruct2 === "mar") {
  console.log("Fructele mele preferate");
}

if (fruct1 === "pepene" || fruct2 === "para") {
  console.log("Cel putin un fruct e preferat");
}

// && - SI - are prioritate in comparatie, la fel cum inmultirea are prioritate fata de adunare. Daca vrenm sa executam || - SAU inainte trebuie sa il inglobam in paranteze
//         true         ||       false         &&        true
if (fruct1 === "pepene" || (fruct2 === "para" && fruct3 === "struguri")) {
  console.log("TEST TEST");
}

const conditiePara = fruct2 === "para";
// Negam conditia: true -> false | false -> true
if (!conditiePara) {
  console.log("e para");
}
