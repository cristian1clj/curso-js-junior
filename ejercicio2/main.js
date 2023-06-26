let free = false;

const validarCliente = (time)=>{
    let edad = prompt('Cual es tu edad?');

    if (edad > 18){
        if (time >= 2 && time < 7 && !free){
            console.log('Puedes pasar gratis');
            free = true;
        } else {
            console.log('te toca pasar la entrada');
        }
    } else {
        console.log('No puedes pasar, solo mayores de 18');
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.4);