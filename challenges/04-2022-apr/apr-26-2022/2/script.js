// Odd or Even?
// 7 Kyu
// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

const oddOrEven = (array) => {
    let sum = array.reduce((acc, c) => acc + c, 0)
    return sum % 2 ? "odd" : "even"
}

// Tests
let arr1 = [0]
let arr2 = [0, 1, 4]
let arr3 = [0, -1, -5]

console.log(oddOrEven(arr1)) // even
console.log(oddOrEven(arr2)) // odd
console.log(oddOrEven(arr3)) // even