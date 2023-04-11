import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './login/login';
import { Register } from './register/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
        }
    </div>
  );
}

export default App;
