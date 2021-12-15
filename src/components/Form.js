import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Form = () => {
    const [input, setInput] = useState({});
    let navigate = useNavigate();
    const handleChange = (event) => {
       var FieldName=event.target.name;
        var FieldValue = event.target.value;
        setInput(values => ({
            ...values,
            [FieldName]: FieldValue
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        const inputJson = {"email":input.email, "password":input.password};
       fetch('https://reqres.in/api/register/', {
           method: 'POST',
           body: JSON.stringify( inputJson),
           headers: {
               'Content-Type': 'application/json'
           },
       })
       .then(res => res.json())
       .then((json) =>{
           console.log(json)
           if (json.token === 'QpwL5tke4Pnpja7X4') {
               navigate("/login");
           }
        })
            
    }

    return (
        <>
            <div className="container-fluid">
            < form className = "registration-form p-4"  onSubmit = {handleSubmit} >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={handleChange}
                />

                <label htmlFor="name" >User name: </label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange = {handleChange}
                />

                < label htmlFor = "email" > Email: </label> 
                <input
                type = "text"
                    name='email'
                    className = "form-control"
                onChange = {handleChange}
                />

                < label htmlFor="password" > Password: </label>
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange = {handleChange}

                />
                
                
                <input
                    type="submit"
                        name="submit"
                        className="btn btn-primary"
                />

                </form>
            </div>
        </>
    )
}
export default Form