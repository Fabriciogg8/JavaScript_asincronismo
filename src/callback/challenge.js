let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

// Creamos la función con dos parametros, la url de la API, y el callback
function fetchData(url_api, callback){
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true); 
    xhttp.onreadystatechange = function (event){
        if(xhttp.readyState === 4) {
            if(xhttp.status === 200) {
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                const error = new Error('Error ' + url_api);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}

// Cuando hacemos la llamada a la función, el primer argumento es la API, y el segundo nuevamente la función,
// por lo que vamos encadenando los llamados. 

// Primer llamada a la función
fetchData(API, function(error1, data1){
    if(error1) return console.error(error1);
    // Segunda llamada a la función
    fetchData(API + data1.results[8].id, function(error2, data2) {
        if(error2) return console.error(error2);
        // Tercer llamada a la función
        fetchData(data2.origin.url, function(error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        });
    })
})

