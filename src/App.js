import logo from './logo.svg';
import './App.css';
import { Register } from './login/login';
import { Login } from './login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
