// Keep Hydrated!
// https://www.codewars.com/kata/582cb0224e56e068d800003c

let litres = (time) => {
    const hydrate = 0.5
    const rounded = Math.floor(time)
    return drink = Math.floor((rounded * hydrate))
}

// Tests
console.log(litres(3)) // 1
console.log(litres(6.7)) // 3
console.log(litres(11.8)) // 5
