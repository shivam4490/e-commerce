import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import products from '../products'
import Rating from '../components/Rating'

const Product = ({ product }) => {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant='top' />
        </Link>

        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as='div'>
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
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
