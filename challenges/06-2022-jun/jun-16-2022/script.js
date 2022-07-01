// Fake Binary
// 8 Kyu
// https://www.codewars.com/kata/57eae65a4321032ce000002d

const fakeBin = x => {
    let arr = x.split('')
    let ans = []
    arr.map(num => num < 5 ? ans.push('0') : ans.push('1'))
    return ans.join('')
}


// Tests
console.log(fakeBin('123456789')) // '000011111'