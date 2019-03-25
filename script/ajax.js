// XMLHttpRequest
function ajax(url, method, functionName, dataArray) {
    let xhttp = new XMLHttpRequest(); // создаем новый запрос
    xhttp.open(method, url, true);  //открываем соединение
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //указываем способ отправки
    xhttp.send(requestData(dataArray)); // что отправляем, инициализируем отправку

    xhttp.onreadystatechange = function () { //проверка ответа от сервера
        if (this.readyState == 4 && this.status == 200) { //ответ от сервера
            functionName(this.response); //то что выполняется по ajax запросу
        }
    }
}

function requestData(dataArr) { //функция приводит массив данных в строку для запроса
    let out = '';
    for (let key in dataArr) {
        out += `${key}=${dataArr[key]}&`;
    }
    // console.log(out);
    return out;
}