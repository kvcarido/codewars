// Reverse words
// 7 Kyu
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

const reverseWords = (str) => {
    let arr = str.split(" ")
    let test = arr.map(word => word.split("").reverse().join(""))
    return test.join(" ")
}

// Tests
console.log(reverseWords('Kayleen')) // 'neelyaK'
console.log(reverseWords('apple')) // 'elppa'
console.log(reverseWords('a b c d')) // 'a b c d'
console.log(reverseWords('The quick brown fox jumps over the lazy dog.')) // 'ehT kciuq nworb xof spmuj revo eht yzal .god'