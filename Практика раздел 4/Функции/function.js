const b = 20; //глобальная 

function calc() {
    const a = 10; // локальная видимость
    console.log(a + b);
}

calc();

console.log(a);
console.log(b);