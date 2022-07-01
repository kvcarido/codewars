// Two to One
//  7 Kyu
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

const longest = (s1, s2) => {
    let sortedS1 = new Set(s1.split('').sort())
    let sortedS2 = new Set(s2.split('').sort())
    let ans1 = [...sortedS1].join('')
    let ans2 = [...sortedS2].join('')
    return ans1.length > ans2.length ? ans1 : ans2
}


// Tests
console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding")) // "abcdefghilnoprstu"
console.log(longest("kayleen", "jonathan")) // ahjnot
// aelny
// ahjnot