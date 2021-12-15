import React from 'react'
import { Navigate } from 'react-router-dom'
import {
    BrowserRouter as Router,
   
    useNavigate
} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const clickHandle = (event) => {
        const operation = event.target.name; 
        console.log(operation);
        navigate("/"+operation)
    }
    return (
        <div className="container m-5">
            <button className='m-5 btn-primary'  onClick={clickHandle} name='login'>Login</button>
            <button className='m-5 btn-secondary'  onClick = {clickHandle}name = 'registration' > Registration </button>

        </div>
    )
}

export default Home
