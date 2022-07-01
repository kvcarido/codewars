// Get the middle character
// 7 Kyu
// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

const getMiddle = (s) => {
    let chars = s.length % 2

    if (!chars) {
        // even number
        let evenMiddle = s.length / 2
        return `${s[evenMiddle-1]}${s[evenMiddle]}`
    } else if (chars) {
        // odd number
        let oddMiddle = Math.floor((s.length/2))
        return s[oddMiddle]
    } else if (s.length == 1)
        return s
}


// Tests
console.log(getMiddle("test")) // es
console.log(getMiddle("testing")) // t
console.log(getMiddle("middle")) // dd
console.log(getMiddle("A")) //