import React, { useState } from 'react'
import { FormGroup,Input,Label,Form,Button, Col} from 'reactstrap'
import { useNavigate} from 'react-router-dom'
import { API } from './global'
import axios from 'axios'

const AddReceipes = ({setReceipes}) => {
    const [receipeName, setReceipeName] = useState("")
    const [receipeImage, setReceipeImage] = useState("")
    const [ingrediants, setIngrediants] = useState("")
    const[instructions,setInstructions]=useState("")
  
   const navigate = useNavigate();
  
  const handleSubmit = async () => {
    const newreceipes = {
      ReceipeName: receipeName,
      ReceipeImage:receipeImage,
      Ingrediants: ingrediants,
      Instructions: instructions,
    }
    try {
         const res=await axios.post(`${API}/receipe/addreceipe`, newreceipes)
      console.log('Form submitted successfully:', res.data);  
      setReceipes(res.data)
      navigate("/receipelist")
       } 
       
    catch(error) {
      console.error('Error submitting form:', error.message);
      }
  }
   

  return (<>
    <Button onClick={() => navigate("/receipelist")} className="back">Back</Button>
       

 <div className='addreceipes'>     
  
    <h5>Add Receipes</h5>        
<Form className='addform'>
  <FormGroup row>
 <Label for="Name"  sm={2}>
     Receipe Name
    </Label>
 <Col sm={8}>
 <Input
    id="Name"
     name="Name"
     placeholder="Enter Receipe Name"
                            type="Name"
                            value={receipeName}
                            onChange={(e)=>setReceipeName(e.target.value)}
    />
      </Col>
              </FormGroup>
              
<FormGroup row>
    <Label for="image" sm={2} >
      Receipe Image
                  </Label>
     <Col sm={8}>            
    <Input
      id="image"
     name="image"
      placeholder="Enter Recepie Image URL"
                            type="text"
                            value={receipeImage}
                            onChange={(e)=>setReceipeImage(e.target.value)}
    /></Col> 
              </FormGroup>
              
              <FormGroup row>
    <Label for="ingrediants"  sm={2}>
      Ingrediants
                  </Label>
                  <Col sm={8}>
    <Input
      id="ingrediants"
     name="ingrediants"
      placeholder="Enter ingrediants "
                            type="textarea"
                            value={ingrediants}
                            onChange={(e)=>setIngrediants(e.target.value)}
    /></Col>
              </FormGroup>
              
    <FormGroup row>
    <Label for="instructions"  sm={2}>
    Instructions
                  </Label>
                  <Col sm={8}>
    <Input
      id="instructions"
     name="instructions"
      placeholder=" Enter instructions "
                            type="textarea"
                            value={instructions}
                            onChange={(e)=>setInstructions(e.target.value)}
    /></Col>
  </FormGroup>
 
  <Button onClick={handleSubmit} className='button3'>
    Submit
  </Button>
</Form>
    </div>
    </>
  )
}

export default AddReceipes

