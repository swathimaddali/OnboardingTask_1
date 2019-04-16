import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import  { Fragment, Component } from 'react';
import CustomerGridTable from './CustomerGridTable';
import { BrowserRouter as Router, Route, Link, NavLink, withRouter, Redirect } from 'react-router-dom'; 
import { Button, Container, Modal, Header, Icon} from 'semantic-ui-react';
import './style.css';



class FetchCustomer extends React.Component {
    constructor(props) {

        super(props);
   
        this.state = {
            tocreate: false,
            active: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
         
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);



    }
    onCloseModal() {
        this.setState({
            active: false
        });
    }

       handleOpen=()=> { this.setState({ modalOpen: true }); }

      handleClose() { this.setState({ modalOpen: false }); }


    handleSubmit(e) {
        e.preventDefault();
        this.setState({ tocreate: true }); 
      
        const pth = '/addcustomer';
      
    }  
    

    render() {
        if (this.state.tocreate === true) {

            return <Redirect to='/addcustomer' />
        }
        console.log("inside customer::render");
        return (
            <Fragment>


                <Container>
                    
                    <div class="divpad">  <Button color="blue"  onClick={this.handleSubmit}>Create New Customer</Button></div>
                <CustomerGridTable dataUrl="Customer/Index" />
                 </Container>

            </Fragment>
        );
    }
}
export default withRouter(FetchCustomer);



/*
 * 
 * 
 * <div>
                    <Button onClick={() => this.setState({ active: true })}>Open modal</Button>
                    <Modal basic onRequestClose={this.onCloseModal.bind(this)} active={this.state.active}>
                        <Header icon="archive">Archive old messages</Header>
                        <Modal.Content>
                            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>

                        </Modal.Content>
                         <Modal.Actions>
                            <Button color="red"
                                basic
                                inverted
                                onClick={this.onCloseModal.bind(this)}
                            >
                                <Icon name="remove" />
                                No
                        </Button>
                            <Button color="green"
                                inverted
                                onClick={this.onCloseModal.bind(this)}
                            >
                                <Icon name="checkmark" />
                                Yep
                       </Button>
                                </Modal.Actions>
                    </Modal>
             </div>
 * */