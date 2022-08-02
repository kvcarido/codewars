// Remove anchor from URL
// 7 Kyu
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

const removeUrlAnchor = url => {
    let index = url.indexOf('#')
    return index === -1 ? url : url.slice(0, index)
}


// Tests
console.log(removeUrlAnchor('www.codewars.com#about')) // 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')) // 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')) // 'www.codewars.com/katas/'
