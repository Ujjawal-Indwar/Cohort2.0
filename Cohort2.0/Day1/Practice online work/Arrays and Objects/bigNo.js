const numberArray = [23, 34, 12, 5, 23, 4, 21, 5, 1394, 2453, 1243, 11452];
    let bigNo = 0;
for (var i = 0; i < numberArray.length; i++) {
    if (numberArray[i] >= bigNo) {
        bigNo = numberArray[i];
    }
} 
console.log(bigNo);
