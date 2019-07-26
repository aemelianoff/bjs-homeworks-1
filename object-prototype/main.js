//Задача 1

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    // код для задачи №1 писать здесь
    let sound = animal.sound;
    if (animal === undefined) {
      return null;
    } 
    else if (animal) {
      return sound;
    }
}

//Задача 2

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    // код для задачи №2 писать здесь
  let sum = 0;
  for (let i = 0; i < marks.length; i++) {
    sum += parseFloat(marks[i]);
  }
  let roundedAverage = Math.round(sum / marks.length);
  return roundedAverage;
}

//Задача 3

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
}
