// Printer errors
// 7 Kyu
// https://www.codewars.com/kata/56541980fa08ab47a0000040

const printerError = s => {
    let control = "abcdefghijklm".split("")
    let counter = s.split("").filter(x => control.indexOf(x) === -1).length
    return `${counter}/${s.length}`
}


// Tests
console.log(printerError("alskdjfwoienm")) // 


/* Pseudo Code
- create a string with letters a thru m
- create counter
- create s.length
- 
*/