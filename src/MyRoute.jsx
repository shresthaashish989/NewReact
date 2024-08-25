import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './Pages/HomePage'
import Product from './Pages/Product'

const MyRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='product/' element={<Product/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoute
