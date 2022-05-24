// Remove string spaces
// 8 Kyu
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

const noSpace = (x) => {
    return x.split("").filter(x => x != " ").join("")
}

// Tests
console.log(noSpace("Hello world")) // Helloworld
console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")) // 8j8mBliB8gimjB8B8jlB