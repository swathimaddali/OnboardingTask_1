
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import $ from 'jquery';



 class AddCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: true, custdata: [] };

        
        var custid = this.props.match.params["id"];
        console.log("this.props.match.params id" + custid);
     
        // GET https://localhost:44394/Customer/Details/2 404
            $.getJSON('Customer/Details/'+ custid, function (data) {

                console.log("lin 21"+JSON.stringify(data));
                //{"id":2,"name":"Swati","address":"512 Princes Highway NSW","sales":[]}

                this.setState({ loading: false, custdata: data });

            }.bind(this));


        console.log("this.state.custdata line 29" + JSON.stringify(this.state.custdata ));
        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    

  



    


    // This will handle the submit form event.  
         handleSave(event) {
        event.preventDefault();
             const data = new FormData(event.target);
             console.log("handlesave:::data" + event.target[0].value + JSON.stringify(data)); //2
             // PUT request for Edit employee.  
             alert("this.state.custdata.custid is "+this.state.custdata.id);
             if (this.state.custdata.id) {
                 fetch('Customer/Edit/' + this.state.custdata.id, {
                     method: 'PUT',
                     body: data,
                     headers: {'Content-Type':'application/json'}
            }).then((response) => 
                 {
                    this.props.history.push("/fetchCustomer");
                })
        }
       
  
    }
    // This will handle Cancel button click event.  
     handleCancel(e) {
        e.preventDefault();
         this.props.history.push("/fetchCustomer");
    }


    // Returns the HTML Form to the render() method.  
     renderCreateForm() {
         console.log("this.state.custdata line 72" + JSON.stringify(this.state.custdata));
        console.log("inside renderCreateForm");
        return (
            <form onSubmit={this.handleSave} >
                <div className="form-group row" >
                    <input type="hidden" name="id" value={this.state.custdata.id} />
                </div>
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="name" defaultValue={this.state.custdata.name} required />
                    </div>
                </div >
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Address">Address</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="address" defaultValue={this.state.custdata.address} required />
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