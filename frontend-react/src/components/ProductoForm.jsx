function ProductoForm({
  guardarProducto,
  nombre,
  setNombre,
  descripcion,
  setDescripcion,
  precio,
  setPrecio,
  stock,
  setStock,
  productoEditando,
  limpiarFormulario
}) {

  return (

    <form onSubmit={guardarProducto}>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) =>
          setNombre(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Descripción"
        value={descripcion}
        onChange={(e) =>
          setDescripcion(e.target.value)
        }
        required
      />

      <input
        type="number"
        placeholder="Precio"
        value={precio}
        onChange={(e) =>
          setPrecio(e.target.value)
        }
        required
      />

      <input
        type="number"
        placeholder="Stock"
        value={stock}
        onChange={(e) =>
          setStock(e.target.value)
        }
        required
      />

      <button type="submit">

        {productoEditando
          ? 'Actualizar'
          : 'Guardar'}

      </button>

      {productoEditando && (

        <button
          type="button"
          onClick={limpiarFormulario}
        >
          Cancelar
        </button>

      )}

    </form>
  )
}

export default ProductoForm