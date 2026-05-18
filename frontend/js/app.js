/* BOTONES ELIMINAR */
const botonesEliminar = document.querySelectorAll(".eliminar-btn");

botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
        const confirmar = confirm("¿Está seguro de que desea eliminar este producto?");

        if (confirmar) {
            alert("Producto eliminado correctamente");
        } else {
            alert("Eliminación cancelada");
        }
    });
});

/* FORMULARIOS */
const formularios = document.querySelectorAll("form");

formularios.forEach((formulario) => {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validar que ningún campo esté vacío
        const inputs = formulario.querySelectorAll("input");

        for (const input of inputs) {
            if (input.value.trim() === "") {
                alert("Por favor, complete todos los campos.");
                return;
            }
        }

        alert("Operación realizada correctamente");

        // Limpiar el formulario después de una operación exitosa
        formulario.reset();
    });
});

/* BOTONES EDITAR */
const botonesEditar = document.querySelectorAll(".editar");

const editarNombre = document.getElementById("editarNombre");
const editarPrecio = document.getElementById("editarPrecio");
const editarCantidad = document.getElementById("editarCantidad");

botonesEditar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
        const producto = e.target.parentElement;

        editarNombre.value = producto.dataset.nombre;
        editarPrecio.value = producto.dataset.precio;
        editarCantidad.value = producto.dataset.stock;

        alert("Datos cargados para edición");

        // Desplazar suavemente al formulario de edición
        editarNombre.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Colocar el cursor en el campo nombre
        editarNombre.focus();
    });
});

/* BOTÓN CANCELAR */
const btnCancelar = document.getElementById("btnCancelar");

btnCancelar.addEventListener("click", () => {
    alert("Eliminación cancelada");
});