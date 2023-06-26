/* Metodos de cadena */
let cadena = 'cadena de prueba';

let resultado = cadena.concat(' hola');      // concatena dos strings
console.log(resultado);

resultado = cadena.startsWith('cadena');     // devuelve true si la cadena empieza con el parametro
console.log(resultado);

resultado = cadena.endsWith('prueba');       // devuelve true si la cadena termina con el parametro
console.log(resultado);

resultado = cadena.includes('de');           // devuelve true si la cadena contiene el parametro
console.log(resultado);

resultado = cadena.indexOf('de');            // devuelve la posicion del parametro en la cadena, si no esta, devuelve -1
console.log(resultado);

resultado = cadena.lastIndexOf('de');        // devuelve la posicion del parametro en la cadena, pero al ultima vez que aparece en la cadena
console.log(resultado);


resultado = cadena.padStart(20, '1');        // rellena la cadena al inicio de esta con el parametro hasta llegar al tamaño dado (20 en este caso)
console.log(resultado);

resultado = cadena.padEnd(20, '1');          // lo mismo que padStart pero al final
console.log(resultado);

resultado = cadena.repeat(2);                // repite la cadena las veces pasadas por parametro
console.log(resultado);


resultado = cadena.split(' ');              // divide la cadena segun el parametro (espacio en este caso)
console.log(resultado);

resultado = cadena.substring(0, 4);         // divide la cadena de acuerdo a las posiciones pasadas por parametro
console.log(resultado);

resultado = cadena.toLowerCase();           // pasa la cadena a minuscula
console.log(resultado);

resultado = cadena.toUpperCase();           // pasa la cadena a mayuscula
console.log(resultado);

resultado = cadena.split(' ').toString();   // pasa a string (array, numero...)
console.log(resultado);

resultado = '      asdads       '.trim();                  // remueve los espacios al inicio y al final de la cadena
console.log(resultado);

resultado = '      asdads       '.trimEnd();                  // remueve los espacios al final de la cadena
console.log(resultado);

resultado = '      asdads       '.trimStart();                  // remueve los espacios al inicio de la cadena
console.log(resultado);



/* Metodos de array */
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Modifican el array
let array2 = array.pop();                // elimina el ultimo elemento y lo retorna
console.log(array2);

array2 = array.shift();                  // elimina el primer elemento y lo retorna
console.log(array2);

array2 = array.push(20);             // agrega un elemento y retorna la cantidad de elementos resultante en el array
console.log(array2);

array2 = array.reverse();                // invierte el array
console.log(array2);

array2 = array.unshift(1, 3);            // agrega elementos al inicio del arreglo
console.log(array);

array2 = array.sort();            // ordena los elementos del arreglo de forma alfabetica
console.log(array);

array2 = array.splice(2, 4, 'arroz', 'pera');            // elimina desde una posicion la cantidad de elementos dada, ademas, puede agregar elementos
console.log(array);


// no modifican el array
array2 = array.join(' - ');            // convierte el array a string y usar el separador que se desee
console.log(array2);

array2 = array.slice(2, 4);            // como el substring  pero para array
console.log(array2);

 // tambien funcionan para array el toString, indexOf, lastIndexOf, includes


let array3 = array.filter(num => num < 4);      // devuelve los elementos que cumplan una condicion
console.log(array3);

array3 = array.forEach(num => console.log(num));   // itera