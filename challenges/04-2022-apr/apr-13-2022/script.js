// Convert number to reversed array of digits
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

const digitize = (n) => {
    let str = String(n)
    let newArr = []
    for (let i = (str.length - 1); i >= 0; i--) {
        newArr.push(Number(str[i]))
    }
    return newArr
}

// Tests
console.log(digitize(35231)) // [1, 3, 2, 5, 3]
console.log(digitize(0))// [0]

// Fancy answers that caught my eye 👀
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  // sheesh