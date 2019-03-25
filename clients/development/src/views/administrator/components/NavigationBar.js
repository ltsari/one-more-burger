import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar color="primary" light>
                <Nav>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("products")}>Products</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("burgers")}>Burgers</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("users")}>Users</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick ={e=>this.props.changeShowPage("orders")}>Orders</NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                    <NavItem>
                        <NavLink>Login out</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}
export default NavigationBar;