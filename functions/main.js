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
  if (result.D == 0) {
    console.log(`Уравнение имеет один корень: X₁ = ${result.roots}`);
  }
  else {
    console.log(`Уравнение имеет два корня: X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
  }
}

showSolutionsMessage( 2, 3, 1 );
