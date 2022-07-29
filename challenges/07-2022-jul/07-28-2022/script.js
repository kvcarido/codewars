// Number of people in the bus
// 7 Kyu
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

const number = busStops => {
    let counter = 0
    busStops.forEach(x => {
        counter += x[0]
        counter -= x[1]
    })
    return counter
}


// Tests
console.log(number([[10,0],[3,5],[5,8]])) // 5
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])) // 17
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]])) // 21
console.log(number([[0,0]])) // 0


/* Pseudo Code
- declare counter
- iterate thru array busStops
    - x[0] += counter
    - x[1] -= counter
return counter
*/

/* 
Cool opportunity to use arr.reduce()

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

*/