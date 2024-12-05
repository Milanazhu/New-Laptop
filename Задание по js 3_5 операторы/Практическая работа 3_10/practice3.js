let card = prompt("deposite cash");
const cardInside = true;
const balance = 500;

if (card <= balance && cardInside == true) {
    console.log(card);
    console.log("Операция выполняется"); 
} else if (card > balance || cardInside == false) {
    console.log(card);
    console.log("Операция отклонена");
} else {
    console.log("Error");
};