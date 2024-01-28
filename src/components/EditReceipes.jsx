import React, { useEffect, useState } from 'react'
import { FormGroup,Input,Label,Form,Button, Col} from 'reactstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { API } from './global'
import axios from 'axios'

const EditReceipes = () => {
   const [receipe, setReceipe] = useState(null);
    const { id } = useParams();
    

     useEffect(() => {
  axios.get(`${API}/receipe/_id`)
      .then((res) =>res.data)
      .then((receipe) => setReceipe(receipe));
     }, []);
    
  

    if (receipe) {
       return (
       
           <EditForm receipe={receipe} />
)
    } else {
        return <h4 className='loading'>Loading.....</h4>
    }
    
}
 

function EditForm({receipe}){

    const [receipeName, setReceipeName] = useState(receipe.ReceipeName)
    const [receipeImage, setReceipeImage] = useState(receipe.ReceipeImage)
    const [ingrediants, setIngrediants] = useState(receipe.Ingrediants)
    const[instructions,setInstructions]=useState(receipe.Instructions)
  
    const navigate = useNavigate();

const handleSubmit = async () => {
    const UpdateReceipes = {
      ReceipeName: receipeName,
      ReceipeImage:receipeImage,
      Ingrediants: ingrediants,
      Instructions: instructions,
    }
    try {
         const res=await axios.put(`${API}/receipe/_id`, UpdateReceipes)
      console.log('Form edited successfully:', res.data);
      navigate("/receipelist")
       }
       
    catch(error) {
      console.error('Error submitting form:', error.message);
      }
  }

  return (<>
    <Button onClick={() => navigate("/receipelist")} className="back">Back</Button>
        <div className="editreceipes"> 
            <h5>Edit Receipes</h5>
            
<Form>
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
 
  <Button onClick={handleSubmit} className="button3">
    Submit
  </Button>
</Form>
    </div>
    </>
  )

}
   

export default EditReceipes