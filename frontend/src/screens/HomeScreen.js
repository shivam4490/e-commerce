import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products, SetProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products')

      SetProducts(data)
    }

    fetchProducts()
  }, [])
  return (
    <>
      <h1>latest Products</h1>
      <Row>
        {products.map((products) => (
          <Col sm={12} md={9} lg={6} xl={4}>
            <Product product={products} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
