// The highest profit wins!
// 7 Kyu
// https://www.codewars.com/kata/559590633066759614000063/train/javascript

const minMax = (arr) => {
    let sorted = arr.sort((a,b) => a-b)
    let length = sorted.length
    let ans = []
    if (length < 2) {
        ans.push(sorted[0])
        ans.push(sorted[0])
    } else {
        ans.push(sorted[0])
        ans.push(sorted[length-1])
    }
    return ans
}


// Tests
console.log(minMax([1,2,3,4,5])) // 1, 5
console.log(minMax([2,100,65,4,81,3])) // 2, 100
console.log(minMax([11,0,72,33])) // 0, 72
console.log(minMax([1])) // 1, 1

// Really cool answer, spread operator
function minMax2(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }