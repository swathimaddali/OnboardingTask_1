import React from "react";
import $ from 'jquery';
import { RouteComponentProps } from 'react-router';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter, Redirect } from 'react-router-dom';
import AddStore from './AddStore';
import { Button } from 'semantic-ui-react';




class StoreGridRow extends React.Component {

    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);


    }


    handleDelete(e, id) {
        console.log("e" + e);
        e.preventDefault();
        if (!window.confirm("Do you want to delete this item"))
            return;
        else {
            console.log("calling ajax");
          
            //history.props works with fetch
            fetch('Store/Delete/' + id, {
                method: 'DELETE'

            }).then((resp) => {
                console.log("successfully deleted row" + resp);
                this.props.history.push("/fetchStore");
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
        const pth = '/store/edit/' + id;
        
        // eslint-disable-next-line
        console.log("this.props.history" + this.props.history);
        this.props.history.push(pth);
    }






    render() {
        console.log("storegridrow:function" + this.props.item.name);
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
export default withRouter(StoreGridRow);