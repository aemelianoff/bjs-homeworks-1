function getSolutions( a, b, c ) {
  let D = b**2-4*a*c;
  if (D < 0) {
    console.log({D: D});
    return {D: D};
  }
  else if (D == 0) {
    let x1 = -b / 2*a;
    console.log({ roots: [x1], D: D });
    return { roots: [x1], D: D };
  }
  else  {
    let x1 = (b + Math.sqrt(D))/2*a;
    let x2 = (b - Math.sqrt(D))/2*a;
    console.log({ roots: [ x1, x2 ], D: D });
    return { roots: [ x1, x2 ], D: D };
  }
}

getSolutions( 2, 3, 4 )
