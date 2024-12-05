// function pigsite (type) {
//     const pig = 'Milana';
//     if (type === pig) {
//        alert('Your is a pig');
//     } else {
//         alert('Your isnt pig');
//     }
// }

// function access (callback) {
//     const type = prompt('Who are you?');
//     callback(type);
// }
// access(pigsite);
function нагретьВоду(callback) {
    console.log("Нагреваем воду...");
    setTimeout(() => { // Представим, что нагревание воды занимает время
      console.log("Вода нагрета!");
      callback(); // Вызываем следующий шаг, когда вода нагрета
    }, 1000);
  }
  
  function перемолотьКофе(callback) {
    console.log("Перемалываем кофе...");
    setTimeout(() => {
      console.log("Кофе перемолот!");
      callback();
    }, 500);
  }
  
  function залитьКофеВодой(callback) {
    console.log("Заливаем кофе водой...");
    setTimeout(() => {
      console.log("Кофе готов!");
      callback();
    }, 700);
  }
  
  function податьКофеПользователю() {
    console.log("Подаем кофе пользователю. Наслаждайтесь!");
  }
  
  // Запускаем процесс приготовления кофе
  нагретьВоду(() => {
    перемолотьКофе(() => {
      залитьКофеВодой(податьКофеПользователю);
    });
  });

