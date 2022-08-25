// Are you playing banjo?
// 8 Kyu
// https://www.codewars.com/kata/53af2b8861023f1d88000832

const playingBanjo = name => {
    return (name.startsWith('R') || name.startsWith('r')) ? `${name} plays banjo` : `${name} does not play banjo`
}


// Tests
console.log(playingBanjo('kayleen')) // false
console.log(playingBanjo('rob')) // true
console.log(playingBanjo('Reese')) // true

/* Pseudo Code
- if name starts with R or r, return "${name} plays banjo"`
*/