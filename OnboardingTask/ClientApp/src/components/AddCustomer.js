﻿
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';



 class AddCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            loading: true, custdata: []
        };

        
        var custid = this.props.match.params["id"];
        console.log("this.props.match.params id" + custid);
     
        // GET https://localhost:44394/Customer/Details/2 404
            $.getJSON('Customer/Details/'+ custid, function (data) {

                console.log("lin 21"+JSON.stringify(data));
                //{"id":2,"name":"Swati","address":"512 Princes Highway NSW","sales":[]}

                this.setState({ loading: false, custdata: data, address: data.address, name: data.name});

            }.bind(this));


        console.log("this.state.custdata line 29" + JSON.stringify(this.state.custdata ));
        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChangenm = this.handleChangenm.bind(this);

        this.handleChangeadd = this.handleChangeadd.bind(this);
    }



    

  


     handleChangenm(event) {

         this.setState(
             { name: event.target.value })
         console.log("inside handleChangenm  " + this.state.name);
     }



     handleChangeadd(event) {

         this.setState(
             { address: event.target.value })
         console.log("inside handleChangenm  " + this.state.address);
     }

    


    // This will handle the submit form event.  
         handleSave(event) {
        event.preventDefault();
             const data = new FormData(event.target);
             console.log("handlesave:::data" + event.target[0].value + JSON.stringify(data)); //2
             // PUT request for Edit employee.  
            

          /*   if (this.state.custdata.id) {
                 fetch('Customer/Edit/' + this.state.custdata.id, {
                     method: 'PUT',
                     body: data,
                     headers: {'Content-Type':'application/json'}
            }).then((response) => 
                 {
                    this.props.history.push("/fetchCustomer");
                })
        }*/

             if (this.state.custdata.id) {
                 console.log("calling ajax");
                 /*
                 $.ajax({
                     url: 'Customer/Edit/' + this.state.custdata.id,
                     type: 'PUT',
                     dataType: 'json',
                     success: function (result) {
                         alert("success");
                         console.log("edit success" + result);
                                // eslint-disable-next-line
                         console.log("this.props.history :::" + this.props.history);
                         this.props.history.push("/fetchCustomer");
                     },
                     error: function (error) { console.log("edit fail" + error); }
                 });
                 */


                 var formData = {
                     id: this.state.custdata.id,
                     Name: this.state.name,
                     Address: this.state.address
                 }

                 var formBody = [];
                 for (var property in formData) {
                     var encodedKey = encodeURIComponent(property);
                     var encodedValue = encodeURIComponent(formData[property]);
                     formBody.push(encodedKey + "=" + encodedValue);
                 }
                 formBody = formBody.join("&");

                 fetch('Customer/Edit/'+this.state.custdata.id, {
                     method: 'PUT',
                     headers: {
                         'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                     },
                     body: formBody
                 }).then((resp) => {
                     console.log("success" + resp);
                     this.props.history.push("/fetchCustomer");
                 }).catch((error) => {
                     console.log("error" + error);
                 });








             }
       
  
    }
    // This will handle Cancel button click event.  
     handleCancel(e) {
        e.preventDefault();
         this.props.history.push("/fetchCustomer");
    }


    // Returns the HTML Form to the render() method.  
     renderCreateForm() {
         console.log("inside addcustomer:::cust data is " + JSON.stringify(this.state.custdata));
        console.log("inside addcustomer:: renderCreateForm");
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="id" value={this.state.custdata.id} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.custdata.name} required onChange={this.handleChangenm}/>
                    </div>
                </div >
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Address">Address</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="address" defaultValue={this.state.custdata.address} required onChange={this.handleChangeadd}/>
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

         return(
             <div>  {contents}  </div>
         );
     }

}
export default AddCustomer;