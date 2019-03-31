import React from "react";
import { Card, CardHeader, CardBody, CardFooter, CardText, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";


class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            burgers: []
        }
    }

    getList() {
        axios({
            methos: "GET",
            url: "http://localhost:8000/api/all_products"
        })
            .then(res => {
                let burgers = res.data;
                burgers.forEach(e => e.selectedAmount = 1);
                this.setState({ burgers: res.data })
            })
            .catch(err => {

            })
    }

    componentDidMount() {
        this.getList()
    }

    changeAmountHandler(el, e) {
        let _burgers = this.state.burgers;
        _burgers.forEach(burger => {
            if (el._id === burger._id) {
                if (e.target.value > burger.amount) burger.selectedAmount = burger.amount;
                else burger.selectedAmount = e.target.value
            }
        })
        this.setState({ burgers: _burgers })
    }
    render() {
        return (
            <div>
                <h1 className="text-center">Menu</h1>
                <div className="container">
                    <div class="row">
                        {
                            this.state.burgers.map(el => {
                                return (
                                    <div class="col-4">
                                        <Card>
                                            <CardHeader>{el.name}</CardHeader>
                                            <CardBody>
                                                <CardText>{el.description}</CardText>
                                                <CardText>
                                                    <input type="number" min="1" max={el.amount} value={el.selectedAmount} onChange={e => this.changeAmountHandler(el, e)} />Amount:{el.amount}
                                                </CardText>
                                                <CardText>
                                                    Price:{el.price} tenge
                                            </CardText>
                                                <CardText>
                                                    Total price:{el.price * el.selectedAmount} tenge
                                            </CardText>
                                            </CardBody>
                                            <CardFooter>
                                                <button className="btn btn-danger btn-block">Buy</button>
                                            </CardFooter>
                                        </Card>

                                    </div>

                                )
                            })
                        }

                    </div>


                </div>
            </div>
        );
    }
}

export default Menu;