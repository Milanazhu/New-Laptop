let pass;
let counter = 0;
do {
    if(counter > 1) {
        if (confirm('Вы хотите продолжить?')) {
            if (confirm === true) {
                break;
        }
    }
    }
    pass = prompt('Введите пароль');
    counter++;
    
} while (pass !== 'passs');