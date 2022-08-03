// Binary Addition
// 7 Kyu
// https://www.codewars.com/kata/551f37452ff852b7bd000139/

const addBinary = (a, b) => {
    let sum = a + b
    return sum.toString(2)
}


// Tests
console.log(addBinary(1,2)) // 11

/*
https://www.delftstack.com/howto/javascript/convert-number-to-binary-in-javascript/#convert-a-number-to-binary-with-tostring-2-function

This solution explains how using .toString() on a Number object can change numbers
*/