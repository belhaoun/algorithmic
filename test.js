var tools = require("./tools");

console.log('La somme de 1 et 2 est : ' + tools.somme(1, 2));
console.log('Test 1 function somme : ' + tools.somme(1, 2) + ' == 3 est :', tools.somme(1, 2) == 3);
console.log('Test 2 function somme : ', tools.somme(1, 2) == 4);
//console.log('La produit de 3 et 2 est : ' + tools.multiplication(2, 3));

console.log('La max de 1 et 2 est : ' + tools.findMax2(1, 2 ));

console.log('La max de 1 et 2 et 3 est : ' + tools.findMax3(1, 2 ,5 ));
console.log('La max de 1 et 2 et 3 est : ' + tools.findMaxTab(1, 2 ,5 ));
console.log('La plus grande valeur est ('+ PlusGrandeValeur(tab[1,2,4]));
