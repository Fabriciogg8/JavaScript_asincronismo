# Asincronismo en JS

Asincronismo: Acción que no ocurre al mismo tiempo. Por lo tanto no se permite recibir dos acciones ni realizarlas

## Callbacks

Es la función que es pasada como parámetro de otra función. 

¿Para que sirven? Cuando programamos de manera sincrona, es decir creamos una función que recibe dos valores y los multiplicamos, este nos dará el resultado. En cambio si tenemos un dato que es el valor del dólar, y consultamos una API externa, debemos esperar el retorno de esa información para hacer la multiplicación, ahí es donde utilizamos los callback. 


## Promesas

Utilizan el objeto PROMISE para ser ejecutadas, y su concepto es recibir una promesa, de que algo va a suceder, ahora en el futuro o nunca. 

## Async - Await

Es preferible por sobre las promesas porque hace que nuestro código se comporte como sincrono. 

## Ventajas y desventajas

* CALLBACKS: 
  * ventaja: Simple(una función que recibe otra función)
  * desventaja: Composición tediosa, anidando cada vez más elementos, prolemas al llegar al CALLBACK HELL

* PROMESAS: 
  * ventaja: Facilmente enlazables .then(return..).then(..). Facil e intuitivo de leer
  * desventaja: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores

* ASYNC-AWAIT: 
  * ventaja: Se puede usar try - catch
  * desventaja: No corre en todos los navegadores (requiere transpilador)
