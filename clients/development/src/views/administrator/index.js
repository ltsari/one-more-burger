import React from 'react';
import NavigationBar from "./components/NavigationBar";
import BurgersPage from "./views/Burgers";
import OrdersPage from "./views/Orders";
import ProductsPage from "./views/Products";
import UsersPage from "./views/Users";

class AdminPage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showPage:"products"
        }
    }

    //changing page
    changeShowPage(pageName){
        this.setState({showPage:pageName})
    }


    render(){
        return(
            <div>
                <NavigationBar changeShowPage={this.changeShowPage.bind(this)}/>
                {this.state.showPage=="products"? <ProductsPage/>:null}
                {this.state.showPage=="users"? <UsersPage/>:null}
                {this.state.showPage=="orders"? <OrdersPage/>:null}
                {this.state.showPage=="burgers"? <BurgersPage/>:null}
            </div>
        )
    }
}

export default AdminPage;