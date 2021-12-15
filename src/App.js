import './App.css';
import { useState } from 'react'
import Form from './components/Form'
import Login from './components/Login'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
      < Router >

      <div className="App">
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path = "/dashboard" element = {<Dashboard /> }  />
            <Route exact path="/registration" element={<Form/>} />
            <Route exact path = "/login" element = {<Login/> } />
          </Routes>
      </div>
      </Router>
  );
}

export default App;
