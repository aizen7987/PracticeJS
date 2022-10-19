/*5) Programa una función que invierta las palabras de 
una cadena de texto, pe. miFuncion("Hola Mundo") 
devolverá "odnuM aloH".*/

const InvertirTexto = (cadena) => {
    let arrayCadena = cadena.split("");
    let cadenaInvertida = "";
    if(cadena){
        for(var i=1; i<=arrayCadena.length; i++) 
            cadenaInvertida += arrayCadena[arrayCadena.length - i];
                 
        console.log(cadenaInvertida);
    }
    else {
        console.warn("Debe ingresar una cadena");
    }
}
    
InvertirTexto("hola mundo");

/*6) Programa una función para contar el número de veces 
que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") 
devolverá 2.*/

const BuscarTexto = (cadena,busqueda) => {
    if (!cadena){
        console.warn("No hay cadena");
        return;
    }

    if(!busqueda){
        console.warn("No hay busqueda");
        return;
    }

    let arrayCadena = cadena.split(" ");
    let contador = 0;

    for(let i=0;i<=arrayCadena.length;i++){
        
        if(arrayCadena[i]===busqueda)
            contador++
    }
    console.info(`La palabra ${busqueda} se encontro ${contador} veces`);
        
}
    
BuscarTexto("hola mundo adios mundo", "mundo");

/*7) Programa una función que valide si una palabra o 
frase dada, es un palíndromo (que se lee igual en un 
    sentido que en otro), pe. mifuncion("Salas") 
    devolverá true.*/

const EsPalindromo = (cadena) => {
    if (!cadena){
        console.warn("No hay cadena");
    }else{
        let arrayCadena = cadena.split("");
        let cadenaInvertida = "";
        for(let i=1;i<=arrayCadena.length;i++){
            cadenaInvertida += arrayCadena[arrayCadena.length - i];
        }
        (cadena.toLowerCase()===cadenaInvertida.toLowerCase())
            ? console.info("Es Palindroma")
            : console.info("No es Palindroma")    
   
    }    
}

EsPalindromo("Salas");

/*8) Programa una función que elimine cierto patrón de 
caracteres de un texto dado, pe. 
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá  "1, 2, 3, 4 y 5.*/

const eliminarPatron = (cadena, patron) => {

    if(!cadena){
        console.warn("No hay cadena");
        return;
    }
   
    if(!patron){
        console.warn("No hay patron");
        return;
    }

    let arrayCadena1 = cadena.split("");
    let arrayCadena2 = patron.split("");
    let nuevaCadena = "";

    for(let i=0;i<arrayCadena1.length;i++){
        for(let j=0;j<arrayCadena2.length;j++){
            if(arrayCadena1[i]!=arrayCadena2[j])
                nuevaCadena += arrayCadena1[i];
        }
    }
    console.info(nuevaCadena);
}

eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");