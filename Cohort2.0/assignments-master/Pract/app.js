//Simple function
function square(val) {
    return val * val;
}

function sumofSquare(a, b) { 
    let val1 = square(a);
    let val2 = square(b);
    return val1 + val2;
}

console.log(" Normal Function sum of square = ",sumofSquare(5, 7));


//Callback function

function cube(val) {
    return val * val * val;
}

function sumofSomething(a, b, fn) {
    let val1 = fn(a);
    let val2 = fn(b);
    return val1 + val2;
}

console.log(" callback Function sum of cube = ", sumofSomething(2, 2, cube));

//Anonymous function
console.log(" Anonymous Function")

function sumofAnonymous(a, b, fn) {
    let val1 = fn(a);
    let val2 = fn(b);
    return val1 + val2;
}
let ans =sumofAnonymous(2, 2, function (val){
  return val * val * val * val;
})

console.log(ans)

console.log("anonymous")
//Anonymous Function

function powerofSomething(a, b, fn) {
  let val1 = fn(a);
  let val2 = fn(b);
  return val1 + val2;
}
power = powerofSomething(2, 2, function powerOf(val) {
  return val * val * val;
});
console.log(" Power of Something = ", power);


console.log("anonymous function no need to write function name")
function powerofSome(a, b, fn) {
  let val1 = fn(a);
  let val2 = fn(b);
  return val1 + val2;
}
powerr = powerofSome(2, 2, function (val) {
  return val * val * val;
});
console.log(" Power of Some Anonymous = ", powerr);