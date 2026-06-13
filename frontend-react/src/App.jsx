import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

import ProductoForm from './components/ProductoForm'
import ProductoCard from './components/ProductoCard'

function App() {
  const [productos, setProductos] = useState([])
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precio, setPrecio] = useState('')
  const [stock, setStock] = useState('')
  const [productoEditando, setProductoEditando] = useState(null)

  useEffect(() => {
    obtenerProductos()
  }, [])

  const limpiarFormulario = () => {
    setNombre('')
    setDescripcion('')
    setPrecio('')
    setStock('')
    setProductoEditando(null)
  }

  const obtenerProductos = async () => {
    try {
      const response = await axios.get('http://localhost:8080/productos')
      setProductos(response.data)
    } catch (error) {
      console.error('Error al obtener productos', error)
    }
  }

  const guardarProducto = async (e) => {
    e.preventDefault()

    const producto = {
      nombre,
      descripcion,
      precio: Number(precio),
      stock: Number(stock)
    }

    try {
      if (productoEditando) {
        await axios.put(
          `http://localhost:8080/productos/${productoEditando.id}`,
          producto
        )
      } else {
        await axios.post('http://localhost:8080/productos', producto)
      }

      obtenerProductos()
      limpiarFormulario()
    } catch (error) {
      console.error('Error al guardar producto', error)
    }
  }

  const editarProducto = (producto) => {
    setProductoEditando(producto)
    setNombre(producto.nombre)
    setDescripcion(producto.descripcion)
    setPrecio(producto.precio)
    setStock(producto.stock)
  }

  const eliminarProducto = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/productos/${id}`)
      obtenerProductos()
    } catch (error) {
      console.error('Error al eliminar producto', error)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>InvenEasy</h1>

      <h2>
        {productoEditando ? 'Editar Producto' : 'Agregar Producto'}
      </h2>

      <ProductoForm
        guardarProducto={guardarProducto}
        nombre={nombre}
        setNombre={setNombre}
        descripcion={descripcion}
        setDescripcion={setDescripcion}
        precio={precio}
        setPrecio={setPrecio}
        stock={stock}
        setStock={setStock}
        productoEditando={productoEditando}
        limpiarFormulario={limpiarFormulario}
      />

      <h2>Lista de Productos</h2>

      {productos.map((producto) => (
        <ProductoCard
          key={producto.id}
          producto={producto}
          editarProducto={editarProducto}
          eliminarProducto={eliminarProducto}
        />
      ))}
    </div>
  )
}

export default App