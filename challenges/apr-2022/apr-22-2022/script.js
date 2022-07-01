// Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/train/javascript

const abbrevName = (name) => {
    let arr = name.split(' ')
    let initials = []
    arr.map(element => {
        initials.push(element[0])
    })
    return initials.toString().toUpperCase().replace(',', '.')
}

// Tests
// console.log(abbrevName("Kayleen Carido"))

console.log(abbrevName("Sam Harris")) // S.H
console.log(abbrevName("Patrick Feenan")) // P.F
console.log(abbrevName("Evan Cole")) // E.C
console.log(abbrevName("P Favuzzi")) // P.F
console.log(abbrevName("kayleen carido"))