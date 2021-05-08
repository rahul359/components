import React,  { Component }  from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavBarMan extends Component {
    render() {
        return ( <Navbar bg = "dark" variant = "dark" >
            <Link to = { "/manager" } className = "navbar-brand"> Palm - Hotel </Link>


            <Nav className = "mr-auto" >
            
            <Link to = { "/manager/allrooms" } className = "nav-link" > All Rooms </Link> 
            
            <Link to = { "/manager/CurrentBookings" } className = "nav-link" > CurrentBookings </Link>
            <Link to = { "/manager/TotalOrders" } className = "nav-link" > Total Orders </Link> 
            <Link to = { "/"} className = "nav-link" > LOGOUT</Link> 
            

            </Nav> 
            </Navbar>

        );
    }
}


export default NavBarMan;