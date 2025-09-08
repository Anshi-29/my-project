import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './components/ProductCard'

function App() {
  const product1 = {name: "Wireless Mouse" , price: "$19.65" , Status: "In Stock"}
  const product2 = {name : "Keyboard" , price: "$25.99" , Status: "Out of Stock"}
  const product3 = {name : "Monitor" , price: "$199.99" , Status: "In Stock"}

  return (
    <>

    <div>
      <h1>Products List</h1>
    <div id='cards-container'>
      <ProductCard product = {product1} />
      <ProductCard product = {product2}/>
      <ProductCard product = {product3}/>
      </div>
      </div>
    </>
  )
}

export default App
