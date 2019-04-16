import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import FetchCustomer from './components/FetchCustomer';
import AddCustomer from './components/AddCustomer';
import CreateCustomer from './components/CreateCustomer';
import FetchProduct from './components/FetchProduct';
import AddProduct from './components/AddProduct';
import CreateProduct from './components/CreateProduct';



export default class App extends Component {
  displayName = App.name

  render() {
    return (
       <Layout>
        <Route exact path='/' component={Home} />
 
            <Route path='/fetchCustomer' component={FetchCustomer} />       
            <Route path='/addcustomer' component={CreateCustomer} />
            <Route path='/customer/edit/:id' component={AddCustomer} />
            <Route path='/fetchProduct' component={FetchProduct} />
            <Route path='/addproduct' component={CreateProduct} />
            <Route path='/product/edit/:id' component={AddProduct} />

            
      </Layout>
    );
  }
}




