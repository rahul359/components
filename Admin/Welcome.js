import React from 'react';

import { Jumbotron,Container, Carousel,Col } from 'react-bootstrap';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

class Welcome extends React.Component {
    render() {
        return ( 
            <Container>
        <NavigationBar />
        <Jumbotron className = "bg-dark text-white" >
            <h2 > Welcome Admin </h2> 
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

export default Welcome;