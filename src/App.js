import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import "./App.css";
import Home from './Pages/Home';
import AddEditUser from './Pages/AddEditUser';
import UserInfo from './Pages/UserInfo';
import About from './Pages/About';
import Header from './Components/Header';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/addUser" exact component={AddEditUser} />
      <Route path="/editUser/:id" exact component={AddEditUser} />
      <Route path="/userinfo/:id" exact component={UserInfo} />
      <Route path="/About" exact component={About} />
    </BrowserRouter>
  )
}

export default App
