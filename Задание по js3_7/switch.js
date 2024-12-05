const day = 7;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wendsday";
        break;
    case 4:
        dayName = "Thusday";
        break;
    case 5:
        dayName = "Fruday";
        break;
    case 6:
    case 7:
        dayName = "Weekend";
        break;
    default:
        dayName = "Unkorrect day";
        break;
}
console.log(dayName);