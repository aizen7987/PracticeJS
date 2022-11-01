/*18) Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/


const contarLetras = (cadena,tipo) =>{
    if(typeof tipo !== 'string')
        return;

    if(tipo==='V'){
        (cadena!==undefined)
            ? console.info(cadena.match(/[aeiou]/gi).length)
            : console.warn('Cadena no valida');
    }

    if(tipo==='C'){
        (cadena!==undefined)
            ? console.info(cadena.match(/[bcdfghjklnmpqrstvwxyz]/gi).length)
            : console.warn('Cadena no valida');
    }
    
}

contarLetras("abngeebbni","C");

/*19) Programa una función que valide que un 
texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
devolverá verdadero.*/




/*20) Programa una función que valide que un texto sea 
un email válido, pe. miFuncion("jonmircha@gmail.com") 
devolverá verdadero.*/