function ProductoCard({
  producto,
  editarProducto,
  eliminarProducto
}) {

  return (

    <div
      style={{
        border: '1px solid gray',
        marginBottom: '10px',
        padding: '10px',
        borderRadius: '10px'
      }}
    >

      <h3>{producto.nombre}</h3>

      <p>
        Descripción: {producto.descripcion}
      </p>

      <p>
        Precio: ${producto.precio}
      </p>

      <p>
        Stock: {producto.stock}
      </p>

      <button
        onClick={() =>
          editarProducto(producto)
        }
      >
        Editar
      </button>

      <button
        onClick={() =>
          eliminarProducto(producto.id)
        }
      >
        Eliminar
      </button>

    </div>
  )
}

export default ProductoCard