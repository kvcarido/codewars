// Row Weights
// 7 Kyu
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

const rowWeights = (array) => {
    let team1 = 0
    let team2 = 0
    let tracker = true

    for (let weight of array) {
        if (tracker) {
            team1 += weight
            tracker = false
        } else {
            team2 += weight
            tracker = true
        }
    }
    
    return [team1, team2]
}


// Tests
console.log(rowWeights([80])) // [80, 0]
console.log(rowWeights([100, 50])) // [100, 50]
console.log(rowWeights([50,60,70,80])) // [120, 140]


// Pseudo code
/*
- create 2 variables: `team1` and `team2`
- create variable `tracker` as boolean
    - true: team1
    - false: team2
- iterate through `array`
    - if true, add value to `team1`
    - if false, add value to `team2`
- return [team1, team2]
*/