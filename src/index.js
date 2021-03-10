module.exports = function reverse(n) {
    let arrOfNumbers = n.toString().split('');
    let reversedArr = [];

    arrOfNumbers.forEach(item => reversedArr.unshift(item));
    return parseInt(reversedArr.join(''));

}

// console.log(reverse(123))

