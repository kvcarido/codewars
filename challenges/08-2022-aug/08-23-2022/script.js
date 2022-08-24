// L1: Set an alarm
// 8 Kyu
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

const setAlarm = (employed, vacation) => {
    return employed && !vacation

}


// Tests
console.log(setAlarm(true, true)) // false
console.log(setAlarm(false, true)) // false
console.log(setAlarm(true, false)) // true

/* Pseudo Code
- trying to find circumstances where you'd need to set an alarm
- if true && false, return true
    - else return false
*/