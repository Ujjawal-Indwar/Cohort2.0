var fs = require("fs");
//http://latentflip.com/loupe/
function fun() {
  let a = 5;
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
}
//Asynchronous Function readFile, setTimeout
setTimeout(fun, 3000);
console.log("Starting");

let b = 2;
console.log(b);

//this function is automatically called by the server/os server
fs.readFile("a.txt", "utf8", (err, data) => {
  console.log("data read from the file is ");
  console.log(data);
});

let ans = 15;
for (let i = 0; i < ans; i++) {
  console.log(i);
}

console.log(ans);
