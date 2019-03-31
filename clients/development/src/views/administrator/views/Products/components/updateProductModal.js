import React from 'react';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';



class UpdateModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                _id: "",
                name: "",
                amount: "",
                description: "",
                price: ""
            }
        }
    }


    handleChange(e, type) {
        var _form = this.state.form;
        _form[type] = e.target.value;
        this.setState({ form: _form });
    }

    updateProduct(){
        axios({
            method:"POST",
            url:"http://localhost:8000/api/update_product",
            data:this.state.form
        })
        .then(res=>{
            this.props.toggle()
        })
        .catch(err=>{

        })
    }
    sayHello(el) {
        this.setState({ form: el })
    }
    render() {
        return (
            <div>
                <Modal isOpen={this.props.show} toggle={e => this.props.toggle()}>
                    <ModalHeader toggle={e => this.props.toggle()}>Create product</ModalHeader>
                    <ModalBody>
                        {this.state.form ? (
                            <Form>
                                <FormGroup>
                                    <Label>Name of product</Label>
                                    <Input value={this.state.form.name} onChange={e => this.handleChange(e, "name")} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Description</Label>
                                    <Input value={this.state.form.description} onChange={e => this.handleChange(e, "description")} type="textarea" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Price</Label>
                                    <Input value={this.state.form.price} onChange={e => this.handleChange(e, "price")} type="number" />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Amount</Label>
                                    <Input value={this.state.form.amount} onChange={e => this.handleChange(e, "amount")} type="number" />
                                </FormGroup>
                            </Form>
                        ) : null}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={e => this.updateProduct()}>Save</Button>{" "}
                        <Button outlinecolor="danger" onClick={e => this.props.toggle()}>Cencel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default UpdateModal;