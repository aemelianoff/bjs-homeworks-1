

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    // код для задачи №1 писать здесь
    //return x;
'use strict';
let D = b**2-4*a*c;
let x1 = (b + Math.sqrt(D))/2*a;
let x2 = (b - Math.sqrt(D))/2*a;
let x = [x1, x2];
if (D < 0) {
   return x = [];
   }
else if (D == 0) {
   return x = [x1];
}
else  {
   return x;
}

}




function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №2 писать здесь
    //console.log(result)
    //return result;
let today = new Date().getFullYear();
let BirthdayYear = dateOfBirthday.getFullYear();
let age = today - BirthdayYear;
    let result;
if (age >= 18) {
    result = `Не желаете ли олд-фэшн, ${name}?`;
  }
else {
    result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
  console.log(result);
  return result;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    // код для задачи №3 писать здесь
    //return averageMark;
    let sum = 0;
    if (marks.length > 5) {
       marks.splice(5)
       console.log('слишком много оценок!');
    }
    for (let i = 0; i < marks.length; i++) {
       sum += marks[i];
    } 
    let averageMark = `Средний бал: ${sum / marks.length}`;
    return averageMark;
    }
}
