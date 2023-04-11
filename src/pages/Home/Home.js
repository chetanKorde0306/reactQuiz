import React, { useState } from 'react'
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage'
import './Home.css'

import {useNavigate} from "react-router-dom"
import { Button, MenuItem, TextField } from '@mui/material'
import Categories from '../../Data/Catagories'

const Home=({name,setName,fetchQuestion})=> {

   const [category,setcategory] = useState("");
   const [difficulty, setdifficulty] = useState("");
   const [error,seterror] = useState(false);
   const navigate = useNavigate();
   const handleSubmit = ()=>{
    if(!category || !difficulty ||!name){
        seterror(true);  
        return
    }else{
        seterror(false);
        fetchQuestion(category,difficulty);
        navigate("/quiz")
    }
   };

    return (
        <div className='content'>

            <div className='settings'>
                <span style={{ fontSize: 30 }}>Quiz Setting</span>
                <div className="settings_space">
                    {error && <ErrorMessage>Please Fill the Feilds</ErrorMessage>}

                    <TextField  label="Enter Your Name" variant="outlined"
                    style={{marginBottom:30}}
                    onChange={(e)=>setName(e.target.value)
                    } />


                    <TextField 
                    select 
                    id="outlined-basic" 
                    label="Outlined" 
                    variant="outlined" 
                    style={{marginBottom:30}} 
                    onChange={(e)=>setcategory(e.target.value)}
                    value = {category}
                    >
          
                    {
                      Categories.map((cat)=>(
                            <MenuItem key = {cat.category} value = {cat.value}>
                                {cat.category}
                            </MenuItem>
                        ))
                    }
                    </TextField>  


                    <TextField select id="filled-basic" label="select-difficulty" variant="outlined" style={{marginBottom:30}} 
                    onChange={(e)=>setdifficulty(e.target.value)}
                    value={difficulty}>
                    <MenuItem key = "Easy" value = "easy">
                        Easy
                    </MenuItem>
                     <MenuItem key = 'Medium' value = "medium">
                        Medium
                     </MenuItem>
                     <MenuItem key = "Hard" value="hard">
                        Hard
                     </MenuItem>
                    </TextField>
                     <Button varient="contained" 
                     color = "primary" 
                     size='large'
                     onClick={handleSubmit}
                     style={{
                        width:"100%",
                        padding:10,
                        marginBottom:10,
                        borderRadius:4,
                        backgroundColor:"#0855e3",
                        textAlign:"center",
                        color:"#FFF",
                        textTransform:"capitalize",
                    }}
                     >Start quiz</Button>


                </div>

            </div>
            <img src="/quiz.svg" className='banner' alt="quiz img" />


        </div>
    )
}

export default Home