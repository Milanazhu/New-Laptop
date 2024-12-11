function filtr (array,minAge){
    const result = []; // создала пустой массив для результата именно внутри этой функции для избежания изменения исходного массива
    for(const item of array) {
        if(item >= minAge){
            result.push(item);
        } 
    }
    return result; // вернула массив с положительными значениями, которые больше или ра��ны минимальному возрасту 18.
}

const array = [11, 23, 18, 39, 148, 27, 5];
 
function renderList (array) {
    listEl.innerHTML = " ";
for(let i = 0; i<array.length; i++){
    const liEl = document.createElement('li');
    liEl.textContent = `${i+1} возраст: ${array[i]}`; // добавляем текст в li и с помощью знака § передаем индекс в массиве  `${i}` 
    listEl.append(liEl);
   }
}

const fultrBth = document.createElement('button');
fultrBth.textContent = 'Фильтровать';
document.body.append(fultrBth);
fultrBth.onclick = function() {
    const minAge = prompt('Enter your number');
    const result = filtr(array,minAge);
    renderList(result);
}
const listEl = document.createElement('ul');
document.body.append(listEl);

renderList(array);