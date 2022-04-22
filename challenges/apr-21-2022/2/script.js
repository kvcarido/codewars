// Quarter of the year
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/train/javascript

const quarterOf = (month) => {
    if (month <= 3)
        return 1
    else if (month <= 6)
        return 2
    else if (month <= 9)
        return 3
    else if (month <= 12)
        return 4
    else
        return -1
}


// Tests
console.log(quarterOf(3)) // 1
console.log(quarterOf(8)) // 3
console.log(quarterOf(11)) // 4