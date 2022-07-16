// Beginner series #2 clock
// 8 Kyu
// https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a

const past = (h, m, s) => {
    return ((h * 60 * 60) + (m * 60) + s) * 1000
}


// Tests
console.log(past(0,1,1)) // 61000
console.log(past(1,1,1)) // 3661000
console.log(past(0,0,0)) // 0