let reverseNumber = function(num) {
    return (
        parseFloat(
            num
            .toString()
            .split('')
            .reverse()
            .join('')
        ) * Math.sign(num)
    )
}

console.log(reverseNumber(-10.2))

console.log(reverseNumber(8779))