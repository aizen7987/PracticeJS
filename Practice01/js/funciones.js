/* 1) Programa una función que cuente el 
número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10. */

const ContarTexto = (cadena) => {
    console.log(`El tamaño de la cadena es ${cadena.length}`);
}

ContarTexto("hola");

/*2) Programa una función que te devuelva 
el texto recortado según el número de 
caracteres indicados, pe. miFuncion("Hola Mundo", 4) 
devolverá "Hola".*/

const RecortarTexto = (cadena, cantidad) => {
    console.log(cadena.substr(0,cantidad));
}

RecortarTexto("Hola mundo", 2)

/*3) Programa una función que dada una 
String te devuelva un Array de textos 
separados por cierto caracter, 
pe. miFuncion('hola que tal', ' ') 
devolverá ['hola', 'que', 'tal'].*/

const SepararTexto = (cadena, separador) => {
    let arrayCadena = cadena.split(separador);
    console.log(arrayCadena);
}

SepararTexto("Texto para separar", " ");

/*4) Programa una función que repita un texto 
X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.*/

const RepetirTexto = (cadena, cantidad) => {
    let textoCompleto="";
    for(var i=0;i<cantidad;i++){
        textoCompleto += " " + cadena
    }
    
    console.log(textoCompleto);
}

RepetirTexto("Hola mundo", 4);