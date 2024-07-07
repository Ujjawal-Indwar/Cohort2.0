function square(n) {
    return n*n
}

function cube(n) {
    return n*n*n
}

//Function as argument
function squareOfSomething(n1,n2, cb) {
    let x = cb(n1)
    let y = cb(n2)
    return x+y
}

console.log(squareOfSomething(2,square))