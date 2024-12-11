const number = [1, 2, 3]
const number2 = JSON.parse(JSON.stringify(number))

number2.push(4)

console.log(number2);
console.log(number);

