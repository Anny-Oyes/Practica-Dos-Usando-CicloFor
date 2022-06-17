/* Crear un nuevo arreglo a partir de un arreglo de objetos que tiene la propiedad nombre y sexo, 
si el sexo es masculino agrgar el prefijo Sr, si es femenino agregar el prefijo Stra. */

interface datoDeLaPersona {
    nombre: string;
    sexo: string;
}

const contenedor = () => {
    const persona: datoDeLaPersona[] = [
        {
            nombre: "Juan",
            sexo: "M",
        },
        {
            nombre: "Martha",
            sexo: "F",
        },
    ];

    const nuevosDatos: datoDeLaPersona[] = [];

    for (let i = 0; i < persona.length; i++) {
        if (persona[i].sexo === "M") {
            persona[i].nombre = "Sr. " + persona[i].nombre;
        } else {
            persona[i].nombre = "Srta. " + persona[i].nombre;
        }

        nuevosDatos.push(persona[i]);
    }

    console.log(nuevosDatos);
};

contenedor();
