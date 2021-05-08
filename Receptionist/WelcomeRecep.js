import React from 'react';

import { Jumbotron,Container,Col,Carousel } from 'react-bootstrap';
import NavBarRecep from './NavBarRecep';


class Welcome extends React.Component {
    render() {
        return ( 
            <Container>
        <NavBarRecep />
        <Jumbotron className = "bg-dark text-white" >
            <h3> Welcome Receptionist </h3> 
            <p>
            Have a Great day. 
            </p> 
            </Jumbotron>


                            <Col>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://www.teahub.io/photos/full/364-3641704_hotel-front-desk-check-in-front-office.jpg" 
                        alt="first-slide"></img>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://wallpaperaccess.com/full/4717476.jpg" 
                        alt="second-slide"></img>
                    </Carousel.Item>
                    </Carousel>
                    </Col>
            
            </Container>
           

        );
    }

}

export default Welcome;