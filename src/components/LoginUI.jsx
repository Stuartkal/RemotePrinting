import React,{Component} from 'react';
import {Button,Container,Modal, ButtonToolbar,Row,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class LoginUI extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Login
                  </Button>
               </Form>
          </Modal.Body>
        </Modal>
      );
    }
  }
  
 
  
