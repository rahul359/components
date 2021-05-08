import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Card,Tab,Carousel, Container,Tabs, Row, Col} from 'react-bootstrap';

export default function Home(){
    const style={
        border:'4px',
        background:'bg-secondary',
        padding:'25px',
        boxShadow: '5px  5px 10px black'
      }
    const [key, setKey] = useState('admin');
        return(
           
            <Container>
            <Card className="text-center">
                <Card.Header style={{fontSize: "25px",fontWeight: "bold",backgroundColor:"#E4E3E3"}}>PALM-HOTEL</Card.Header>
            </Card>
            <Tabs style={{boxShadow:'5px 5px 10px black'}} variant="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab style={{boxShadow:'5px 5px 10px black'}} eventKey="admin" title="Admin">
                <Card style={style}>
                            <Card.Body>
                            <Card.Title>Admin</Card.Title>
                            <Card.Text>
                                Admin can access details of users and rooms. Only he has the privileges of adding and editing those details.
                            </Card.Text>
                            <Link to="/login" className="btn btn-primary">Log in as Admin</Link>
                            </Card.Body>
                        </Card>
                </Tab>
                <Tab style={{boxShadow:'5px 5px 10px black'}} eventKey="librarian" title="Manager">
                <Card style={style}>
                            <Card.Body>
                            <Card.Title>Manager</Card.Title>
                            <Card.Text>
                                Manager can view all orders and other related details{' '}
                            </Card.Text>
                            <Link to="/login" className="btn btn-primary">Log in as Manager</Link>
                            </Card.Body>
                        </Card>
                </Tab>
                <Tab style={{boxShadow:'5px 5px 10px black'}} eventKey="instructor" title="Receptionist">
                <Card style={style}>
                            <Card.Body>
                            <Card.Title>Receptionist</Card.Title>
                            <Card.Text>
                                Receptionist can book the rooms and also look after guests.
                            </Card.Text>
                            <Link to="/login" className="btn btn-primary">Log in as Receptionist</Link>
                            </Card.Body>
                        </Card>
                </Tab>
              
  
                </Tabs>
                <Row><br/></Row>
                <Col>
                <Carousel>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://i.redd.it/lqv7teqy5bj21.jpg" 
                        alt="first-slide"></img>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://images.all-free-download.com/images/graphicthumb/ornate_hotel_lobby_picture_2_167662.jpg" 
                        alt="second-slide"></img>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://images.all-free-download.com/images/graphicthumb/ornate_hotel_lobby_picture_1_167663.jpg" 
                        alt="third-slide"></img>
                    </Carousel.Item>
                    <Carousel.Item interval={1500}>
                        <img className="d-block w-100" style={{height: "350px",backgroundColor:"black"}} 
                        src="https://images.all-free-download.com/images/graphiclarge/spa_treatment_room_513330.jpg" 
                        alt="fourth-slide"></img>
                    </Carousel.Item>
                   
                    </Carousel>
                    </Col>
            </Container>
        );
}