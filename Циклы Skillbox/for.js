
//  1 часть реализации цикла for
// const contentEl = document.querySelector('.content');
// for (let i = 1; i < 32; i++) {
//     const h2El = document.createElement('h2');
//     h2El.textContent = `${i} часть страницы`;
//     contentEl.append(h2El);
// }   

// 2 часть реализации цикла for
// const product = [
//     'Хлеб', 
//     'Молоко', 
//     'Мороженое', 
//     'Кефир', 
//     'Сахар', 
//     'Соль', 
//     'Масло',
// ]

// product.forEach(function(item, i, arr) {
//     // console.log(item);
//     //console.log(i);
//     console.log(product[0]);
// });


// 3 часть реализации цикла for
// const mape = product.map(function(item, i, arr) {
//     return arr;
// });
// console.log(mape);
   

// 4 часть реализации цикла for
const contentEl = document.querySelector('.content');
const productEl = product;

for (let i = 0; i < productEl.length; i++) {
    const h3El = document.createElement('h3');
    h3El.textContent = `Товар номер &{ш + 1}`;
    const nameProduct = document.createElement('p');
    nameProduct.textContent = productEl[i];

    contentEl.append(h3El);
    contentEl.append(nameProduct);
}

// 5 часть реализации цикла for
const comment = ['good', 'bad', 'normal'];

for (let i = 0; i < comment.length; i++) {
    const h3El = document.createElement('h3');
    h3El.textContent = `reaction ${1 + 1}`;
    const nameComment = document.createElement('p');
    nameComment.textContent = comment[i];

    contentEl.append(h3El);
    contentEl.append(nameComment);
}
