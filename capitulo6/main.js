/* seleccion de elementos */
const titulo = document.getElementById('tituloPrincipal');
console.log(titulo);

const parrafos = document.getElementsByTagName('p');
console.log(parrafos);

const parrafo = document.querySelector('.parrafo');
console.log(parrafo);

const parrafos2 = document.querySelectorAll('.parrafo');
console.log(parrafos2);


const rangoEtario = document.querySelector('.rangoEtario');

rangoEtario.setAttribute('type', 'text');
console.log(rangoEtario.getAttribute('type'));

rangoEtario.removeAttribute('type', '');


/* classList */
parrafo.classList.add('miParrafo');           // le agrega una clase
parrafo.classList.remove('miParrafo');        // le remueve una clase
let clase = parrafo.classList.item(0);            // retorna la clase en la posicion dada
console.log(clase);
clase = parrafo.classList.contains('parrafo');    // retorna true si la el elemento contiene la clase dada
console.log(clase);
parrafo.classList.toggle('otraClase');         // si tiene la clase dada, la remueve. si no, la agrega
parrafo.classList.replace('parrafo', 'laCambie');    // cambia una clase por otra


/* obtencion y modificacion de elementos */
let resultado = parrafo.textContent;         // devuelve el texto de cualquier nodo
console.log(resultado);

resultado = parrafo.innerHTML;             // devuelve el contenido html de un elemento
console.log(resultado);

resultado = parrafo.outerHTML;            // devuelve el html completo del elemento
console.log(resultado);

/* creacion de elementos */
const contenedor = document.querySelector('.contenedor');
// const textDelItem = document.createTextNode('este es un texto');    // crea un nodo de texto
const fragmento = document.createDocumentFragment();

for (let i = 0; i < 20; i++) {
    const item = document.createElement('LI');                   // Se crea un elemento
    item.innerHTML = `este es un texto ${i}`;
    fragmento.appendChild(item);
}
contenedor.appendChild(fragmento);

/* obtencion de childs */
const primerHijo = contenedor.firstElementChild;         // trae el primer hijo
console.log(primerHijo);
const ultimoHijo = contenedor.lastElementChild;          // trae el segundo hijo
console.log(ultimoHijo);
const hijos = contenedor.childNodes;                     // trae todos los hijos
console.log(hijos);

/* metodos de hijos */
const h2 = document.createElement('H2');
h2.innerHTML = 'este es un h2';

const h3 = document.querySelector('.h3');
contenedor.replaceChild(h2, h3);            // reemplazar un hijo por otro elemento

contenedor.removeChild(h2);                 // remueve un hijo