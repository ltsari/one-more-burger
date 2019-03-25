import React from 'react';
import NewProductModal from "./components/createNewProductModal";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';


class ProductsPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showCreateModal:false,
            products:[]
        }
    }

    toggleCreateModal(){
        let isOpen = this.state.showCreateModal;
        isOpen = !isOpen;
        this.setState({showCreateModal:isOpen});
    }

    componentDidMount(){
        axios({
            method:"GET",
            url:"http://localhost:8000/api/all_products",
        })
        .then(res=>{
            this.setState({products:res.data})
        })
        .catch(res=>{

        })
    }
    render (){
        return (
            <div>
                <Button color = "dark" onClick={e=>this.toggleCreateModal()} >Create something interesting</Button>
                <NewProductModal show = {this.state.showCreateModal} toggle={this.toggleCreateModal.bind(this)}/>
                <div>
                    {this.state.products.map(el=>{
                        return (
                            <div>{el._id}{el.name}{el.description}{el.amount}{el.price}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default ProductsPage;