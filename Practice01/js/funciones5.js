/*15) Programa una función para convertir números 
de base binaria a decimal y viceversa, 
pe. miFuncion(100,2) devolverá 4 base 10.*/


const CBinToDec = (valor, base) => {
    if(valor !== undefined 
        && typeof valor === 'string'
        && base === 10){
            let valorArray = valor.split("");
            let result=parseInt(valor.substr(0,1));
            for(let i=0;i<valorArray.length-1;i++){                
                result=result*2+parseInt(valorArray[i+1]);            
            }
            console.info(result);
    }else 
    if(valor !== undefined 
        && typeof valor === 'number'
        && base === 2){
            let cadena = "";
            while(valor>0){
                (valor%2===0)
                    ? cadena+="0"
                    : cadena+="1"
                valor = parseInt(valor/2)
            }                
            console.info(cadena.split("").reverse().join(""));
    }
    else {
        console.info("Valor o base no definidos");
    }
    
}
CBinToDec(4,2);

// 10101
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

    