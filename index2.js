let xhr = new XMLHttpRequest();

xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'text';
xhr.send();
xhr.onload = function() {
    let responseObj = xhr.response;
    let obj = JSON.parse(responseObj);
    for (let i = 0; i < obj.length; i++){
        let x = obj[i].email;
        document.getElementById('outputEmail').innerHTML = x;
    }
}
