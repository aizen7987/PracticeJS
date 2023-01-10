/*18) Programa una función que dada una cadena de texto 
cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.*/

const ContarLetras = (frase=undefined) => {

    let contadorVocales = 0,
        contadorConsonantes = 0 
    let pattern = /[a-zA-Z]/g

    if(frase==undefined)
        return console.warn("Debe tener una frase para contar")

    if(frase.match(pattern)){

        contadorVocales = frase.match(/[aeiou]/gi).length;
        contadorConsonantes = frase.match(/[bcdfghjklnmpqrstvwxyzñ]/gi).length;
    }else{
        return console.warn("La frase contiene numeros o simbolos")
    }

    return console.log("Vocales: " + contadorVocales + ", Consonantes: " + contadorConsonantes);
}

// ContarLetras("hello")


/*19) Programa una función que valide que un 
texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") 
devolverá verdadero.*/

const ComprobarNombre = (nombre = "") => {

    if(nombre==undefined)
        return console.warn("Debe tener una palabra para contar")

    
    let pattern = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/g.test(nombre);

    return(pattern)
        ? console.log(`"${nombre}", es nombre valido`)
        : console.log(`"${nombre}", no es nombre valido`)
}

ComprobarNombre("6565")

/*20) Programa una función que valide que un texto sea 
un email válido, pe. miFuncion("jonmircha@gmail.com") 
devolverá verdadero.*/

const ComprobarCorreo = (correo = undefined) => {
    let pattern = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i

    if(correo==undefined)
        return console.warn("Debe tener una palabra para contar")

    if(correo.match(pattern)){
        return console.warn("Correo válido")
    }else{
        return console.warn("Correo no válido")
    }
}

// ComprobarCorreo("skjdfjdk@gmailom")