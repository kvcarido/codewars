// Opposites attract
// 8 Kyu
// https://www.codewars.com/kata/555086d53eac039a2a000083/

const lovefunc = (flower1, flower2) => {
    return (flower1 + flower2) % 2 === 0 ? false : true
}

// Tests
console.log(lovefunc(1,4)) // true
console.log(lovefunc(2,2)) // false
console.log(lovefunc(0,1)) // true
console.log(lovefunc(0,0)) // false
