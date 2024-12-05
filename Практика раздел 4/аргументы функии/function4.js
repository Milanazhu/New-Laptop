//const age = 20; //глобальная 

function checkAge(age) { // в скобочках обозначен параметр функции
    if (age <18) {
        console.log("An underage");
    } else {
        console.log("Adult");
    }
}

checkAge(21);
checkAge(16);