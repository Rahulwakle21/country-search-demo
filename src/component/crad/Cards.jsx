import React from "react";

import Card from "react-bootstrap/Card";

const Cards = ({name,flag,population,region,capital}) => {        

 
  return (
      <>
          <div style={{display:"inline-block" , margin:"30px"}}>
       <Card style={{ width: "18rem" , height:"25rem"}}>
        <Card.Img variant="top" src={flag} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           Population : {population}
          </Card.Text>
          <Card.Text>
           Region : {region}
          </Card.Text>
          <Card.Text>
           Capital : {capital}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </div>

   
      </>
  );
};

export default Cards;
