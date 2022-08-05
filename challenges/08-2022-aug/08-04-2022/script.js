// Round up to the next multiple of 5
// 7 Kyu
// https://www.codewars.com/kata/55d1d6d5955ec6365400006d/javascript

const roundUp = n => {
    let x = Math.ceil(n / 5)
    return x * 5
}


// Tests
console.log(roundUp(2)) // 5
console.log(roundUp(21)) // 25
console.log(roundUp(-5)) // -5
console.log(roundUp(-2)) // 0

/* Pseudo Code
- divide n by 5
    - round up, multiply by 5
*/