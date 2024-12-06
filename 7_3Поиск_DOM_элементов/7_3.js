function find(arr, search) {
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
function listrender(arr) {
    const listEl = document.createElement('ul');

    for(let i = 0; i < arr.length; i++) {
        const liEl = document.createElement("li") // создаем новый элемент li
        liEl.textContent = `${i+1}) ${arr[i]}` // добавляем текст в li и с помощью знака § передаем индекс в массиве  `${i}` 
        listEl.append(liEl); // тут я добавила liEL в listEl в конец, а создала я этот listEl элемент в 15 строке 
    }
    document.body.append(listEl);
}

const buttonSearch = document.createElement("button"); 
buttonSearch.textContent = "button";
document.body.append(buttonSearch);

buttonSearch.onclick = function () {
    const search = prompt("Enter the product name:");
    const findIndex = find(product,search)
    if(findIndex > -1) {
        document.querySelector(`li:nth-child(${findIndex + 1})`).style.color = "red";
    } else {
        alert("Product not found")
    }
}
listrender(product);



