// Sumar todos los elementos de un arreglo de números

const miArreglo: [number, number, number, number, number, number, number, number] = [1, 2, 3, 4, 5, 6, 7, 8];
var sumaTotal: number = 0;

for (var i = 0; i < miArreglo.length; i++) {
    sumaTotal += miArreglo[i];
}
console.log("La suma de todos los números del arreglo es:" + sumaTotal);
