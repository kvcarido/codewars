// Friend or foe?
// 7 Kyu
// https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

const friend = (friends) => {
    let ans = []
    friends.forEach(friend => {
        if (friend.length == 4)
            ans.push(friend)
    })
    return ans
}

// Could refactor and use arr.filter() for cleaner code
// Comeback and review!

// Tests
console.log(friend(["Ryan", "Kieran", "Mark"])) // ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])) // ["Ryan"]
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])) // ["Jimm", "Cari", "aret"]