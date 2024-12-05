function sum(a, b, c) { //function sum(a, b, c) - если бы было так то не было бы указано дефолтных значений что увеличивает вероятность ошибки
    if (typeof a === "number" && typeof b === "number" && typeof c === "number"){
        console.log(a + b +c);
    }else {
        console.log("Неверные параметры");
    }
};

sum(2, 4, 5);