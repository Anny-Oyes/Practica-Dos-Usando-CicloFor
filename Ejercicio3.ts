// Filtrar los elementos de un arreglo de números, cuyo valor sean mayor que el numero recibido.

const arregloInicial: [number, number, number, number, number, number] = [1, 2, 3, 4, 5, 6];
const miParametro: number = 4;
const arregloFinal: number[] = [];

for (var i = 0; i < arregloInicial.length; i++) {
    var valor: number = arregloInicial[i];

    if (valor > miParametro) {
        arregloFinal.push(valor);
    }
}

console.log("El arreglo original es: " + "[" + arregloInicial + "]");
console.log("Se filtran los números mayores a: " + miParametro);
console.log("El nuevo arreglo es: " + "[" + arregloFinal + "]");