import React, {Component} from 'react';
import {Button,Row,Col,Card,Image,Container,ButtonToolbar} from 'react-bootstrap';
import './Upload.css'


export default class Upload extends Component{
        
        

      
    render(){
        return(
            <Container style={{paddingTop:40}}>
            
            <Row> 
                <Col>
            <Container>
               <p style={{color:'#ED553B', fontSize:25,paddingLeft:320, fontWeight:'380'}}>Print Document</p>
                    <form ref={dropFileForm=>this.dropFileForm = dropFileForm} id="dropFileForm">
                        <input type="file" name="files" id="fileInput" multiple/>
                        <label for="fileInput" id="fileLable"
                          >
                        <i className="fa fa-upload fa-5x"></i>
                        <br/>
                       
                        </label>
                    </form>
                 <ButtonToolbar style={{paddingLeft:350}}>
                    <Button  variant="outline-info">Upload</Button>
                </ButtonToolbar>

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

