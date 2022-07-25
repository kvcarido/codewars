// Exes and ohs
// 7 Kyu
// https://www.codewars.com/kata/55908aad6620c066bc00002a

const XO = str => {
    let x = 0, o = 0
    str.toLowerCase().split('').filter(x => x === 'x' || x === 'o').map(el => el === 'x' ? x++ : o++)
    return x === o ? true : false
}


// Tests
console.log(XO('xO')) // true
console.log(XO('xxxm')) // false
console.log(XO('OoXoXx')) // true
console.log(XO('Oo')) // false

/* Pseudo Code
- str.toLowerCase().split('')
- 
*/