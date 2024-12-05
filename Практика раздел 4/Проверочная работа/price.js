 function priceEnd(priceItem, amountItem, discountItem) {
    const d = ((priceItem * amountItem) - (priceItem/100*discountItem));
     return d;
 }
priceEnd(25000, 3, 20);
 
 const result = priceEnd(25000, 3, 20); 
 console.log(result);
 