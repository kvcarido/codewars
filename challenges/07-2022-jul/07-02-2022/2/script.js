// Mumbling
// 7 Kyu
// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

const accum = s => {
    let arr = s.toLowerCase().split('')
    let ans = []

    arr.forEach((letter, index) => {
        let counter = index + 1
        ans.push(letter.repeat(counter))
    })

    /**************************************/
    /* COME BACK AND FIGURE THIS PART OUT */
    /**************************************/
    for (let letters of ans) {
        letters.charAt(0).toUpperCase()
    }

    return ans.join('-')
}

// Tests
console.log(accum("ABCDE")) // "A-Bb-Ccc-Dddd-Eeeee"
// console.log(accum("ZpglnRxqenU")) // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
// console.log(accum()) // 