// Ones and Zeros
// 7 Kyu
// https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => {
    let binaryNum = arr.join("")
    return parseInt(binaryNum, 2)
}


// Tests
console.log(binaryArrayToNumber([0, 0, 0, 1])) // 1
console.log(binaryArrayToNumber([1, 0, 0, 1])) // 9
console.log(binaryArrayToNumber([1, 1, 1, 1])) // 15