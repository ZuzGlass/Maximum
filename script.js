const max3 = (num1, num2, num3) => {
    if (num1 >= num2 && num1 >= num2) {
        return num1
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2
    }
    else {
    return num3
    }
}

const numbers1 = max3(6, 2, 1)
const numbers2 = max3(6, 8, 1)
const numbers3 = max3(6, 8, 10)
const numbers4 = max3(6, 6, 2)

console.log(numbers1, numbers2, numbers3, numbers4)