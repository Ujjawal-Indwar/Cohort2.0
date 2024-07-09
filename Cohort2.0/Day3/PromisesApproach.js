//Could lead to callback hell

const { time } = require("console")
const { callbackify } = require("util")

function myOwnFunction(cb, duration) {
    setTimeout(cb, duration)
}

myOwnFunction(function() {
    console.log("Wassup UI")
}, 1000)


//Promises are syntactical sugar for Async
//promise is a class in JavaScript
//Asunc await syntax , promise chaining => get rid of callback hell
function myOwnProFunction(duration) {

    let p = new Promise(function (resolve) {
        setTimeout(resolve, 3000)
    })
    return p
}

myOwnProFunction(5000)
    .then(function () {
        console.log("Kuch Kuch Promise")

    })

//Asynchornous is used for
// //Network call
// Database call
// read and write File
// sleep / wait for some time

//5% pf async => do away with callback