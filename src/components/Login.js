import React, {
    useState
} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
    Link,
  useNavigate
} from "react-router-dom";


const Login = () => {
    const [input, setInput] = useState({});
    const navigate = useNavigate();
    const handleChange = (event) => {
        var FieldName = event.target.name;
        var FieldValue = event.target.value;
        setInput(values => ({
            ...values,
            [FieldName]: FieldValue
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        const inputJson = {
            "email": input.email,
            "password": input.password
        };
        fetch('https://reqres.in/api/login/', {
                method: 'POST',
                body: JSON.stringify(inputJson),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then((json) => {
                if (json.token === 'QpwL5tke4Pnpja7X4') {
                    navigate("/dashboard");
                }
                console.log(json)
            })

    }

    return ( 
        <>
        <form className = "registration-form p-5"
        onSubmit = {handleSubmit}>
       


        <label htmlFor = "email" className="form-label" > Email: </label>  
        <input type = "text"
                    name='email'
                    className = "form-control"
        onChange = {
            handleChange
        }
        />

        <label htmlFor = "password" className="form-label"> Password: </label> 
        <input type = "password"
        className = "form-control"
        name = "password"
        onChange = {
            handleChange
        }

        />


        <input className="btn btn-primary m-3" type = "submit"
        name = "submit" />

        </form>
        </>
    )
}
export default Login