/* Clases */
class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `Este ${especie} tiene ${edad} anios y es de color ${color}`;
    }

    verInformacion(){
        console.log(this.informacion);
    }
}


class Perro extends Animal {
    constructor(especie, edad, color, raza){
        super(especie, edad, color);
        this.raza = null;
    }

    set setRaza(nombreRaza){
        this.raza = nombreRaza;
    }

    get getRaza(){
        return this.raza;
    }

    ladrar(){                   // static ladrar(){   => se usa el metodo sin necesidad de instanciar un objeto
        console.log('waw waw');
    }
}

const perro = new Perro('perro', 4, 'negro', 'doberman');
perro.verInformacion();
perro.ladrar();
// Perro.ladrar();
perro.setRaza = 'pastor aleman';
console.log(perro.getRaza);