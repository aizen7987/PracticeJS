import { factorial } from "./funciones3.js"
/*12) Programa una función que determine si un 
número es primo (aquel que solo es divisible por 
sí mismo y 1) o no, pe. miFuncion(7) 
devolverá true.*/

const EsPrimo = (numero = undefined) =>{
    if(numero===undefined) return console.error()
    
    console.log(factorial(numero));

    /// ((numero-1)! + 1)/numero si es divisible es primo
    return ((factorial(numero)+1)%numero === 0) 
                ? console.info("Es primo")
                : console.info("No es primo");
   
}
      
EsPrimo(7);        



/*13) Programa una función que determine si 
un número es par o impar, pe. miFuncion(29) 
devolverá Impar.*/

const EsPar = (numero=undefined) => 
    (numero!==undefined)
        ? (numero%2===0) 
            ? console.info("Es par")
            : console.info("Es impar")
        : console.error("Debes ingresar el numero");

EsPar(20);

/*14) Programa una función para convertir grados 
Celsius a Fahrenheit y viceversa, 
pe. miFuncion(0,"C") devolverá 32°F.*/

const ConvertirGrados = (grados=undefined,tipo=undefined) => {
    if(grados!==undefined && tipo!==undefined){
        switch(tipo){
            case "F":
                return (grados*(9/5)+32);
                break;
            case "C":
                return (grados-32)*5/9;
                break;
            default:
                return "Tipo incorrecto";
        }
    }
    else {
        return "Parametros no definidos"
    }
        
}

console.info(ConvertirGrados(0,"F"))