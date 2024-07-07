function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function squareOfSomething(n1,n2 ) {
  let x = square(n1);
  let y = square(n2);
  return x + y;
}

//let ans = squareOfSomething(2,2)
console.log(squareOfSomething(2,2))
