'use strict';

/*function wyswietlWKonsoliImie(imieWyswietl){
    console.log(imieWyswietl);
}

wyswietlWKonsoliImie("Monia");
wyswietlWKonsoliImie("Kuba");
wyswietlWKonsoliImie("Kulson");
wyswietlWKonsoliImie("Agatka");*/

function obliczOdsetki (kapital, procent){
    var kapitalZOdsetkami = kapital + kapital * procent;
    return kapitalZOdsetkami;
}


var inwestycjaAnety = obliczOdsetki(1000, 0.05) 
console.log(inwestycjaAnety);