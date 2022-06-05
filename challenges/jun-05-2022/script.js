// Descending order
// 7 Kyu
// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = n => {
    let arr = n.toString().split("").sort().reverse().join("")
    return Number(arr)
}


// Tests
console.log(descendingOrder(12345)) // 54321
console.log(descendingOrder(1021)) // 2110
console.log(descendingOrder(36492)) // 96432
console.log(descendingOrder(15)) // 51