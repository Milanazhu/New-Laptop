function website (age) {
    if (age >= 18) {
        alert('Добро пожаловать на сайт');
    } 
    else {
        alert('Доступ запрещен');
    }
}

function processUserInput (callback) {
   const age = prompt('Add you age');
   callback(age);
};

processUserInput(website);

