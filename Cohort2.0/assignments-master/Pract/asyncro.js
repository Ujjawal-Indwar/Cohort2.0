function findSum(n) {
    let a = 0
    for (let i = 0; i < n; i++) {
        a+=i
    }
    return a
}

function findSumTill100() {
    return findSum(100)
}

setTimeout(findSumTill100, 1000)
console.log("Hello world!")