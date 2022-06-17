// Detectar si una palabra se escribe igual al derecho y al revés.

const palabra: string = "rayar";
let resultado: string = '';

for (let i = palabra.length - 1; i >= 0; i--) {
    resultado += palabra[i];
}
if (resultado === palabra) {
    console.log("La palabra original es: " + palabra);
    console.log("Esta palabra si es un palíndromo: " + resultado);
} else {
    console.log("La palabra original es: " + palabra);
    console.log("Esta palabra no es un palíndromo: " + resultado);
}
