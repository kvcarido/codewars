// Sort and star
// 8 Kyu
// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e

const twoSort = s => {
    s.sort((a,b) => (a < b) ? -1 : 1)
    return s[0].split("").join("***")
}

// Tests
console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])) // "b***i***t***c***o***i***n"
