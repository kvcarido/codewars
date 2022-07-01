// No oddities here
// 7 Kyu
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce/train/javascript

const noOdds = values => {
    // let ans = []
    // values.forEach(value => value % 2 === 0 ? ans.push(value) : -1)
    // return ans

    return values.filter(value => value % 2 === 0)
}


// Tests
console.log(noOdds([0, 1])) // [0]
console.log(noOdds([0,1,2,3])) // [0,2]
console.log(noOdds([3, 20, 43, 2, 17, 30, 100])) // [20, 2, 30, 100]