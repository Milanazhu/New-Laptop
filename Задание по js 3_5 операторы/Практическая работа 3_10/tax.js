
let powerCar = prompt("Add power your car");

if (powerCar < 100){
    console.log("Введенная сумма =", powerCar);
    console.log(powerCar * 12);
} else if (100 <= powerCar < 125){
    console.log("Введенная сумма =", powerCar);
    console.log("Сумма налога =", powerCar * 25);
} else if (125 <= powerCar < 150){
    console.log("Введенная сумма =", powerCar);
    console.log("Сумма налога =", powerCar * 35);
} else if (150 <= powerCar < 175){
    console.log("Введенная сумма =", owerCar);
    console.log("Сумма налога =", powerCar * 45);
} else if (175 <= powerCar < 200){
    console.log("Введенная сумма =", powerCar);
    console.log("Сумма налога =", powerCar * 50);
} else if (200 <= powerCar < 225){
    console.log("Введенная сумма =", powerCar);
    console.log("Сумма налога =", powerCar * 65);
} else if (225 <= powerCar < 250){
    console.log("Введенная сумма =", powerCar);
    console.log("Сумма налога =", powerCar * 75);
} else if (powerCar > 250) {
    console.log("Введенная сумма =", powerCar);
    console.log("Сумма налога =", powerCar * 150);
} else {
    console.log("Please enter the correct value");
};


