import React,  { Component }  from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBarRecep extends Component {
    render() {
        return ( <Navbar bg = "dark" variant = "dark" >
            <Link to = { "/receptionist" } className = "navbar-brand"> Palm - Hotel </Link>


            <Nav className = "mr-auto" >
            
            <Link to = { "/receptionist/totalrooms" } className = "nav-link" > Room List </Link> 
            <Link to = { "/receptionist/search" } className = "nav-link" > Available Rooms </Link> 
            <Link to = { "/receptionist/Booking" } className = "nav-link" > Booking </Link>
            <Link to = { "/receptionist/activeorders" } className = "nav-link" > Active Orders </Link>
            <Link to = { "/receptionist/Orders" } className = "nav-link" > Total Orders </Link>  
            <Link to = { "/"} className = "nav-link" > LOGOUT</Link>
            

            </Nav> 
            </Navbar>

        );
    }
}


export default NavBarRecep;