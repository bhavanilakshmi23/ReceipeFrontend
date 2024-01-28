import React, { useEffect, useState} from 'react'
import ReceipeCard from './ReceipeCard'
import { Button, Container } from 'reactstrap'
import { API } from "./global"
import axios from "axios"
import { useNavigate} from 'react-router-dom'

const ReceipeList = () => {
    const [receipes, setReceipes] = useState([])
  const navigate = useNavigate();
    

    const getData = async() => {
    try {
            const res =await axios.get(`${API}/receipe/all`) 
        if (res.status === 200) {
            setReceipes(res.data)
            console.log(res.data)
        }
        } catch (error) {
            alert(error)
        }
    }
    
    const handleDelete = async (id) => {
        try {
        const res =await axios.delete(`${API}/receipe/_id`) 
        if (res.status === 200) {
             getData()
        } 
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() =>{
        getData()
        },[])

    return <Container >
          <Button onClick={() => navigate("/home")} className="back">Back</Button>
        <div className='receipelist'>
          <h2>Receipes</h2>
        <div className='display'>
     
      { receipes.map((item) => {
              return <ReceipeCard key={item.id} value={item} handleDelete={ handleDelete} />
              })
     }
            </div>
            </div>
  </Container>
}

export default ReceipeList
