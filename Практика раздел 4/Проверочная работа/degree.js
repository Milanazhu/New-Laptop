//Создать две функции для того что бы можно было переводить градусы
function degreeF(f) {
    let celsius = (f-32)/1.8;
    return celsius;
}
degreeF();

const result_f = degreeF(4);
console.log(result_f);

function degreeC(c) {
    let fahrenheit = c * 1.8 + 32;
    return fahrenheit;
}
const result_c = degreeC(4);
console.log(result_c);
