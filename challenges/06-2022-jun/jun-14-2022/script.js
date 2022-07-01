// Get the mean of an array
// 8 Kyu
// https://www.codewars.com/kata/563e320cee5dddcf77000158

const getAverage = marks => {
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
}


// Tests
console.log(getAverage([2, 2, 2, 2])) // 2
console.log(getAverage([1, 2, 3, 4, 5])) // 3
console.log(getAverage([10, 20, 30])) // 20