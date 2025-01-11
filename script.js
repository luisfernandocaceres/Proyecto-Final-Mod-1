// Datos iniciales en JSON
let datos = [
    { nombre: "Juan Pérez", edad: 28, ciudad: "La Paz" },
    { nombre: "María Gómez", edad: 35, ciudad: "Cochabamba" },
    { nombre: "Luis Fernández", edad: 42, ciudad: "Santa Cruz" },
];

// Referencias al DOM
const tabla = document.getElementById("tabla-datos").querySelector("tbody");
const formulario = document.getElementById("formulario");
const inputIndice = document.getElementById("indice");
const inputNombre = document.getElementById("nombre");
const inputEdad = document.getElementById("edad");
const inputCiudad = document.getElementById("ciudad");
const botonCancelar = document.getElementById("cancelar");

// Función para renderizar la tabla
function renderizarTabla() {
    tabla.innerHTML = ""; // Limpiar tabla
    datos.forEach((item, index) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.edad}</td>
            <td>${item.ciudad}</td>
            <td>
                <button onclick="editarRegistro(${index})">Editar</button>
                <button onclick="eliminarRegistro(${index})">Eliminar</button>
            </td>
        `;
        tabla.appendChild(fila);
    });
}

// Función para agregar o actualizar un registro
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const indice = inputIndice.value;
    const nuevoRegistro = {
        nombre: inputNombre.value,
        edad: parseInt(inputEdad.value),
        ciudad: inputCiudad.value,
    };

    if (indice === "") {
        // Agregar nuevo registro
        datos.push(nuevoRegistro);
    } else {
        // Actualizar registro existente
        datos[indice] = nuevoRegistro;
    }

    resetFormulario();
    renderizarTabla();
});

// Función para editar un registro
function editarRegistro(index) {
    const registro = datos[index];
    inputIndice.value = index;
    inputNombre.value = registro.nombre;
    inputEdad.value = registro.edad;
    inputCiudad.value = registro.ciudad;
}

// Función para eliminar un registro
function eliminarRegistro(index) {
    datos.splice(index, 1);
    renderizarTabla();
}

// Función para resetear el formulario
function resetFormulario() {
    inputIndice.value = "";
    inputNombre.value = "";
    inputEdad.value = "";
    inputCiudad.value = "";
}

// Cancelar edición
botonCancelar.addEventListener("click", resetFormulario);

// Renderizar tabla inicial
renderizarTabla();