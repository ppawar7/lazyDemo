import React from 'react';
import { render } from 'react-dom';
import { DcLocations } from './components/DcLocations';
import { Login } from './components/Login';
import { Header } from './components/Header';
 
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css'


const App = () => (
   <Login/>
);
render(<App />, document.getElementById("root"));