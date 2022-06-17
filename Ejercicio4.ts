/* Filtrar los elementos de un arreglo de números cuyo valor sean menor que el numero recibido, 
los elementos filtrados se deben guardar en nuevo arreglo. */

const original: [number, number, number, number, number, number] = [1, 2, 3, 4, 5, 6];
const parametro: number = 4;
const arregloNuevo: number[] = [];

for (var i = 0; i < original.length; i++) {
    var valor: number = original[i];

    if (valor < parametro) {
        arregloNuevo.push(valor);
    }
}

console.log("El arreglo original es: " + "[" + original + "]");
console.log("Se filtran los números menores a: " + parametro);
console.log("El nuevo arreglo es: " + "[" + arregloNuevo + "]");