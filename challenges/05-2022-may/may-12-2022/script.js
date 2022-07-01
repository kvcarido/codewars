// Sum of two lowest positive integers
// 7 Kyu
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

const sumTwoSmallestNumbers = (numbers) => {
    let sorted = numbers.sort((a, b) => a - b)
    return sorted[0] + sorted[1]
}

// Tests
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77])) // 7
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43])) // 6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7])) // 10