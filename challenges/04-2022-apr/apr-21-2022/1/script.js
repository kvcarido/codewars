// Beginner Series #1 School Paperwork
// https://www.codewars.com/kata/55f9b48403f6b87a7c0000bd/train/javascript

const paperwork = (n, m) => {
    return (n < 0 || m < 0 ? 0 : n * m)
}

// Tests
console.log(paperwork(5, 5)) // 25
console.log(paperwork(-5, 5)) // 0