// Highest and lowest
// 7 Kyu
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// String ladder

const highAndLow = (numbers) => {
    let arr = numbers.split(" ")
    let sorted = arr.sort((a,b) => a - b)
    let highest = sorted[sorted.length - 1]
    let lowest = sorted[0]
    return `${highest} ${lowest}`
}

// Tests
console.log(highAndLow("1 2 3 4 5")) // 5 1
console.log(highAndLow("1 2 -3 4 5")) // 5 -3
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")) // 42 -9