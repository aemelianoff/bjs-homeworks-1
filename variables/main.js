//////////задача 1.1//////////
let algebra = 5;
let geography = 5;
let physics = 2;
let summ;
summ = (algebra + geography + physics)/3;
console.log(summ);

//////////задача 1.2//////////
let name = 'Унылый Странник'
let message = `Привет, мир! Меня зовут ${name}.`
console.log(message);

//////////задача 1.3//////////
function exercise(x, y, z) {

    console.log(x * y + 5 * z + x - 1);
}
exercise(2, 22, 0);

//////////задача 2.1//////////
'use strict';

function getResult(a, b, c) {
let D = b**2-4*a*c;
let x1 = (b + Math.sqrt(D))/2*a;
let x2 = (b - Math.sqrt(D))/2*a;
let equals = [x1, x2];
if (D < 0) {
   return console.log(`Если D < 0 ответ: ${equals = []}`);
    }
else if (D == 0) {
   return console.log(`Если D = 0 ответ: ${equals = [x1]}`);
}
else  {
   return console.log(`Если D > 0 ответ: ${equals}`);
}

}

getResult(2, 3, 1);
getResult(9, 6, 1);
getResult(2, 3, 4);