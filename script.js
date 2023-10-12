/*
const vyplata = Number(prompt("Zadej vyplatu:"));
const odmena = Number(prompt("Zadej bonus"));

document.body.innerHTML += "<p> Výplata: " + vyplata + " CZK</p>";

document.body.innerHTML += "<p> Výplata s bonusem: " + (vyplata + odmena) + " CZK</p>";
*/

/*
const jmeno = prompt("Zadej jméno:");
const vek = prompt("Zadej věk:");

document.body.innerHTML += jmeno + ", " + " věk: " + vek;
*/

const hodinovaSazba = Number(prompt("Zadej svojí hodinovou sazbu:"));
const pocetHodin = Number(prompt("Zadej počet odpracovaných hodin za den:"))
const pocetDni = Number(prompt("Zadej počet odpracovaných dnů: "))
const hrubaMzda = hodinovaSazba * pocetHodin * pocetDni;

document.body.innerHTML += "<p> Vaše výplate je: " + hrubaMzda;
