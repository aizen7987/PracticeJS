/*15) Programa una función para convertir números 
de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.*/





/*16) Programa una función que devuelva el monto 
final después de aplicar un descuento a una 
cantidad dada, pe. miFuncion(1000, 20) 
devolverá 800.*/


const Descontar = (monto = 0, descuento = 0) =>
    (monto !== undefined 
        && descuento !== undefined
        && monto > 0
        && descuento > 0)
            ? console.info(monto-(monto*descuento/100))
            : console.warn("Los valores ingresados no son validos");

Descontar(1000,20);


/*17) Programa una función que dada una fecha 
válida determine cuantos años han pasado hasta 
el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020).*/

const CalcularEdad = (fecha) => {
    let hoy = new Date();
    let diferencia = Math.abs(hoy-fecha);
    if(fecha!==undefined){
        return diferencia/(1000*3600*24)/365;
    }        
}

console.info(CalcularEdad(new Date(1984,4,23)));

    