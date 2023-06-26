/* Arrays */
saludos = ['hola', 'hi', 'buenos dias', 'hello'];

posicion0 = saludos[0];
posicion2 = saludos[2];
posicion1 = saludos[1];
posicion19 = saludos[19];      // => Undefined

console.log(posicion0);
console.log(posicion2);
console.log(posicion1);
console.log(posicion19);

/* Arrays asociativos */
pc = {
    nombre: "CamiloPc",
    procesador: "Intel core i5",
    ram: "16GB",
    espacio: "1TB"
}

console.log(pc["nombre"]);
console.log(pc["procesador"]);
console.log(pc["ram"]);
console.log(pc["espacio"]);

/* Bucles */
let count = 0;

console.log('While');
while (count < 1000){
    count++;
    console.log(count);

    if (count == 10){
        break;                  // break => termina el bloque
    }
}

count = 0;
console.log('do While');
do {
    count++;
    console.log(count);
} while (count < 10)

console.log('for');
for (let i = 0; i < 10; i++) {
    if (i == 4){
        continue;               // continue => se salta esa iteracion
    }
    console.log(i);
}

let animales = ['perro', 'gato', 'pato'];
for (let animal in animales){
    console.log(animales[animal]);
}

for (let animal of animales){
    console.log(animal);
}

let array1 = ['uno', 'dos', 'tres'];
let array2 = ['cuatro', array1, 'siete'];
forGlobal:                       // label => le da un alias a un bloque de codigo
for (let array in array2){
    if (array == 1){
        for (let array of array1){
            console.log(array);
            break forGlobal;
        }
    } else {
        console.log(array2[array]);
    }
}

/* Funciones */
// El scope de las variables se limita a unicamente el bloque de codigo con Let
function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar('camilo');

const despedir = function(nombre){
    console.log(`Chao ${nombre}`);
}
despedir('pedro');

/* Arrow functions */
// const llamar = (nombre) => {
//     console.log(`llamando a ${nombre}`);
// }
// const llamar = nombre => {
//     console.log(`llamando a ${nombre}`);
// }
const llamar = nombre => console.log(`llamando a ${nombre}`);           // de esta forma no hay necesidad de return

llamar('juan');