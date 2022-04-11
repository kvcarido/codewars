// Summation
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030

const summation = (num) => {
    sum = 0
    for (let i = 1; i <= num; i++) 
        sum += i
    return sum
}

// Tests
summation(3) // 10
summation(10) // 55