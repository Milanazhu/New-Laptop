const globalVar = "global";

function globalFn() {
    const a = "globalFn" // переменная в глобальной функции

    function localFn1() {
        const b = "localFn1" //переменная в функции localFn1
        console.log(b, a, globalVar);

    }

    function localFn2() {
        const c = "localFn2" //Переменная в функции localFn2
        console.log(c, a, globalVar); //в локальных функциях мы не можем иметь одоступ к переменным которые назрдятся в той же области видимости то есть
        // localFn2 мы не можем иметь доступ к переменной в localFn1

    }

    localFn1();
    localFn2();

    console.log(a, globalVar);
}

globalFn();
console.log(globalVar);

//Мы имеем доступ только к внутренним областя и к областям видимости выше, но не рядом