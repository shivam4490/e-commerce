import React from 'react'
import products from '../products'
import { Row , Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <h1>latest Products</h1>
            <Row>
                
                    {products.map(products => (
                          
                          <Col sm={12} md={9} lg={6} xl={4}>
                            <Product product={products} />
                          </Col>
                    ))}

            </Row>
        </>
    )
}

export default HomeScreen
