// You're a square!
// 7 Kyu
// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

const isSquare = (n) => {
    if (n < 0)
        return false
    return Number.isInteger(Math.sqrt(n))
}


// Tests
console.log(isSquare(-1)) // false
console.log(isSquare(0)) // true
console.log(isSquare(3)) // false
console.log(isSquare(4)) // true
console.log(isSquare(25)) // true