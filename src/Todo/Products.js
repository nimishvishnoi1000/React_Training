import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react'

const Products = () => {

    function showdetails(){
        return document.getElementById("Pixel").innerHTML = "RAM = 4GB, Camera= 12.2MP, OS=Android Pie";

    }

    function showdetailsI(){
        return document.getElementById("Apple").innerHTML = "RAM = 3GB, Camera= 12MP, OS=A11 Bionic Hexa-core";

    }
  return (

    <div>
        <Card style={{ width: '18rem', margin:'2rem'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Google Pixel 2 XL</Card.Title>
        <Card.Subtitle>
          Rs. 62000
        </Card.Subtitle>
        <Card.Text id="Pixel">
          
        </Card.Text>
        <Button variant="primary" onClick={showdetails}>Show Details</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', margin:'2rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Apple Iphone X</Card.Title>
        <Card.Subtitle>
          Rs. 98000
        </Card.Subtitle>
        <Card.Text id="Apple">
          
        </Card.Text>
        <Button variant="primary" onClick={showdetailsI}>Show Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Products