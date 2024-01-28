import React from 'react'
import { Card, CardBody, CardTitle, CardText, Button,Fade, CardImg } from "reactstrap"
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiEditLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const ReceipeCard = ({ value, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <div className='card-style'>
       <Card
    style={{
    width: '24rem'
  }}
>
  <CardImg
          src={value.ReceipeImage}
           style={{
          height: 180
      }}
      top
      width="100%" 
/>
  <CardBody>
    <CardTitle className="cardtitle">
      {value.ReceipeName}
          </CardTitle>
          
 <CardText className='cardtext-style'>
            {value.Ingrediants}
            </CardText> 
          
      
    <CardText className='cardtext-style'>
            {value.Instructions}
            </CardText>
    <Button className='btn-success' onClick={()=>navigate(`/receipes/EditReceipes/${value.id}`)}>
            <RiEditLine />
          </Button>
          
    <Button className='btn-danger' onClick={()=>handleDelete(value.id)}>
            <RiDeleteBin6Line />
     </Button>
  </CardBody>
</Card>
       
    
    </div>
  )
}

export default ReceipeCard

