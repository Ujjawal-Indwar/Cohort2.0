//http://latentflip.com/loupe/
function fun() {
    let a = 5
    for (let i = 0; i < a; i++){
        console.log(i)
    }
}
//Asynchronous Function readFile, setTimeout
setTimeout(fun, 3000)
console.log("Starting")