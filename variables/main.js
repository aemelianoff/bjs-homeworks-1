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

//////////задача 2.2//////////
function getAverageMark(...marks) {
    let sum = 0;
    let size = 0
    if (marks.length > 5) {
      size = marks.splice(5, marks.length);
      console.log('слишком много оценок!');
    }
    else {}
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    } 
 console.log(`Средний бал: ${sum / marks.length}`);
}
getAverageMark(2, 2, 1, 11, 14, 1, 6);

//////////задача 2.3//////////
function askDrink(name, dateOfBirthday) {
  let today = new Date().getFullYear();
  let BirthdayYear = new Date(dateOfBirthday).getFullYear();
  let age = today - BirthdayYear;
  if (age >= 18) {
    console.log(`Не желаете ли олд-фэшн, ${name}?`);
  }
  else {
  console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  }
}
askDrink('Василий', 'July 21, 2005');