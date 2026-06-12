import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [productos, setProductos] = useState([])

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

      console.error('Error al obtener productos', error)

    }
  }

  return (
    <div style={{ padding: '20px' }}>

      <h1>InvenEasy</h1>

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

        </div>

      ))}

    </div>
  )
}

export default App