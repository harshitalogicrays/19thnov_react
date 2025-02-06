import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const DisplayProducts = ({product}) => {
  return (
    <div className='col-3 mb-3'>
        <Card>
        <Card.Img variant="top" src={product.image} height="200px"/>
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> {product.category} </Card.Text>
          <Card.Text> &#8377;{product.price} </Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>  
    </div>
  )
}

export default DisplayProducts
