import React from "react";
import $ from 'jquery';
import { Redirect,RouteComponentProps } from 'react-router';
import { BrowserRouter as Router ,Route,Link, NavLink, withRouter } from 'react-router-dom';  
import AddCustomer from './AddCustomer';
//import history from './history';
//import createHistory from 'history/createBrowserHistory';
//import {  browserHistory } from 'react-router';




class CustomerGridRow extends React.Component {

    constructor(props) {
        super(props);
       
       
    }

    
    handleDelete(id) {
        if (!window.confirm("Do you want to delete customer with Id: " + id))
            return;
        else {
     
            $.ajax({
                url: 'Customer/Delete/'+id ,
                type: 'DELETE',
                success: function (result) {
                    console.log("delete success" + result);
                    this.props.history.push("/fetchCustomer");
                }
            });
            }
        }
    
    handleEdit(id) {
        console.log("edit id " + id);
      
       // const history = createHistory();
        const pth = '/customer/edit/' + id;
       // console.log("this..history " + this.props.history.push(pth));
        //this.props.history.push("/customer/edit/" + id);
       // <Redirect to="/customer/edit/{id}"  push />
        //console.log("browserHistory " + browserHistory);
        //this.history.push(pth);
       // browserHistory.push(pth);
       // eslint-disable-next-line
        console.log("" + this.props.history);
       this.props.history.push(pth);
    }  

            
        
     


    render(){
        console.log("customergridrow:function" + this.props.item.name);
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.address}</td>
                <td>
                    <button className="action" onClick={(id) => this.handleEdit(this.props.item.id)}>Edit</button>
                </td> 
                <td>  
                    <button className="action" onClick={(id) => this.handleDelete(this.props.item.id)}>Delete</button>  
                 </td>  
                </tr>
        );
    }



}
export default withRouter(CustomerGridRow);