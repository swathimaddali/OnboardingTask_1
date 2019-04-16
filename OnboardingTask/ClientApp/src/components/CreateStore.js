
import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link, NavLink, Redirect } from 'react-router-dom';
import $ from 'jquery';
import Input from './Input';
import axios from 'axios';




class CreateStore extends React.Component {
    constructor(props) {
        super(props);
        ;

        this.state = {

            name: '',
            address: '',
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


        var formData = {
            Name: this.state.name,
            Address: this.state.address
        }
        console.log("formData " + formData);
        console.log("formData stringisy" + JSON.stringify(formData));
        

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

            fetch('Store/Create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: formBody
            }).then((resp) => {
                console.log("success" + resp);
                this.props.history.push("/fetchStore");
            }).catch((error) => {
                console.log("error" + error);
            });



        }

    }




    // This will handle Cancel button click event.  
    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/fetchStore");
    }


    // Returns the HTML Form to the render() method.  

    renderCreateForm() {



        return (
            <form id="myform" onSubmit={this.handleSave}>
                <br />
                Name: <input
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChangenm}
                /> <br />
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
export default CreateStore;