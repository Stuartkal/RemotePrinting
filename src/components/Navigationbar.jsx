import React,{Component} from 'react';
import {Nav,Navbar,Form,FormControl,Button,Container, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import LoginUI from './LoginUI';
import SignupUI from './SignupUI'

export default class Navigationbar extends Component{
    constructor(...args) {
        super(...args);
    
        this.state = { modalShow: false };
        this.state = { showModal: false };
      }

    render(){
        let modalClose = () => this.setState({ modalShow: false });
        let closeModal = () => this.setState({ showModal: false });
        return(

            <Navbar style={{backgroundColor:"#173F5F"}}>
            <Container> 
                <Navbar.Brand href="#home">
                <Image style={{width:90,height:30}} src={require("../assets/images/logo.png")}/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="#home" style={{color:'white'}}>Home</Nav.Link>
                
                </Nav>
                <Form inline style={{margin:10}}>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
                </Form>
                    <Button style={{margin:10}}
                        variant="primary"
                        onClick={() => this.setState({ modalShow: true })}
                        >
                        Login
                    </Button>
                <LoginUI
                    show={this.state.modalShow}
                    onHide={modalClose}
        />
                <Button
                        variant="primary"
                        onClick={() => this.setState({ showModal: true })}
                        >
                        Sign Up
                    </Button>
                    <SignupUI
                    show={this.state.showModal}
                    onHide={closeModal}
        />
             </Container>
  </Navbar>
        )
    }

}