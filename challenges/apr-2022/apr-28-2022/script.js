// Nth Power
// 7 Kyu
// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

const index = (arr, n) => {
    return arr[n] != undefined ? arr[n] ** n : -1
}

// Tests
console.log(index([1,2,3,4], 2)) // 9
console.log(index([1,3,10,100], 3)) // 1000000
console.log(index([1,2], 3)) // -1