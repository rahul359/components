
import React, { Component } from 'react';

import { Card, Table, ButtonGroup, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faList, faTrash } from '@fortawesome/free-solid-svg-icons';
import MyToast from './MyToast';
import axios from 'axios';
import NavBarRecep from './NavBarRecep';

export default class AllOrders extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders: []
        };
    }

    componentDidMount() {
        this.findAllOrders();

    }

    findAllOrders() {
        axios.get("http://localhost:8082/api/hotel/book/get/order/active")
            .then(response => response.data)
            .then((data) => {
                this.setState({ orders: data });
            });

    };


    checkOutOrder = (_id) => {
        axios.put("http://localhost:8082/checkout/" + _id)
            .then(response => {
                if (response.data != null) {
                    this.setState({ "show": true });
                    setTimeout(() => this.setState({ "show": false }), 3000);
                    this.setState({
                        orders: this.state.orders.filter(order => order._id !== _id)
                    });
                } else {
                    this.setState({ "show": false });
                }
            });
    };





    render() {
        return ( <div>
        <NavBarRecep />
            <div style = {
                { "display": this.state.show ? "block" : "none" } } >
            < MyToast children = {
                { show: this.state.show, message: "checkOut successful" } }
            /> </div> 
            <Card className = { "border border-dark bg-dark text-white" }>
            <Card.Header> < FontAwesomeIcon icon = { faList }/> Active Orders </Card.Header>
            <Card.Body>
            <Table bordered hover striped variant = "dark" >
            <thead>
            <tr>
            <th> Order Id </th> 
            <th> checkIn</th> 
            <th> checkOut</th> 
            <th> noOfGuests </th> 
            <th>CheckOut</th>
        


            </tr> 
            </thead> 
            <tbody> 
                {this.state.orders.length === 0 ?
                <tr align = "center">
                <td colSpan = "6" > Orders  </td> 
                </tr> :this.state.orders.map((order) => ( <tr key = { order._id } >

                    <td> { order._id } </td> 
                    <td> { order.checkIn } </td> 
                    <td> { order.checkOut } </td> 
                    <td> { order.noOfGuests } </td> 

                    <td>
                      <Button variant="outline-primary" onClick={this.checkOutOrder.bind(this, order._id)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></Button>
                    </td>
                  
                    </tr>

                ))

            } </tbody> 
            </Table> 
            </Card.Body>
             </Card> 
             </div>


        );
    }

}

