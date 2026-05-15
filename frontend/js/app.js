const botonesEliminar = document.querySelectorAll(".eliminar-btn");

botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", () => {
        alert("Producto eliminado correctamente");
    });
});

const formularios = document.querySelectorAll("form");

formularios.forEach((formulario) => {
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        alert("Operación realizada correctamente");
    });
});
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
    });
});
const btnCancelar = document.getElementById("btnCancelar");

btnCancelar.addEventListener("click", () => {
    alert("Eliminación cancelada");
});