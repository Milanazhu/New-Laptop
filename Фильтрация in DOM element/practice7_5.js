function filter(userAge, minArg) {
    const result = [];
    for(const item of userAge) {
        if (item >= minArg) {
            result.push(item);
        }
    }
    return result
}

const userAge = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

const list = document.createElement("ul");
document.body.append(list);
function rendering (userAge) {
    list.innerHTML = " ";
    for(let i = 0; i < userAge.length; i++) {
        const li = document.createElement("li");
        li.textContent = `user ${i+1} age: ${userAge[i]}` // тут указала порядковый номер и ключ 
        list.append(li);
    }
}

const buttonClick = document.createElement("button");
buttonClick.textContent = "Фильтровать";
document.body.append(buttonClick);

buttonClick.onclick = function() {
    const minArg = prompt("Enter minimum age");
    const result = filter(userAge, minArg)
    rendering(result);
} 


