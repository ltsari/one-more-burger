import React from 'react';
import NewProductModal from "./components/createNewProductModal";
import UpdateProductModal from "./components/updateProductModal";
import RemoveProductModal from "./components/removeProductModal";
import { Container, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from 'axios';




class ProductsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateModal: false,
            products: [],
            toEdit: {},
            showUpdateModal: false
        }
    }

    toggleCreateModal() {
        let isOpen = this.state.showCreateModal;
        isOpen = !isOpen;
        this.setState({ showCreateModal: isOpen });
    }

    toggleUpdateModal(el) {
        let isOpen = this.state.showUpdateModal;
        isOpen = !isOpen;
        this.refs.update.sayHello(el);
        this.setState({ showUpdateModal: isOpen });
    }
    getList() {
        axios({
            method: "GET",
            url: "http://localhost:8000/api/all_products",
        })
            .then(res => {
                this.setState({ products: res.data })
            })
            .catch(res => {

            })
    }
    componentDidMount() {
        this.getList()
    }
    render() {
        return (
            <div>
                <Container>
                    <Button class="mt-2" color="dark" onClick={e => this.toggleCreateModal()}>Create something interesting</Button>
                    <NewProductModal show={this.state.showCreateModal} toggle={this.toggleCreateModal.bind(this)} getList={this.getList.bind(this)} />
                    <UpdateProductModal
                        ref="update"
                        show={this.state.showUpdateModal}
                        toggle={this.toggleUpdateModal.bind(this)} />
                    <RemoveProductModal getList={this.getList.bind(this)} ref="deleteModal"/>
                    <Table>
                        <thead>
                            <tr>
                                <th>Product name</th>
                                <th>Amount</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Settings</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                        {this.state.products.map(el => {
                            return (
                                <tr>
                                    <td>{el.name}</td>
                                    <td>{el.amount}</td>
                                    <td>{el.price}</td>
                                    <td>{el.description}</td>
                                    <td>
                                        <Button outline color="info" onClick={e => {
                                            this.setState({ toEdit: el });
                                            this.toggleUpdateModal(el)
                                        }}>Settings
                                        </Button>{" "}
                                        <Button outline color="warning" onClick={e=>this.refs.deleteModal.toggleRemoveModal(el)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </Table>
                </Container>
            </div>
        )
    }
}
export default ProductsPage;