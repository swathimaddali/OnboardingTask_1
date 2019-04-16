import React from "react";
import $ from 'jquery';
import { RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter, Redirect} from 'react-router-dom';  
import AddCustomer from './AddCustomer';
import { Button } from 'semantic-ui-react';
//import history from './history';
//import createHistory from 'history/createBrowserHistory';
//import {  browserHistory } from 'react-router';




class CustomerGridRow extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
      
       
    }

    
    handleDelete(e, id) {
        console.log("e"+e);
        e.preventDefault();
        if (!window.confirm("Do you want to delete this customer "))
            return;
        else {
            console.log("calling ajax");
            /*
            $.ajax({
                url: 'Customer/Delete/' + id,
                type: 'DELETE',
                dataType:'json',
                success: function (result) {
                    alert("success");
                    console.log("delete success" + result);
                    
                    const path = '/fetchCustomer';
                           // eslint-disable-next-line
                    this.props.history.push(path);
                   
                },
                error: function (error) { console.log("delete fail" + error);}
            });
            */
            //history.props works with fetch
            fetch('Customer/Delete/'+id, {
                method: 'DELETE'      
           
            }).then((resp) => {
                console.log("successfully deleted row" + resp);
                this.props.history.push("/fetchCustomer");
            }).catch((error) => {
                console.log("error" + error);
            });


        }
        e.stopPropagation();
        }
    
    handleEdit(e, id) {
        e.preventDefault();
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
        console.log("this.props.history" + this.props.history);
       this.props.history.push(pth);
    }  

            
        
     


    render(){
        console.log("customergridrow:function" + this.props.item.name);
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.address}</td>
                <td>
                    <Button color="yellow" className="action" onClick={(e) => this.handleEdit(e, this.props.item.id)}>Edit</Button>
                </td> 
                <td>  
                    <Button color="red" className="action" onClick={(e) => this.handleDelete(e, this.props.item.id)}>Delete</Button>  
                 </td>  
                </tr>
        );
    }



}
export default withRouter(CustomerGridRow);