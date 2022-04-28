function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calc(2,3,sum));


function date(callback){
    console.log("Primera fecha: ", new Date);
    setTimeout(function(){
        let date = new Date;
        callback(date); // Recibe como argumento la variable date, y al estar como argumento de otra funcion,
    }, 2000)            // debe esperar 2 segundos en imprimirse. 
}


// Imprime lo que recibe por parametro
function printDate(dateNow){
    console.log("Segunda fecha:", dateNow);
}

date(printDate); 

// Explicación: Ejecutamos la función date y como argumento le colocamos printDate (que es el callback). 
// Esta segunda función lo que hace es imprimir lo que recibe por parametro. 
// Lo que recibirá se encuentra dentro de la función date, y es la variable date. 
// A su vez printDate se encuentra dentro de otra función llamada setTimeout  