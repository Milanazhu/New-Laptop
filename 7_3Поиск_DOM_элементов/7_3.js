function filter(arr, search) {
    let result = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result = i;
            break;
        }
    }
    return result;
}

const product = ['apple', 'banana', 'orange', 'pear',];

const listEl = document.createElement('ul');

for(let i = 0; i < product.length; i++) {
    const liEl = document.createElement("li") // создаем новый элемент li
    liEl.textContent = `${i}) ${product[i]}` // добавляем текст в li и с помощью знака § передаем индекс в массиве  `${i}` 
    listEl.append(liEl); // добавляем li в ul
}

document.body.append(listEl);