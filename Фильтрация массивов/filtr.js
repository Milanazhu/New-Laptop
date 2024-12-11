const array = [11, 23, 18, 39, 148, 27, 5];

function filtr (array,minAge){
    const result = []; // создала пустой массив для результата именно внутри этой функции для избежания изменения исходного массива
    for(const item of array) {
        if(item >= minAge){
            result.push(item);
        } 
    }
    return result; // вернула массив с положительными значениями, которые больше или ра��ны минимальному возрасту 18.
}
console.log(filtr(array, 18));// вызвала функцию с массивом и минимальным возрастом 18);
console.log(filtr(array, 27)); 