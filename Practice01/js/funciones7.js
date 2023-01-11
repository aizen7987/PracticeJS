
/*21) Programa una función que dado un array numérico devuelve otro 
array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].*/

const CuadradoArray = (arrayIn = undefined) => {
    if(arrayIn==undefined)
        return console.warn("Debe tener una palabra para contar")

    let arrayOut = [];
      
    // arrayIn.forEach(element => {
    //     arrayOut.push(element*element);
    // });

    arrayOut = arrayIn.map(element => element*element);

    return console.info(arrayOut);
}

//CuadradoArray([1,4,5])


/*22) Programa una función que dado un array devuelva el número mas alto y
el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].*/

const MaxMin = (arrayIn = undefined) => {
    if(arrayIn==undefined)
        return console.warn("Debe tener una palabra para contar")

    let arrayOut = [];

    arrayOut.push(Math.max(...arrayIn));
    
    arrayOut.push(Math.min(...arrayIn));

    return console.info(arrayOut);
} 

//MaxMin([1, 4, 5, 99, -60]);

/*23) Programa una función que dado un array de números devuelva un objeto con 2 
arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.*/

const ClasificaNumero = (arrayIn = undefined) => {
    
    if(arrayIn==undefined)
        return console.warn("Debe tener una palabra para contar")

    let arrayOutPares = [];
    let arrayOutImpares = [];

    // arrayIn.forEach(element => {
    //     element % 2 == 0
    //         ? arrayOutPares.push(element)
    //         : arrayOutImpares.push(element);
    // });

    return console.info({
        pares: arrayIn.filter(element => element%2 === 0),
        impares: arrayIn.filter(element => element%2 === 1)
    })
}

ClasificaNumero([1,2,3,4,5,6,7,8,9,0])