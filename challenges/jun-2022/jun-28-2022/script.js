// Growth of a population
// 7 Kyu
// https://www.codewars.com/kata/563b662a59afc2b5120000c6

const nbYear = (p0, percent, aug, p) => {
    const percentage = percent / 100
    let counter = 1
    let firstPass = p0 + p0 * percentage + aug

    do {
        let eval = firstPass + firstPass * percentage + aug
        firstPass = Math.floor(eval)
        counter++
    } while (firstPass < p)

    return counter
}


// Tests
console.log(nbYear(1000, 2, 50, 1200)) // 3
console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)) // 94