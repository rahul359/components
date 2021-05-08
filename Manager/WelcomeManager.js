import React from 'react';

import { Jumbotron,Container,Col,Carousel } from 'react-bootstrap';
import NavBarMan from './NavBarMan';


class WelcomeManager extends React.Component {
    render() {
        return ( 
            <Container>
        <NavBarMan />
        <Jumbotron className = "bg-dark text-white" >
            <h3> Welcome Manager </h3> 
            <p>
            Have a Great day. 
            </p> 
            </Jumbotron>


                            <Col>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://i.redd.it/lqv7teqy5bj21.jpg" 
                        alt="first-slide"></img>
                    </Carousel.Item>

                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://i.pinimg.com/originals/7f/a0/1e/7fa01e9e9beee17335deedc2fd3801ed.jpg" 
                        alt="second-slide"></img>
                    </Carousel.Item>
                    </Carousel>
                    </Col>
            
            </Container>
           

        );
    }

}

export default WelcomeManager;