import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [productos, setProductos] = useState([])
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')

  useEffect(() => {
    obtenerProductos()
  }, [])

  const obtenerProductos = async () => {

    try {

      const response = await axios.get(
        'http://localhost:8080/productos'
      )

      setProductos(response.data)

    } catch (error) {

      console.error(
        'Error al obtener productos',
        error
      )

    }
  }

  const guardarProducto = async (e) => {

    e.preventDefault()

    const nuevoProducto = {
      nombre,
      descripcion,
      precio: Number(precio),
      stock: Number(stock)
    }

    try {

      await axios.post(
        'http://localhost:8080/productos',
        nuevoProducto
      )

      obtenerProductos()

      setNombre('')
      setDescripcion('')
      setPrecio('')
      setStock('')

    } catch (error) {

      console.error(
        'Error al guardar producto',
        error
      )

    }
  }

  const eliminarProducto = async (id) => {

    try {

      await axios.delete(
        `http://localhost:8080/productos/${id}`
      )

      obtenerProductos()

    } catch (error) {

      console.error(
        'Error al eliminar producto',
        error
      )

    }
  }

  return (

    <div style={{ padding: '20px' }}>

      <h1>InvenEasy</h1>

      <h2>Agregar Producto</h2>

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
          Guardar
        </button>

      </form>

      <h2>Lista de Productos</h2>

      {productos.map((producto) => (

        <div
          key={producto.id}
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
              eliminarProducto(producto.id)
            }
          >
            Eliminar
          </button>

        </div>

      ))}

    </div>
  )
}

export default App