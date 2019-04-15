import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import  { Fragment, Component } from 'react';
import CustomerGridTable from './CustomerGridTable';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter,Redirect } from 'react-router-dom'; 


class FetchCustomer extends React.Component {
    constructor(props) {

        super(props);
   
        this.state = {
            tocreate: false,
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setState({ tocreate: true }); 
      
        const pth = '/addcustomer';
      //  this.context.router.history.push(pth);
        // const history = createHistory();
  
        // console.log("this..history " + this.props.history.push(pth));
        //this.props.history.push("/customer/edit/" + id);
        // <Redirect to="/customer/edit/{id}"  push />
        //console.log("browserHistory " + browserHistory);
        //this.history.push(pth);
        // browserHistory.push(pth);
        // eslint-disable-next-line
 
      //  this.props.history.push(pth);
    }  


    render() {
        if (this.state.tocreate === true) {

            return <Redirect to='/addcustomer' />
        }
        console.log("inside customer::render");
        return (
            <Fragment>



                <div class='divpad'>  <button onClick={this.handleSubmit}>Create New Customer</button></div>
                <CustomerGridTable dataUrl="Customer/Index" />
          

            </Fragment>
        );
    }
}
export default withRouter(FetchCustomer);
