import React from 'react';
// import { Container } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/navbar'
import Searchbar from './components/Searchbar/search'
import userLogin from './components/Login/userLogin'
import userSignup from './components/Signup/userSignup'
import adminLogin from './components/Admin/adminLogin';
import adminSignup from './components/Admin/adminSignup';
import adminPanel from './components/AdminPanel/adminPanel';
import dashBoard from './components/AdminPanel/sidebarMenu/dashBoard'
import reviewRating from './components/AdminPanel/sidebarMenu/reviewRating'
import addProduct from './components/AdminPanel/sidebarMenu/addProduct'
import manageProduct from './components/AdminPanel/sidebarMenu/manageProduct'
import productDetails from './components/AdminPanel/sidebarMenu/productDetails'
import Home from './components/Home/home'

function App() {
  return (
    <Container-Fluid style={{ userSelect: 'none' }}>
        <BrowserRouter>
        <div className="App">
          <Navbar />
          
          <Switch>
          
            <Route path='/search' component={Searchbar} />
            <Route path='/userLogin' component={userLogin} />
            <Route path='/userSignup' component={userSignup} />
            
            <Route path='/adminSignup' component={adminSignup} />
            <Route path='/adminLogin' component={adminLogin} />
            <Route path='/adminPanel' component={adminPanel} />
            
            <Route path='/dashBoard' component={dashBoard} />
            <Route path='/reviewRating' component={reviewRating} />
            <Route path='/addProduct' component={addProduct} />
            <Route path='/manageProduct' component={manageProduct} />
            <Route path='/productDetails' component={productDetails} />
          </Switch>
            <Home />
        </div> 
      </BrowserRouter>
      
      </Container-Fluid>
  );
}

export default App;
