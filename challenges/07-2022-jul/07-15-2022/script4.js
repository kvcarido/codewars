// You only need one - beginner
// 8 Kyu
// https://www.codewars.com/kata/57cc975ed542d3148f00015b

const check = (a, x) => {
    return a.indexOf(x) != -1 ? true : false
}


// Tests
console.log(check([66, 101], 66)) // true
console.log(check(['what', 'a', 'great', 'kata'], 'kat')) // false