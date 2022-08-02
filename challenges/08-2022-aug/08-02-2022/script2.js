// Summing a number's digits
// 7 Kyu
// https://www.codewars.com/kata/52f3149496de55aded000410

const sumDigits = number => {
    let positiveNum = Math.abs(number)
    return positiveNum.toString().split('').map(x => Number(x)).reduce((a, b) => a + b)
}


// Tests
console.log(sumDigits(10)) // 1
console.log(sumDigits(99)) // 18
console.log(sumDigits(-32)) // 5