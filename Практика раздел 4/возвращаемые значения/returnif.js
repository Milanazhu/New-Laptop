function returnIf(a, b) {
    if (a > b) {
        return "A больше В";
    }else {
    return "А меньше В";
    }
}
const result = returnIf(10, 2);
console.log(result);