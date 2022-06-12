// Sort Numbers
// 7 Kyu
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

const solution = nums => {
    if (!nums || nums.length === 0)
        return []
    else
        return nums.sort((a, b) => a - b)
}


// Tests
console.log(solution([1,2,3,10,5])) // [1,2,3,5,10]
console.log(solution(null)) // []
console.log(solution([20, 2, 10])) // [2, 10, 20]