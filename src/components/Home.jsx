import React, { Component} from 'react';
import {Link} from 'react-router-dom';
import {Container, Jumbotron, Row, Navbar,Image, Card,Button,Col} from 'react-bootstrap'


export default class Home extends Component{

    render(){
        return(
            <Container style={{paddingTop:40}}>
            
            <Row> 
                <Col>
            <Container>
                <Row className="show-grid text-center">

                    <Col xs={12} sm={4} className="person-wrapper">  
                <Card  style={{ width: '16rem',backgroundColor:'#3CAEA3'}}>
                        <Card.Img className="show-grid text-center" variant="top" style={{width:250, height:250}} src={require("../assets/images/printer.png")} />
                        <Card.Body>
                            <Card.Title style={{color:'white',fontSize:15}}>Print Document</Card.Title>
                            <Card.Text style={{color:'black',fontSize:15,fontWeight:'300'}}>
                        
                       
                        </Card.Text>
                            
                        </Card.Body>
                     </Card>
                    </Col>
                <Col xs={12} sm={4} className="person-wrapper"> 
                    <Card style={{ width: '16rem',backgroundColor:'#20639B' }}>
                        <Card.Img variant="top" style={{width:250, height:250}} src={require("../assets/images/photocopy.png")} />
                        <Card.Body>
                            <Card.Title style={{color:'white', fontSize:15}}>Photocopy</Card.Title>
                            <Card.Text style={{color:'black',fontSize:15,fontWeight:'300'}}>
                        
                       
                        </Card.Text>
                            
                        </Card.Body>
                     </Card>
                </Col>

                <Col xs={12} sm={4} className="person-wrapper"> 
                    <Card style={{ width: '16rem',backgroundColor:'#ED553B'}}>
                        <Card.Img variant="top" style={{width:250, height:250}}  src={require("../assets/images/scanner.png")} />
                        <Card.Body>
                            <Card.Title style={{color:'white',fontSize:15}}>Scan</Card.Title>
                            <Card.Text style={{color:'black',fontSize:15,fontWeight:'300'}}>
                        
                       
                        </Card.Text>
                            
                        </Card.Body>
                     </Card>
                    <Navbar.Collapse/>
                    </Col>
               </Row>  
               <Container style={{paddingTop:20}}>
                
                  <Card.Text  className="show-grid text-center"><h2>AboutUs</h2></Card.Text>  
                  <hr/>
                    <Row className="show-grid text-center">
                        <Col xs={12} sm={12} className="person-wrapper">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                         </Col>
                    </Row>
                </Container>  
               </Container>
               </Col>
               <Row>
                   <Col>
                   
                   <Card style={{ width: '17rem' }}>
                    <Card.Body style={{backgroundColor:'#F6D55C'}}>
                        <Card.Title>
                        <p style={{color:'#ED553B',fontSize:25,fontWeight:'300'}}>
                        <Image style={{width:30, height:30}} src={require("../assets/images/help.png")}/>
                        Help and Tips
                        </p>
                        
                        </Card.Title>
                        <Card.Text style={{color:'black',fontSize:15,fontWeight:'300'}}>
                        Some quick example text to build on the card title and make up the bulk of
                     the card's content.Some quick example text to build on the card title and make up the bulk of
                       the card's content.
                       
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '17rem',marginTop:20 }}>
                    <Card.Body style={{backgroundColor:'#F6D55C'}}>
                        <Card.Title>
                        <p style={{color:'#ED553B',fontSize:25,fontWeight:'300'}}>
                        <Image style={{width:30, height:30, margin:5}} src={require("../assets/images/price.png")}/>
                        Pricing
                        </p>
                        
                        </Card.Title>
                        <Card.Text style={{color:'black',fontSize:12,fontWeight:'300'}}>
                        <p><strong>Printing(Black & White)</strong>  : 1000Shs per copy</p>
                        <p><strong>Printing(Coloured)</strong> : 1500Shs per copy</p>
                        <p><strong>Photocopying</strong> : 500Shs per copy</p>
                        <p><strong>Scanning</strong> : 1000Shs per copy</p>
                       
                        </Card.Text>
                        
                    </Card.Body>
                    </Card>
                   </Col>
               
               </Row>
              
                    
               </Row>
                
            </Container>  
        )
    }
}
