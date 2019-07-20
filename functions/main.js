function getSolutions( a, b, c ) {
  let D = b**2-4*a*c;
  if (D < 0) {
    /*console.log({D: D});*/
    return {D: D};
  }
  else if (D == 0) {
    let x1 = -b / 2*a;
    /*console.log({ roots: [x1], D: D });*/
    return { roots: [x1], D: D };
  }
  else  {
    let x1 = (b + Math.sqrt(D))/2*a;
    let x2 = (b - Math.sqrt(D))/2*a;
    /*console.log({ roots: [ x1, x2 ], D: D });*/
    return { roots: [ x1, x2 ], D: D };
  }
}

function showSolutionsMessage( a, b, c )  {
  let result = getSolutions( a, b, c );
  console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта: ${result.D}`);
  if (result.D < 0) {
    console.log(`Уравнение не имеет вещественных корней.`);
  }
  else if (result.D == 0) {
    console.log(`Уравнение имеет один корень: X₁ = ${result.roots}`);
  }
  else {
    console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage(2, 3, 4);
showSolutionsMessage(2, 3, 1);
showSolutionsMessage(9, 6, 1);


//задача 2

function getAverageMark(marks) {
	let sum = 0;
	for (let i = 0; i < marks.length; i++) {
		sum += marks[i];
	}
	let result = sum / marks.length;
	return result;
}
function getAverageScore(data) {
	let value = new Object();
  for (let prop in data) {
		value[prop] = getAverageMark(data[prop]);
  }
  //console.log(value);
  let averageSum = 0;
  let propSum = 0;
	for (let prop in value) {
		averageSum += value[prop];
    propSum++;
	}
  let average = averageSum / propSum;
  //console.log(average)
  let averageProp = 'average'
  value[averageProp] = average
  //console.log(value);
  return value;
}

console.log(
	getAverageScore({
		algebra: [ 2, 1, 3, 2, 3, 1 ],
		geometry: [ 2, 3, 1 ],
		russian: [ 5, 5, 5, 5 ],
		physics: [ 2, 2 ],
		music: [ 2, 2, 1 ],
		english: [ 2, 3, 3 ],
		poetry: [ 1, 1, 1 ],
		chemistry: [ 2 ],
		french: [ 2, 3 ]
	})
);
