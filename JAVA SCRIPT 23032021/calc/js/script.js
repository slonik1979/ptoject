
const inputRub = document.querySelector('#rub'),
    inputUsd = document.querySelector('#usd');
    
    inputRub.addEventListener('input', () => {
        const inquiry = new XMLHttpRequest(); // первый объект

        //методы XMLHttpRequest()
        // первый метод open(metod, url, async, login, password)
        inquiry.open('GET', 'js/current.json');
        inquiry.setRequestHeader('Content-type', 'application/json', 'charset=utf-8'); // заголовок HTTP
        inquiry.send(); // отправка запроса (метод send())

        // свойства 
        // 1. status (200-ок)
        // 2. statusText
        // 3. response (ответ)
        // 4. readyState (текущее состояние запроса 4-ок)

        // События
        // 1. readystatechange
        // inquiry.addEventListener('readystatechange', () => { // это событие отслеживает статус готовности запроса
        //     if (inquiry.readyState === 4 && inquiry.status === 200) {
        //         const data = JSON.parse(inquiry.response); // получаем ответ(response) от сервера js/current.js 
        //         inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
        //       } else {
        //         inputUsd.value = "Что-то пошло не так";
        //       }
        // });
        
        // 2. load 
        inquiry.addEventListener('load', () => { // это событие отслеживает статус готовности запроса
          if (inquiry.status === 200) {
              const data = JSON.parse(inquiry.response); // получаем ответ(response) от сервера js/current.js 
              inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
            } else {
              inputUsd.value = "Что-то пошло не так";
            }
      });
    });
    