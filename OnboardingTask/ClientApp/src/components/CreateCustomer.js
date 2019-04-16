
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect} from 'react-router-dom';
import $ from 'jquery';
import Input from './Input';
import axios from 'axios';




class CreateCustomer extends React.Component {
    constructor(props) {
        super(props);
;

        this.state = {
           
            name: '',
            address:'',
            loading: false
        }

        
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
    handleSave = (event) => {
        console.log("inside handleSave" + this.state.name);
        event.preventDefault();
        this.setState({ loading: true });
 
        /*for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
            console.log("formData[formElementIdentifier] " + formData[formElementIdentifier]); //2
        }*/

    
        var formData = {
            Name: this.state.name,
            Address:this.state.address
        }
        console.log("formData " + formData);
        console.log("formData stringisy" + JSON.stringify(formData));
        //2
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
            JSON.stringify(formData),
             contentType: "application/json ; charset=utf-8",
        */

        var form = $("#myform").serialize();
        console.log("myform serialize" + form);
        var strng = this.state.name;


        var cust = new Object();
        cust.Name = this.state.name;
        cust.Address = this.state.address;
        console.log("cust obj " + JSON.stringify(cust));
        var ddt = { Name: this.state.name, Address: this.state.address };
        var jsondt = JSON.stringify(ddt);

        if (cust != null) {
            /*
           $.ajax({
                url: 'Customer/PostProduct/',
                type: 'POST',
                data: form,

               //contentType: "application/json ; charset=utf-8",
                contentType: "application/x-www-form-urlencoded",
                dataType: 'json',
                processData: false,
                success: function (result) {
                    console.log("create success" + result);

                   this.props.history.push("/fetchCustomer");
                     //return <Redirect to='/fetchCustomer' />
                },
                error: function (e) { console.log("create failed" + JSON.stringify(e)); }
            });
            */
          /*  $.post('Customer/PostProduct/', jsondt ,function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
            */
            /*
            axios.post('Customer/Create/',  { "Name": "new", "Address": "add" })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                })
            */

            var formData = {
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

            fetch('Customer/Create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            }).then((resp) => {
                console.log("success"+resp);
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

   

        return (
            <form  id="myform" onSubmit={this.handleSave}>
                <br />
                Name: <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChangenm}
                /> <br/>
                Address: <input
                    type="text"
                    value={this.state.address}
                    onChange={this.handleChangeadd}
                /><br /><br />

                <button type="submit" >Save</button>
            </form>)
}

    render() {
       


        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderCreateForm();


        return (
            <div >
                {contents} 
            </div>
        
        );


        
       
    }





    











}
export default CreateCustomer;