function first(){
    setTimeout(function(){ // Имитируем задержку то есть число 1 выведется после того как выведется число 2
      console.log(1);
    }, 500 );
  }
  function second(){
    console.log(2);
  }
  first();

  second();



  function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
  }
  
  //Вызовем обновлённую функцию следующими образом:
  
  doHomework('math', function() {
    alert('Finished my homework');//Не выполнится пока не будет  выполнена функция выше
  });

  