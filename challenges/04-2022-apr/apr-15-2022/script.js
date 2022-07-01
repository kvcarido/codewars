// Century From Year
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

const century = (year) => {
    return Math.ceil(year / 100)
}

// Tests
console.log(century(89)) // 1
console.log(century(1705)) // 18
console.log(century(1900)) // 19
console.log(century(1601)) // 17
console.log(century(2000)) // 20
console.log(century(7592)) // 76

// Notes
// This one had me feeling foolish, overthinking the process.. Glad I was able to resort to Math.ceil() instead of being stubborn trying to make Math.floor() work lmao