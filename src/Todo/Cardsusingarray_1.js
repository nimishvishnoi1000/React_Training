import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Cardsusingarray_1 = () => {

    const Book=[
        {
              "Title":"Angels and Demons",
              "Publisher":"Penguin Random House",
              "Author":"Dan Brown",
              "Price":409,
              "ProdId":2012
         },

         {
            "Title":"Norse Mythology",
             "Publisher":"Blomsbury Publishing",
             "Author":"Neil Gaiman",
             "Price":300,
             "ProdId":2019
        }
     ]

  return (
    <div>
      {Book.map((element)=>{
        return  <Card border="secondary" style={{ width: '18rem' , margin:'3rem'}}>
                <Card.Title>{element.Title}</Card.Title>
                <Card.Header>{element.Author}</Card.Header>
                <Card.Body>   
                <ListGroup className="list-group-flush">
                <ListGroup.Item>{element.Publisher}</ListGroup.Item>
                <ListGroup.Item>{element.Price}</ListGroup.Item>
                <ListGroup.Item>{element.ProdId}</ListGroup.Item>
                </ListGroup>
                </Card.Body>
              </Card>


        })}


        
  </div>
  )
}

export default Cardsusingarray_1