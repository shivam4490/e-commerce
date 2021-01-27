import React from 'react'
import { Card } from 'react-bootstrap'
import products from '../products'

const Product = ( { product} ) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <a href={`/product/${product._id}`}></a>
                <Card.Img src={product.image} variant='top' />
            </Card>   
        </>
    )
}

export default Product
