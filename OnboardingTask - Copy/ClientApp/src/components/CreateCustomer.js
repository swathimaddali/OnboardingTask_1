
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';



class CreateCustomer extends React.Component {
    constructor(props) {
        super(props);
;
        this.state = { loading: false, custdata: []};  
        
        
        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }












    // This will handle the submit form event.  
    handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        console.log("handlesave:::data " + event.target[0].value + JSON.stringify(data)); //2
        // PUT request for Edit employee.  
 
       /*
        fetch('Customer/Create/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}
        }).then((response) => response.text())
            .then((resp) => {
                this.props.history.push("/fetchCustomer");
            }).catch((error) => {
                console.log("error" + error);
            });

        */


        $.ajax({
            url: 'Customer/Create/',
            type: 'POST',
            data: JSON.stringify(data),
 
            processData: false,

           
            success: function (result) {
                console.log("create success" + result);
                this.props.history.push("/fetchCustomer");
            }
        });
        }

    


    // This will handle Cancel button click event.  
    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchCustomer");
    }


    // Returns the HTML Form to the render() method.  
    renderCreateForm() {
        
        console.log("inside renderCreateForm");
        return (
            <form  id="main" onSubmit={this.handleSave} encType="multipart/form-data" >
           
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" required />
                    </div>
                </div >
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Address">Address</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="address" required />
                    </div>
                </div >


                <div className="form-group">
                    <button type="submit" className="btn btn-default">Save</button>
                    <button className="btn" onClick={this.handleCancel}>Cancel</button>
                </div >
            </form >
        )
    }


    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();

        return (
            <div>  {contents}  </div>
        );
    }

}
export default CreateCustomer;