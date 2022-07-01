// Square Every Digit
// 7 Kyu
// https://www.codewars.com/kata/546e2562b03326a88e000020

const squareDigits = (num) => {
    let ans = num.toString().split("").map(x => Number(x) ** 2).join("")
    return Number(ans)
} 


// Tests
console.log(squareDigits(3212)) // 9414
console.log(squareDigits(2112)) // 4114
console.log(squareDigits(0)) // 0