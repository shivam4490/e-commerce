import React from 'react'
import { Card } from 'react-bootstrap'
import products from '../products'
import Rating from '../components/Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}></a>
        <Card.Img src={product.image} variant='top' />

        <Card.Body>
          <a href={`/product/${product._id}`}></a>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Card.Body>

        <Card.Text as='div' style={{ marginLeft: 15 }}>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3' className='p-3'>
          ${product.price}
        </Card.Text>
      </Card>
    </>
  )
}

export default Product
