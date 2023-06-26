const definirCompra = (n)=>{
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.6 && din < 1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: bombon de heladix`);
    if (din >= 1.7 && din < 1.8) return (`${n}: bombon de heladovich`);
    if (din >= 1.8 && din < 2.9) return (`${n}: bombon de helardo`);
    if (din >= 2.9) return (`${n}: helado de confites o pote de helado`);
    else return (`${n}: No te alcanza para ningun helado`);
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Roberto"));
console.log(definirCompra("Pedro"));