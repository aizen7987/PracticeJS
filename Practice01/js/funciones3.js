
/*9) Programa una función que obtenga un numero 
    aleatorio entre 501 y 600.*/

const ObtenerAleatorio = (max) => 
    (max!==undefined)
      ? console.info(Math.floor(Math.random()*max+500))
      : console.warn("Debe ingresar una cantidad");

ObtenerAleatorio(100);


/*10) Programa una función que reciba un número y 
evalúe si es capicúa o no (que se lee igual en 
    un sentido que en otro), pe. miFuncion(2002) 
    devolverá true.*/


const EsCapicua = (numero) => 
    (numero!==undefined) 
        ? (parseInt(numero.toString().split("").reverse().join("")) === numero) 
            ? console.info("Es Capicua")
            : console.info("No es Capicua")
        : console.warn("Debe ingresar un numero");

EsCapicua(99);

/*11) Programa una función que calcule el factorial 
de un número (El factorial de un entero positivo n, 
    se define como el producto de todos los 
    números enteros positivos desde 1 hasta n), 
    pe. miFuncion(5) devolverá 120.*/


export const factorial = function fac(n) {
   return n < 2 ? 1 : n * fac(n - 1);
};

let resultado = factorial(5);
console.info(resultado);