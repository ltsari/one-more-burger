import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class RemoveModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show:false,
            removeProduct:{}
        }
    }


toggleRemoveModal(el){
    let isOpen = this.state.show;
    isOpen=!isOpen;
    this.setState({show:isOpen,removeProduct:el})
}

removeProductFunction(){
    axios({
        method:"POST",
        url:"http://localhost:8000/api/delete_product",
        data:this.state.removeProduct
    })
    .then(res=>{
        this.setState({show:false})
        this.props.getList()
    })
    .catch(err=>{

    })
}



render(){
    return (
        <div>
            <Modal isOpen={this.state.show} toggle={this.toggleRemoveModal.bind(this)}>
                <ModalHeader>
                    Delete product
                </ModalHeader>
                <ModalBody>
                    Do you really wanna delete {this.state.removeProduct.name}?
                </ModalBody>
                <ModalFooter>
                    <Button onClick={this.removeProductFunction.bind(this)} toggle={e => this.updateProduct()}>Hell yeah!</Button>
                    <Button  onClick={this.toggleRemoveModal.bind(this)}>Fuck no...</Button>
                </ModalFooter>
            </Modal>
        </div>
        
        )
}
        
        
        
        
        
        
        
        
        
        
        
}       
export default RemoveModal;