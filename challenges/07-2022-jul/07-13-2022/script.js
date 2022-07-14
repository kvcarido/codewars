// Credit card mask
// 7 Kyu
// https://www.codewars.com/kata/5412509bd436bd33920011bc

const maskify = cc => {
    let length = cc.length
    if (length <= 4)
        return cc
    else {
        let indexToHash = length - 4
        let arr = cc.split('')
        for (let i = 0; i < indexToHash; i++){
            arr.splice(i, 1, '#')
        }
        return arr.join('')
    }
}


// Tests
console.log(maskify('1')) // '1'
console.log(maskify('12345')) // '#2345'
console.log(maskify('4892749')) // '###2749'
console.log(maskify('4556364607935616')) // '############5616'

// Pseudo code
/*
- set variable for cc.length
- if length < 4, return cc
- else, set variable hashed = length - 4
- create loop

*/